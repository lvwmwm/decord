// Module ID: 437
// Function ID: 5999
// Name: AppStateImpl
// Dependencies: [468, 469, 31, 390, 31]

// Module 437 (AppStateImpl)
import module_468 from "module_468";
import ToastAndroid from "ToastAndroid";

let tmp2 = () => {
  class AppStateImpl {
    constructor() {
      self = this;
      AppStateImpl = this;
      tmp = module_468(this, AppStateImpl);
      this.currentState = null;
      if (null == AppStateImpl(closure_1[2])) {
        flag = false;
        self.isAvailable = false;
      } else {
        flag2 = true;
        self.isAvailable = true;
        tmp2 = AppStateImpl;
        tmp3 = closure_1;
        num = 3;
        tmp4 = AppStateImpl(closure_1[3]);
        prototype = tmp4.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        tmp7 = null;
        tmp4 = new tmp4(null);
        tmp8 = tmp4;
        closure_1 = tmp4;
        self._emitter = tmp4;
        obj2 = AppStateImpl(closure_1[2]);
        self.currentState = obj2.getConstants().initialAppState;
        flag3 = false;
        module_468 = false;
        str = "appStateDidChange";
        addListenerResult = tmp4.addListener("appStateDidChange", (app_state) => {
          let module_468 = true;
          self.currentState = app_state.app_state;
        });
        obj3 = AppStateImpl(closure_1[2]);
        num2 = 4;
        currentAppState = obj3.getCurrentAppState((app_state) => {
          let tmp = module_468;
          if (!module_468) {
            tmp = self.currentState === app_state.app_state;
          }
          if (!tmp) {
            self.currentState = app_state.app_state;
            tmp4.emit("appStateDidChange", app_state);
          }
        }, AppStateImpl(closure_1[4]));
      }
      return;
    }
  }
  const importDefault = AppStateImpl;
  const items = [
    {
      key: "addEventListener",
      value: function addEventListener(arg0, arg1) {
        const AppStateImpl = arg0;
        const _emitter = this._emitter;
        if (null == _emitter) {
          const _Error2 = Error;
          const error = new Error("Cannot use AppState when `isAvailable` is false.");
          throw error;
        } else if ("change" === arg0) {
          return _emitter.addListener("appStateDidChange", (app_state) => {
            arg1(app_state.app_state);
          });
        } else if ("memoryWarning" === arg0) {
          return _emitter.addListener("memoryWarning", arg1);
        } else {
          if ("blur" !== arg0) {
            if ("focus" !== arg0) {
              const _Error = Error;
              const error1 = new Error("Trying to subscribe to unknown event: " + arg0);
              throw error1;
            }
          }
          return _emitter.addListener("appStateFocusChange", (arg0) => {
            if (!tmp) {
              arg1();
            }
            if (tmp4) {
              arg1();
            }
          });
        }
      }
    }
  ];
  return callback(AppStateImpl, items);
}();
tmp2 = new tmp2();

export default tmp2;
