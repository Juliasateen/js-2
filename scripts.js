"use strict";

/** task 1 **/

let age;
let name;
let a;
let b;
let day;

{
    name = prompt('Ваше имя');
    age  = prompt('Ваш возраст');
    let city = prompt('Ваш город проживания');
    let phone = prompt('Ваш телефон', '+37529 1000000');
    let email = prompt('Введите Ваш email');
    let company = prompt('В какой компании работаете?');
    let about = `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`

    console.log(about);
}

/** task 2 **/

{
    let thisYear = 2023;
    let yearOfBirth = thisYear - age;
    let result = `${name} родилась в ${yearOfBirth} году.`
    console.log(result);
    
}

/** task 3 **/

{
    let num = '123456';

    let result1 = +num.slice(0, 1) + +num.slice(1, 2) + +num.slice(2, 3);
    let result2 = +num.slice(3, 4) + +num.slice(4, 5) + +num.slice(5, 6);

    if (result1 === result2) {
        console.log('Да');
    } else {
        console.log('Нет');
    }

    /** вывод данных через тернарный оператор **/
    result1 === result2 ? console.log('Да') : console.log('Нет');

}

/** task 4 **/

{
    a = -3;

    if (a > 0) {
        console.log('Верно');
    } else {
        console.log('Неверно')
    }
}

/** task 5 **/

{
    a = 10;
    b = 2;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);

    if ((a + b) > 1) {
        console.log((a + b) ** 2);
    } else {
        console.log('Сумма a + b < 1')
    }
}

/** task 6 **/

{
    if (a > 2 && a < 11 || b >= 6 && b < 14) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

}

/** task 7 **/

{
    let n = 30;

    if (n >= 0 && n <= 14) {
        console.log('Первая четверть');
    } 
    if (n >= 15 && n <= 29) {
        console.log('Вторая четверть');
    }
    if (n >= 30 && n <= 44) {
        console.log('Третья четверть');
    }
    if (n >= 45 && n <= 59) {
        console.log('Четвертая четверть');
    }
}

/** task 8 **/

{
    day = 20;

    if (day >= 0 && day <= 10) {
        console.log('Первая декада');
    } 
    if (day >= 11 && day <= 21) {
        console.log('Вторая декада');
    }
    if (day >= 22 && day <= 31) {
        console.log('Третья декада');
    }
}

/** task 9 **/

{
    let days = 6;

    let years = days / 365;
    console.log(years.toFixed(2) + ' год/лет');

    let month = days / 31;
    console.log(month.toFixed(2) + ' месяц(а/ев)');

    let week = days / 7;
    console.log(week.toFixed(2) + ' неделя(и)');

    let hour = days * 24;
    console.log(hour.toFixed(2) + ' час(а/ов)');

    // можно было написать let minute = hour * 60; но если закомментить расчет переменной hour, то далее расчет не будет произведен
    let minute = days * 24 * 60; 
    console.log(minute.toFixed(2) + ' минут(ы)');

    let second = days * 24 * 60 * 60;
    console.log(second.toFixed(2) + ' секунд(ы)');

   
    if (days < 365 && days % 365 !== 0) {
        console.log('Меньше года');
    }

    if (days < 31 && days % 31 !== 0) {
        console.log('Меньше месяца');
    }

    if (days < 7 && days % 7 !== 0) {
        console.log('Меньше недели');
    }
}

/** task 10 **/

{
    day = 256;

    if (day >= 1 && day <= 31) {
        console.log('Январь');
    }
    if (day >= 32 && day <= 59) {
        console.log('Февраль');
    }
    if (day >= 60 && day <= 90) {
        console.log('Март');
    }
    if (day >= 91 && day <= 120) {
        console.log('Апрель');
    }
    if (day >= 121 && day <= 151) {
        console.log('Май');
    }
    if (day >= 152 && day <= 181) {
        console.log('Июнь');
    }
    if (day >= 182 && day <= 212) {
        console.log('Июль');
    }
    if (day >= 213 && day <= 243) {
        console.log('Август');
    }
    if (day >= 244 && day <= 273) {
        console.log('Сентябрь');
    }
    if (day >= 274 && day <= 304) {
        console.log('Октябрь');
    }
    if (day >= 305 && day <= 334) {
        console.log('Ноябрь');
    }
    if (day >= 335 && day <= 365) {
        console.log('Декабрь');
    }

    day = 256;

    switch (true) {
        case (day >= 1 && day <= 59):
        console.log('Зима');
            break;
        case (day >= 60 && day <= 151):
        console.log('Весна');
            break;
        case (day >= 152 && day <= 243):
        console.log('Лето');
            break;
        case (day >= 244 && day <= 334):
        console.log('Осень');
            break;
        case (day >= 335 && day <= 365):
        console.log('Зима');
            break;
        default:
        console.log('Прекрасная пора года!');
            break;
    }
}

