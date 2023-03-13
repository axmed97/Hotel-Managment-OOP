class Modal{
    constructor(className) {
        this.modal = document.querySelector('.' + className);
    }
    openModal = () =>{
        this.modal.classList.add('modal-open');
    }
    closeModal = () => {
        this.modal.classList.remove('modal-open');
    }
}

class FormItem{
    constructor(element) {
        this.element = element;
        this.errorElement = this.element.nextElementSibling;
        this.hasError = false;
    }

    setError = (message) =>{
        this.element.classList.add('myErrorInput');
        this.element.style.color = 'red';
        this.errorElement.classList.add('text-danger');
        this.errorElement.textContent = message;
        this.hasError = false;
    }

    clearError = () => {
        this.element.classList.remove('myErrorInput');
        this.element.style.color = 'black';
        this.errorElement.classList.remove('text-danger');
        this.errorElement.textContent = '';
        this.hasError = true;
    }
}

class NumberController extends FormItem{
    constructor(element){
        super(element);
        this.element.oninput = this.changeHandler;
    }

    changeHandler = () =>{
        let newValue = this.element.value;
        if(/^\d*$/.test(newValue)){
            this.clearError();
        }else{
            this.setError('Yusifin beyni tez ol duzelt');
        }
    }
}

class AddRoomModal extends Modal{
    constructor() {
        super('modal-menu');
        this.newRoomBtn = document.querySelector('#btn');
        this.cancel= document.querySelector('#cancel');

        this.newRoomBtn.onclick = this.openModal;
        this.cancel.onclick = this.closeModal;

        this.form = document.querySelector('.modal-menu form');

        const noEl = new NumberController(this.form[0]);
        const floorEl = new NumberController(this.form[1]);
        const priceEl = new NumberController(this.form[3]);
    }
}

class Table{
    constructor(){
        const modalEl = new AddRoomModal();
    }
}


const table = new Table();
