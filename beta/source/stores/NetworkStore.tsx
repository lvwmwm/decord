// Module ID: 4885
// Function ID: 4886
// Name: NetworkStore
// Dependencies: [1074, 504, 1463, 573, 2]

// Module 4885 (NetworkStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1463 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function handleConnectionInfoChange(type) {
  if (null != type.type) {
    UNKNOWN = type.type;
  } else {
    UNKNOWN = NetworkConnectionTypes.UNKNOWN;
  }
  UNKNOWN2 = type.effectiveSpeed;
  if (UNKNOWN2 == null) {
    UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
  }
  serviceProvider = type.serviceProvider;
  networkStoreClass.emitChange();
}
const NetworkConnectionTypes = Constants.NetworkConnectionTypes;
const NetworkConnectionSpeeds = Constants.NetworkConnectionSpeeds;
let UNKNOWN = NetworkConnectionTypes.UNKNOWN;
let UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
let serviceProvider = null;
const Store = get_initializedDefault.Store;
class NetworkStoreClass extends Store {
  initialize() {
    const obj = NetworkUtilsDefault;
    const networkInformation = obj.getNetworkInformation();
    networkInformation.then(handleConnectionInfoChange);
    const obj2 = NetworkUtilsDefault;
    obj2.addChangeCallback(handleConnectionInfoChange);
  }
  getType() {
    return UNKNOWN;
  }
  getEffectiveConnectionSpeed() {
    return UNKNOWN2;
  }
  getServiceProvider() {
    return serviceProvider;
  }
}
const prototype = NetworkStoreClass.prototype;
NetworkStoreClass.displayName = "NetworkStore";
const networkStoreClass = new NetworkStoreClass(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/NetworkStore.tsx");

export default networkStoreClass;
