// ========================================
// FITZONE — БАЗА ДАНИХ ТОВАРІВ
// ========================================

const PRODUCTS = [
    // СИЛОВІ ТРЕНУВАННЯ — 10 ТОВАРІВ
    {id:1, name:"Гантелі Hex 2×5 кг", price:1299, category:"training", categoryName:"Силові тренування", description:"Набір гантелей для домашніх силових тренувань.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBsvv8H8S2_gYpaAH81NlCo6asEVJgXyo1K_wfQZMdw&s=10"},
    {id:2, name:"Гантелі Hex 2×10 кг", price:2199, category:"training", categoryName:"Силові тренування", description:"Для розвитку сили та виконання базових вправ.", image:"https://cdn.27.ua/sc--media--prod/default/30/0d/ea/300dea1c-d9ec-4390-b7a6-7d6a4af15828.jpg"},
    {id:3, name:"Гиря Iron 8 кг", price:899, category:"training", categoryName:"Силові тренування", description:"Компактна гиря для функціональних тренувань.", image:"https://wuotan.ua/image/cache/catalog/product/8/UAZE5336-8-800x800.jpg"},
    {id:4, name:"Гиря Iron 12 кг", price:1199, category:"training", categoryName:"Силові тренування", description:"Для силових вправ та тренування витривалості.", image:"https://wcg.if.ua/image/cache/catalog/new-products/6284018308-girya-12-kg-400x500.jpg"},
    {id:5, name:"Набір еспандерів Power", price:649, category:"training", categoryName:"Силові тренування", description:"Набір еспандерів із різними рівнями опору.", image:"https://planeta-shop.com.ua/uploads/shop/products/origin/a9ac6fab-13a8-11eb-a26b-004e01b064a7-00000002000.jpg"},
    {id:6, name:"Лава тренувальна Core", price:3899, category:"training", categoryName:"Силові тренування", description:"Тренувальна лава для різноманітних вправ.", image:"https://yomo.in.ua/wp-content/uploads/2025/03/profesjonalna-wytrzymala-lawka-treningowa-do-cwiczen-laweczka-regulowana-b-iext168766462.jpg"},
    {id:7, name:"Стійка для присідань Rack", price:7499, category:"training", categoryName:"Силові тренування", description:"Обладнання для силових вправ удома.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW97SdxkiBwqe0IIG7BFA7Xi9dUr8w1SDDNuJOBekrI9UoATwyS8TOaIo&s=10"},
    {id:8, name:"Гриф олімпійський 20 кг", price:4299, category:"training", categoryName:"Силові тренування", description:"Гриф для роботи зі штангою.", image:"https://way4you.ua/img/product/e5/e5ae34bc2d9814c569c3d18791f231bd/grif-olmpyskiy-proud-gym-black-20-kg-original-95-1.jpeg"},
    {id:9, name:"Диски для штанги 2×5 кг", price:999, category:"training", categoryName:"Силові тренування", description:"Пара дисків для регулювання навантаження.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-6wYj0xu6_DCOjLnqzYlyxyA3ndsI9wiAbzqtZvSRRa3ovNdgTI_pH0&s=10"},
    {id:10, name:"Медбол 4 кг", price:799, category:"training", categoryName:"Силові тренування", description:"М'яч для координаційних і функціональних вправ.", image:"https://ortosalon.ua/image/cachewebp/catalog/drop/sportivnyjinventar/medbol/medboleasyfitrb4kg(medicinskijmjach-slembolbezotskoka)-1024x1024.webp"},

    // КАРДІО — 10 ТОВАРІВ
    {id:11, name:"Килимок Run Mat", price:1499, category:"cardio", categoryName:"Кардіо", description:"Килимок для кардіотренувань та домашніх вправ.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA5uUJq7SY2tii1Tr7xx5KLyCNkOL5az26lM7neJ5Dw&s=10"},
    {id:12, name:"Скакалка Speed Pro", price:399, category:"cardio", categoryName:"Кардіо", description:"Легка скакалка для тренування витривалості.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2st_h838fM1qjOrs1RUTudRUpiJgW5dtiSNjCDzD6w&s=10"},
    {id:13, name:"Велотренажер Sprint", price:8999, category:"cardio", categoryName:"Кардіо", description:"Тренажер для регулярних домашніх кардіозанять.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzgUkbF1tmYJnfUZWe9nOaNUModLMjrPK0Y78lOQEXg&s=10"},
    {id:14, name:"Орбітрек Flow", price:14999, category:"cardio", categoryName:"Кардіо", description:"Кардіотренажер для тренувань у домашніх умовах.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvzCYP2HZAJ-FNmGHl35tXcqZW-oSrC--JgQBNYYpIg&s=10"},
    {id:15, name:"Степ-платформа Up", price:1099, category:"cardio", categoryName:"Кардіо", description:"Для аеробіки та інтервальних тренувань.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsU3j4c8gbaNPok-1p6_KRVPHPjjd57tgvjCkPnlp-w&s=10"},
    {id:16, name:"Гребний тренажер Row", price:12999, category:"cardio", categoryName:"Кардіо", description:"Тренажер для комплексного кардіонавантаження.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BM5K4QtheixHUvd6z398LooPg5ZIXv-LVQLrdygkzA&s=10"},
     {id:17, name:"Пульсометр Pulse", price:1799, category:"cardio", categoryName:"Кардіо", description:"Допомагає контролювати пульс під час занять.", image:"https://texmed.com.ua/wp-content/uploads/2020/10/IMG_9630.jpg"},
    {id:18, name:"Степпер Mini", price:3299, category:"cardio", categoryName:"Кардіо", description:"Компактний тренажер для домашніх занять.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OhpUdTMSr-PWCLNlcXmxDgzXKRY-S5ZXmhDfmWUTog&s=10"},
    {id:19, name:"Обтяжувачі 2×1 кг", price:549, category:"cardio", categoryName:"Кардіо", description:"Додаткове навантаження для ходьби та вправ.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF00R4lSCL0Gv_xzE433AVfpDU-5P0QLdO3Nh3sbpjpQ&s=10"},
    {id:20, name:"Бігова доріжка Move", price:23999, category:"cardio", categoryName:"Кардіо", description:"Обладнання для бігу та ходьби вдома.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhBBX4ASTxkBYdMHcDYuGRSdbnTMrBPBHY_5nXnVVEw&s=10"},

    // ФІТНЕС-АКСЕСУАРИ — 10 ТОВАРІВ
    {id:21, name:"Килимок Yoga Flow", price:799, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Комфортна поверхня для йоги та розтяжки.", image:"https://budopt.ua/image/cache/catalog/data/item/brands/Osport5/tpe%20mix%20pink-680x630.jpg"},
    {id:22, name:"Ролер для масажу", price:499, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Аксесуар для самомасажу після тренувань.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPtrnS37Rz_DZSvKvnMH4RXtJN57XWc0XfYwIuT00dA&s=10"},
    {id:23, name:"Фітнес-гумки 3 шт.", price:349, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Три гумки з різними рівнями опору.", image:"https://content2.rozetka.com.ua/goods/images/big/325990858.jpg"},
    {id:24, name:"Пляшка Hydro 750 мл", price:299, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Багаторазова пляшка для води.", image:"https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=700&q=80"},
    {id:25, name:"Сумка Gym Daily", price:1199, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Сумка для форми та спортивних речей.", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"},
    {id:26, name:"Рукавички Grip", price:499, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Рукавички для зручного утримання інвентарю.", image:"https://powerway.com.ua/upload/iblock/973/9zk8y7l4ps4z40pqqs0kamhvbfdok4du.jpg"},
    {id:27, name:"Рушник QuickDry", price:279, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Легкий рушник для спортивних занять.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhPy-20uX8SdGafjbyGSL7bSZF_lR3cKVy7M0lCQggJxrNqsq4EvbQ-A3&s=10"},
    {id:28, name:"Блок для йоги Balance", price:249, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Допомагає зберігати баланс під час занять.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjwV_x1-xmjtKck8rtXWMCXT2qTFrIYiXz64VGKS7g3SUfOlIB-y92dE&s=10"},
    {id:29, name:"Масажний м'яч Duo", price:299, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Компактний аксесуар для самомасажу.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhcCmuUqSN4evhZoiH1Aavj9FbxiseOojEFAxfe0Ba6rnqLF0Oxm8Nqg&s=10"},
    {id:30, name:"Поясна сумка Active", price:449, category:"accessories", categoryName:"Фітнес-аксесуари", description:"Для зберігання дрібниць під час активностей.", image:"https://content1.rozetka.com.ua/goods/images/big_tile/668552071.jpg"}
];

// ========================================
// КОШИК
// ========================================

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("fitzone-cart")) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("fitzone-cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.qty, 0);

    document.querySelectorAll("#cart-count").forEach(element => {
        element.textContent = count;
    });
}

function addToCart(id) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveCart(cart);
    showToast("Товар додано до кошика!");
}

// ========================================
// ПОВІДОМЛЕННЯ
// ========================================

function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2300);
}

// ========================================
// ФОРМАТУВАННЯ ЦІНИ
// ========================================

function formatPrice(price) {
    return new Intl.NumberFormat("uk-UA").format(price) + " ₴";
}

// ========================================
// СТВОРЕННЯ КАРТКИ ТОВАРУ
// ========================================

function createProductCard(product, label = "FITZONE") {
    return `
        <article class="product-card">
            <div
                class="product-image"
                data-open-product="${product.id}"
                role="button"
                tabindex="0"
                aria-label="Детальніше: ${product.name}"
            >
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
                <span class="product-tag">${label}</span>
            </div>

            <div class="product-info">
                <div class="product-category">
                    ${product.categoryName}
                </div>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">
                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button
                        class="add-button"
                        data-add-product="${product.id}"
                        aria-label="Додати ${product.name} до кошика"
                    >+</button>
                </div>
            </div>
        </article>
    `;
}

// ========================================
// МОДАЛЬНЕ ВІКНО
// ========================================

function openProduct(id) {
    const product = PRODUCTS.find(item => item.id === id);
    const modal = document.getElementById("product-modal");

    if (!product || !modal) return;

    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-image").alt = product.name;
    document.getElementById("modal-category").textContent = product.categoryName;
    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-description").textContent = product.description;
    document.getElementById("modal-price").textContent = formatPrice(product.price);

    document.getElementById("modal-add").onclick = () => {
        addToCart(product.id);
        modal.classList.remove("open");
    };

    modal.classList.add("open");
}

// ========================================
// ГОЛОВНА СТОРІНКА
// ========================================

function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) return;

    const featuredIds = [1, 12, 21, 5];

    container.innerHTML = PRODUCTS
        .filter(product => featuredIds.includes(product.id))
        .map(product => createProductCard(product, "ВИБІР FITZONE"))
        .join("");
}

// ========================================
// КАТАЛОГ, ПОШУК І ФІЛЬТРИ
// ========================================

function initializeCatalog() {
    const container = document.getElementById("catalog-products");

    if (!container) return;

    const search = document.getElementById("product-search");
    const count = document.getElementById("results-count");
    const filterButtons = document.querySelectorAll("[data-filter]");

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");

    let activeCategory = ["training", "cardio", "accessories"]
        .includes(requestedCategory)
        ? requestedCategory
        : "all";

    function render() {
        const query = search.value.trim().toLocaleLowerCase("uk");

        const filtered = PRODUCTS.filter(product => {
            const categoryMatches =
                activeCategory === "all" ||
                product.category === activeCategory;

            const searchText = (
                product.name + " " +
                product.description + " " +
                product.categoryName
            ).toLocaleLowerCase("uk");

            return categoryMatches && searchText.includes(query);
        });

        container.innerHTML = filtered.length
            ? filtered.map(product =>
                createProductCard(product, "У НАЯВНОСТІ")
              ).join("")
            : "<p>На жаль, товарів не знайдено. Спробуй інший запит.</p>";

        count.textContent = "Знайдено товарів: " + filtered.length;

        filterButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === activeCategory
            );
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.filter;
            render();
        });
    });

    search.addEventListener("input", render);

    render();
}

