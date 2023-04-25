import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var circleCard97E6DA6A17754ADFBF75B84D8FE16702_DEBUG: IVisualPlugin = {
    name: 'circleCard97E6DA6A17754ADFBF75B84D8FE16702_DEBUG',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '5.1.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCard97E6DA6A17754ADFBF75B84D8FE16702_DEBUG"] = circleCard97E6DA6A17754ADFBF75B84D8FE16702_DEBUG;
}
export default circleCard97E6DA6A17754ADFBF75B84D8FE16702_DEBUG;