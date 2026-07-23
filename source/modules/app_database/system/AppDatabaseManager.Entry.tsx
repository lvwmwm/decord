// Module ID: 6889
// Function ID: 54670
// Name: Entry
// Dependencies: [6, 7, 2]

// Module 6889 (Entry)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class Entry {
    constructor(arg0, arg1) {
      tmp = Entry(this, Entry);
      this.parent = arg0;
      this.module = null;
      this.definition = arg1;
      return;
    }
  }
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
})();
const result = require("set").fileFinishedImporting("modules/app_database/system/AppDatabaseManager.Entry.tsx");

export const Entry = tmp2;
