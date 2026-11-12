// Module ID: 18231
// Function ID: 18232
// Name: useCampaignDismissibleContent
// Dependencies: [32, 5, 19, 1231, 1385, 5083, 5073, 5929, 504, 9603, 2]
// Exports: default

// Module 18231 (useCampaignDismissibleContent)
import DismissibleContentTypes from "DismissibleContentTypes" /* 5083 */;
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9603 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import UserSettingsProtoStore_mod from "UserSettingsProtoStore" /* 1231 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c11, c12, c2, closure_10, closure_2, currentUser, dependencyMap;

let obj = function _resetCampaignDismissibleContent() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
    let closure_0 = arg0;
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp3;
            currentUser = currentUser.getCurrentUser();
            let isStaffResult;
            if (currentUser != null) {
              isStaffResult = currentUser.isStaff();
            }
            if (isStaffResult) {
              const obj3 = require("DismissibleContentTypes");
              if (obj3.isSnowflakeBoundDismissibleContent(closure_0)) {
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj4.removeDismissedRecurringContent(closure_0), done: false };
                obj4 = require("UserSettingsProtoActionCreators");
                return obj6;
              }
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Staff access is required to reset campaign dismissals.");
            throw error;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          obj = closure_129_0(closure_129_1[7]);
          const result = obj.overrideDCFLastDCDismissed(null);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
let react = react_mod;
let UserSettingsProtoStore = UserSettingsProtoStore_mod;
let result = size.fileFinishedImporting("modules/devtools/useCampaignDismissibleContent.tsx");

export default function useCampaignDismissibleContent(arg0, arg1) {
  let closure_3;
  let closure_4;
  let first;
  let first1;
  _require = arg0;
  function reset() {
    return obj(...arguments);
  }
  obj = function _reset() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      closure_0 = arg0;
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c9;
        try {
          let c3;
          let c0;
          let iter4;
          let iter;
          let tmp16;
          c12 = 2;
          const tmp4 = c11;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_8 = tmp;
              let value2;
              c3 = undefined;
              const sum = ref.current + 1;
              ref.current = sum;
              c0 = sum;
              closure_2_3(null);
              closure_2_2(true);
              c9 = 2;
              function* _loop(c3, value) {
                function resetCampaignDismissibleContent() {
                  return closure_1_7(...arguments);
                }
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (c3 === 1) {
                    throw value;
                  } else if (c3 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (0 === c2) {
                      if (c3 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (c3 === 2) {
                        c1 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else if (c0 !== ref.current) {
                        c1 = 3;
                        const obj4 = { value: { v: "r" }, done: true };
                        return obj4;
                      } else if (closure_1_5.some((content) => content.content === closure_0)) {
                        c2 = 1;
                        c1 = 1;
                        const obj5 = { value: resetCampaignDismissibleContent(tmp9), done: false };
                        return obj5;
                      }
                    } else if (c3 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (c3 === 2) {
                      c1 = 3;
                      obj = { value, done: true };
                      return obj;
                    }
                    c1 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp5) {
                    c1 = 3;
                    throw tmp5;
                  }
                }
              }
              closure_2 = closure_0;
              closure_1 = closure_0[Symbol.iterator]();
              if (closure_1 === undefined) {
                c9 = 1;
              } else {
                c9 = 3;
                c3 = tmp51;
                const tmp101 = _loop(c3);
                iter4 = tmp101[tmp81.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                const next = iter4.next;
                c3 = undefined;
                tmp16 = undefined;
                const iter2 = next(tmp16);
                HermesBuiltin.ensureObject("iterator.next() did not return an object");
                iter = iter2;
                if (iter2.done) {
                  value2 = iter.value;
                  if (value2) {
                    const v = value2.v;
                    closure_1.return();
                    c9 = 0;
                    if (c0 === closure_136_4.current) {
                      closure_136_2(false);
                    }
                    c12 = 3;
                    let obj4 = { value: v, done: true };
                    return obj4;
                  } else {
                    c9 = 2;
                  }
                } else {
                  c11 = 4;
                  c12 = 1;
                  return iter2;
                }
              }
            }
          } else {
            let method;
            if (1 === tmp4) {
              c9 = 0;
              method = c0;
              const tmp43 = closure_10;
              if (c0 === closure_136_4.current) {
                closure_136_2(false);
              }
              throw tmp43;
            } else if (2 === tmp4) {
              c9 = 1;
              if (c0 === closure_136_4.current) {
                closure_136_3("Could not reset dismissed content. Try again.");
              }
            } else if (3 === tmp4) {
              c9 = 2;
              closure_1.return();
              throw closure_10;
            } else if (4 === tmp4) {
              c9 = 4;
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                c3 = value;
                if (arg0 === 2) {
                  c3 = value;
                  c9 = 3;
                  method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    closure_1.return();
                    c9 = 0;
                    if (c0 === closure_136_4.current) {
                      closure_136_2(false);
                    }
                    c12 = 3;
                    let obj5 = { value, done: true };
                    return obj5;
                  } else {
                    const iter3 = method(c3);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter3.done) {
                      value = iter3.value;
                      closure_1.return();
                      c9 = 0;
                      method = c0;
                      if (c0 === closure_136_4.current) {
                        closure_136_2(false);
                      }
                      c12 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c11 = 4;
                      c12 = 1;
                      return iter3;
                    }
                  }
                } else {
                  c9 = 3;
                  tmp16 = value;
                }
              }
            } else {
              const tmp5 = iter4;
              c9 = 3;
              const str = "throw";
              const tmp6 = closure_10;
              const method1 = HermesBuiltin.getMethod("throw");
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const tmp9 = iter4;
                iter = method1(tmp6);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (!iter.done) {
                  c11 = 4;
                  c12 = 1;
                  return iter;
                }
              }
            }
          }
          c9 = 0;
          if (c0 === closure_136_4.current) {
            closure_136_2(false);
          }
          c12 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp75) {
          closure_10 = tmp75;
          if (0 === c9) {
            c12 = 3;
            throw tmp75;
          } else if (1 === c9) {
            c11 = 1;
          } else if (2 === c9) {
            c11 = 2;
          } else if (3 === c9) {
            c11 = 3;
          } else {
            c11 = 5;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = require("get initialized");
  let items = [UserSettingsProtoStore];
  dependencyMap = obj.useStateFromStores(items, () => UserSettingsProtoStore.settings.userContent);
  [first, _slicedToArray] = react.useState(false);
  [first1, closure_3] = react.useState(null);
  react = react.useRef(0);
  const items1 = [arg0];
  const layoutEffect = react.useLayoutEffect(() => {
    let ref;
    closure_2(false);
    closure_3(null);
    return () => {
      ref.current = ref.current + 1;
    };
  }, items1);
  let obj2 = require("CampaignDevToolsUtils");
  const result = obj2.campaignDismissibleContents(arg1);
  const flatMapResult = result.flatMap((content) => {
    let campaignPromotionDismissalStatus;
    let tmp7;
    content = content.content;
    if (null != closure_0) {
      obj = DismissibleContentTypes;
      if (obj.isSnowflakeBoundDismissibleContent(content)) {
        const obj2 = { content, label: tmp, status: campaignPromotionDismissalStatus(tmp2, tmp7) };
        tmp7 = undefined;
        campaignPromotionDismissalStatus = tmp3(9603).campaignPromotionDismissalStatus;
        CampaignDevToolsUtils;
        if (closure_1 != null) {
          tmp7 = closure_1.recurringDismissibleContentStates[content];
        }
        const items = [obj2];
      }
      return [];
    }
  });
  UserSettingsProtoStore = flatMapResult;
  let obj3 = {
    contents: flatMapResult,
    resetting: first,
    error: first1,
    resetOne(content) {
      const items = [content];
      return reset(items);
    },
    resetAll() {
      return reset(UserSettingsProtoStore.map((content) => content.content));
    }
  };
  return obj3;
};
