// Module ID: 10003
// Function ID: 10004
// Name: RelationshipActionCreators
// Dependencies: [32, 1372, 1074, 10004, 5770, 5108, 5739, 1115, 10005, 10006, 10007, 1271, 4600, 4607, 573, 10008, 8675, 2]

// Module 10003 (RelationshipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import shared from "shared" /* 4607 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import openQuarantineModeInfoModalDefault from "openQuarantineModeInfoModal" /* 5739 */;
import ContextMenuActionCreators from "ContextMenuActionCreators" /* 5770 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8675 */;
import ClaimAccountModalActionCreatorsAll from "ClaimAccountModalActionCreators" /* 10005 */;
import UserLimitedAccessUtils from "UserLimitedAccessUtils" /* 10006 */;
import ClearAllIncomingRequestsConfirmationModalDefault from "ClearAllIncomingRequestsConfirmationModal" /* 10008 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function handleRelationshipAddError(error, SHOW_ALWAYS, userTag) {
  ({ status, body } = error);
  let num = body;
  if (body) {
    num = body.code;
  }
  if (429 === status) {
    if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
      obj = { title: null, body: null, confirmText: null };
      const intl7 = util.intl;
      obj.title = intl7.string(util.t["3D5eox"]);
      const intl8 = util.intl;
      obj.body = intl8.string(util.t.TuJriJ);
      const intl9 = util.intl;
      obj.confirmText = intl9.string(util.t.DppXIx);
      ContextMenuActionCreators.closeContextMenu();
      AlertActionCreatorsDefault.show(obj);
    }
  } else {
    if (403 === status) {
      if (num === constants.EMAIL_VERIFICATION_REQUIRED) {
        obj2 = { title: null, body: null, confirmText: null, onConfirm: null };
        const intl4 = util.intl;
        obj2.title = intl4.string(util.t.Gqf33E);
        const intl5 = util.intl;
        obj2.body = intl5.string(util.t.GHOBdx);
        const intl6 = util.intl;
        obj2.confirmText = intl6.string(util.t.HbTSE6);
        obj2.onConfirm = function onConfirm() {
          const result = ClaimAccountModalActionCreatorsAll.openClaimAccountModal();
        };
        ContextMenuActionCreators.closeContextMenu();
        AlertActionCreatorsDefault.show(obj2);
      }
    }
    if (num === constants.USER_QUARANTINED) {
      ContextMenuActionCreators.closeContextMenu();
      openQuarantineModeInfoModalDefault();
    } else {
      if (!obj9.isLimitedAccessErrorCode(status, num)) {
        if (num !== tmp2.RELATIONSHIP_INVALID_NO_CONFIRMATION) {
          if (SHOW_ALWAYS === obj.SHOW_ALWAYS) {
            if (null != userTag) {
              if (!num) {
                num = 0;
              }
              let humanizeAbortCodeResult = tmp18(10007).humanizeAbortCode(num, userTag);
              const tmp18Result = tmp18(10007);
            } else {
              const intl = tmp18(1115).intl;
              humanizeAbortCodeResult = intl.string(tmp18(1115).t.paDJBM);
            }
            const obj3 = { title: null, body: null, confirmText: null };
            const intl2 = tmp18(1115).intl;
            obj3.title = intl2.string(tmp18(1115).t["6moJ8s"]);
            obj3.body = humanizeAbortCodeResult;
            const intl3 = tmp18(1115).intl;
            obj3.confirmText = intl3.string(tmp18(1115).t.BddRzS);
            tmp18(5770).closeContextMenu();
            const tmp18Result2 = tmp18(5770);
            AlertActionCreatorsDefault.show(obj3);
          }
        }
      }
      obj9 = UserLimitedAccessUtils;
    }
  }
  throw error;
}
const Constants = fn(1074);
({ Endpoints: metroRequire, AbortCodes: closure_7, RelationshipTypes: closure_8 } = Constants);
const ClearFriendRequestFilters = fn(10004).ClearFriendRequestFilters;
const RelationshipErrorUXConfig = { SHOW_ALWAYS: 0, [0]: "SHOW_ALWAYS", SHOW_ONLY_IF_ACTION_NEEDED: 1, [1]: "SHOW_ONLY_IF_ACTION_NEEDED" };
let obj2 = {
  sendRequest(discordTag) {
    const str = discordTag.discordTag;
    ({ captchaPayload, errorUxConfig } = discordTag);
    ({ context, note } = discordTag);
    if (errorUxConfig === undefined) {
      errorUxConfig = body.SHOW_ALWAYS;
    }
    [tmp3, tmp4] = str.split("#");
    const HTTP = str(1271).HTTP;
    const request = { url: closure_6.USER_RELATIONSHIPS(), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    body = { username: tmp3, discriminator: parseInt(tmp4), note };
    const merged = Object.assign(captchaPayload);
    request.body = body;
    request.context = context;
    const tmp2 = _slicedToArray(str.split("#"), 2);
    request.rejectWithError = str(1271).rejectWithMigratedError();
    const obj3 = str(1271);
    return HTTP.post(request).catch((error) => {
      handleRelationshipAddError(error, errorUxConfig, str);
    });
  },
  addRelationship(arg0, arg1) {
    ({ userId, captchaPayload } = arg0);
    _require = arg1;
    let SHOW_ALWAYS = arg2;
    ({ context, type, fromFriendSuggestion, confirmStrangerRequest } = arg0);
    if (arg2 === undefined) {
      SHOW_ALWAYS = body.SHOW_ALWAYS;
    }
    const user = UserStore.getUser(userId);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_6.USER_RELATIONSHIP(userId), body: null, context: null, oldFormErrors: true, rejectWithError: null };
    body = { type, from_friend_suggestion: fromFriendSuggestion, confirm_stranger_request: confirmStrangerRequest };
    const merged = Object.assign(captchaPayload);
    request.body = body;
    request.context = context;
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    const putResult = HTTP.put(request);
    return HTTP.put(request).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch((error) => {
      handleRelationshipAddError(error, SHOW_ALWAYS, UserUtilsDefault.getUserTag(closure_2));
    });
  },
  acceptFriendRequest(arg0) {
    return obj2.addRelationship(arg0, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t["3goNa5"]));
    });
  },
  cancelFriendRequest(arg0, arg1) {
    return obj2.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.pLUaxR));
    });
  },
  removeFriend(arg0, arg1) {
    obj2.removeRelationship(arg0, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.vGSLa2));
    });
  },
  blockUser(userId, context) {
    return obj2.addRelationship({ userId, context, type: constants2.BLOCKED }, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.mU0Vrp));
    });
  },
  unblockUser(id, arg1) {
    return obj2.removeRelationship(id, arg1, () => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t["9t1au7"]));
    });
  },
  removeRelationship(userId, context, arg2) {
    _require = arg2;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.USER_RELATIONSHIP(userId), context, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      if (closure_0 != null) {
        tmp();
      }
    }).catch(() => {
      const AccessibilityAnnouncer = closure_0(4607).AccessibilityAnnouncer;
      const intl = closure_0(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_0(1115).t.n6Jo3E));
    });
  },
  updateRelationship(userId, c0) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIP(userId), body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { nickname: c0 };
    request.body = body;
    return HTTP.patch(request);
  },
  fetchRelationships() {
    const HTTP = HTTPUtils.HTTP;
    value = HTTP.get({ url: timestampProducer.USER_RELATIONSHIPS(), oldFormErrors: true, rejectWithError: true });
    value.then((body) => DispatcherDefault.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: body.body }), () => DispatcherDefault.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }));
  },
  confirmClearPendingRelationships(arg0) {
    ClearAllIncomingRequestsConfirmationModalDefault(arg0);
  },
  clearPendingRelationships() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIPS(), query: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const query = { relationship_type: constants2.PENDING_INCOMING };
    request.query = query;
    const delResult = HTTP.del(request);
    return HTTP.del(request).then(() => {
      DispatcherDefault.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.n6Jo3E));
    });
  },
  clearPendingSpamAndIgnored() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.USER_RELATIONSHIPS(), query: null, body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const query = { relationship_type: constants2.PENDING_INCOMING };
    request.query = query;
    obj2 = { filters: null };
    const items = [, ];
    ({ SPAM: arr[0], IGNORED: arr[1] } = ClearFriendRequestFilters);
    obj2.filters = items;
    request.body = obj2;
    const delResult = HTTP.del(request);
    return HTTP.del(request).then(() => {
      DispatcherDefault.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
    }).catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.n6Jo3E));
    });
  },
  ignoreUser(id, IGNORE_CONFIRMATION_ACTION_SHEET, channelId) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: { location: IGNORE_CONFIRMATION_ACTION_SHEET }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = { location: IGNORE_CONFIRMATION_ACTION_SHEET };
    const obj3 = require("HTTPUtils");
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then(() => {
      const result = SafetyToastsActionCreatorsDefault.showIgnoreSuccessToast(userId, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.Us93Ca));
      obj2 = DispatcherDefault;
      obj2.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId, timestamp: Date.now() });
    }).catch(() => {
      channelId(8675).showFailedToast();
      const AccessibilityAnnouncer = userId(4607).AccessibilityAnnouncer;
      const intl = userId(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(userId(1115).t.n6Jo3E));
    });
  },
  unignoreUser(id, newestAnalyticsLocation, id2) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_6.IGNORE_USER(id), context: { location: newestAnalyticsLocation }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    obj2 = { location: newestAnalyticsLocation };
    const obj3 = require("HTTPUtils");
    const delResult = HTTP.del(obj);
    return HTTP.del(obj).then(() => {
      const result = SafetyToastsActionCreatorsDefault.showUnignoreSuccessToast(closure_0, closure_1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.QlH5w6));
    }).catch(() => {
      id2(8675).showFailedToast();
      const AccessibilityAnnouncer = id(4607).AccessibilityAnnouncer;
      const intl = id(1115).intl;
      AccessibilityAnnouncer.announce(intl.string(id(1115).t.n6Jo3E));
    });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/RelationshipActionCreators.tsx");

export default obj2;
export { RelationshipErrorUXConfig };
