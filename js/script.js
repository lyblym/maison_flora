// Функция для показа сайдбара
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// Функция для скрытия сайдбара
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки внутри сайдбара
    const sidebarLinks = document.querySelectorAll('.sidebar li a');
    
    // Добавляем обработчик клика для каждой ссылки
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Закрываем сайдбар при клике на ссылку
            hideSidebar();
        });
    });

    // Закрытие сайдбара при клике вне его области
    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.querySelector('.navbar li:last-child');
        
        // Проверяем, открыт ли сайдбар
        if (sidebar.style.display === 'flex') {
            // Если клик был не по сайдбару и не по кнопке меню
            if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
                hideSidebar();
            }
        }
    });
});