// Module ID: 12949
// Function ID: 100505
// Name: _createTwoWayLink
// Dependencies: [5, 31, 12948, 4939, 8875, 44, 4940, 8888, 2]
// Exports: useDeviceCodeAuthorizeCallback

// Module 12949 (_createTwoWayLink)
import invariant from "invariant";
import result from "result";

const require = arg1;
function _createTwoWayLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function silentlyFinishTwoWayLinkError() {
  return _silentlyFinishTwoWayLinkError(...arguments);
}
function _silentlyFinishTwoWayLinkError() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("clientIdToActivateDevicePlatform").fileFinishedImporting("modules/activate_device/useDeviceCodeAuthorizeCallback.tsx");

export const useDeviceCodeAuthorizeCallback = function useDeviceCodeAuthorizeCallback(callback, callback2, callback1) {
  let closure_0 = callback;
  let closure_1 = callback2;
  let closure_2 = callback1;
  const items = [callback, callback2, callback1];
  return React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
