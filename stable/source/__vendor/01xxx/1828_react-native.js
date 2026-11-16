// Module ID: 1828
// Function ID: 1829
// Name: react-native
// Dependencies: [17]
// Exports: controlEdgeToEdgeValues, isEdgeToEdge

// Module 1828 (react-native)
import react_native from "react-native" /* 17 */;

function isEdgeToEdgeFromLibrary() {
  const TurboModuleRegistry = react_native.TurboModuleRegistry;
  return null != TurboModuleRegistry.get("RNEdgeToEdge");
}
function isEdgeToEdgeFromProperty() {
  const TurboModuleRegistry = react_native.TurboModuleRegistry;
  const value = TurboModuleRegistry.get("DeviceInfo");
  let getConstants;
  if (null != value) {
    getConstants = value.getConstants;
  }
  let isEdgeToEdge;
  if (null != getConstants) {
    isEdgeToEdge = getConstants.call(value).isEdgeToEdge;
  }
  return true === isEdgeToEdge;
}
const isEdgeToEdge_export = () => {
  if (typeof isEdgeToEdgeFromLibrary === "function") {
    const TurboModuleRegistry = react_native.TurboModuleRegistry;
    let tmp3 = null != TurboModuleRegistry.get("RNEdgeToEdge");
    const tmp = react_native;
    if (!tmp3) {
      if (typeof isEdgeToEdgeFromProperty === "function") {
        const TurboModuleRegistry2 = tmp.TurboModuleRegistry;
        const value = TurboModuleRegistry2.get("DeviceInfo");
        let getConstants;
        if (null != value) {
          getConstants = value.getConstants;
        }
        let isEdgeToEdge;
        if (null != getConstants) {
          isEdgeToEdge = getConstants.call(value).isEdgeToEdge;
        }
        tmp3 = true === isEdgeToEdge;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};

export const controlEdgeToEdgeValues = (arg0) => {

};
export { isEdgeToEdge_export as isEdgeToEdge };
export { isEdgeToEdgeFromLibrary };
export { isEdgeToEdgeFromProperty };
