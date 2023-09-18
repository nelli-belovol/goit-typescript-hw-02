/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string;
}

class Component<T extends IProps> {
  constructor(public props: T) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page1 = new Page({ title: 'Info page' });
page1.pageInfo();

export {};
