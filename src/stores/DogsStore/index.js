import {
  observable, action,
} from 'mobx';
import Dog from './Dog';
import ErrorWrapper from './ErrorWrapper';

export class DogsStore {
  @observable
  loading = false;

  @observable
  dogs = {};

  @observable
  offset = 0;

  @observable
  errors = [];

  constructor() {
    this.fetchDogs(50);
  }

  fetchDogs = (limit) => {
    if (!this.loading) {
      this.setLoading(true);

      fetch(`http://api.giphy.com/v1/stickers/search?api_key=VB5KFtt8b8zkp7KOsK62sWD5Li6e5eka&q=dog&limit=${limit}&offset=${this.offset}`)
        .then(response => response.json())
        .then(({ data }) => data.map(dog => new Dog(dog)))
        .then(newDogs => this.addDogs(newDogs))
        .catch(error => this.showError(error))
        .finally(() => this.setLoading(false));
    }
  }

  @action setLoading = (newLoading) => {
    this.loading = newLoading;
  }

  @action showError = (newError) => {
    this.errors.push(new ErrorWrapper(newError));
  }

  @action addDogs = (newDogs) => {
    this.dogs = newDogs
      .reduce((dogs, nextDog) => Object
        .assign(dogs, { [nextDog.id]: nextDog }), this.dogs);

    this.offset = Object.keys(this.dogs).length;
  }
}

const dogsStore = new DogsStore();

export default dogsStore;
