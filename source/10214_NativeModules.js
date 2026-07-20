// Module ID: 10214
// Function ID: 78933
// Name: NativeModules
// Dependencies: []

// Module 10214 (NativeModules)
let NativeModules;
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
({ NativeEventEmitter: closure_2, NativeModules } = arg1(dependencyMap[2]));
const ExternalPip = NativeModules.ExternalPip;
let tmp3 = () => {
  class ExternalPip {
    constructor() {
      tmp = ExternalPip(this, ExternalPip);
      this._enabled = false;
      this._isInPipMode = false;
      tmp2 = new closure_2(closure_3.PipAndroid);
      this.eventEmitter = tmp2;
      return;
    }
  }
  let closure_0 = ExternalPip;
  let obj = {
    key: "addOnPipModeChangedListener",
    value(arg0) {
      const ExternalPip = this;
      const eventEmitter = this.eventEmitter;
      return eventEmitter.addListener("onPipModeChanged", (isInPipMode) => {
        isInPipMode = isInPipMode.isInPipMode;
        self._isInPipMode = isInPipMode;
        isInPipMode(isInPipMode);
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
      store.setPipAspectRatio(arg0, arg1);
    }
  };
  items[6] = {
    key: "refreshPipUi",
    value() {
      store.refreshPipUi();
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
      store.setEnabled(this._enabled);
    }
  };
  items[9] = {
    key: "setActive",
    value(isActive) {
      return store.setActive(isActive);
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
      return true === store.isSupported;
    }
  };
  items[12] = {
    key: "isInPipMode",
    value() {
      return this._isInPipMode;
    }
  };
  return callback(ExternalPip, items);
}();
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default tmp3;
