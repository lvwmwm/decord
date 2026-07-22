// Module ID: 16033
// Function ID: 123030
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16033 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasActiveParentLink(arr) {
  return arr.some((link_status) => {
    let tmp = link_status.link_status === constants.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === constants2.PARENT;
    }
    return tmp;
  });
}
function maybePresentModal(warning) {
  let daysRemaining;
  if (null != warning) {
    daysRemaining = warning.daysRemaining;
  }
  let hasItem;
  if (null != warning) {
    const surfaces = warning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(arg1(dependencyMap[10]).ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining;
  if (tmp5) {
    tmp5 = daysRemaining >= 0;
  }
  if (tmp5) {
    tmp5 = !closure_10.hasShownModalToday();
  }
  if (tmp5) {
    const _Object = Object;
    tmp5 = !hasActiveParentLink(Object.values(linkedUsers.getLinkedUsers()));
  }
  if (tmp5) {
    tmp5 = !open.isOpen();
  }
  if (tmp5) {
    let obj = importDefault(dependencyMap[11]);
    obj = { daysRemaining };
    obj.openLazy(arg1(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), "ParentalConsentWarningModal", obj);
  }
}
function maybePresentFromCache() {
  if (!closure_10.shouldFetchToday()) {
    maybePresentModal(closure_10.getWarning());
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ UserLinkStatus: closure_11, UserLinkType: closure_12 } = arg1(dependencyMap[8]));
const AppStates = arg1(dependencyMap[9]).AppStates;
let tmp3 = (arg0) => {
  class ParentalConsentWarningManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ParentalConsentWarningManager);
      items1 = [...items];
      obj = closure_6(ParentalConsentWarningManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
              callback3(warning.warning);
            },
        POST_CONNECTION_OPEN() {
              let closure_14 = callback2(Object.values(linkedUsers.getLinkedUsers()));
              callback(closure_2[14]).maybeFetchWarning();
              callback4();
            },
        APP_STATE_UPDATE(state) {
              if (state.state === constants.ACTIVE) {
                callback(closure_2[14]).maybeFetchWarning();
                callback4();
                const obj = callback(closure_2[14]);
              }
            },
        CURRENT_USER_UPDATE(user) {
              user = user.user;
              if (undefined !== user.linked_users) {
                const tmp15 = callback2(user.linked_users);
                if (tmp) {
                  if (tmp15) {
                    const warning = warning.getWarning();
                    let hasItem;
                    if (null != warning) {
                      const surfaces = warning.surfaces;
                      if (null != surfaces) {
                        hasItem = surfaces.includes(callback(closure_2[10]).ParentalConsentWarningSurface.BANNER);
                      }
                    }
                    if (true === hasItem) {
                      callback(closure_2[14]).forceFetchWarning();
                      const obj2 = callback(closure_2[14]);
                    }
                  } else {
                    callback(closure_2[14]).forceFetchWarning();
                    const obj = callback(closure_2[14]);
                  }
                }
                const tmp = undefined !== tmp15 && tmp15 !== tmp15;
              }
            },
        LOGOUT() {
              let closure_14;
              callback(closure_2[14]).resetFetchState();
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = ParentalConsentWarningManager;
  callback2(ParentalConsentWarningManager, arg0);
  return callback(ParentalConsentWarningManager);
}(importDefault(dependencyMap[15]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default tmp3;
