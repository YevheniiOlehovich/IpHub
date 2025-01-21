const slidesData = [
    {
        title: "Яка мета вашого звернення?",
        labels: [
            "Реєстрація корисної моделі 1",
            "Реєстрація промислового зразку",
            "Реєстрація прав на використання корисної моделі, промзразку, винаходу",
            "Підготовка заявки на видачу патенту",
            "Реєстрація винаходу",
            "Підготовка заявки на передачу прав патенту",
        ],
        bgColor: "#000000", // Колір фону для слайду
    },
    {
        title: "Слайд №2:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4",
            "Варіант №5",
            "Варіант №6"
        ],
        bgColor: "#05120F",
    },
    {
        title: "Слайд №3:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4",
            "Варіант №5"
        ],
        bgColor: "#0B2519",
    },
    {
        title: "Слайд №4:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4"
        ],
        bgColor: "#1E4331",
    },
    {
        title: "Слайд №5:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4",
            "Варіант №5"
        ],
        bgColor: "#2B5C42",
    },
    {
        title: "Слайд №6:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4",
            "Варіант №5",
            "Варіант №6"
        ],
        bgColor: "#387A53",
    },
    {
        title: "Слайд №7:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
            "Варіант №4",
            "Варіант №5",
            "Варіант №6"
        ],
        bgColor: "#4A8C63",
    },
    {
        title: "Слайд №8:",
        labels: [
            "Варіант №1",
            "Варіант №2",
            "Варіант №3",
        ],
        bgColor: "#5B9C74",
    }
];


const contactSlide = {
    bgColor: '#6b5555', 
    title: 'Останній слайд',
    labels: [], 
    content: `
        <div class="purpose__swiper-contact-box">
            <div class="purpose__swiper-contact-rowBox">
                <label for="contact-name" class="purpose__swiper-item-label contact-label">
                    <input type="text" id="contact-name" name="contact-neme" class="text-input" placeholder="Введіть ПІБ">
                    <span class="contact-subtitle">Ваше ім'я</span>  
                </label>

                <label for="contact-email" class="purpose__swiper-item-label contact-label">
                    <input type="email" id="contact-email" name="contact-group" class="text-input" placeholder="Введіть ваш email">
                    <span class="contact-subtitle">Ваш email</span>  
                </label>
            </div>
            
            <label for="contact-textarea" class="purpose__swiper-item-label contact-label">
                <textarea id="contact-textarea" name="contact-textarea" class="text-input text-area" placeholder="Введіть додаткову інформацію"></textarea>
                <span class="contact-subtitle">Примітка</span>   
            </label>
        </div>
    `
};

slidesData.push(contactSlide);

export default slidesData;