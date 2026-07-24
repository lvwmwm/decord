// Module ID: 12937
// Function ID: 100373
// Name: _createTwoWayLink
// Dependencies: [5, 31, 12936, 4938, 8987, 44, 4939, 9000, 2]
// Exports: useDeviceCodeAuthorizeCallback

// Module 12937 (_createTwoWayLink)
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
