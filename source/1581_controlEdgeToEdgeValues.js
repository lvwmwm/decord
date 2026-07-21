// Module ID: 1581
// Function ID: 17672
// Name: controlEdgeToEdgeValues
// Dependencies: [0, 0]
// Exports: controlEdgeToEdgeValues, isEdgeToEdge

// Module 1581 (controlEdgeToEdgeValues)
import result from "result";
import result from "result";


export function controlEdgeToEdgeValues(arg0) {

}
export const isEdgeToEdge = function isEdgeToEdge() {
  const TurboModuleRegistry = result.TurboModuleRegistry;
  let tmp = null != TurboModuleRegistry.get("RNEdgeToEdge");
  if (!tmp) {
    const TurboModuleRegistry2 = result.TurboModuleRegistry;
    const value = TurboModuleRegistry2.get("DeviceInfo");
    let getConstants;
    if (null != value) {
      getConstants = value.getConstants;
    }
    let isEdgeToEdge;
    if (null != getConstants) {
      isEdgeToEdge = getConstants.call(value).isEdgeToEdge;
    }
    tmp = true === isEdgeToEdge;
  }
  return tmp;
};
