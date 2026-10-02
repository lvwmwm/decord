// Module ID: 12436
// Function ID: 12437
// Name: _asyncToGenerator
// Dependencies: [5]
// Exports: _asyncOptionalChain

// Module 12436 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c2, c3, length;

let obj = function _asyncOptionalChain2() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    length = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            let closure_4;
            let closure_5;
            let c1;
            value = length[0];
            let closure_3 = 1;
            if (closure_3 < length.length) {
              closure_4 = length[closure_3];
              closure_5 = length[closure_3 + 1];
              closure_3 = closure_3 + 2;
              if ("optionalAccess" === closure_4) {
                if (null == value) {
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if ("access" !== closure_4) {
                if ("optionalAccess" !== closure_4) {
                  const tmp21 = "call" !== closure_4 && "optionalCall" !== closure_4;
                  if (!tmp21) {
                    c2 = 2;
                    c3 = 1;
                    const obj4 = {
                      value: closure_5(() => {
                                        const items = [c1, ...HermesBuiltin.copyRestArgs()];
                                        return closure_2.call.apply(items);
                                      }),
                      done: false
                    };
                    return obj4;
                  }
                }
              }
              c1 = value;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: closure_5(value), done: false };
              return obj5;
            }
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = undefined;
        }
      } catch (tmp30) {
        c3 = 3;
        throw tmp30;
      }
    }
  });
  return obj(...arguments);
};

export const _asyncOptionalChain = function _asyncOptionalChain(arg0) {
  return obj(...arguments);
};
