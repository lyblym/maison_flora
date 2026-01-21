function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
        const sidebarLinks = document.querySelectorAll('.sidebar li a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                hideSidebar();
            });
        });
    });


// Скрипт для фильтрации композиций по категориям
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.compositions .category-btn');
            const flowerBoxes = document.querySelectorAll('.compositions .box-container .box');

            categoryButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    // Убираем активный класс со всех кнопок
                    categoryButtons.forEach(function(btn) {
                        btn.classList.remove('active');
                    });
                    
                    // Добавляем активный класс к нажатой кнопке
                    this.classList.add('active');
                    
                    const selectedCategory = this.getAttribute('data-category');

                    // Фильтруем композиции
                    flowerBoxes.forEach(function(box) {
                        const boxCategory = box.getAttribute('data-category');
                        
                        if (selectedCategory === 'all' || boxCategory === selectedCategory) {
                            box.classList.remove('hidden');
                        } else {
                            box.classList.add('hidden');
                        }
                    });
                });
            });
        });
