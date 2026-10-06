// Module ID: 11541
// Function ID: 11542
// Name: useFamilyCenterActions
// Dependencies: [5, 32, 19, 7061, 7062, 7063, 5319, 2]
// Exports: useFamilyCenterActions

// Module 11541 (useFamilyCenterActions)
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActions.tsx");

export const useFamilyCenterActions = function useFamilyCenterActions(cResult) {
  let closure_11;
  let closure_13;
  let closure_7;
  let closure_9;
  let first1;
  let first2;
  let first3;
  let isGetLinkCodeLoading;
  let tmp2;
  let tmp4;
  let tmp6;
  let tmp8;
  let obj = cResult;
  if (cResult == null) {
    obj = {};
  }
  const onSuccess = obj.onSuccess;
  let obj2 = react;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, dependencyMap] = tmp;
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, _asyncToGenerator] = tmp3;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  const tmp7 = _slicedToArray(react.useState(false), 2);
  [tmp8, react] = tmp7;
  [isGetLinkCodeLoading, closure_7] = react.useState(false);
  [first1, closure_9] = react.useState(false);
  [first2, closure_11] = react.useState(false);
  [first3, closure_13] = react.useState(false);
  const tmp17 = tmp2 || tmp4 || tmp6 || tmp8 || first1 || first3;
  let closure_14 = tmp17;
  const useCallback = obj2.useCallback;
  let onError = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj2;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            aPIError = undefined;
            const tmp44 = closure_1_14;
            if (!tmp44) {
              tmp(true);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.updateLinkForUserId(tmp43, constants.ACTIVE), done: false };
              obj2 = closure_0(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          tmp(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c4 = 1;
          }
          c4 = 0;
          tmp(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp36) {
        closure_3 = tmp36;
        if (0 === c4) {
          c6 = 3;
          throw tmp36;
        } else if (1 === tmp38) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items = [tmp17, onError, onSuccess];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    let closure_3;
    let obj2;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            const tmp44 = closure_1_14;
            if (!tmp44) {
              tmp36(true);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.updateLinkForUserId(tmp43, constants.DECLINED), done: false };
              obj2 = closure_0(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          tmp36(false);
          throw tmp36;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = tmp36;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp36(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c4 = 1;
          }
          c4 = 0;
          tmp36(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp36) {
        if (0 === c4) {
          c6 = 3;
          throw tmp36;
        } else if (1 === tmp38) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items1 = [tmp17, onError, onSuccess];
  const callback2 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const useCallback3 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    let v0;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            const tmp44 = closure_1_14;
            if (!tmp44) {
              c4(true);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.updateLinkForUserId(tmp43, constants.INACTIVE), done: false };
              obj2 = closure_0(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          c4(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c4(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c4 = 1;
          }
          c4 = 0;
          c4(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp36) {
        closure_3 = tmp36;
        if (0 === c4) {
          c6 = 3;
          throw tmp36;
        } else if (1 === tmp38) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items2 = [tmp17, onError, onSuccess];
  const callback3 = useCallback3(function() {
    return closure_0(...arguments);
  }, items2);
  const useCallback4 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    let v2;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            const tmp43 = closure_1_14;
            if (!tmp43) {
              c5(true);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.removeLinkForUserId(tmp42), done: false };
              obj2 = closure_0(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          c5(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c4 = 1;
          }
          c4 = 0;
          c5(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_3 = tmp35;
        if (0 === c4) {
          c6 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items3 = [tmp17, onError, onSuccess];
  const callback4 = useCallback4(function() {
    return closure_0(...arguments);
  }, items3);
  const items4 = [isGetLinkCodeLoading, onError, onSuccess];
  const callback1 = obj2.useCallback(_asyncToGenerator(async function(arg0, value) {
    let closure_0;
    let obj2;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let closure_1;
        let aPIError;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            onError = tmp4;
            aPIError = undefined;
            const tmp31 = first;
            if (!tmp31) {
              closure_7(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj5 = { value: obj2.getLinkCodeForCurrentUser(), done: false };
              obj2 = onError(closure_2[5]);
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_7(false);
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            closure_1 = closure_2;
            const self = this;
            const self2 = this;
            aPIError = new onError(closure_2[6]).APIError(closure_1);
            if (closure_129_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_7(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_129_1 != null) {
              closure_129_1();
            }
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp36) {
        closure_2 = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else if (1 === tmp38) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items4);
  const useCallback5 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            const tmp43 = first2;
            if (!tmp43) {
              closure_1_11(true);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.fetchTeenActivity(tmp42), done: false };
              obj2 = onSuccess(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1_11(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_11(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_11(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_3 = tmp35;
        if (0 === c4) {
          c6 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items5 = [first2, onError, onSuccess];
  const callback5 = useCallback5(function() {
    return closure_0(...arguments);
  }, items5);
  const useCallback6 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    closure_0 = arg0;
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
        let aPIError;
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
            let closure_3 = tmp;
            let closure_2 = tmp4;
            aPIError = undefined;
            const tmp44 = first1;
            if (!tmp44) {
              closure_1_9(true);
              c5 = 2;
              c6 = 3;
              c7 = 1;
              const obj5 = { value: obj2.requestLink(tmp42, tmp43), done: false };
              obj2 = onSuccess(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_1_9(false);
          throw closure_4;
        } else {
          if (2 === c6) {
            c5 = 1;
            closure_1 = closure_4;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp19(aPIError);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_1_9(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_1 != null) {
              closure_1();
            }
            c5 = 1;
          }
          c5 = 0;
          closure_1_9(false);
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_4 = tmp35;
        if (0 === c5) {
          c7 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  });
  const items6 = [first1, onError, onSuccess];
  const callback6 = useCallback6(function() {
    return closure_0(...arguments);
  }, items6);
  const useCallback7 = obj2.useCallback;
  onError = _asyncToGenerator(async function(arg0, value) {
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            const actionsForDisplayType = isGetLinkCodeLoading.getActionsForDisplayType(closure_0);
            const tmp46 = actionsForDisplayType[actionsForDisplayType.length - 1];
            const startId = isGetLinkCodeLoading.getStartId();
            const selectedTeenId = isGetLinkCodeLoading.getSelectedTeenId();
            const tmp49 = first3;
            if (!tmp49) {
              if (null != startId) {
                if (null != selectedTeenId) {
                  closure_1_13(true);
                  c4 = 2;
                  const obj2 = onSuccess(dependencyMap[5]);
                  c5 = 3;
                  c6 = 1;
                  const obj5 = { value: obj2.fetchMoreTeenActivity(selectedTeenId, closure_0, startId, tmp46.event_id), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1_13(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[6]).APIError(closure_1);
            if (closure_0 != null) {
              tmp17(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_13(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          closure_1_13(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp37) {
        closure_3 = tmp37;
        if (0 === c4) {
          c6 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items7 = [first3, onError];
  let obj3 = {
    acceptLinkRequest: callback,
    declineLinkRequest: callback2,
    disconnectLinkRequest: callback3,
    cancelLinkRequest: callback4,
    selectTeenUser: callback5,
    getLinkCode: callback1,
    requestLink: callback6,
    loadMore: useCallback7(function() {
      return closure_0(...arguments);
    }, items7),
    isAcceptLoading: tmp2,
    isDeclineLoading: tmp4,
    isDisconnectLoading: tmp6,
    isCancelLoading: tmp8,
    isGetLinkCodeLoading,
    isSelectTeenUserLoading: first2,
    isRequestingLink: first1,
    isMoreLoading: first3
  };
  return obj3;
};
