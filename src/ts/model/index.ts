/*
 * Author: Daisuke Takayama
 */
const APModel = require('@atomic-package/common').Model;

// store
import {
  Target,
  Trigger
} from '../store/';

/**
 * Toggle Model Class
 * @public
 * @param option
 **/
export class Model {
  constructor(
      public targetList: Target[],
      public triggerList: Trigger[]
  ) {
    this.setTriggerCallBack();
    this.setTriggerTargetId();
  }

  /**
   * Static Function
   **/
  public static fromData(data: any): Model {
    return new Model(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
    );
  }

  /**
   * Private Function
   **/
  private setTriggerCallBack(): void {
    this.triggerList.forEach((trigger: Trigger) => {
      trigger.view.toggle(() => {
        trigger.toggle(this.targetList);
      }, true);
    });
  }

  private setTriggerTargetId() {
    for(let i: number = 0; i < this.triggerList.length; i++) {
      this.triggerList[i].setTargetId(this.targetList);
    }
  }

  /**
   * Public Function
   **/
  public toggle(data: any): void {
  }

  public getElements(data: any): Target[] {
    return APModel.search(this.targetList, data);
  }
}

export default Model;
