// Module ID: 12507
// Function ID: 95834
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12507 (_isNativeReflectConstruct)
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
  const Storage = arg1(dependencyMap[17]).Storage;
  const result = Storage.set(closure_13, closure_14);
}
function delayShowReviewRequestModal() {
  cancelExistingTimeout();
  const RequestReviewNoTTIExperiment = arg1(dependencyMap[9]).RequestReviewNoTTIExperiment;
  let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
  let tmp2 = closure_15;
  if (closure_15) {
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
    const timeout = setTimeout(showReviewRequestModal, arg1(dependencyMap[10]).MS_PER_MINUTE);
  }
}
function showReviewRequestModal() {
  let obj = arg1(dependencyMap[12]);
  const rootNavigationRef = obj.getRootNavigationRef();
  obj = {};
  let tmp = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp) {
    tmp = null != arg1(dependencyMap[13]).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    const obj4 = arg1(dependencyMap[13]);
  }
  obj.isViewingChat = tmp;
  obj.isKeyboardOpen = arg1(dependencyMap[14]).getKeyboardIsOpen();
  obj.isInVoice = null != voiceChannelId.getVoiceChannelId();
  if (obj.isViewingChat) {
    if (!obj.isKeyboardOpen) {
      if (!obj.isInVoice) {
        importDefault(dependencyMap[18]).track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        recordRequestRevision(1);
        importDefault(dependencyMap[11])();
        let closure_15 = false;
        const obj6 = importDefault(dependencyMap[18]);
      }
    }
  }
  const obj5 = arg1(dependencyMap[14]);
  obj = { is_keyboard_open: obj.isKeyboardOpen, is_in_voice: obj.isInVoice, is_viewing_chat: obj.isViewingChat };
  importDefault(dependencyMap[18]).track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, obj);
  delayShowReviewRequestModal();
}
function handleConnectionClosedOrInterrupted() {
  cancelExistingTimeout();
}
function cancelExistingTimeout() {
  if (-1 !== closure_16) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_16);
    closure_16 = -1;
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
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let closure_13 = "RequestReviewStore";
let closure_14 = { revision: 0 };
let closure_15 = false;
let closure_16 = -1;
let tmp2 = (Store) => {
  class RequestReviewStore {
    constructor() {
      self = this;
      tmp = closure_3(this, RequestReviewStore);
      obj = closure_6(RequestReviewStore);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = RequestReviewStore;
  callback2(RequestReviewStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        const self = this;
        const Storage = RequestReviewStore(closure_2[17]).Storage;
        let value = Storage.get(closure_13);
        if (null == value) {
          const obj = { revision: 0 };
          value = obj;
        }
        self.waitFor(closure_9, closure_8, closure_10);
      }
    }
  ];
  return callback(RequestReviewStore, items);
}(importDefault(dependencyMap[19]).Store);
tmp2.displayName = "RequestReviewStore";
tmp2 = new tmp2(importDefault(dependencyMap[20]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let obj = {};
    obj = { from: "authed", unit: arg1(dependencyMap[10]).TimeUnits.DAYS };
    obj.isInstallOldEnough = arg1(dependencyMap[15]).getFirstInstallTimeElapsed(obj) >= 10;
    obj.isInLargeEnoughGuild = guilds.some((member_count) => member_count.member_count >= 5);
    obj.isAccountVerified = true === guilds.user.verified;
    obj.isNewRevision = revision.revision < 1;
    if (obj.isNewRevision) {
      obj = { is_hfu: true };
      ({ isInstallOldEnough: obj5.is_install_old_enough, isInLargeEnoughGuild: obj5.is_in_large_enough_guild, isAccountVerified: obj5.is_account_verified } = obj);
      importDefault(dependencyMap[18]).track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj);
      const obj4 = importDefault(dependencyMap[18]);
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
    if (state.state === arg1(dependencyMap[16]).AppStates.ACTIVE) {
      delayShowReviewRequestModal();
    } else {
      cancelExistingTimeout();
    }
  }
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default tmp2;
