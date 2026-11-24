// Module ID: 20204
// Function ID: 20205
// Name: AppShare
// Dependencies: [32, 19, 17, 8254, 15635, 502, 1071, 13284, 21, 504, 6425, 1378, 7802, 15642, 13287, 8268, 1255, 5474, 5861, 15798, 15111, 1625, 9719, 7190, 19037, 19110, 5866, 2]
// Exports: default

// Module 20204 (AppShare)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useMountEffectDefault from "useMountEffect" /* 5474 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6425 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8268 */;
import Constants2 from "Constants" /* 13284 */;
import ShareScreenDefault from "ShareScreen" /* 15111 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15642 */;
import AppContainerDefault from "AppContainer" /* 15798 */;
import AppToastContainerDefault from "AppToastContainer" /* 19110 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 8254 */;
import ShareStore from "ShareStore" /* 15635 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
const BackHandler = react_native.BackHandler;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_8 = Constants2.MultiAccountSwitchLocation;
({ jsx: c9, jsxs: c10 } = Fragment);
const share = "share";
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  let closure_2;
  let exitApp;
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
        const obj = targetUserId(closure_2[14]);
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
      const tmp2 = importDefault;
      const tmp3 = dependencyMap;
      if (obj2.isAndroid()) {
        const tmp2Result = tmp2(tmp3[12]);
        const notificationAuthorization = tmp2Result.requestNotificationAuthorization();
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
    const obj = actions_AlertActionCreatorsDefault;
    obj.closeAll();
    const attachments = targetUserId.attachments;
    const length = targetUserId.attachments.length;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    const obj2 = TTIAnalyticsUtils;
    obj2.trackAppUIViewed("share", { share_num_attachments: length, share_attachment_mimetypes: mapped });
  });
  const obj3 = { appEntryKey: share, children: items5 };
  const tmp17 = closure_10;
  const tmp18 = AppContainerDefault;
  if (first) {
    const obj4 = { appEntryKey: share, sharedContent: targetUserId, onClose: exitApp };
    const tmp15Result = ShareScreenDefault;
    const tmp10Result = require("MetaQuestUtils");
    if (tmp10Result.isMetaQuest()) {
      exitApp = tmp15(9719).close;
    } else {
      exitApp = BackHandler.exitApp;
    }
    tmp20Result = tmp20(tmp15Result, obj4);
    tmp22 = tmp20;
  } else {
    tmp20Result = tmp20(tmp10(7190).SceneLoadingIndicator, {});
    tmp22 = tmp20;
  }
  items5 = [tmp20Result, tmp22(require("MainShared").ActionSheetContainer, { appEntryKey: share }), tmp22(AppToastContainerDefault, { appChrome: false }), tmp22(require("AlertModal").AlertModalContainer, {})];
  return tmp17(tmp18, obj3);
};
