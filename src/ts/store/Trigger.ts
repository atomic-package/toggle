const APModel = require('@atomic-package/common').Model;

import Target from './Target';
import TriggerView from '../component/Trigger';

/**
 * Toggle Trigger Model Class
 * @public
 * @param option
 **/
export class Trigger {
  constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public targetId: number[],
      public view: TriggerView
  ) {
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
        data.id ? data.id : 1,
        data.className ? data.className : '',
        data.idName ? data.idName : '',
        data.target ? data.target : null,
        data.targetId ? data.targetId : [],
        data ? data : null
    );
  }

  /**
   * Public Function
   **/
  public setTargetId(contentsViewList: Target[]) {
    let searchContents: Target[] = APModel.search(contentsViewList, this.target);

    if(searchContents) {
      for (let i: number = 0; i < searchContents.length; i++) {
        this.targetId.push(searchContents[i].id);
      }
    }
  }

  public toggle(targetList) {
    for(let i: number = 0; i < this.targetId.length; i++) {
      for(let n: number = 0; n < targetList.length; n++) {
        if(targetList[i].id === this.targetId[i]) {
          targetList[i].toggle();
        }
      }
    }
  }
}

export default Trigger;
