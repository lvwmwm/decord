// Module ID: 17752
// Function ID: 17753
// Name: AppShare
// Dependencies: [32, 19, 17, 6880, 13887, 502, 1074, 11907, 21, 504, 6010, 1364, 13926, 11910, 6895, 1241, 5298, 14115, 13444, 1610, 7810, 6460, 16731, 16784, 5209, 2]
// Exports: default

// Module 17752 (AppShare)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6895 */;
import Constants2 from "Constants" /* 11907 */;
import ShareScreenDefault from "ShareScreen" /* 13444 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 13926 */;
import AppContainerDefault from "AppContainer" /* 14115 */;
import ToastContainerDefault from "ToastContainer" /* 16784 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 6880 */;
import ShareStore from "ShareStore" /* 13887 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, exitApp;

let c10;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
({ BackHandler: hasOwnProperty, NativeModules: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
let closure_9 = Constants2.MultiAccountSwitchLocation;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const share = "share";
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  let closure_2;
  let first;
  let items5;
  let tmp20Result;
  let tmp22;
  _require = targetUserId;
  targetUserId = targetUserId.targetUserId;
  first = undefined;
  closure_2 = undefined;
  let closure_3;
  let obj = react;
  let tmp = _slicedToArray;
  [first, closure_2] = react.useState(false);
  let tmp4 = null == targetUserId;
  const useState = react.useState;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = tmp(useState(tmp4), 2);
  closure_3 = tmpResult[1];
  const items = [first];
  const first1 = tmpResult[0];
  const effect = obj.useEffect(() => {
    const tmp = first;
    if (!tmp) {
      const obj = AccessibilityManagerDefault;
      obj.init();
      closure_2(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    const tmp2 = null != targetUserId && authStore.getId() !== tmp;
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = targetUserId(closure_2[13]);
        const switchAccountResult = obj.switchAccount(closure_1_0, false, constants.SHARE_EXTENSION);
        switchAccountResult.then(() => {
          closure_1_3(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = first1;
  }
  let obj2 = require("get initialized");
  const items2 = [AuthenticationStore];
  const stateFromStores = obj2.useStateFromStores(items2, () => authStore.isAuthenticated());
  const items3 = [stateFromStores];
  const effect2 = obj.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = AuthenticationActionCreatorsDefault;
      obj.startSession(authStore.getToken());
      const obj2 = stateFromStores(dependencyMap[11]);
      if (obj2.isAndroid()) {
        const NativePermissionManager = closure_2_6.NativePermissionManager;
        const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
      }
    }
  }, items3);
  const items4 = [targetUserId.attachments.length, targetUserId.text];
  const effect3 = obj.useEffect(() => {
    let tmp3 = null != targetUserId.text;
    const track = AnalyticsUtilsDefault.track;
    const EXTERNAL_SHARE_OPENED = AnalyticEvents.EXTERNAL_SHARE_OPENED;
    AnalyticsUtilsDefault;
    if (tmp3) {
      tmp3 = tmp2.text.length > 0;
    }
    const obj = { has_content: tmp3, has_attachment: targetUserId.attachments.length > 0 };
    track(EXTERNAL_SHARE_OPENED, obj);
  }, items4);
  useMountEffectDefault(() => {
    const attachments = targetUserId.attachments;
    const length = targetUserId.attachments.length;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed("share", { share_num_attachments: length, share_attachment_mimetypes: mapped });
  });
  const obj3 = { appEntryKey: share, children: items5 };
  const tmp17 = closure_11;
  const tmp18 = AppContainerDefault;
  if (first) {
    const obj4 = { appEntryKey: share, sharedContent: targetUserId, onClose: exitApp };
    const tmp15Result = ShareScreenDefault;
    const tmp10Result = require("MetaQuestUtils");
    if (tmp10Result.isMetaQuest()) {
      exitApp = tmp15(7810).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    tmp20Result = tmp20(tmp15Result, obj4);
    tmp22 = tmp20;
  } else {
    tmp20Result = tmp20(tmp10(6460).SceneLoadingIndicator, {});
    tmp22 = tmp20;
  }
  items5 = [tmp20Result, tmp22(require("MainShared").ActionSheetContainer, { appEntryKey: share }), tmp22(ToastContainerDefault, {}), tmp22(require("AlertModal").AlertModalContainer, {})];
  return tmp17(tmp18, obj3);
};
