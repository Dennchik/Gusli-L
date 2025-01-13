export function videoPlayer() {
	document.addEventListener('DOMContentLoaded', () => {
		// Укажите id вашего видео
		const video = document.querySelector('#player-id');

		if (video) {
			// Проверка видимости видео
			const isVideoInView = () => {
				const videoTop = video.getBoundingClientRect().top;
				return videoTop > -300;
			};

			// Автоматическое воспроизведение видео, если оно в зоне видимости
			const playVideo = async () => {
				if (isVideoInView() && video.paused) {
					try {
						await video.play();
						console.log('Видео воспроизводится');
					} catch (err) {
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					}
				} else {
					console.log('Видео вне видимости, воспроизведение пропущено');
				}
			};

			// Выполняем проверку при загрузке страницы
			playVideo();

			// Обработчик клика для управления воспроизведением
			const handleVideoClick = () => {
				if (video.paused) {
					video.play().catch(err => {
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					});
				} else {
					video.pause();
				}
			};

			// Обработчик события прокрутки
			const handleScroll = () => {
				const videoTop = video.getBoundingClientRect().top;

				if (videoTop < -300 && !video.paused) {
					video.pause();
				} else if (videoTop > -300 && video.paused) {
					video.play().catch(err => {
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					});
				}
			};

			// Добавляем обработчики событий
			video.addEventListener('click', handleVideoClick);
			window.addEventListener('scroll', handleScroll);

			// Очистка обработчиков при выгрузке страницы
			window.addEventListener('beforeunload', () => {
				video.removeEventListener('click', handleVideoClick);
				window.removeEventListener('scroll', handleScroll);
			});
		}
	});
}