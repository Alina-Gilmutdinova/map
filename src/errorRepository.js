//Создайте свой класс ErrorRepository внутри которого храните Map, 
//в котором ключ - это код ошибки (число), а значение - текстовое описание 

export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}