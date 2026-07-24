// Module ID: 12672
// Function ID: 98311
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 1188, 1906, 653, 12673, 4206, 12674, 3982, 3981, 5784, 12676, 668, 587, 675, 566, 686, 2]

// Module 12672 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import getFirstInstallTimeMillis from "getFirstInstallTimeMillis";
import Storage from "Storage";
import expandLocation from "expandLocation";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function recordRequestRevision(arg0) {
  closure_14.revision = 1;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(RequestReviewStore, closure_14);
}
function delayShowReviewRequestModal() {
  cancelExistingTimeout();
  const RequestReviewNoTTIExperiment = require(12673) /* apexExperiment */.RequestReviewNoTTIExperiment;
  let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
  let tmp2 = c15;
  if (c15) {
    if (!skipTTICheck) {
      let tmp4 = undefined !== closure_12;
      if (tmp4) {
        tmp4 = closure_12 < 2300;
      }
      skipTTICheck = tmp4;
    }
    tmp2 = skipTTICheck;
  }
  if (tmp2) {
    const _setTimeout = setTimeout;
    const timeout = setTimeout(showReviewRequestModal, require(4206) /* sleep */.MS_PER_MINUTE);
  }
}
function showReviewRequestModal() {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  obj = {};
  let tmp = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp) {
    tmp = null != require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    const obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
  }
  obj.isViewingChat = tmp;
  obj.isKeyboardOpen = require(5784) /* getKeyboardIsOpen */.getKeyboardIsOpen();
  obj.isInVoice = null != voiceChannelId.getVoiceChannelId();
  if (obj.isViewingChat) {
    if (!obj.isKeyboardOpen) {
      if (!obj.isInVoice) {
        importDefault(675).track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        recordRequestRevision(1);
        importDefault(12674)();
        let c15 = false;
        const obj6 = importDefault(675);
      }
    }
  }
  const obj5 = require(5784) /* getKeyboardIsOpen */;
  obj = { is_keyboard_open: obj.isKeyboardOpen, is_in_voice: obj.isInVoice, is_viewing_chat: obj.isViewingChat };
  importDefault(675).track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, obj);
  delayShowReviewRequestModal();
}
function handleConnectionClosedOrInterrupted() {
  cancelExistingTimeout();
}
function cancelExistingTimeout() {
  if (-1 !== c16) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c16);
    c16 = -1;
  }
}
const RequestReviewStore = "RequestReviewStore";
let closure_14 = { revision: 0 };
let c15 = false;
let c16 = -1;
let tmp2 = ((Store) => {
  class RequestReviewStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, RequestReviewStore);
      obj = outer1_6(RequestReviewStore);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(RequestReviewStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        const self = this;
        const Storage = RequestReviewStore(outer1_2[17]).Storage;
        let value = Storage.get(outer1_13);
        if (null == value) {
          const obj = { revision: 0 };
          value = obj;
        }
        const outer1_14 = value;
        self.waitFor(outer1_9, outer1_8, outer1_10);
      }
    }
  ];
  return callback(RequestReviewStore, items);
})(require("initialize").Store);
tmp2.displayName = "RequestReviewStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let obj = {};
    obj = { from: "authed", unit: require(4206) /* sleep */.TimeUnits.DAYS };
    obj.isInstallOldEnough = require(12676) /* getFirstInstallTimeMillis */.getFirstInstallTimeElapsed(obj) >= 10;
    obj.isInLargeEnoughGuild = guilds.some((member_count) => member_count.member_count >= 5);
    obj.isAccountVerified = true === guilds.user.verified;
    obj.isNewRevision = revision.revision < 1;
    if (obj.isNewRevision) {
      obj = { is_hfu: true };
      ({ isInstallOldEnough: obj5.is_install_old_enough, isInLargeEnoughGuild: obj5.is_in_large_enough_guild, isAccountVerified: obj5.is_account_verified } = obj);
      importDefault(675).track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
      const obj4 = importDefault(675);
    }
    let closure_15 = obj.isInstallOldEnough && obj.isAccountVerified && obj.isInLargeEnoughGuild && obj.isNewRevision;
    delayShowReviewRequestModal();
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    delayShowReviewRequestModal();
  },
  CONNECTION_CLOSED: handleConnectionClosedOrInterrupted,
  CONNECTION_INTERRUPTED: handleConnectionClosedOrInterrupted,
  TTI_RECORDED: function handleTTIRecorded(tti) {
    tti = tti.tti;
    delayShowReviewRequestModal();
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state.state === require(668) /* keys */.AppStates.ACTIVE) {
      delayShowReviewRequestModal();
    } else {
      cancelExistingTimeout();
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default tmp2;
