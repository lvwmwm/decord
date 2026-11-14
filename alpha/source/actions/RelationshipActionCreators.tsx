// Module ID: 8137
// Function ID: 8138
// Name: RelationshipActionCreators
// Dependencies: [32, 5, 5248, 1388, 1072, 8138, 6910, 7692, 6268, 6920, 1113, 8139, 8140, 8141, 6889, 6896, 1285, 5372, 5313, 6916, 572, 6915, 2]

// Module 8137 (RelationshipActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl10 from "intl" /* 1113 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import shared from "shared" /* 5313 */;
import UserUtilsDefault from "UserUtils" /* 5372 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6268 */;
import QualtricsActionCreatorsDefault from "QualtricsActionCreators" /* 6889 */;
import SurveyActionTypes from "SurveyActionTypes" /* 6896 */;
import Constants2 from "Constants" /* 6910 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 6915 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 6916 */;
import openQuarantineModeInfoModalDefault from "openQuarantineModeInfoModal" /* 6920 */;
import ContextMenuActionCreators from "ContextMenuActionCreators" /* 7692 */;
import RelationshipConstants from "RelationshipConstants" /* 8138 */;
import ClaimAccountModalActionCreatorsAll from "ClaimAccountModalActionCreators" /* 8139 */;
import UserLimitedAccessUtils from "UserLimitedAccessUtils" /* 8140 */;
import FriendsUtils from "FriendsUtils" /* 8141 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, dependencyMap, importAll, note, obj;

let c10;
let c9;
let metroImportAll;
function handleRelationshipAddError(error, SHOW_ALWAYS, userTag) {
  let body;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let status;
  ({ status, body } = error);
  let num = body && body.code;
  if (429 === status) {
    if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
      obj2 = { title: intl7.string(intl10.t["3D5eox"]), body: intl8.string(intl10.t.TuJriJ), confirmText: intl9.string(intl10.t.DppXIx) };
      intl7 = intl10.intl;
      intl8 = intl10.intl;
      intl9 = intl10.intl;
      const obj10 = ContextMenuActionCreators;
      obj10.closeContextMenu();
      const obj11 = AlertActionCreatorsDefault;
      obj11.show(obj2);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        const obj5 = {
          title: intl4.string(intl10.t.Gqf33E),
          body: intl5.string(intl10.t.GHOBdx),
          confirmText: intl6.string(intl10.t.HbTSE6),
          onConfirm() {
                  obj = ClaimAccountModalActionCreatorsAll;
                  const result = obj.openClaimAccountModal();
                }
        };
        intl4 = intl10.intl;
        intl5 = intl10.intl;
        intl6 = intl10.intl;
        const obj6 = ContextMenuActionCreators;
        obj6.closeContextMenu();
        const obj7 = AlertActionCreatorsDefault;
        obj7.show(obj5);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      const obj4 = ContextMenuActionCreators;
      obj4.closeContextMenu();
      openQuarantineModeInfoModalDefault();
    } else {
      const obj8 = UserLimitedAccessUtils;
      if (!obj8.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
            let humanizeAbortCodeResult;
            if (null != userTag) {
              const humanizeAbortCode = FriendsUtils.humanizeAbortCode;
              FriendsUtils;
              if (!num) {
                num = 0;
              }
              humanizeAbortCodeResult = humanizeAbortCode(num, userTag);
            } else {
              const intl = tmp19(1113).intl;
              humanizeAbortCodeResult = intl.string(tmp19(1113).t.paDJBM);
            }
            obj = { title: intl2.string(intl10.t["6moJ8s"]), body: humanizeAbortCodeResult, confirmText: intl3.string(intl10.t.BddRzS) };
            intl2 = tmp19(1113).intl;
            intl3 = tmp19(1113).intl;
            const tmp19Result2 = ContextMenuActionCreators;
            tmp19Result2.closeContextMenu();
            const obj3 = AlertActionCreatorsDefault;
            obj3.show(obj);
          }
        }
      }
    }
  }
  throw error;
}
function fireFriendRequestSurveyAction(arg0) {
  if (arg0 === constants2.PENDING_INCOMING) {
    obj2 = QualtricsActionCreatorsDefault;
    obj2.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_ACCEPTED);
  } else if (arg0 === tmp.NONE) {
    obj = QualtricsActionCreatorsDefault;
    obj.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_SENT);
  }
}
({ Endpoints: metroImportAll, AbortCodes: c9, RelationshipTypes: c10 } = Constants);
const ClearFriendRequestFilters = RelationshipConstants.ClearFriendRequestFilters;
const SafetyToastType = Constants2.SafetyToastType;
const RelationshipErrorUXConfig = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
let obj2 = {
  sendRequest(arg0) {
    let context;
    let errorUxConfig;
    let require;
    ({ discordTag: require, context: importDefault, captchaPayload: importAll, note: dependencyMap, errorUxConfig } = arg0);
    if (errorUxConfig === undefined) {
      const tmp = obj;
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    return (async (arg0, value) => {
      let NONE;
      let c3;
      let closure_2;
      let obj5;
      let obj6;
      let tmp37;
      let tmp38;
      let v1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let postResult;
          let c1;
          c5 = 2;
          if (0 !== errorUxConfig) {
            if (1 === errorUxConfig) {
              note = 0;
              postResult = closure_129_4;
              handleRelationshipAddError(importAll, closure_129_4, closure_129_0);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              note = 0;
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = value;
              fireFriendRequestSurveyAction(NONE);
              postResult = c1;
              note = 0;
              c5 = 3;
              obj = { value: postResult, done: true };
              return obj;
            }
          }
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            NONE = undefined;
            c1 = undefined;
            [tmp37, tmp38] = errorUxConfig(_require.split("#"), 2);
            const tmp36 = errorUxConfig(_require.split("#"), 2);
            const findByTagResult = UserStore.findByTag(tmp37, tmp38);
            if (null != findByTagResult) {
              NONE = relationshipType.getRelationshipType(findByTagResult.id);
            } else {
              NONE = constants.NONE;
            }
            note = 1;
            const HTTP = postResult(note[16]).HTTP;
            const request = { url: closure_1_8.USER_RELATIONSHIPS(), body: obj6, context: importDefault, oldFormErrors: true, rejectWithError: obj5.rejectWithMigratedError() };
            const post = HTTP.post;
            obj6 = { username: tmp37, discriminator: parseInt(tmp38), note: dependencyMap };
            const _parseInt = parseInt;
            const merged = Object.assign(importAll);
            obj5 = postResult(note[16]);
            postResult = post(request);
            errorUxConfig = 2;
            c5 = 1;
            const obj7 = { value: postResult, done: false };
            return obj7;
          }
        } catch (tmp26) {
          importAll = tmp26;
          if (0 === note) {
            c5 = 3;
            throw tmp26;
          } else {
            errorUxConfig = 1;
          }
        }
      }
    })();
  },
  addRelationship(captchaPayload, arg1) {
    let body;
    let closure_3;
    let closure_4;
    let confirmStrangerRequest;
    let context;
    let fromFriendSuggestion;
    let obj3;
    let type;
    let userId;
    ({ userId, type } = captchaPayload);
    captchaPayload = captchaPayload.captchaPayload;
    let closure_1 = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, fromFriendSuggestion, confirmStrangerRequest } = captchaPayload);
    if (arg2 === undefined) {
      SHOW_ALWAYS = body.SHOW_ALWAYS;
    }
    dependencyMap = UserStore.getUser(userId);
    const relationshipType = RelationshipStore.getRelationshipType(userId);
    const HTTP = type(1285).HTTP;
    const request = { url: closure_8.USER_RELATIONSHIP(userId), body, context, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const put = HTTP.put;
    body = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj3 = type(1285);
    const putResult = put(request);
    const nextPromise = putResult.then(() => {
      if (type === constants.BLOCKED) {
        if (closure_4 !== constants.BLOCKED) {
          obj2 = QualtricsActionCreatorsDefault;
          obj2.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.USER_BLOCKED);
        }
        if (closure_1 != null) {
          tmp14();
        }
      }
      const tmp4 = null != type && type !== constants.FRIEND;
      if (!tmp4) {
        if (closure_4 === constants.PENDING_INCOMING) {
          obj = QualtricsActionCreatorsDefault;
          obj.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_ACCEPTED);
        } else if (tmp5 === constants.NONE) {
          const obj3 = QualtricsActionCreatorsDefault;
          obj3.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.FRIEND_REQUEST_SENT);
        }
      }
    });
    return nextPromise.catch((error) => {
      obj = UserUtilsDefault;
      handleRelationshipAddError(error, SHOW_ALWAYS, obj.getUserTag(closure_3));
    });
  },
  acceptFriendRequest(captchaPayload) {
    return obj2.addRelationship(captchaPayload, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj2.removeRelationship(arg0, arg1, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj2.removeRelationship(arg0, arg1, function onSuccess() {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.vGSLa2));
    });
  },
  blockUser(id, context, channelId) {
    let closure_0 = id;
    let closure_1 = channelId;
    obj = { userId: id, context, type: constants2.BLOCKED };
    return obj2.addRelationship(obj, function onSuccess() {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      obj = SafetyToastsUtils;
      announce(obj.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, id, channelId));
    });
  },
  unblockUser(id, arg1, channelId) {
    let closure_0 = id;
    let closure_1 = channelId;
    return obj2.removeRelationship(id, arg1, function onSuccess() {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      obj = SafetyToastsUtils;
      announce(obj.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, id, channelId));
    });
  },
  removeRelationship(userId, context, arg2) {
    let closure_0;
    _require = arg2;
    const HTTP = require("HTTPUtils").HTTP;
    const del = HTTP.del;
    obj = { url: closure_8.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = require("HTTPUtils");
    const delResult = del(obj);
    const nextPromise = delResult.then(() => {
      if (closure_0 != null) {
        tmp();
      }
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = closure_0(dependencyMap[18]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = closure_0(dependencyMap[10]).intl;
      announce(intl.string(closure_0(dependencyMap[10]).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroImportAll.USER_RELATIONSHIP(userId), body, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    body = { nickname: c0 };
    obj3 = HTTPUtils;
    return patch(request);
  },
  fetchRelationships() {
    const HTTP = HTTPUtils.HTTP;
    obj = { url: metroImportAll.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      obj = DispatcherDefault;
      obj2 = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
      return obj.dispatch(obj2);
    }, () => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" });
    });
  },
  clearPendingRelationships() {
    let obj3;
    let query;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroImportAll.USER_RELATIONSHIPS(), query, rejectWithError: obj3.rejectWithMigratedError() };
    const del = HTTP.del;
    query = { relationship_type: constants2.PENDING_INCOMING };
    obj3 = HTTPUtils;
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    let items;
    let obj4;
    let query;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroImportAll.USER_RELATIONSHIPS(), query, body: obj2, rejectWithError: obj4.rejectWithMigratedError() };
    const del = HTTP.del;
    query = { relationship_type: constants2.PENDING_INCOMING };
    obj2 = { filters: items };
    items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj4 = HTTPUtils;
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.n6Jo3E));
    });
  },
  ignoreUser(id, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    let obj3;
    let userId;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_8.IGNORE_USER(id), context: obj2, rejectWithError: obj3.rejectWithMigratedError() };
    const put = HTTP.put;
    obj2 = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    obj3 = require("HTTPUtils");
    const putResult = put(obj);
    const nextPromise = putResult.then(() => {
      obj = DispatcherDefault;
      obj2 = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() };
      obj.dispatch(obj2);
      const obj3 = SafetyToastsActionCreatorsDefault;
      const result = obj3.showIgnoreSuccessToast(userId, channelId);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const obj4 = SafetyToastsUtils;
      announce(obj4.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, userId, channelId));
    });
    return nextPromise.catch(() => {
      obj = channelId(dependencyMap[21]);
      obj.showFailedToast();
      const AccessibilityAnnouncer = userId(dependencyMap[18]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = userId(dependencyMap[10]).intl;
      announce(intl.string(userId(dependencyMap[10]).t.n6Jo3E));
    });
  },
  unignoreUser(id, UserProfileRemediatedNotice, channelId) {
    let obj3;
    let userId;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_8.IGNORE_USER(id), context: obj2, rejectWithError: obj3.rejectWithMigratedError() };
    const del = HTTP.del;
    obj2 = { location: UserProfileRemediatedNotice };
    obj3 = require("HTTPUtils");
    const delResult = del(obj);
    const nextPromise = delResult.then(() => {
      obj = DispatcherDefault;
      obj2 = { type: "RELATIONSHIP_UNIGNORE_USER_SUCCESS", userId };
      obj.dispatch(obj2);
      const obj3 = SafetyToastsActionCreatorsDefault;
      const result = obj3.showUnignoreSuccessToast(userId, channelId);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const obj4 = SafetyToastsUtils;
      announce(obj4.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, userId, channelId));
    });
    return nextPromise.catch(() => {
      obj = channelId(dependencyMap[21]);
      obj.showFailedToast();
      const AccessibilityAnnouncer = userId(dependencyMap[18]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = userId(dependencyMap[10]).intl;
      announce(intl.string(userId(dependencyMap[10]).t.n6Jo3E));
    });
  }
};
let result = size.fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj2;
export { RelationshipErrorUXConfig };
