class Colors {
    constructor(colorName) {
        this.colorName = colorName;
    }

    red() {
        return console.log(this.colorName);
    }
};

const red1 = new Colors('red');

const but = document.querySelector('button');
but.addEventListener('click', () => {
    red1.red()
});