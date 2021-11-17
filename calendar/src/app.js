import './style.scss';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-button';

// ________________________________________________dateTime

dateTime();

setInterval(dateTime, 1000);

function dateTime() {
   let date = new Date();
   let timeOptions = { hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' };
   document.getElementById('time').innerHTML = date.toLocaleTimeString('fa-IR', timeOptions);
   let rooz = date.toLocaleDateString('fa-IR', { weekday: 'long' });
   let adadeRooz = date.toLocaleDateString('fa-IR', { day: 'numeric' });
   let maah = date.toLocaleDateString('fa-IR', { month: 'long' });
   let saal = date.toLocaleDateString('fa-IR', { year: 'numeric' });
   document.getElementById('date').innerHTML = `${rooz} ${adadeRooz} ${maah} ${saal}`;
}

var p = new Intl.DateTimeFormat('fa-IR', { month: 'numeric' }).format(new Date());
var thisMonth = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'].indexOf(p);

var today = new Date().getDate();

var monthNumber = thisMonth;

// ________________________________________________months

var farvardin;
var ordibehesht;
var khordad;
var tir;
var mordad;
var shahrivar;
var dey;
var bahman;
var esfand;

var aban = {
   shamsi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5],
   miladi: [23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
   ghamari: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
   name: 'aban',
   monthShamsi: 'آبان ۱۴۰۰',
   monthGhamari: 'ربیع‌الأول - ربیع‌الثانی ۱۴۴۳',
   monthMiladi: 'October - November 2021',
   manosebat: `
      ۱ آبان روز آمار و برنامه ریزی<br/>
      <span style="color: red">۲ آبان میلاد رسول اکرم و امام جعفر صادق علیه السلام [ ١٧ ربيع الاول ]</span><br/>
      ۷ آبان سالروز ورود کوروش بزرگ به بابل در سال 539 پیش از میلاد<br/>
      ۸ آبان روز نوجوان<br/>
      ۱۰ آبان آبان روز، جشن آبانگان<br/>
      ۱۳ آبان روز دانش آموز<br/>
      ۱۴ آبان روز فرهنگ عمومی<br/>
      ۱۵ آبان جشن میانه پاییز<br/>
      ۱۸ آبان روز ملی کیفیت<br/>
      ۲۳ آبان ولادت امام حسن عسکری علیه السلام [ ٨ ربيع الثاني ]<br/>
      ۲۳ آبان روز جهانی دیابت [ 14 November ]<br/>
      ۲۴ آبان روز کتاب و کتابخوانی<br/>
      ۲۵ آبان وفات حضرت معصومه سلام الله علیها [ ١٠ ربيع الثاني ]<br/>
      ۲۷ آبان روز جهانی فلسفه [ 18 November ]<br/>
      ۲۸ آبان روز جهانی آقایان [ 19 November ]<br/>
      ۲۹ آبان روز جهانی کودک [ 20 November ]
   `
}

var mehr = {
   shamsi: [27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
   miladi: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
   ghamari: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
   name: 'mehr',
   monthShamsi: 'مهر ۱۴۰۰',
   monthGhamari: 'صفر - ربیع‌الأول ۱۴۴۳',
   monthMiladi: 'September - October 2021',
   manosebat: `
      ۱ مهر آغاز حمله مغول به ایران در پاییز 598 خورشیدی<br/>
      ۵ مهر روز جهانی جهانگردی [ 27 September ]<br/>
      <span style="color: red">۵ مهر اربعین حسینی [ ٢٠ صفر ]</span><br/>
      ۷ مهر روز آتش نشانی و ایمنی<br/>
      ۷ مهر سقوط هواپیمای حامل جمعی از فرماندهان جنگ (کلاهدوز، نامجو، فلاحی، فکوری، جهان آرا) در سال 1360<br/>
      ۸ مهر روزبزرگداشت مولوی<br/>
      ۸ مهر روز جهانی ناشنوایان [ 30 September ]<br/>
      ۸ مهر روز جهانی ترجمه و مترجم [ 30 September ]<br/>
      ۹ مهر روز جهانی سالمندان [ 1 October ]<br/>
      ۱۰ مهر روز جشن مهرگان<br/>
      ۱۳ مهر روز نیروی انتظامی<br/>
      <span style="color: red">۱۳ مهر رحلت رسول اکرم؛ شهادت امام حسن مجتبی علیه السلام [ ٢٨ صفر ]</span><br/>
      ۱۳ مهر روز جهانی معلم [ 5 October ]<br/>
      ۱۴ مهر روز دامپزشکی<br/>
      <span style="color: red">۱۵ مهر شهادت امام رضا علیه السلام [ ٣٠ صفر ]</span><br/>
      ۱۶ مهر روز ملی کودک<br/>
      ۱۶ مهر هجرت پیامبر اکرم از مکه به مدینه [ ١ ربيع الاول ]<br/>
      ۱۷ مهر روز جهانی پست [ 9 October ]<br/>
      ۱۸ مهر روز جهانی مبارزه با حکم اعدام [ 10 October ]<br/>
      ۱۹ مهر روز جهانی دختر [ 11 October ]<br/>
      ۲۰ مهر روز بزرگداشت حافظ<br/>
      ۲۱ مهر جشن پیروزی کاوه و فریدون<br/>
      ۲۲ مهر روز جهانی استاندارد [ 14 October ]<br/>
      ۲۳ مهر روز جهانی عصای سفید [ 15 October ]<br/>
      ۲۳ مهر شهادت امام حسن عسکری علیه السلام [ ٨ ربيع الاول ]<br/>
      ۲۴ مهر روز جهانی غذا [ 16 October ]<br/>
      ۲۵ مهر روز جهانی ریشه کنی فقر [ 17 October ]<br/>
      ۲۶ مهر روز تربیت بدنی و ورزش<br/>
      ۲۷ مهر میلاد رسول اکرم به روایت اهل سنت [ ١٢ ربيع الاول ]<br/>
      ۲۹ مهر روز ملی کوهنورد
   `
}

var azar = {
   shamsi: [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3],
   miladi: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
   ghamari: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
   name: 'azar',
   monthShamsi: 'آذر ۱۴۰۰',
   monthGhamari: 'ربیع‌الثانی - جمادی‌الأول ۱۴۴۳',
   monthMiladi: 'November - December 2021',
   manosebat: `
      ۱ آذر آذر جشن<br/>
      ۴ آذر روز جهانی مبارزه با خشونت علیه زنان [ 25 November ]<br/>
      ۵ آذر روز بسیج مستضعفان<br/>
      ۷ آذر روز نیروی دریایی<br/>
      ۹ آذر جشن آذرگان، آذر روز<br/>
      ۱۰ آذر روز مجلس<br/>
      ۱۰ آذر روز جهانی ایدز [ 1 December ]<br/>
      ۱۲ آذر روز جهانی معلولان [ 3 December ]<br/>
      ۱۳ آذر روز بیمه<br/>
      ۱۵ آذر روز حسابدار<br/>
      ۱۶ آذر روز دانشجو<br/>
      ۱۹ آذر ولادت حضرت زینب سلام الله علیها و روز پرستار و بهورز [ ٥ جمادي الاولي ]<br/>
      ۲۰ آذر روز جهانی کوه نوردی [ 11 December ]<br/>
      ۲۵ آذر روز پژوهش<br/>
      ۲۶ آذر روز حمل و نقل<br/>
      ۳۰ آذر جشن شب یلدا<br/>
   `
}

var months = [farvardin, ordibehesht, khordad, tir, mordad, shahrivar, mehr, aban, azar, dey, bahman, esfand];

// ________________________________________________table

monthTable(monthNumber);

function monthTable(monthNumber) {

   document.querySelector('.month').id = months[monthNumber].name;
   console.log('name = ', months[monthNumber].name);
   var y = document.querySelector('.month').id;

   document.getElementById('monthShamsi').innerHTML = months[monthNumber].monthShamsi;
   document.getElementById('monthGhamari').innerHTML = months[monthNumber].monthGhamari;
   document.getElementById('monthMiladi').innerHTML = months[monthNumber].monthMiladi;
   document.getElementById('monasebatha').innerHTML = months[monthNumber].manosebat;

   var tableRows = document.querySelectorAll('tbody tr');
   for (let i = 0; i < 5; i++) {
      tableRows[i].innerHTML = '';
   }
   for (let i = 0; i < 35; i++) {
      console.log('monthNumber = ' + monthNumber);
      let tdClass = monthNumber === thisMonth && months[monthNumber].miladi[i] === today ? 'today' : '';
      tableRows[parseInt(i / 7)].innerHTML += `<td class='${tdClass}'>
      <div class='shamsi'>${months[monthNumber].shamsi[i].toLocaleString('fa-IR')}</div>
      <div class='miladi'>${months[monthNumber].miladi[i]}</div>
      <div class='ghamari'>${months[monthNumber].ghamari[i].toLocaleString('ar-SA')}</div>
      </td>`;
   }
}

// ________________________________________________functions

function nextMonth() {
   if (monthNumber < 8) {
      monthNumber++;
      monthTable(monthNumber);
   }
}

function perviousMonth() {
   if (6 < monthNumber) {
      monthNumber--;
      monthTable(monthNumber);
   }
}

function goToToday() {
   document.getElementById('date').style.backgroundColor = '#651fff';
   setTimeout(() => document.getElementById('date').style.backgroundColor = 'transparent', 500);
   console.log(thisMonth);
   monthNumber = thisMonth;
   console.log(monthNumber);
   monthTable(monthNumber);
}

window.addEventListener('load', () => {
   document.querySelector('#goToToday').addEventListener('click', goToToday);
   document.querySelector('.nextMonth').addEventListener('click', nextMonth);
   document.querySelector('.perviousMonth').addEventListener('click', perviousMonth);
})
