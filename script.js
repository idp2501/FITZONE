// ========================================
// FITZONE — БАЗА ДАНИХ ТОВАРІВ
// ========================================

const PRODUCTS = [
    // СИЛОВІ ТРЕНУВАННЯ
    {
        id: 1, 
        name: "Гантелі Hex 2×5 кг", 
        price: 1299, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Шестигранна форма запобігає катанню гантелей по підлозі під час виконання вправ. Гумове покриття захищає покриття підлоги від подряпин та зменшує шум. Ергономічна хромована рукоятка забезпечує надійний хват без ковзання долонь. Ідеальний вибір для домашніх силових тренувань, фітнесу та фунціонального тренінгу.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBsvv8H8S2_gYpaAH81NlCo6asEVJgXyo1K_wfQZMdw&s=10"
    },
    {
        id: 2, 
        name: "Гантелі Hex 2×10 кг", 
        price: 2199, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Оптимальна вага для прогресу в базових силових вправах удома або в залі. Гексагональна конструкція гарантує стійкість під час виконання віджимань з упором на гантелі. Міцне гумове покриття чудово гасить удари та довго зберігає привабливий вигляд. Зручні насічки на металевій ручці запобігають вискокуванню з рук.", 
        image: "https://cdn.27.ua/sc--media--prod/default/30/0d/ea/300dea1c-d9ec-4390-b7a6-7d6a4af15828.jpg"
    },
    {
        id: 3, 
        name: "Гиря Iron 8 кг", 
        price: 899, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Суцільнолита чавунна гиря для розвитку витривалості, координації та сили. Широка гладка дужка дозволяє зручно тримати снаряд як однією, так і двома руками. Пласке дно забезпечує максимальну стійкість при зберіганні та виконанні вправ на підлозі. Підходить для махів, присідань та жимів на будь-якому рівні підготовки.", 
        image: "https://wuotan.ua/image/cache/catalog/product/8/UAZE5336-8-800x800.jpg"
    },
    {
        id: 4, 
        name: "Гиря Iron 12 кг", 
        price: 1199, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Класичний спортивний снаряд для інтенсивного функціонального тренінгу та кросфіту. Виготовлена з якісного чавуну з довговічним захисним покриттям проти корозії. Збалансований центр ваги забезпечує правильну техніку виконання махів та ривків. Допомагає ефективно опрацювати м'язи спини, ніг та плечового поясу.", 
        image: "https://wcg.if.ua/image/cache/catalog/new-products/6284018308-girya-12-kg-400x500.jpg"
    },
    {
        id: 5, 
        name: "Набір еспандерів Power", 
        price: 649, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Комплект трубочних еспандерів із різними рівнями опору для повноцінного тренування всього тіла. У комплект входять зручні ручки, карабіни, дверне кріплення та ремінці для ніг. Дозволяє легко регулювати навантаження, комбінуючи кілька джгутів одночасно. Компактний набір зручно брати із собою у поїздки чи на outdoor-тренування.", 
        image: "https://planeta-shop.com.ua/uploads/shop/products/origin/a9ac6fab-13a8-11eb-a26b-004e01b064a7-00000002000.jpg"
    },
    {
        id: 6, 
        name: "Лава тренувальна Core", 
        price: 3899, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Універсальна регульована лава для жиму гантелей, штанги та вправ на прес. Кілька позицій нахилу спинки дозволяють якісно опрацьовувати м'язи під різними кутами. Міцна сталева рама витримує високі навантаження та гарантує повну безпеку. М'яка оббивка зі зносостійкої екошкіри забезпечує максимальний комфорт під час тренувань.", 
        image: "https://yomo.in.ua/wp-content/uploads/2025/03/profesjonalna-wytrzymala-lawka-treningowa-do-cwiczen-laweczka-regulowana-b-iext168766462.jpg"
    },
    {
        id: 7, 
        name: "Стійка для присідань Rack", 
        price: 7499, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Надійна конструкція для виконання присідань зі штангою, жимів стоячи та лежачи. Оснащена регульованими по висоті тримачами та страхувальними брусами для безпеки. Посилений сталевий профіль забезпечує високу стійкість навіть при роботі з великою вагою. Обов'язковий елемент для створення повноцінного силового куточка вдома.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW97SdxkiBwqe0IIG7BFA7Xi9dUr8w1SDDNuJOBekrI9UoATwyS8TOaIo&s=10"
    },
    {
        id: 8, 
        name: "Гриф олімпійський 20 кг", 
        price: 4299, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Професійний гриф стандарту 50 мм для пауерліфтингу та важкої атлетики. Якісна сталь із хромованим покриттям стійка до деформацій та корозії. Підшипники у склянках забезпечують плавне обертання та знімають зайве навантаження із зап'ясть. Глибокі насічки гарантують надійний хват під час підйому граничної ваги.", 
        image: "https://way4you.ua/img/product/e5/e5ae34bc2d9814c569c3d18791f231bd/grif-olmpyskiy-proud-gym-black-20-kg-original-95-1.jpeg"
    },
    {
        id: 9, 
        name: "Диски для штанги 2×5 кг", 
        price: 999, 
        category: "training", 
        categoryName: "Силові тренування", 
        description: "Точно збалансовані млинці для олімпійського грифу з діаметром посадки 50 мм. Гумове покриття запобігає пошкодженню підлоги та мінімізує шум при зіткненні. Внутрішня металева втулка забезпечує легке та швидке вдягання на гриф. Зручні вирізи на дисках дозволяють використовувати їх як окремі снаряди.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-6wYj0xu6_DCOjLnqzYlyxyA3ndsI9wiAbzqtZvSRRa3ovNdgTI_pH0&s=10"
    },
    {
        id: 10, 
        name: "Медбол 4 кг", 
        price: 799, 
        category: "training", categoryName: "Силові тренування", 
        description: "Медичний м'яч із цупкої нековзної гуми для плиометричних та функціональних вправ. Допомагає розвивати вибухову силу, координацію, баланс та зміцнювати м'язи-стабілізатори. Щільне наповнення зберігає форму м'яча навіть після тривалого використання. Підходить для кидків, скручувань та тренувань у парі.", 
        image: "https://ortosalon.ua/image/cachewebp/catalog/drop/sportivnyjinventar/medbol/medboleasyfitrb4kg(medicinskijmjach-slembolbezotskoka)-1024x1024.webp"
    },

    // КАРДІО
    {
        id: 11, 
        name: "Килимок Run Mat", 
        price: 1499, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Шумопоглинаючий килимок з високою щільністю для встановлення тренажерів або кардіо-вправ. Надійно захищає паркет, ламінат та плитку від подряпин і вм'ятин від важкого обладнання. Нековзна текстура забезпечує відмінне зчеплення з підлогою під час стрибків та берпі. Легко миється водою та згортається у компактний рулон.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA5uUJq7SY2tii1Tr7xx5KLyCNkOL5az26lM7neJ5Dw&s=10"
    },
    {
        id: 12, 
        name: "Скакалка Speed Pro", 
        price: 399, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Швидкісна скакалка зі сталевим тросом у захисному нейлоновому обплетенні. Вбудовані швидкісні підшипники забезпечують високу швидкість обертання без сплутування. Легкі алюмінієві ручки з нековзною поверхнею зручно лежать у долонях. Довжина троса легко регулюється під будь-який зріст спортсмена.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2st_h838fM1qjOrs1RUTudRUpiJgW5dtiSNjCDzD6w&s=10"
    },
    {
        id: 13, 
        name: "Велотренажер Sprint", 
        price: 8999, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Сучасний магнітний велотренажер для ефективного спалювання калорій у домашніх умовах. Безшумна система опору дозволяє тренуватися в будь-який час доби, не заважаючи рідним. Бортовий комп'ютер відображає швидкість, дистанцію, час, калорії та пульс. Анатомічне сидіння та кермо регулюються для максимально комфортної посадки.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzgUkbF1tmYJnfUZWe9nOaNUModLMjrPK0Y78lOQEXg&s=10"
    },
    {
        id: 14, 
        name: "Орбітрек Flow", 
        price: 14999, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Еліптичний тренажер, який забезпечує комплексне тренування без ударного навантаження на суглоби. Плавний хід маховика створює природні рухи та якісно задіює м'язи ніг, сідниць і рук. Багатофункціональний дисплей допомагає стежити за основними показниками тренування. Транспортувальні коліщата дозволяють легко переміщати пристрій у кімнаті.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvzCYP2HZAJ-FNmGHl35tXcqZW-oSrC--JgQBNYYpIg&s=10"
    },
    {
        id: 15, 
        name: "Степ-платформа Up", 
        price: 1099, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Міцна степ-платформа для степ-аеробіки, інтервальних та силових тренувань. Можливість регулювання висоти на 2–3 рівні дозволяє швидко змінювати інтенсивність навантаження. Нековзне гумове покриття верхньої дошки забезпечує повну безпеку під час динамічних кроків. Гумові ніжки знизу запобігають зсуву платформи по підлозі.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsU3j4c8gbaNPok-1p6_KRVPHPjjd57tgvjCkPnlp-w&s=10"
    },
    {
        id: 16, 
        name: "Гребний тренажер Row", 
        price: 12999, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Ефективний кардіотренажер, що імітує реальне веслування та задіює понад 85% м'язів тіла. Повітряно-магнітна система опору адаптується під швидкість та темп ваших рухів. Ергономічне сидіння м'яко ковзає по міцній алюмінієвій напрямній рейці. Конструкція складається для компактного зберігання після закінчення занять.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BM5K4QtheixHUvd6z398LooPg5ZIXv-LVQLrdygkzA&s=10"
    },
    {
        id: 17, 
        name: "Пульсометр Pulse", 
        price: 1799, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Точний нагрудний датчик пульсу для контролю серцевого ритму під час кардіосесій. Передає дані в реальному часі через Bluetooth та ANT+ на смартфон або фітнес-годинник. М'який тканинний ремінець зручно фіксується на грудях та не викликає подразнень. Водонепроникний корпус захищає пристрій від поту та бризок води.", 
        image: "https://texmed.com.ua/wp-content/uploads/2020/10/IMG_9630.jpg"
    },
    {
        id: 18, 
        name: "Степпер Mini", 
        price: 3299, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Компактний домашній тренажер для тонусу м'язів ніг, стегон та сідниць. Гідравлічна система циліндрів забезпечує плавний і безшумний хід педалей. Невеликі розміри дозволяють легко зберігати степпер під ліжком або у шафі. Дисплей фіксує кількість зроблених кроків, час тренування та спалені калорії.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OhpUdTMSr-PWCLNlcXmxDgzXKRY-S5ZXmhDfmWUTog&s=10"
    },
    {
        id: 19, 
        name: "Обтяжувачі 2×1 кг", 
        price: 549, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Універсальні манжети з наповнювачем для фіксації на ло щиколотках або зап'ястях. Збільшують інтенсивність під час ходьби, бігу, махів або занять фітнесом. Надійні липучки дають змогу щільно підігнати обтяжувачі під будь-який обхват. М'яка приємна тканина не натирає шкіру навіть під час тривалих тренувань.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF00R4lSCL0Gv_xzE433AVfpDU-5P0QLdO3Nh3sbpjpQ&s=10"
    },
    {
        id: 20, 
        name: "Бігова доріжка Move", 
        price: 23999, 
        category: "cardio", 
        categoryName: "Кардіо", 
        description: "Потужна бігова доріжка для домашнього бігу та спортивної ходьби у зручний час. Багатошарове бігове полотно із системою амортизації знижує навантаження на коліна. Зручна консоль має вбудовані тренувальні програми та роз'єми для підключення музики. Модель легко складається за допомогою гідравлічного мікроліфта.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhBBX4ASTxkBYdMHcDYuGRSdbnTMrBPBHY_5nXnVVEw&s=10"
    },

    // ФІТНЕС-АКСЕСУАРИ
    {
        id: 21, 
        name: "Килимок Yoga Flow", 
        price: 799, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "М'який та гіпоалергенний килимок із матеріалу TPE для йоги, пілатесу і розтяжки. Двостороння текстура запобігає ковзанню долонь та зсуву килимка по підлозі. Оптимальна товщина забезпечує комфортну амортизацію для ліктів та колін. У комплект входить зручний ремінець для носіння на плечі.", 
        image: "https://budopt.ua/image/cache/catalog/data/item/brands/Osport5/tpe%20mix%20pink-680x630.jpg"
    },
    {
        id: 22, 
        name: "Ролер для масажу", 
        price: 499, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Масажний валики (фоам-ролер) для міофасціального релізу та розслаблення м'язів. Текстурована рельєфна поверхня ефективно опрацьовує тригерні точки та покращує кровообіг. Допомагає швидше відновитися після інтенсивного силового або кардіо-тренування. Знімає напругу у спині, стегнах та литкових м'язах.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPtrnS37Rz_DZSvKvnMH4RXtJN57XWc0XfYwIuT00dA&s=10"
    },
    {
        id: 23, 
        name: "Фітнес-гумки 3 шт.", 
        price: 349, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Набір тканинних або латексних стрічок різного рівня опору (Light, Medium, Heavy). Не скручуються та не ковзають під час виконання вправ на ноги та сідниці. Ідеальний аксесуар для домашніх тренувань, розігріву м'язів чи реабілітації. Компактний мішечок у комплекті дозволяє носити їх із собою куди завгодно.", 
        image: "https://content2.rozetka.com.ua/goods/images/big/325990858.jpg"
    },
    {
        id: 24, 
        name: "Пляшка Hydro 750 мл", 
        price: 299, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Спортивна пляшка з екологічного та безпечного пластику Tritan без вмісту BPA. Зручна кнопка відкриття дозволяє пити воду однією рукою прямо під час бігу. Надійний фіксатор клапана захищає від випадкового проливання рідини у сумці. Матова нековзна поверхня зручно лежить у долоні.", 
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 25, 
        name: "Сумка Gym Daily", 
        price: 1199, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Вмісткий та стильний спортивний кейс для транспортування форми, кросівок і рушника. Оснащена окремим вентильованим відділенням для змінного взуття або вологих речей. Водовідштовхувальний матеріал захищає вміст від дощу та забруднень. Знімний регульований ремінь дозволяє зручно носити сумку через плече.", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 26, 
        name: "Рукавички Grip", 
        price: 499, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Анатомічні фітнес-рукавички з гелевими подушечками для захисту долонь від мозолів. Забезпечують міцний хват при роботі з гантелями, турніком чи олімпійським грифом. Дихаюча сітчаста тканина зверху гарантує хорошу вентиляцію під час тренування. Зручні петлі на пальцях дозволяють легко знімати рукавички після занять.", 
        image: "https://powerway.com.ua/upload/iblock/973/9zk8y7l4ps4z40pqqs0kamhvbfdok4du.jpg"
    },
    {
        id: 27, 
        name: "Рушник QuickDry", 
        price: 279, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Ультралегкий спортивний рушник із мікрофібри, який вбирає в рази більше вологи, ніж бавовна. Висихає за лічені хвилини та не накопичує неприємних запахів. Займає мінімум місця в спортивній сумці завдяки компактному розміру. Оснащений зручною резинкою-петлею для фіксації у згорнутому вигляді.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhPy-20uX8SdGafjbyGSL7bSZF_lR3cKVy7M0lCQggJxrNqsq4EvbQ-A3&s=10"
    },
    {
        id: 28, 
        name: "Блок для йоги Balance", price: 249, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Легкий опорний блок із щільної піни EVA для занять йогою та стретчингом. Допомагає зберігати баланс та правильне вирівнювання тіла при виконанні складних асан. Скошені краї забезпечують комфортне утримання блоку долонями під будь-яким кутом. Не деформується під вагою тіла та легко очищається від бруду.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjwV_x1-xmjtKck8rtXWMCXT2qTFrIYiXz64VGKS7g3SUfOlIB-y92dE&s=10"
    },
    {
        id: 29, 
        name: "Масажний м'яч Duo", 
        price: 299, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Подвійний точковий масажер (арахіс) для самомасажу м'язів уздовж хребта та шиї. Виїмка посередині дозволяє опрацьовувати навколохребетні м'язи без тиску на кістки. Виготовлений із міцного зносостійкого матеріалу, який зберігає форму при натиску. Ефективно знімає спазми та біль після тривалої сидячої роботи або тренувань.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhcCmuUqSN4evhZoiH1Aavj9FbxiseOojEFAxfe0Ba6rnqLF0Oxm8Nqg&s=10"
    },
    {
        id: 30, 
        name: "Поясна сумка Active", 
        price: 449, 
        category: "accessories", 
        categoryName: "Фітнес-аксесуари", 
        description: "Легка вологозахисна сумка-бананка для бігу, велопрогулянок та активного відпочинку. Надійно фіксується на талії та не стрибає під час інтенсивного руху. Має еластичне відділення, куди легко поміщається телефон, ключі та гроші. Світловідбиваючі елементи підвищують вашу безпеку під час тренувань у темний час доби.", 
        image: "https://content1.rozetka.com.ua/goods/images/big_tile/668552071.jpg"
    }
];

