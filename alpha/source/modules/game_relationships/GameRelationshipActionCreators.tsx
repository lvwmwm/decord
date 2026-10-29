// Module ID: 10698
// Function ID: 10699
// Name: GameRelationshipActionCreators
// Dependencies: [5, 1084, 6433, 5946, 1125, 1294, 5012, 2]

// Module 10698 (GameRelationshipActionCreators)
import intl3 from "intl" /* 1125 */;
import shared from "shared" /* 5012 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5946 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6433 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let closure_4;
let hasOwnProperty;
function showRequestFailedAlert(arg0) {
  let intl;
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  obj = { title: intl.string(intl3.t["328j/I"]), body: anyErrorMessage };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  if (null == anyErrorMessage) {
    const intl2 = tmp(1125).intl;
    anyErrorMessage = intl2.string(tmp(1125).t.fEptJP);
  }
  show(obj);
}
function deleteGameRelationship() {
  return obj(...arguments);
}
let obj = function _deleteGameRelationship() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ userId: c0, applicationId: c1, onSuccess: c2 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          let delResult;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c4 = 1;
              const HTTP = closure_130_0(closure_130_2[5]).HTTP;
              const obj5 = { url: closure_130_4.USER_GAME_RELATIONSHIP(c0, c1), oldFormErrors: true, rejectWithError: false };
              const del = HTTP.del;
              delResult = del(obj5);
              c5 = 3;
              c6 = 1;
              const obj6 = { value: delResult, done: false };
              return obj6;
            }
          } else {
            if (2 === c5) {
              delResult = closure_3;
              c4 = 0;
              closure_130_6(closure_3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp();
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        }
      } catch (tmp21) {
        closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _removeGameFriend() {
  obj = _asyncToGenerator(async (userId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              let closure_1 = tmp;
              userId = undefined;
              applicationId = undefined;
              ({ userId: c0, applicationId: c1 } = closure_0);
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj5 = {
                userId,
                applicationId,
                onSuccess() {
                          const AccessibilityAnnouncer = userId(closure_1_2[6]).AccessibilityAnnouncer;
                          const announce = AccessibilityAnnouncer.announce;
                          const intl = userId(closure_1_2[4]).intl;
                          announce(intl.string(userId(closure_1_2[4]).t.zRf8cO));
                        }
              };
              const obj6 = { value: closure_130_7(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _cancelGameFriendRequest() {
  obj = _asyncToGenerator(async (userId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              let closure_1 = tmp;
              userId = undefined;
              applicationId = undefined;
              ({ userId: c0, applicationId: c1 } = closure_0);
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj5 = {
                userId,
                applicationId,
                onSuccess() {
                          const AccessibilityAnnouncer = userId(closure_1_2[6]).AccessibilityAnnouncer;
                          const announce = AccessibilityAnnouncer.announce;
                          const intl = userId(closure_1_2[4]).intl;
                          announce(intl.string(userId(closure_1_2[4]).t.XMf21q));
                        }
              };
              const obj6 = { value: closure_130_7(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ Endpoints: closure_4, RelationshipTypes: hasOwnProperty } = Constants);
obj = {
  removeGameFriend() {
    return obj(...arguments);
  },
  acceptGameFriendRequest(arg0) {
    let applicationId;
    let userId;
    function onSuccess() {

    }
    ({ userId, applicationId } = arg0);
    const FRIEND = constants.FRIEND;
    const HTTP = onSuccess(1294).HTTP;
    const request = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put(request);
    const nextPromise = putResult.then(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl3.intl;
      announce(intl.string(intl3.t.taJiuc));
    });
    return nextPromise.catch((error) => {
      let intl;
      const aPIError = new onSuccess(dependencyMap[2]).APIError(error);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      obj = { title: intl.string(onSuccess(dependencyMap[4]).t["328j/I"]), body: anyErrorMessage };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = onSuccess(dependencyMap[4]).intl;
      if (null == anyErrorMessage) {
        const intl2 = tmp(tmp2[4]).intl;
        anyErrorMessage = intl2.string(tmp(tmp2[4]).t.fEptJP);
      }
      show(obj);
      return Promise.reject(error);
    });
  },
  cancelGameFriendRequest() {
    return obj(...arguments);
  }
};
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default obj;
