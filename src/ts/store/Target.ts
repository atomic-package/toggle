/**
 * Toggle Target Model Class
 * @public
 * @param option
 **/
export class Target {
  constructor(
      public id: number,
      public className: string,
      public idName: string,
      public view: any
  ) {
  }

  static fromData(data: any): Target {
    return new Target(
        data.id ? data.id : 1,
        data.className ? data.className : null,
        data.idName ? data.idName : null,
        data ? data : null
    );
  }

  /**
   * Private Function
   **/
  public toggle() {
    this.view.toggle();
  }
}

export default Target;
