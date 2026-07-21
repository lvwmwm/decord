// Module ID: 12484
// Function ID: 95365
// Name: StateManager
// Dependencies: []

// Module 12484 (StateManager)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class StateManager {
    constructor() {
      flag = arg0;
      self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      tmp = closure_2(self, StateManager);
      self.alwaysUpdateState = flag;
      self.dirty = false;
      self.state = self.getInitialState();
      return;
    }
  }
  const importDefault = StateManager;
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
        self.dirty = !StateManager(closure_1[2])(nextState, self.getInitialState());
        const tmp10 = StateManager(closure_1[2]);
      } else {
        const _Object = Object;
        const keys = Object.keys(nextState);
        let num = 0;
        if (0 < keys.length) {
          do {
            let tmp5 = keys[num];
            let dirty = self.dirty;
            if (!dirty) {
              let tmp6 = closure_0;
              let tmp7 = closure_1;
              dirty = !closure_0(closure_1[2])(self.state[tmp5], nextState[tmp5]);
            }
            self.dirty = dirty;
            num = num + 1;
          } while (num < keys.length);
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/StateManager.tsx");

export default tmp2;
