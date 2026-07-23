// Module ID: 12605
// Function ID: 97571
// Name: StateManager
// Dependencies: [6, 7, 636, 2]

// Module 12605 (StateManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class StateManager {
    constructor() {
      flag = arg0;
      self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      tmp = outer1_2(self, StateManager);
      self.alwaysUpdateState = flag;
      self.dirty = false;
      self.state = self.getInitialState();
      return;
    }
  }
  let obj = {
    key: "shouldCommit",
    value() {
      return true;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "setState",
    value(arg0) {
      const merged = Object.assign(this.state);
      const merged1 = Object.assign(arg0);
      this.state = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return this.state;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value() {
      this.dirty = false;
      this.state = this.getInitialState();
    }
  };
  items[4] = {
    key: "update",
    value() {
      let obj = arg0;
      let flag = arg1;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      if (flag === undefined) {
        flag = false;
      }
      obj = {};
      const merged = Object.assign(self.state);
      const merged1 = Object.assign(obj);
      const nextState = self.getNextState(obj);
      if (flag) {
        self.dirty = !StateManager(outer1_1[2])(nextState, self.getInitialState());
        const tmp10 = StateManager(outer1_1[2]);
      } else {
        const _Object = Object;
        const keys = Object.keys(nextState);
        for (let num = 0; num < keys.length; num = num + 1) {
          let tmp5 = keys[num];
          let dirty = self.dirty;
          if (!dirty) {
            let tmp6 = StateManager;
            let tmp7 = outer1_1;
            dirty = !StateManager(outer1_1[2])(self.state[tmp5], nextState[tmp5]);
          }
          self.dirty = dirty;
        }
      }
      const tmp11 = self.dirty && self.shouldCommit();
      let alwaysUpdateState = tmp11;
      if (!tmp11) {
        alwaysUpdateState = self.alwaysUpdateState;
      }
      if (alwaysUpdateState) {
        self.state = nextState;
      }
      let flag2 = !tmp12;
      if (!!tmp11) {
        self.dirty = false;
        self.didCommit(self.state);
        flag2 = true;
      }
      return flag2;
    }
  };
  items[5] = {
    key: "forceUpdate",
    value() {
      this.dirty = false;
      this.didCommit(this.state);
    }
  };
  return callback(StateManager, items);
})();
const result = require("isUndefinedOrNull").fileFinishedImporting("lib/StateManager.tsx");

export default tmp2;
