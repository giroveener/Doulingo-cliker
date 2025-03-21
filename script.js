let game_state = {
  count: 0,
  level: 1,
  autoklickerActive: false,
  autoklickerInterval: 0,
  autoklicksPerSecond: 0,
  upgradePrice: 100,
  autoklickerPrice: 200,
  autoklickerPurchased: false,
}

// let count = 0;
// let level = 1;
// let autoklickerActive = false;
// let autoklickerInterval = 0;
// let autoklicksPerSecond = 0;
// let upgradePrice = 100;  // Початкова ціна для підвищення рівня
// let autoklickerPrice = 200; // Ціна для автоклікера
// let autoklickerPurchased = false; // Стан покупки автоклікера

let main_image = document.getElementById('img-main')

// Отримуємо елементи
const counter = document.getElementById('counter');
const levelDisplay = document.getElementById('level');
const priceDisplay = document.getElementById('price');
const autoklickerPriceDisplay = document.getElementById('autoklickerPrice');
const autoklickerBtn = document.getElementById('autoklickerBtn');
const autoklickerPurchaseBtn = document.getElementById('autoklickerPurchaseBtn');
const upgradeBtn = document.getElementById('upgradeBtn');
const clickableSquare = document.getElementById('clickableSquare');

function image_update() {
  console.log("image_update:")
;

  // if (count >= 10000) {
  //   console.log("count >= 10000");
  //   main_image.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7fd028df-1f5b-4292-afac-e47bd143d525/dglht1f-bf71c6cd-d64c-421a-bb8d-ffe165703d9b.png/v1/fill/w_720,h_624/angry_duolingo__png___image_belongs_to_the_owner__by_donatoinklinggamer_dglht1f-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI0IiwicGF0aCI6IlwvZlwvN2ZkMDI4ZGYtMWY1Yi00MjkyLWFmYWMtZTQ3YmQxNDNkNTI1XC9kZ2xodDFmLWJmNzFjNmNkLWQ2NGMtNDIxYS1iYjhkLWZmZTE2NTcwM2Q5Yi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VYE-3aZjt2gwuPPqCeLSTayHbDeSD8Ntd_VVMK7hqUU';
  // }
  // else if (count >= 100000) {
  //   console.log("count >= 100000");
  //   main_image.src = 'https://i.pinimg.com/280x280_RS/ec/7e/40/ec7e401445a3845ee0d5959d34221858.jpg';
  // }
  // else if (count >= 1000000) {
  //   console.log("count >= 1000000");
  //   main_image.src = 'https://www.onlygfx.com/wp-content/uploads/2017/11/banned-stamp-2-3.png';
  //   main_image.style.border = "10px solid red"
  // }
  // else {
  //   main_image.src = 'https://logolook.net/wp-content/uploads/2022/11/Duolingo-Emblem.png';
  // }


  if (game_state.count >= 100000000) {
    console.log("count >= 1000000");
    main_image.src = 'https://www.onlygfx.com/wp-content/uploads/2017/11/banned-stamp-2-3.png';
    main_image.style.border = "10px solid red"
    document.body.style.background = "red";

  } else if (game_state.count >= 100000) {
    console.log("count >= 100000");
    main_image.src = 'https://i.pinimg.com/280x280_RS/ec/7e/40/ec7e401445a3845ee0d5959d34221858.jpg';
  } else if (game_state.count >= 10000) {
    console.log("count >= 10000");
    main_image.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7fd028df-1f5b-4292-afac-e47bd143d525/dglht1f-bf71c6cd-d64c-421a-bb8d-ffe165703d9b.png/v1/fill/w_720,h_624/angry_duolingo__png___image_belongs_to_the_owner__by_donatoinklinggamer_dglht1f-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI0IiwicGF0aCI6IlwvZlwvN2ZkMDI4ZGYtMWY1Yi00MjkyLWFmYWMtZTQ3YmQxNDNkNTI1XC9kZ2xodDFmLWJmNzFjNmNkLWQ2NGMtNDIxYS1iYjhkLWZmZTE2NTcwM2Q5Yi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VYE-3aZjt2gwuPPqCeLSTayHbDeSD8Ntd_VVMK7hqUU';
  } else {
    main_image.src = 'https://logolook.net/wp-content/uploads/2022/11/Duolingo-Emblem.png';
  }
}

