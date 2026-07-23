// Module ID: 11713
// Function ID: 90934
// Name: _updateDiscoverability
// Dependencies: [5, 4812, 653, 3803, 1360, 675, 11709, 4938, 2]

// Module 11713 (_updateDiscoverability)
import expandLocation from "expandLocation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function _updateDiscoverability() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_5, FriendDiscoveryFlags: closure_6, PlatformTypes: closure_7 } = ME);
const tmp3 = (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})();
let obj = {
  updateName: (() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(),
  updateDiscoverability(arg0) {
    return _updateDiscoverability(...arguments);
  },
  updateContactSyncEnabled: (() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })()
};
const result = require("ME").fileFinishedImporting("modules/contact_sync/native/ContactSyncActionCreators.tsx");

export default obj;
