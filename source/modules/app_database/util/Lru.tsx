// Module ID: 6708
// Function ID: 52151
// Name: Lru
// Dependencies: [513, 511, 513]

// Module 6708 (Lru)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("modules/app_database/util/Lru.tsx");

export const Lru = () => {
  class Lru {
    constructor(arg0) {
      tmp = Lru(this, Lru);
      map = new Map();
      this.items = map;
      this.limit = arg0;
      return;
    }
  }
  let closure_0 = Lru;
  let obj = {
    key: "length",
    get() {
      return this.items.size;
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "capacity",
    get() {
      return this.limit;
    }
  };
  items[1] = obj;
  obj = {
    key: Symbol.iterator,
    value() {
      const items = this.items;
      return items.entries();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "entries",
    value() {
      const items = this.items;
      return items.entries();
    }
  };
  items[4] = {
    key: "keys",
    value() {
      const items = this.items;
      return items.keys();
    }
  };
  items[5] = {
    key: "values",
    value() {
      const items = this.items;
      return items.values();
    }
  };
  items[6] = {
    key: "ordered",
    value() {
      let items = this.items;
      items = [...items.values()];
      return items.reverse();
    }
  };
  items[7] = {
    key: "clear",
    value() {
      const items = this.items;
      items.clear();
    }
  };
  items[8] = {
    key: "has",
    value(arg0) {
      const items = this.items;
      return items.has(arg0);
    }
  };
  items[9] = {
    key: "get",
    value(arg0) {
      const items = this.items;
      return items.get(arg0);
    }
  };
  items[10] = {
    key: "put",
    value(arg0, arg1) {
      let items3;
      let items4;
      const self = this;
      let items = this.items;
      items.delete(arg0);
      const items2 = this.items;
      const result = items2.set(arg0, arg1);
      if (this.items.size > this.limit) {
        const oldestKeyResult = self.oldestKey();
        ({ items: items3, items: items4 } = self);
        const value = items3.get(oldestKeyResult);
        items4.delete(oldestKeyResult);
        items = [oldestKeyResult, value];
        return items;
      }
    }
  };
  items[11] = {
    key: "delete",
    value(arg0) {
      const items = this.items;
      return items.delete(arg0);
    }
  };
  items[12] = {
    key: "oldestKey",
    value() {
      const items = this.items;
      return items.keys().next().value;
    }
  };
  return callback(Lru, items);
}();
