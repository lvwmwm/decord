// Module ID: 11175
// Function ID: 11176
// Name: GameRelationshipActionCreators
// Dependencies: [5, 1078, 4659, 5110, 1119, 1275, 4610, 2]

// Module 11175 (GameRelationshipActionCreators)
import util from "util" /* 1119 */;
import shared from "shared" /* 4610 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4659 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function showRequestFailedAlert(arg0) {
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  let anyErrorMessage = aPIError.getAnyErrorMessage();
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["328j/I"]);
  if (null == anyErrorMessage) {
    const intl2 = tmp(1119).intl;
    anyErrorMessage = intl2.string(tmp(1119).t.fEptJP);
  }
  obj.body = anyErrorMessage;
  AlertActionCreatorsDefault.show(obj);
}
function deleteGameRelationship() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _deleteGameRelationship(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ userId: closure_129_0, applicationId: closure_129_1, onSuccess: closure_129_2 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp8) {
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
          const obj5 = { url: closure_130_4.USER_GAME_RELATIONSHIP(closure_129_0, closure_129_1), oldFormErrors: true, rejectWithError: false };
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.del(obj5), done: false };
          return obj6;
        }
      } else {
        if (2 === tmp8) {
          c4 = 0;
          closure_130_6(closure_3);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_2();
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_9 = async function _removeGameFriend() {
  await closure_130_7({
    userId: closure_129_0,
    applicationId: closure_129_1,
    onSuccess() {
      const AccessibilityAnnouncer = closure_1_0(4610).AccessibilityAnnouncer;
      const intl = closure_1_0(1119).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_1_0(1119).t.zRf8cO));
    }
  });
  await "IconComponent";
  closure_1 = tmp2;
  ({ userId: closure_129_0, applicationId: closure_129_1 } = closure_0);
  return "Set";
};
let closure_10 = async function _cancelGameFriendRequest() {
  await closure_130_7({
    userId: closure_129_0,
    applicationId: closure_129_1,
    onSuccess() {
      const AccessibilityAnnouncer = closure_1_0(4610).AccessibilityAnnouncer;
      const intl = closure_1_0(1119).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_1_0(1119).t.XMf21q));
    }
  });
  await "IconComponent";
  closure_1 = tmp2;
  ({ userId: closure_129_0, applicationId: closure_129_1 } = closure_0);
  return "Set";
};
const Constants = fn(1078);
({ Endpoints: closure_4, RelationshipTypes: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipActionCreators.tsx");

export default {
  removeGameFriend() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  acceptGameFriendRequest(arg0) {
    function onSuccess() {

    }
    ({ userId, applicationId } = arg0);
    const HTTP = onSuccess(1275).HTTP;
    const request = { url: closure_4.USER_GAME_RELATIONSHIP(userId, applicationId), body: { type: constants.FRIEND }, oldFormErrors: true, rejectWithError: false };
    const putResult = HTTP.put(request);
    return HTTP.put(request).then(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.taJiuc));
    }).catch((error) => {
      const aPIError = new onSuccess(4659).APIError(error);
      let anyErrorMessage = aPIError.getAnyErrorMessage();
      const obj = { title: null, body: null };
      const intl = onSuccess(1119).intl;
      obj.title = intl.string(onSuccess(1119).t["328j/I"]);
      if (null == anyErrorMessage) {
        const intl2 = tmp(1119).intl;
        anyErrorMessage = intl2.string(tmp(1119).t.fEptJP);
      }
      obj.body = anyErrorMessage;
      AlertActionCreatorsDefault.show(obj);
      return Promise.reject(error);
    });
  },
  cancelGameFriendRequest() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
