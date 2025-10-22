// Контейнеры для треков и статистики
const tracksWrapper = document.querySelector(".tracks-list");
const statsWrapper = document.querySelector(".stats");

// Функция загрузки и отображения данных
async function loadSongs() {
    try {
        // Получаем данные с сервера
        const response = await fetch("https://kitek.ktkv.dev/songs.json");
        const songsData = await response.json();

        // Перебираем каждый трек и создаём разметку
        songsData.forEach(item => {
            const track = item.track;

            // Создаём блок для одного трека
            const trackElement = document.createElement("div");
            trackElement.className = "song";

            // Название трека
            const titleEl = document.createElement("h3");
            titleEl.textContent = track.name;
            trackElement.appendChild(titleEl);

            // Артисты (массив → строка через запятую)
            const artists = track.album.artists.map(a => a.name).join(", ");
            const artistEl = document.createElement("span");
            artistEl.textContent = artists;
            trackElement.appendChild(artistEl);

            // Название альбома
            const albumEl = document.createElement("h5");
            albumEl.textContent = track.album.name;
            trackElement.appendChild(albumEl);

            // Добавляем трек в общий список
            tracksWrapper.appendChild(trackElement);
        });

    } catch (error) {
        console.error("Ошибка при загрузке песен:", error);
    }
}

// Запуск функции
loadSongs();