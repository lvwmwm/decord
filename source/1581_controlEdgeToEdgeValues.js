// Module ID: 1581
// Function ID: 17673
// Name: controlEdgeToEdgeValues
// Dependencies: [57, 27]
// Exports: controlEdgeToEdgeValues, isEdgeToEdge

// Module 1581 (controlEdgeToEdgeValues)
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";


export function controlEdgeToEdgeValues(arg0) {

}
export const isEdgeToEdge = function isEdgeToEdge() {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  let tmp = null != TurboModuleRegistry.get("RNEdgeToEdge");
  if (!tmp) {
    const TurboModuleRegistry2 = get_ActivityIndicator.TurboModuleRegistry;
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