// Клік по квадрату
clickableSquare.addEventListener('click', function () {
  // Кількість кліків з кожним рівнем збільшується

  if (game_state.count >= 100000000) {
    return
  }
  game_state.count += game_state.level;

  updateDisplay();
  image_update()

  if (game_state.count >= 100000000) {
    game_state.count <= 100000000
  }
}


);

// Функція для оновлення відображення лічильника та рівня
function updateDisplay() {
  counter.innerText = '  Fire Counter: ' + game_state.count;
  levelDisplay.innerText = 'Level: ' + game_state.level;
  priceDisplay.innerText = '  Price to level up: ' + game_state.upgradePrice + ' fire';
  autoklickerPriceDisplay.innerText = 'Autoclicker Price: ' + game_state.autoklickerPrice + ' fire';
}

// Автоклікер
autoklickerBtn.addEventListener('click', function () {
  if (game_state.count >= 100000000) {
    clearInterval(game_state.autoklickerInterval);
    game_state.autoklickerActive = False
    autoklickerBtn.innerText = 'Autoclicker (0 click/sec)';
    return
  }
  if (game_state.autoklickerActive) {
    clearInterval(game_state.autoklickerInterval);
    autoklickerBtn.innerText = 'Autoclicker (0 click/sec)';
  } else {
    game_state.autoklicksPerSecond = 1 + game_state.level; // Кількість кліків за секунду з рівнем
    autoklickerBtn.innerText = `Autoclicker (${game_state.autoklicksPerSecond} click/sec)`;
    game_state.autoklickerInterval = setInterval(() => {
      game_state.count += game_state.autoklicksPerSecond;
      updateDisplay();
    }, 1000);
  }
  game_state.autoklickerActive = !autoklickerActive;
});

// Купити автоклікер
autoklickerPurchaseBtn.addEventListener('click', function () {
  if (game_state.count >= 100000000) {
    alert('You Banned');
    return;
  }
  if (game_state.count >= game_state.autoklickerPrice && !game_state.autoklickerPurchased) {
    game_state.count -= game_state.autoklickerPrice;
    game_state.autoklickerPurchased = true;
    autoklickerBtn.disabled = false;  // Активуємо кнопку автоклікера
    autoklickerBtn.style.opacity = 1;  // Відновлюємо повну видимість кнопки
    updateDisplay();
    alert("Autoclicker purchased! Now you can turn it on.");
  } else if (game_state.  autoklickerPurchased) {
    alert("The autoclicker has already been purchased!");
  } else {
    alert('Not enough fire to buy an autoclicker!');
  }
});

// Покращення рівня
upgradeBtn.addEventListener('click', function () {
  if (game_state.count >= 100000000) {
    alert('You Banned');
    return;
  }
  if (game_state.count >= game_state.upgradePrice) {
    game_state.count -= game_state.upgradePrice; // Витратити кліки на підвищення рівня
    game_state.level++; // Підвищити рівень
    game_state.upgradePrice = Math.floor(game_state.upgradePrice * 1.2); // Збільшити ціну підвищення рівня на 20%
    updateDisplay(); // Оновити відображення
  } else {
    alert('Not enough fire to level up!');
  }

}
)
function save() {
  try {
    const jsonData = JSON.stringify(game_state);
    localStorage.setItem('savedData', jsonData);
    console.log('Дані збережено!');
  } catch (error) {
    console.error('Помилка при збереженні даних:', error);
  }
}

// Функція для завантаження даних
function load() {
  try {
    const jsonData = localStorage.getItem('savedData');
    if (jsonData) {
       game_state = JSON.parse(jsonData);
      console.log('Дані завантажено:', savedData);
      // Вставте завантажені дані у ваш код тут
    } else {
      console.log('Дані не знайдено!');
    }
  } catch (error) {
    console.error('Помилка при завантаженні даних:', error);
  }

  updateDisplay()
}
