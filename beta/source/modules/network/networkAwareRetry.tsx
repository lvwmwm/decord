// Module ID: 13649
// Function ID: 13650
// Name: networkAwareRetry
// Dependencies: [5, 502, 2046, 1468, 2]
// Exports: default

// Module 13649 (networkAwareRetry)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

let obj = function _networkAwareRetry() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj2;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_3;
        let id;
        let num14;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp;
            id = tmp4;
            num14 = closure_1;
            if (closure_1 === undefined) {
              num14 = 3;
            }
            id = undefined;
            closure_3 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              id = closure_131_4.getId();
              closure_3 = 0;
              if (closure_3 >= num14) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("Unreachable code in networkAwareRetry");
                throw error;
              }
            }
          } else if (2 === c6) {
            c5 = 0;
            if (closure_3 + 1 >= num14) {
              throw closure_4;
            } else {
              c6 = 4;
              c7 = 1;
              const obj6 = { value: obj7.timeoutPromise(2000 * (closure_3 + 1)), done: false };
              obj7 = closure_131_0(closure_131_2[2]);
              return obj6;
            }
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              c5 = 0;
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            }
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c6 = 5;
              c7 = 1;
              const obj11 = { value: obj2.awaitOnline(), done: false };
              obj2 = closure_131_1(closure_131_2[3]);
              return obj11;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else if (id !== closure_131_4.getId()) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("User changed.");
            throw error1;
          } else {
            closure_3 = closure_3 + 1;
          }
          c5 = 1;
          c6 = 3;
          c7 = 1;
          const obj12 = { value: closure_0(), done: false };
          return obj12;
        }
      } catch (tmp40) {
        closure_4 = tmp40;
        if (0 === c5) {
          c7 = 3;
          throw tmp40;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/network/networkAwareRetry.tsx");

export default function networkAwareRetry() {
  return obj(...arguments);
};
