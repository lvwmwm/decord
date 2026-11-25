// Module ID: 15838
// Function ID: 15839
// Name: _asyncToGenerator
// Dependencies: [5, 2]
// Exports: default

// Module 15838 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c7, closure_5;

let result = size.fileFinishedImporting("modules/rpc/helpers/createSocketGate.tsx");

export default function createSocketGate(cooldownMs) {
  cooldownMs = cooldownMs.cooldownMs;
  function tryAcquire(socket) {
    obj = weakMap;
    let obj1 = weakMap.get(socket);
    if (obj1 == null) {
      obj1 = { inFlight: false, readyAt: 0 };
    }
    let fn = null;
    if (!obj1.inFlight) {
      let tmp = globalThis;
      let _Date = Date;
      fn = null;
      if (Date.now() >= obj1.readyAt) {
        let flag = true;
        obj1.inFlight = true;
        const result = obj.set(socket, obj1);
        fn = () => {
          obj = arg0;
          if (arg0 === undefined) {
            obj = {};
          }
          let flag = obj.startCooldown;
          if (flag === undefined) {
            flag = true;
          }
          obj1.inFlight = false;
          const tmp = obj1;
          if (flag) {
            flag = cooldownMs > 0;
          }
          if (flag) {
            const _Date = Date;
            tmp.readyAt = Date.now() + cooldownMs;
          }
        };
      }
    }
    return fn;
  }
  let obj = function _runExclusive() {
    obj = _asyncToGenerator(async (arg0, value, arg2) => {
      let closure_0 = arg0;
      let closure_1 = value;
      let closure_2 = arg2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c6;
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              closure_0 = undefined;
              const tmp20 = tryAcquire(closure_0);
              closure_0 = tmp20;
              const tmp17 = closure_1;
              const tmp18 = closure_2;
              if (null == tmp20) {
                c7 = 3;
                const obj4 = { value: tmp18, done: true };
                return obj4;
              } else {
                c6 = 1;
                c4 = 2;
                c7 = 1;
                const obj5 = { value: tmp17(), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
            closure_0();
            throw closure_5;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_0();
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c6 = 0;
            closure_0();
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp21) {
          closure_5 = tmp21;
          if (0 === c6) {
            c7 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const weakMap = new WeakMap();
  obj = {
    tryAcquire,
    runExclusive(socket, arg1, arg2) {
      return obj(...arguments);
    }
  };
  return obj;
};
