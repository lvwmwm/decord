// Module ID: 9758
// Function ID: 75913
// Name: StatusBarManager
// Dependencies: [6, 7, 27, 22, 1569, 2]

// Module 9758 (StatusBarManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { StatusBar } from "get ActivityIndicator";

let tmp2 = (() => {
  class StatusBarManager {
    constructor() {
      tmp = outer1_2(this, StatusBarManager);
      this.propsStack = [];
      this.updateImmediate = null;
      return;
    }
  }
  let obj = {
    key: "pushStackEntry",
    value(hidden) {
      const obj = { hidden: hidden.hidden, barStyle: hidden.barStyle };
      const propsStack = this.propsStack;
      propsStack.push(obj);
      this.updatePropsStack();
      return obj;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "popStackEntry",
    value(arg0) {
      const self = this;
      let num = -1;
      if (null != arg0) {
        const propsStack = self.propsStack;
        num = propsStack.indexOf(arg0);
      }
      if (-1 !== num) {
        const propsStack1 = self.propsStack;
        propsStack1.splice(num, 1);
        self.updatePropsStack();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "replaceStackEntry",
    value(arg0, hidden) {
      const self = this;
      const obj = { hidden: hidden.hidden, barStyle: hidden.barStyle };
      let num = -1;
      if (null != arg0) {
        const propsStack = self.propsStack;
        num = propsStack.indexOf(arg0);
      }
      if (-1 !== num) {
        self.propsStack[num] = obj;
      }
      self.updatePropsStack();
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updatePropsStack",
    value() {
      const self = this;
      clearImmediate(this.updateImmediate);
      this.updateImmediate = setImmediate(() => {
        const items = [{ hidden: false, barStyle: "default" }, ...self.propsStack];
        const applyResult = StatusBarManager(outer2_1[3]).merge.apply(items);
        outer2_4.setBarStyle(applyResult.barStyle);
        const tmp = StatusBarManager(outer2_1[3]);
        StatusBarManager(outer2_1[4]).setStatusBarVisible(!applyResult.hidden);
      });
    }
  };
  return callback(StatusBarManager, items);
})();
tmp2 = new tmp2();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/status_bar/native/components/StatusBarManager.android.tsx");

export default tmp2;
