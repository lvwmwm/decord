// Module ID: 6883
// Function ID: 54613
// Name: Entry
// Dependencies: []

// Module 6883 (Entry)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Entry {
    constructor(arg0, arg1) {
      tmp = Entry(this, Entry);
      this.parent = arg0;
      this.module = null;
      this.definition = arg1;
      return;
    }
  }
  let closure_0 = Entry;
  let obj = {
    key: "actions",
    get() {
      return this.definition.actions;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "load",
    value() {
      const self = this;
      if (null == this.module) {
        const definition = self.definition;
        self.module = definition.require();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "reset",
    value() {
      const _module = this.module;
      if (null != _module) {
        _module.resetInMemoryState();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "execute",
    value(arg0, arg1) {
      this.load();
      if (null != this.module) {
        const actions = this.module.actions;
        if (null != actions[arg0.type]) {
          obj.call(actions, arg0, arg1);
        }
      }
    }
  };
  items[4] = {
    key: "validateInDev",
    value() {

    }
  };
  return callback(Entry, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_database/system/AppDatabaseManager.Entry.tsx");

export const Entry = tmp2;
