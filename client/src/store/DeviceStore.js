import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Телевизоры" },
      { id: 4, name: "Наушники" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Honor" },
    ];

    this._devices = [
      { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "http://placehold.it/150x150" },
      { id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "http://placehold.it/150x150" },
      { id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "http://placehold.it/150x150" },
      { id: 4, name: "Galaxy S23 Ultra", price: 25000, rating: 5, img: "http://placehold.it/150x150" },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }
  //  setters---------------------------------
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  //  getters---------------------------------
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
