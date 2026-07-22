// Module ID: 9751
// Function ID: 75872
// Name: StatusBarManager
// Dependencies: []

// Module 9751 (StatusBarManager)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const StatusBar = arg1(dependencyMap[2]).StatusBar;
let tmp2 = () => {
  class StatusBarManager {
    constructor() {
      tmp = closure_2(this, StatusBarManager);
      this.propsStack = [];
      this.updateImmediate = null;
      return;
    }
  }
  const importDefault = StatusBarManager;
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
  const items = [obj, , , ];
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
      const StatusBarManager = this;
      clearImmediate(this.updateImmediate);
      this.updateImmediate = setImmediate(() => {
        const items = [{}, ...closure_0.propsStack];
        const applyResult = self(closure_1[3]).merge.apply(items);
        barStyle.setBarStyle(applyResult.barStyle);
        const tmp = self(closure_1[3]);
        self(closure_1[4]).setStatusBarVisible(!applyResult.hidden);
      });
    }
  };
  return callback(StatusBarManager, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/status_bar/native/components/StatusBarManager.android.tsx");

export default tmp2;
