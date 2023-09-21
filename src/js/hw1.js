export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Такой обьект есть');
    }
    this.members.add(obj);
  }

  addAll(...list) {
    list.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    return [...this.members];
  }
}
