// Module ID: 19848
// Function ID: 19849
// Name: _asyncToGenerator
// Dependencies: [5, 2]

// Module 19848 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoins.tsx");
class InterestGuildJoins {
  constructor(joinGuild, onFailure) {
    let obj = Object.create(new.target.prototype);
    obj.snapshot = { joined: [] };
    obj.listeners = new Set();
    obj.getSnapshot = function getSnapshot() {
      return obj.snapshot;
    };
    obj.subscribe = function subscribe(arg0) {
      let closure_0;
      listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = obj.listeners;
        return listeners.delete(closure_0);
      };
    };
    new Set();
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let items;
      let joined1;
      closure_0 = arg0;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        try {
          let closure_1;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp5;
              const joined = obj.snapshot.joined;
              if (!joined.includes(closure_0)) {
                const obj4 = { joined: items };
                closure_1 = 0;
                items = [];
                const update2 = obj.update;
                const arraySpreadResult = HermesBuiltin.arraySpread(items, obj.snapshot.joined, closure_1);
                closure_1 = arraySpreadResult;
                items[arraySpreadResult] = closure_0;
                closure_1 = closure_1 + 1;
                update2(obj4);
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: obj.joinGuild(closure_0), done: false };
                return obj5;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_1 = closure_4;
            const obj6 = { joined: joined1.filter((item) => item !== closure_1_0) };
            joined1 = closure_131_1.snapshot.joined;
            const update = closure_131_1.update;
            update(obj6);
            closure_131_1.onFailure(closure_1);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp24) {
          closure_4 = tmp24;
          if (0 === c5) {
            c7 = 3;
            throw tmp24;
          } else {
            c6 = 1;
          }
        }
      }
    });
    obj.join = function() {
      return closure_0(...arguments);
    };
    obj.joinGuild = joinGuild;
    obj.onFailure = onFailure;
    return obj;
  }
  update(snapshot) {
    this.snapshot = snapshot;
    const listeners = this.listeners;
    const item = listeners.forEach((fn) => fn());
  }
}
const prototype = InterestGuildJoins.prototype;

export { InterestGuildJoins };