// ========================================
// ФОРМА ЗВОРОТНОГО ЗВ'ЯЗКУ
// ========================================

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
            const messages = JSON.parse(
                localStorage.getItem("fitzone-messages") || "[]"
            );

            messages.push(message);

            localStorage.setItem(
                "fitzone-messages",
                JSON.stringify(messages)
            );

            form.reset();

            showToast("Дякуємо! Повідомлення збережено.");

        } catch (error) {
            showToast("Не вдалося зберегти повідомлення.");
        }
    });
}

// ========================================
// ОБРОБКА КЛІКІВ І КЛАВІАТУРИ
// ========================================

document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-product]");

    if (addButton) {
        addToCart(Number(addButton.dataset.addProduct));
        return;
    }

    const productImage = event.target.closest("[data-open-product]");

    if (productImage) {
        openProduct(Number(productImage.dataset.openProduct));
        return;
    }

    if (event.target.closest(".modal-close")) {
        document.getElementById("product-modal")?.classList.remove("open");
        return;
    }

    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("open");
    }
});

document.addEventListener("keydown", event => {
    if (
        (event.key === "Enter" || event.key === " ") &&
        event.target.matches("[data-open-product]")
    ) {
        event.preventDefault();
        openProduct(Number(event.target.dataset.openProduct));
    }

    if (event.key === "Escape") {
        document.getElementById("product-modal")?.classList.remove("open");
    }
});

// ========================================
// ЗАПУСК САЙТУ
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderFeaturedProducts();
    initializeCatalog();
    initializeContactForm();
});