// Module ID: 17650
// Function ID: 17651
// Name: OrbChallengeActionCreators
// Dependencies: [5, 1072, 572, 1283, 6440, 1243, 2]
// Exports: ackOrbChallengesUnread, claimOrbChallenge, fetchOrbChallenges, fetchOrbChallengesUnread

// Module 17650 (OrbChallengeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _claimOrbChallenge() {
  obj = _asyncToGenerator(async (achievementIdentifier) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let aPIError;
      closure_1 = tmp4;
      const obj4 = { type: "ORB_CHALLENGE_CLAIM", achievementIdentifier };
      const obj12 = DispatcherDefault;
      obj12.dispatch(obj4);
      const HTTP = HTTPUtils.HTTP;
      const post = HTTP.post;
      const obj6 = { url: Endpoints.ORB_USER_CHALLENGE_CLAIM(achievementIdentifier), rejectWithError: false };
      await post(obj6);
      if (closure_3 instanceof closure_130_0(closure_130_2[4]).APIError) {
        aPIError = closure_3;
      } else {
        const self = this;
        const self2 = this;
        aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_3);
      }
      const obj9 = { tags: { app_context: "achievements" } };
      const obj5 = closure_130_1(closure_130_2[5]);
      obj5.captureException(aPIError, obj9);
      const obj10 = { type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier, error: aPIError };
      const obj7 = closure_130_1(closure_130_2[2]);
      obj7.dispatch(obj10);
      closure_1 = await "HermesInternal";
      const obj13 = { type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier, response: closure_1.body };
      obj = closure_130_1(closure_130_2[2]);
      obj.dispatch(obj13);
      return closure_1.body;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchOrbChallenges() {
  obj = _asyncToGenerator(async function(arg0) {
    let aPIError;
    let c4;
    let c5;
    let c6;
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = tmp4;
    const obj12 = DispatcherDefault;
    obj12.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    const HTTP = HTTPUtils.HTTP;
    const obj6 = { url: constants.ORB_USER_CHALLENGES_LIST, rejectWithError: false };
    await HTTP.get(obj6);
    if (closure_3 instanceof closure_130_0(closure_130_2[4]).APIError) {
      aPIError = closure_3;
    } else {
      const self = this;
      const self2 = this;
      aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_3);
    }
    const obj8 = { tags: { app_context: "achievements" } };
    const obj3 = closure_130_1(closure_130_2[5]);
    obj3.captureException(aPIError, obj8);
    const obj9 = { type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: aPIError };
    const obj5 = closure_130_1(closure_130_2[2]);
    obj5.dispatch(obj9);
    closure_1 = await "HermesInternal";
    const obj13 = { type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: closure_1.body };
    const obj10 = closure_130_1(closure_130_2[2]);
    obj10.dispatch(obj13);
    if (null != closure_0) {
      closure_0(closure_1.body);
    }
    return closure_1.body;
  });
  return obj(...arguments);
};
obj = function _fetchOrbChallengesUnread() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: false };
    await HTTP.get(obj4);
    let closure_0 = await "HermesInternal";
    const obj7 = { type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: closure_0.body };
    obj = closure_129_1(closure_129_2[2]);
    obj.dispatch(obj7);
    return closure_0.body;
  });
  return obj(...arguments);
};
obj = function _ackOrbChallengesUnread() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    const obj8 = DispatcherDefault;
    obj8.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: false };
    await HTTP.post(obj4);
    let closure_0 = await "HermesInternal";
    const obj7 = { type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: closure_0.body };
    obj = closure_129_1(closure_129_2[2]);
    obj.dispatch(obj7);
    return closure_0.body;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/virtual_currency/stores/OrbChallengeActionCreators.tsx");

export function claimOrbChallenge() {
  return obj(...arguments);
}
export function fetchOrbChallenges() {
  return obj(...arguments);
}
export function fetchOrbChallengesUnread() {
  return obj(...arguments);
}
export function ackOrbChallengesUnread() {
  return obj(...arguments);
}
