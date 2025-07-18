document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.right__menu p');
    const profileBody = document.querySelector('.right__card');
    let activeState = 'En Son';
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Aktif durumu güncelle
            activeState = event.currentTarget.textContent.trim();
            // Tüm p öğelerinden aktif sınıfını kaldır
            menuItems.forEach(p => p.querySelector('span').classList.remove('active'));

            // Tıklanan p öğesindeki span öğesine aktif sınıfı ekle
            event.currentTarget.querySelector('span').classList.add('active');

            // profile__body içeriğini güncelle
            updateProfileBody(activeState);
        });
    });

    function updateProfileBody(state) {
        switch (state) {
            case 'En Son':
                profileBody.innerHTML = `
                 <img src="./assets/logo2.svg" alt="">
                        <p>E-ticaret / hepsitools.com <span>Oluşturma Tarihi / 15 Ocak 2023</span></p>
                        <img src="./assets/copy.svg" alt="">
                        <img src="./assets/download.svg" alt="">
                        <img src="./assets/dots-vertical.svg" alt="">`;
                break;
            case 'Daha Eski':
                profileBody.innerHTML = `<div class="right__card__2">
                            <img src="./assets/remote_management_get_started_monitoring_icon.eb79016d30da702f4f8a18680d6651eb (1) 1.png"
                                alt="">
                            <p>Daha önceli yapılandırılmış veya oluşturulmuşbağlantı yok</p>
                            <p>Yeni bağlantılar oluşturmak için Bağlantı Oluşturbutonunu kullanabilirsiniz.</p>
                        </div>`;
                break;
            case 'Bildirim Ayarları':
                profileBody.innerHTML = '';
                break;
            default:
                profileBody.innerHTML = '';
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('.title__input > input');
    const paragraphElement = document.querySelector('.title__input > p');

    inputElement.addEventListener('focus', () => {
        paragraphElement.style.display = 'none';
    });

    inputElement.addEventListener('blur', () => {
        paragraphElement.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rightCard = document.querySelector('.right__card');

    function checkHoverCondition() {
        if (rightCard.querySelector('.right__card__2')) {
            rightCard.classList.add('no-hover');
        } else {
            rightCard.classList.remove('no-hover');
        }
    }

    // Run the check initially
    checkHoverCondition();

    // Optionally, re-run the check when the content of right__card changes
    const observer = new MutationObserver(checkHoverCondition);
    observer.observe(rightCard, { childList: true, subtree: true });
});
