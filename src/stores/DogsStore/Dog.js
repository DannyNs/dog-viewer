import { observable, action } from 'mobx';

class Dog {
  id = null;

  url = null;

  date = null;

  title = null;

  username = null;

  @observable
  loading = true;

  @observable
  error = false;

  constructor(source) {
    const {
      id, title, import_datetime: date, user,
    } = source;

    this.id = id;
    this.date = date;
    this.title = title;
    this.username = user ? user.username : 'anonymous';
    this.url = `https://i.giphy.com/media/${id}/giphy.webp`;
  }

  @action setLoaded = () => {
    this.loading = false;
  }

  @action setError = () => {
    this.error = true;
  }
}

export default Dog;
