// Module ID: 8962
// Function ID: 70599
// Name: showAlert
// Dependencies: [57, 1849, 653, 8963, 5133, 4470, 5050, 1212, 8964, 8965, 8966, 507, 3969, 3976, 686, 8967, 7568, 2]

// Module 8962 (showAlert)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ClearFriendRequestFilters } from "ClearFriendRequestFilters";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function showAlert(merged, arg1, arg2) {
  require(5133) /* open */.closeContextMenu();
  const obj = require(5133) /* open */;
  importDefault(4470).show(merged);
}
function handleRelationshipAddError(arg0, arg1, substr) {
  let body;
  let status;
  ({ status, body } = arg0);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (arg1 === obj.SHOW_ALWAYS) {
      obj = {};
      const intl7 = require(1212) /* getSystemLocale */.intl;
      obj.title = intl7.string(require(1212) /* getSystemLocale */.t["3D5eox"]);
      const intl8 = require(1212) /* getSystemLocale */.intl;
      obj.body = intl8.string(require(1212) /* getSystemLocale */.t.TuJriJ);
      const intl9 = require(1212) /* getSystemLocale */.intl;
      obj.confirmText = intl9.string(require(1212) /* getSystemLocale */.t.DppXIx);
      showAlert(obj);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj = {};
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj.title = intl4.string(require(1212) /* getSystemLocale */.t.Gqf33E);
        const intl5 = require(1212) /* getSystemLocale */.intl;
        obj.body = intl5.string(require(1212) /* getSystemLocale */.t.GHOBdx);
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj.confirmText = intl6.string(require(1212) /* getSystemLocale */.t.HbTSE6);
        obj.onConfirm = function onConfirm() {
          const result = outer1_2(outer1_3[8]).openClaimAccountModal();
        };
        showAlert(obj);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      require(5133) /* open */.closeContextMenu();
      importDefault(5050)();
      const obj3 = require(5133) /* open */;
    } else {
      if (!obj5.isLimitedAccessErrorCode(status, num)) {
        if (num !== constants.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (arg1 === obj.SHOW_ALWAYS) {
            if (null != substr) {
              obj = require(8966) /* validateDiscordTag */;
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = obj.humanizeAbortCode(num, substr);
            } else {
              const intl = require(1212) /* getSystemLocale */.intl;
              humanizeAbortCodeResult = intl.string(require(1212) /* getSystemLocale */.t.paDJBM);
            }
            const obj1 = {};
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj1.title = intl2.string(require(1212) /* getSystemLocale */.t["6moJ8s"]);
            obj1.body = humanizeAbortCodeResult;
            const intl3 = require(1212) /* getSystemLocale */.intl;
            obj1.confirmText = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
            showAlert(obj1);
          }
        }
      }
      obj5 = require(8965) /* isLimitedAccessErrorCode */;
    }
  }
  throw arg0;
}
({ Endpoints: closure_6, AbortCodes: closure_7, RelationshipTypes: closure_8 } = ME);
let obj = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
obj = {
  sendRequest(discordTag) {
    let captchaPayload;
    let context;
    let errorUxConfig;
    let note;
    let tmp3;
    let tmp4;
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = obj.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = callback(str.split("#"), 2);
    const HTTP = str(507).HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS() };
    obj = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    obj.body = obj;
    obj.context = context;
    obj.oldFormErrors = true;
    const tmp2 = callback(str.split("#"), 2);
    obj.rejectWithError = str(507).rejectWithMigratedError();
    const obj3 = str(507);
    return HTTP.post(obj).catch((arg0) => {
      outer1_13(arg0, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    let captchaPayload;
    let confirmStrangerRequest;
    let context;
    let fromFriendSuggestion;
    let type;
    let userId;
    let SHOW_ALWAYS = arg2;
    ({ userId, captchaPayload } = arg0);
    const _require = arg1;
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      SHOW_ALWAYS = obj.SHOW_ALWAYS;
    }
    let user2;
    user2 = user.getUser(userId);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId) };
    obj = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    obj.body = obj;
    obj.context = context;
    obj.oldFormErrors = true;
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    const obj3 = _require(507);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      if (null != callback) {
        callback();
      }
    }).catch((arg0) => {
      outer1_13(arg0, SHOW_ALWAYS, SHOW_ALWAYS(outer1_3[12]).getUserTag(closure_2));
      return Promise.reject(arg0);
    });
  },
  acceptFriendRequest(arg0) {
    return obj.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    const obj = { userId, context, type: constants2.BLOCKED };
    return obj.addRelationship(obj, () => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t["9t1au7"]));
    });
  },
  removeRelationship(userId, context) {
    const _require = arg2;
    const HTTP = _require(507).HTTP;
    const obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj2 = _require(507);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (null != callback) {
        callback();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = callback(outer1_3[13]).AccessibilityAnnouncer;
      const intl = callback(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(outer1_3[7]).t.n6Jo3E));
    });
  },
  updateRelationship(userId, nickname) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), body: obj };
    obj = { nickname, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  fetchRelationships() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_6.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_3[14]);
      obj = { type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body };
      return obj.dispatch(obj);
    }, () => outer1_1(outer1_3[14]).dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    importDefault(8967)(arg0);
  },
  clearPendingRelationships() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj };
    obj = { relationship_type: constants2.PENDING_INCOMING, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      outer1_1(outer1_3[14]).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_6.USER_RELATIONSHIPS(), query: obj, body: { filters: items } };
    obj = { relationship_type: constants2.PENDING_INCOMING };
    items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      outer1_1(outer1_3[14]).dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = outer1_0(outer1_3[13]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_3[7]).t.n6Jo3E));
    });
  },
  ignoreUser(id, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    const _require = id;
    let closure_1 = channelId;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: obj };
    obj = { location: IGNORE_CONFIRMATION_ACTION_SHEET, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      let obj = channelId(outer1_3[16]);
      const result = obj.showIgnoreSuccessToast(id, channelId);
      const AccessibilityAnnouncer = id(outer1_3[13]).AccessibilityAnnouncer;
      const intl = id(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(outer1_3[7]).t.Us93Ca));
      obj = { type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: id, timestamp: Date.now() };
      channelId(outer1_3[14]).dispatch(obj);
    }).catch(() => {
      channelId(outer1_3[16]).showFailedToast();
      const AccessibilityAnnouncer = id(outer1_3[13]).AccessibilityAnnouncer;
      const intl = id(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(outer1_3[7]).t.n6Jo3E));
    });
  },
  unignoreUser(id, UserProfileRemediatedNotice, id2) {
    const _require = id;
    let closure_1 = id2;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: obj };
    obj = { location: UserProfileRemediatedNotice, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      const result = id2(outer1_3[16]).showUnignoreSuccessToast(id, id2);
      const AccessibilityAnnouncer = id(outer1_3[13]).AccessibilityAnnouncer;
      const intl = id(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(outer1_3[7]).t.QlH5w6));
    }).catch(() => {
      id2(outer1_3[16]).showFailedToast();
      const AccessibilityAnnouncer = id(outer1_3[13]).AccessibilityAnnouncer;
      const intl = id(outer1_3[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(id(outer1_3[7]).t.n6Jo3E));
    });
  }
};
let result = require("ME").fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj;
export const RelationshipErrorUXConfig = obj;
