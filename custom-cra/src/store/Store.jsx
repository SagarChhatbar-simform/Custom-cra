import { observable, action } from "mobx";

class Store {
  @observable Count = 0;

  @action Add() {
    this.Count++;
  }

  @action sub() {
    this.Count--;
  }
}

const storeInstance = new Store();

export default storeInstance;
