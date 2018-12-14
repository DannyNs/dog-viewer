import { observable, action } from 'mobx';

class ErrorWrapper {
  id = Date.now();

  display = true;

  message = '';

  stack = '';

  @observable
  read = false;

  constructor(source) {
    const { message, stack } = source;

    this.stack = stack;
    this.message = message;

    setTimeout(this.markAsRead, 3000);
  }

  @action markAsRead = () => {
    this.read = true;
  }
}

export default ErrorWrapper;
