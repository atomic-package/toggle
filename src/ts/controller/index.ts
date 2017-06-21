/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';

/**
 * Toggle Class
 * @public
 * @param option
 **/
export class Toggle {
    private static _instance: Toggle = null;

    private model: Model;

    constructor(
    ) {
        if (Toggle._instance) {
            return Toggle._instance;
        } else {
            View.fetchElements((data) => {
                this.model = Model.fromData(data);
            });

            Toggle._instance = this;
        }
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
        //this.model.triggerList.push(Trigger.fromData(data));
    }

    public select(data: any): void {
        //number, id, class
        //
    }

    public resetSelected(data: any) {

    }
}


export default Toggle;
