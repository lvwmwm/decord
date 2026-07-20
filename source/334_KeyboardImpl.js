// Module ID: 334
// Function ID: 4958
// Name: KeyboardImpl
// Dependencies: []

// Module 334 (KeyboardImpl)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class KeyboardImpl {
    constructor() {
      KeyboardImpl = this;
      tmp = closure_2(this, KeyboardImpl);
      tmp2 = KeyboardImpl(closure_1[2]);
      tmp2 = new tmp2(null);
      this._emitter = tmp2;
      addListenerResult = this.addListener("keyboardDidShow", (_currentlyShowing) => {
        self._currentlyShowing = _currentlyShowing;
      });
      addListenerResult1 = this.addListener("keyboardDidHide", (arg0) => {
        self._currentlyShowing = null;
      });
      return;
    }
  }
  const importDefault = KeyboardImpl;
  let obj = {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const _emitter = this._emitter;
      return _emitter.addListener(arg0, arg1);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const _emitter = this._emitter;
      _emitter.removeAllListeners(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "dismiss",
    value: function dismiss() {
      KeyboardImpl(closure_1[3])();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isVisible",
    value: function isVisible() {
      return this._currentlyShowing;
    }
  };
  items[4] = {
    key: "metrics",
    value: function metrics() {
      const _currentlyShowing = this._currentlyShowing;
      let endCoordinates;
      if (null != _currentlyShowing) {
        endCoordinates = _currentlyShowing.endCoordinates;
      }
      return endCoordinates;
    }
  };
  items[5] = {
    key: "scheduleLayoutAnimation",
    value: function scheduleLayoutAnimation(arg0) {
      let duration;
      let easing;
      ({ duration, easing } = arg0);
      let tmp = null != duration;
      if (tmp) {
        tmp = 0 !== duration;
      }
      if (tmp) {
        let obj = KeyboardImpl(closure_1[4]);
        obj = { duration };
        obj = { duration };
        let str = null != easing;
        if (str) {
          str = KeyboardImpl(closure_1[4]).Types[easing];
        }
        if (!str) {
          str = "keyboard";
        }
        obj.type = str;
        obj.update = obj;
        obj.configureNext(obj);
      }
    }
  };
  return callback(KeyboardImpl, items);
}();
tmp2 = new tmp2();

export default tmp2;
