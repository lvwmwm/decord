// Module ID: 12489
// Function ID: 12490
// Name: conjureDatabaseLock
// Dependencies: [5, 19, 2]
// Exports: useConjureDatabaseBusy, withConjureDatabaseLock

// Module 12489 (conjureDatabaseLock)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

function notify() {
  for (const item10005 of set1) {
    let item10005Result = item10005();
    continue;
  }
}
function subscribe(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
let obj = function _withConjureDatabaseLock() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
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
            let closure_2 = tmp4;
            const tmp28 = closure_0;
            const tmp29 = closure_1;
            if (set.has(closure_0)) {
              c7 = 3;
              return { value: null, done: true };
            } else {
              set.add(tmp28);
              notify();
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: tmp29(), done: false };
              return obj4;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_131_2.delete(closure_0);
          closure_131_4();
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_2.delete(closure_0);
          closure_131_4();
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 0;
          closure_131_2.delete(closure_0);
          closure_131_4();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp35) {
        closure_4 = tmp35;
        if (0 === c5) {
          c7 = 3;
          throw tmp35;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const set = new Set();
const set1 = new Set();
const result = size.fileFinishedImporting("modules/conjure/history/conjureDatabaseLock.tsx");

export function withConjureDatabaseLock() {
  return obj(...arguments);
}
export function useConjureDatabaseBusy(projectId) {
  let closure_0 = projectId;
  const items = [projectId];
  return react.useSyncExternalStore(subscribe, react.useCallback(() => set.has(projectId), items));
}
