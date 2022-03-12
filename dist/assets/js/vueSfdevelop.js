Vue.component('v-select', VueSelect.VueSelect)

var app = new Vue({
    el: '#app',
    data: {
        selectedCity: 'Выберите город',
        selectedRubric: 'Выберите рубрику',
        isActive: true,
        isDropdown:false,
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
    },
})