Vue.component('v-select', VueSelect.VueSelect)

var app = new Vue({
    el: '#app',
    data: {
        selectedCity: 'Выберите город',
        selectedRubric: 'Выберите рубрику',
        isActive: true,
        isDropdown:false,
        isAuth:false,
        isVacancy:false,
        isOfferJob:false,
        quickActive: false,
        isPhone: false,
        phone: '',

        options: [
            'Гамбург',
            'Мюнхен',
            'Кёльн',
            'Штутгарт',
            'Дюссельдорф ',
            'Дортмунд',
        ],
        rubric: [
            'Рубрика1',
            'Рубрика2',
            'Рубрика3',
            'Рубрика4',
            'Рубрика5',
            'Рубрика6',
            'Рубрика7',
            'Рубрика8',
            'Рубрика9',
            'Рубрика10',
        ],
    },
    methods: {
        openBurger: function () {
            this.isActive = !this.isActive;
        },
        openDropdown: function() {
            this.isDropdown = !this.isDropdown;
        },
        openQuick: function() {
            this.quickActive = !this.quickActive;
        },
        openVacancy: function() {
            this.isVacancy = !this.isVacancy;
        },
        openOfferJob: function() {
            this.isOfferJob = !this.isOfferJob;
        },
        openDropdownAuth: function() {
            this.isAuth = !this.isAuth;
        },
        openPhone: function() {
            this.isPhone = !this.isPhone;
            this.phone = '+38 093 999 99 99'
        },
    },
})