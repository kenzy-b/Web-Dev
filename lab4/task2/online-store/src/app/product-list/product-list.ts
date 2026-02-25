import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'USB кабель',
      description: 'USB кабель Apple Type - C to Type - C VARIUM VTT03 предназначен для использования с новейшими моделями смартфонов наушников планшетов от компании Apple таких как: iPhone AirPods iPad',
      price: 1999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p33/58883994.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p33/58883995.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/p33/58883996.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000', 
    },
     {
      id: 2,
      name: 'IPhone 16',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники.',
      price: 451996,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h53/87295472402462.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/ha1/87295472435230.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h8e/87295472467998.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h25/87295472500766.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-zelenyi-123727574/?c=750000000', 
    },
     {
      id: 3,
      name: 'Apple iPad Air 11',
      description: 'Планшет Apple iPad Air 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб голубой',
      price: 385500,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa7/pb7/14747747.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/had/hb7/86223759278110.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h28/86223759310878.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pa7/pb7/14747747.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-goluboi-120178555/?c=750000000&m=15654005&sr=2&isPromoted=true&campaign_id=861714&ads_unique_id=dc02864b-bc9b-42a4-8f67-e4d695e8327a&ref=shared_link', 
    },
    {
      id: 4,
      name: 'Apple Watch SE',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      price: 139988,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&sr=2&ref=shared_link',
    },
       {
      id: 5,
      name: 'Apple Watch SE',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      price: 891756,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/pf2/64169615.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000&sr=10&ref=shared_link', 
    },
       {
      id: 6,
      name: 'Ray-Ban Meta Wayfarer',
      description: 'Ray-Ban Meta Wayfarer (Gen 2) — сочетание культового дизайна и интеллектуальных технологий. Оправа Shiny Black и линзы Clear to Graphite Green Transitions® автоматически адаптируются к освещению: прозрачные в помещении, графитово-зелёные на улице. 100% защита от UVA и UVB.',
      price: 361654,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/pb4/73800562.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p23/68646558.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/p23/68646559.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p25/68646560.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-gen-2-rw4012-50-22-m-chernyi-146815899/?c=750000000&sr=1&ref=shared_link', 
    },
    {
      id: 7,
      name: 'Atomic Book P60G-I',
      description: 'Эта электронная книга идеально подходит для любителей чтения, которые ценят удобство и портативность. Она станет вашим незаменимым спутником в поездках, на отдыхе или в повседневной жизни.',
      price: 49900,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p72/6192797.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p72/6192798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p72/6192799.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p72/6192799.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/atomic-book-p60g-i-2024-4gb-chernyi-123463766/?c=750000000&m=MERZH&sr=4&isPromoted=true&campaign_id=2233965&ads_unique_id=131387a1-b462-42ad-a6ce-676474d187cb&ref=shared_link', 
    },
    {
      id: 8,
      name: 'Ретро-телефон "Письменный стол"',
      description: 'Погрузитесь в атмосферу романтики прошлого с нашим уникальным ретро телефоном, который привнесет в ваш дом нотки ностальгии и элегантности. Этот стильный аксессуар сочетает в себе дизайн конца 19 го начала 20 го столетия и современные технологии, что позволяет ему стать не только объектом мебели, но и функциональным устройством для связи.',
      price: 54490,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p74/pca/38052625.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p90/pca/38052626.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pac/pca/38052627.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/pca/38052625.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/retro-telefon-pis-mennyi-stol-chernyi-138493255/?c=750000000&sr=1&ref=shared_link', 
    },
    {
      id: 9,
      name: 'Внешний аккумулятор Samsung',
      description: 'Портативный аккумулятор Samsung EB-P3400 выполнен в компактном корпусе с парой разъёмов USB Type-C. Устройство оснащен кнопкой для проверки уровня заряда и четырьмя светодиодами.',
      price: 7064,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/hf0/80133243011102.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hb6/80133243306014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/ha8/80133243830302.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc9/80133244354590.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-samsung-eb-p3400xurgru-10000-mach-bezhevyi-109909492/?c=750000000&m=15916056&sr=2&isPromoted=true&campaign_id=2471133&ads_unique_id=2c086d6a-216e-43d0-90c7-1ea6c5041fe7&ref=shared_link', 
    },
    {
      id: 10,
      name: 'Смарт-часы Garmin VENU 3S',
      description: 'Эти умные GPS-часы с автономной работой до 14 дней специально разработаны с расширенными функциями для здоровья и фитнеса, которые помогут вам лучше понять свое тело.',
      price: 293990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p2e/26684850.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p2e/26684853.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p2e/26684854.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p2e/26684851.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/garmin-venu-3s-zolotistyi-bezhevyi-113029870/?c=750000000&m=Mechta&sr=2&isPromoted=true&campaign_id=2547490&ads_unique_id=0b874b91-3f58-49da-bd17-7a5bf1eae20b&ref=shared_link', 
    }
  ];
}