// ========================================
// ЛОКАЛЬНЕ СХОВИЩЕ КОШИКА
// ========================================

function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem("fitzone-cart") || "[]");
        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem("fitzone-cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Не вдалося зберегти кошик:", error);
    }
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
    document.querySelectorAll("#cart-count").forEach(element => {
        element.textContent = count;
    });
}

function addToCart(id) {
    const product = PRODUCTS.find(item => item.id === Number(id));
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => Number(item.id) === product.id);

    if (existing) {
        existing.qty = (Number(existing.qty) || 0) + 1;
    } else {
        cart.push({ id: product.id, qty: 1 });
    }

    saveCart(cart);
    showToast("Товар додано до кошика!");
}

// ========================================
// РЕНДЕР І КЕРУВАННЯ КОШИКОМ
// ========================================

function initializeCartPanel() {
    let modal = document.getElementById("cart-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "cart-modal";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <section class="cart-panel" role="dialog" aria-modal="true">
            <div class="cart-panel-header">
                <h2>Мій кошик</h2>
                <button type="button" id="cart-close" class="cart-close" aria-label="Закрити кошик">&times;</button>
            </div>
            <div id="cart-items"></div>
            <div class="cart-panel-footer">
                <p>Разом: <strong id="cart-total">0 ₴</strong></p>
                <button type="button" id="cart-checkout" class="button cart-checkout">Оформити замовлення ↗</button>
                <button type="button" id="cart-clear" class="button button-outline cart-clear-btn">Очистити кошик</button>
            </div>
        </section>
    `;
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (!container || !totalElement) return;

    const cart = getCart();
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Твій кошик поки порожній.</p>';
        totalElement.textContent = formatPrice(0);
        const checkoutBtn = document.getElementById("cart-checkout");
        if (checkoutBtn) checkoutBtn.style.display = "none";
        return;
    }

    const checkoutBtn = document.getElementById("cart-checkout");
    if (checkoutBtn) checkoutBtn.style.display = "flex";

    container.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === Number(item.id));
        if (!product) return "";

        const quantity = Math.max(1, Number(item.qty) || 1);
        const subtotal = product.price * quantity;
        total += subtotal;

        return `
            <article class="cart-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p class="cart-item-price">${formatPrice(subtotal)}</p>
                    <div class="cart-quantity">
                        <button type="button" data-cart-action="decrease" data-id="${product.id}">−</button>
                        <span>${quantity}</span>
                        <button type="button" data-cart-action="increase" data-id="${product.id}">+</button>
                    </div>
                    <button type="button" class="cart-remove" data-cart-action="remove" data-id="${product.id}">Видалити</button>
                </div>
            </article>
        `;
    }).join("");

    totalElement.textContent = formatPrice(total);
}

function openCart() {
    let modal = document.getElementById("cart-modal");
    if (!modal || !modal.querySelector("#cart-items")) {
        initializeCartPanel();
        modal = document.getElementById("cart-modal");
    }

    renderCart();
    modal.classList.add("is-open");
    document.body.classList.add("cart-open");
}

function closeCart() {
    const modal = document.getElementById("cart-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("cart-open");
}

function changeCartItem(id, action) {
    let cart = getCart();
    const item = cart.find(i => Number(i.id) === Number(id));

    if (!item) return;

    if (action === "increase") {
        item.qty = (Number(item.qty) || 1) + 1;
    } else if (action === "decrease") {
        item.qty = (Number(item.qty) || 1) - 1;
        if (item.qty <= 0) {
            cart = cart.filter(i => Number(i.id) !== Number(id));
        }
    } else if (action === "remove") {
        cart = cart.filter(i => Number(i.id) !== Number(id));
    }

    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

// ========================================
// МОДАЛЬНЕ ВІКНО ОФОРМЛЕННЯ ЗАМОВЛЕННЯ
// ========================================

function initializeCheckoutModal() {
    let checkoutModal = document.getElementById("checkout-modal");
    if (!checkoutModal) {
        checkoutModal = document.createElement("div");
        checkoutModal.id = "checkout-modal";
        checkoutModal.className = "modal";
        document.body.appendChild(checkoutModal);
    }

    checkoutModal.innerHTML = `
        <div class="modal-content checkout-modal-content">
            <button type="button" class="modal-close" id="checkout-close">&times;</button>
            <div class="checkout-box">
                <p class="eyebrow">ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</p>
                <h2>Введіть дані для доставки</h2>

                <form id="checkout-form">
                    <div class="form-group">
                        <label for="order-name">Прізвище та ім'я *</label>
                        <input type="text" id="order-name" required placeholder="Іван Іванов">
                    </div>

                    <div class="form-group">
                        <label for="order-phone">Номер телефону *</label>
                        <input type="tel" id="order-phone" required placeholder="+380 (99) 000-00-00">
                    </div>

                    <div class="form-group">
                        <label for="order-city">Місто та № відділення Нової Пошти *</label>
                        <input type="text" id="order-city" required placeholder="Київ, Відділення №1">
                    </div>

                    <div class="form-group">
                        <label for="order-payment">Спосіб оплати</label>
                        <select id="order-payment">
                            <option>Оплата при отриманні (Накладений платіж)</option>
                            <option>Оплата карткою на сайті</option>
                        </select>
                    </div>

                    <div class="checkout-summary">
                        <span>Сума замовлення:</span>
                        <strong id="checkout-total-price">0 ₴</strong>
                    </div>

                    <button type="submit" class="button" style="width: 100%; margin-top: 15px;">Підтвердити замовлення ↗</button>
                </form>
            </div>
        </div>
    `;

    const form = checkoutModal.querySelector("#checkout-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        closeCheckoutModal();
        closeCart();
        clearCart();
        showToast("Замовлення успішно оформлено! Ми зв'яжемося з вами.");
    });

    checkoutModal.querySelector("#checkout-close").onclick = closeCheckoutModal;
}

function openCheckoutModal() {
    const cart = getCart();
    if (cart.length === 0) return;

    let checkoutModal = document.getElementById("checkout-modal");
    if (!checkoutModal) {
        initializeCheckoutModal();
        checkoutModal = document.getElementById("checkout-modal");
    }

    let total = 0;
    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === Number(item.id));
        if (product) {
            total += product.price * (Number(item.qty) || 1);
        }
    });

    document.getElementById("checkout-total-price").textContent = formatPrice(total);
    checkoutModal.classList.add("open");
}

function closeCheckoutModal() {
    const checkoutModal = document.getElementById("checkout-modal");
    if (checkoutModal) {
        checkoutModal.classList.remove("open");
    }
}

// ========================================
// ДЕПАРТАМЕНТ ПОДІЙ І КЛІКІВ
// ========================================

document.addEventListener("click", event => {
    // Відкриття кошика
    const openBtn = event.target.closest("[data-open-cart], .cart-link");
    if (openBtn) {
        event.preventDefault();
        event.stopPropagation();
        openCart();
        return;
    }

    // Закриття кошика
    if (event.target.closest("#cart-close")) {
        closeCart();
        return;
    }

    // Клік за межами кошика
    const cartModal = document.getElementById("cart-modal");
    if (cartModal && event.target === cartModal) {
        closeCart();
        return;
    }

    // Кнопка Оформити замовлення
    if (event.target.closest("#cart-checkout")) {
        openCheckoutModal();
        return;
    }

    // Кнопки дій кошика (+, -, видалити)
    const actionBtn = event.target.closest("[data-cart-action]");
    if (actionBtn) {
        changeCartItem(actionBtn.dataset.id, actionBtn.dataset.cartAction);
        return;
    }

    // Очистити кошик
    if (event.target.closest("#cart-clear")) {
        clearCart();
        return;
    }

    // Додати до кошика з каталогу
    const addProductBtn = event.target.closest("[data-add-product]");
    if (addProductBtn) {
        addToCart(Number(addProductBtn.dataset.addProduct));
        return;
    }

    // Відкрити модальне вікно товару
    const openProductImg = event.target.closest("[data-open-product]");
    if (openProductImg) {
        openProduct(Number(openProductImg.dataset.openProduct));
        return;
    }

    // Закриття модальних вікон
    if (event.target.closest(".modal-close") || event.target.classList.contains("modal")) {
        document.getElementById("product-modal")?.classList.remove("open");
        closeCheckoutModal();
    }
});

// ========================================
// ДЕМОНСТРАЦІЯ ТА ПОВІДОМЛЕННЯ
// ========================================

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function formatPrice(price) {
    return new Intl.NumberFormat("uk-UA").format(price) + " ₴";
}

function createProductCard(product, label = "FITZONE") {
    return `
        <article class="product-card">
            <div class="product-image" data-open-product="${product.id}" role="button" tabindex="0">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-tag">${label}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-bottom">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button type="button" class="add-button" data-add-product="${product.id}" aria-label="Додати до кошика">+</button>
                </div>
            </div>
        </article>
    `;
}

function openProduct(id) {
    const product = PRODUCTS.find(item => item.id === Number(id));
    const modal = document.getElementById("product-modal");
    if (!product || !modal) return;

    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-category").textContent = product.categoryName;
    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-description").textContent = product.description;
    document.getElementById("modal-price").textContent = formatPrice(product.price);

    const addButton = document.getElementById("modal-add");
    addButton.onclick = () => {
        addToCart(product.id);
        modal.classList.remove("open");
    };

    modal.classList.add("open");
}

function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) return;

    const featuredIds = [1, 12, 21, 5];
    container.innerHTML = PRODUCTS
        .filter(product => featuredIds.includes(product.id))
        .map(product => createProductCard(product, "ВИБІР FITZONE"))
        .join("");
}

function initializeCatalog() {
    const container = document.getElementById("catalog-products");
    if (!container) return;

    const search = document.getElementById("product-search");
    const count = document.getElementById("results-count");
    const filterButtons = document.querySelectorAll("[data-filter]");

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");

    let activeCategory = ["training", "cardio", "accessories"].includes(requestedCategory)
        ? requestedCategory
        : "all";

    function render() {
        const query = search ? search.value.trim().toLocaleLowerCase("uk") : "";

        const filtered = PRODUCTS.filter(product => {
            const categoryMatches = activeCategory === "all" || product.category === activeCategory;
            const searchText = (product.name + " " + product.description + " " + product.categoryName).toLocaleLowerCase("uk");
            return categoryMatches && searchText.includes(query);
        });

        container.innerHTML = filtered.length
            ? filtered.map(product => createProductCard(product, "У НАЯВНОСТІ")).join("")
            : "<p>На жаль, товарів не знайдено.</p>";

        if (count) count.textContent = "Знайдено товарів: " + filtered.length;

        filterButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.filter === activeCategory);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.filter;
            render();
        });
    });

    if (search) search.addEventListener("input", render);
    render();
}

function initializeContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const formData = new FormData(form);
        const message = {
            name: formData.get("name"),
            email: formData.get("email"),
            topic: formData.get("topic"),
            message: formData.get("message"),
            date: new Date().toISOString()
        };

        try {
            const messages = JSON.parse(localStorage.getItem("fitzone-messages") || "[]");
            messages.push(message);
            localStorage.setItem("fitzone-messages", JSON.stringify(messages));
            form.reset();
            showToast("Дякуємо! Повідомлення збережено.");
        } catch (error) {
            showToast("Не вдалося зберегти повідомлення.");
        }
    });
}

// ========================================
// ЗАПУСК СТОРІНКИ
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    initializeCartPanel();
    initializeCheckoutModal();
    updateCartCount();
    renderFeaturedProducts();
    initializeCatalog();
    initializeContactForm();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCart();
        closeCheckoutModal();
        document.getElementById("product-modal")?.classList.remove("open");
    }
});