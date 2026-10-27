// Module ID: 15046
// Function ID: 15047
// Name: RequestReviewStore
// Dependencies: [5191, 1258, 4875, 1084, 1627, 15047, 5723, 15048, 5152, 5151, 7029, 15050, 1104, 510, 1264, 504, 584, 2]

// Module 15046 (RequestReviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5151 */;
import RootNavigationRef from "RootNavigationRef" /* 5152 */;
import TimeUtils from "TimeUtils" /* 5723 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7029 */;
import requestReviewModalDefault from "requestReviewModal" /* 15048 */;
import InstallTime from "InstallTime" /* 15050 */;
import ExperimentStore from "ExperimentStore" /* 5191 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import size from "module_2" /* 2 */;

function delayShowReviewRequestModal() {
  let timeout;
  if (-1 !== timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = -1;
  }
  obj = MetaQuestUtils;
  if (!obj.isMetaQuest()) {
    const RequestReviewNoTTIExperiment = tmp4(15047).RequestReviewNoTTIExperiment;
    let skipTTICheck = RequestReviewNoTTIExperiment.getConfig({ location: "RequestReviewStore" }).skipTTICheck;
    let tmp6 = closure_10;
    if (tmp6) {
      if (!skipTTICheck) {
        skipTTICheck = undefined !== tti && tmp7 < 2300;
        const tmp8 = undefined !== tti && tmp7 < 2300;
      }
      tmp6 = skipTTICheck;
    }
    if (tmp6) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(showReviewRequestModal, tmp4(5723).MS_PER_MINUTE);
    }
  }
}
function showReviewRequestModal() {
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    const tmpResult = NavigationRouteUtils;
    tmp3 = null != tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
  }
  const tmpResult2 = useKeyboardIsOpen;
  const keyboardIsOpen = tmpResult2.getKeyboardIsOpen();
  const tmp5 = null != SelectedChannelStore.getVoiceChannelId();
  if (tmp3) {
    if (!keyboardIsOpen) {
      if (!tmp5) {
        const obj5 = AnalyticsUtilsDefault;
        obj5.track(AnalyticEvents.REVIEW_REQUEST_SHOW_ATTEMPTED);
        obj.revision = 1;
        const Storage = tmp(510).Storage;
        const result = Storage.set(RequestReviewStore_str, obj);
        requestReviewModalDefault();
        closure_10 = false;
      }
    }
  }
  const obj6 = AnalyticsUtilsDefault;
  obj6.track(AnalyticEvents.REVIEW_REQUEST_DEFERRED, { is_keyboard_open: keyboardIsOpen, is_in_voice: tmp5, is_viewing_chat: tmp3 });
  delayShowReviewRequestModal();
}
function handleConnectionClosedOrInterrupted() {
  if (-1 !== c11) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c11);
    c11 = -1;
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const RequestReviewStore_str = "RequestReviewStore";
let obj = { revision: 0 };
let closure_10 = false;
let c11 = -1;
const Store = get_initializedDefault.Store;
class RequestReviewStore extends Store {
  initialize() {
    const Storage = Storage2.Storage;
    obj = Storage.get(RequestReviewStore_str);
    if (obj == null) {
      obj = { revision: 0 };
    }
    this.waitFor(ApexExperimentStore, ExperimentStore, SelectedChannelStore);
  }
}
const prototype = RequestReviewStore.prototype;
RequestReviewStore.displayName = "RequestReviewStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    const user = guilds.user;
    obj = InstallTime;
    const obj2 = { from: "authed", unit: TimeUtils.TimeUnits.DAYS };
    let tmp2 = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const someResult = guilds.some((member_count) => member_count.member_count >= 5);
    if (obj.revision < 1) {
      const obj4 = { is_hfu: true, is_install_old_enough: tmp2, is_in_large_enough_guild: someResult, is_account_verified: true === user.verified };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(AnalyticEvents.REVIEW_REQUEST_ELIGIBILITY_CHECKED, obj4);
    }
    if (tmp2) {
      tmp2 = tmp4;
    }
    if (tmp2) {
      tmp2 = someResult;
    }
    if (tmp2) {
      tmp2 = tmp5;
    }
    closure_10 = tmp2;
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
    if (state.state === ConstantsIOS.AppStates.ACTIVE) {
      delayShowReviewRequestModal();
    } else if (-1 !== c11) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c11);
      c11 = -1;
    }
  }
};
const requestReviewStore = new RequestReviewStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/feedback/native/RequestReviewStore.tsx");

export default requestReviewStore;
