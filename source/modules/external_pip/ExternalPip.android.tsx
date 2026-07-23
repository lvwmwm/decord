// Module ID: 10233
// Function ID: 79047
// Name: NativeModules
// Dependencies: [6, 7, 27, 2]

// Module 10233 (NativeModules)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import get_ActivityIndicator from "get ActivityIndicator";

let NativeModules;
let closure_2;
({ NativeEventEmitter: closure_2, NativeModules } = get_ActivityIndicator);
const ExternalPip = NativeModules.ExternalPip;
let tmp3 = (() => {
  class ExternalPip {
    constructor() {
      tmp = ExternalPip(this, ExternalPip);
      this._enabled = false;
      this._isInPipMode = false;
      tmp2 = new outer1_2(outer1_3.PipAndroid);
      this.eventEmitter = tmp2;
      return;
    }
  }
  let obj = {
    key: "addOnPipModeChangedListener",
    value(arg0) {
      const self = this;
      let _defineProperties = arg0;
      const eventEmitter = this.eventEmitter;
      return eventEmitter.addListener("onPipModeChanged", (isInPipMode) => {
        isInPipMode = isInPipMode.isInPipMode;
        self._isInPipMode = isInPipMode;
        callback(isInPipMode);
      });
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "addOnPipModeWillChangeListener",
    value(arg0) {
      const eventEmitter = this.eventEmitter;
      return eventEmitter.addListener("onPipModeWillChange", arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "setSelectedStream",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "setFocusedStream",
    value() {

    }
  };
  items[4] = {
    key: "setMirrored",
    value() {

    }
  };
  items[5] = {
    key: "setPipAspectRatio",
    value(arg0, arg1) {
      outer1_4.setPipAspectRatio(arg0, arg1);
    }
  };
  items[6] = {
    key: "refreshPipUi",
    value() {
      outer1_4.refreshPipUi();
    }
  };
  items[7] = {
    key: "updateSourceTrackingView",
    value() {

    }
  };
  items[8] = {
    key: "setEnabled",
    value(_enabled) {
      this._enabled = _enabled;
      outer1_4.setEnabled(this._enabled);
    }
  };
  items[9] = {
    key: "setActive",
    value(isActive) {
      return outer1_4.setActive(isActive);
    }
  };
  items[10] = {
    key: "isEnabled",
    value() {
      return this._enabled;
    }
  };
  items[11] = {
    key: "isSupported",
    value() {
      return true === outer1_4.isSupported;
    }
  };
  items[12] = {
    key: "isInPipMode",
    value() {
      return this._isInPipMode;
    }
  };
  return callback(ExternalPip, items);
})();
tmp3 = new tmp3();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default tmp3;
