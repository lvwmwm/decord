// Module ID: 18486
// Function ID: 18487
// Name: AppShare
// Dependencies: [32, 19, 17, 7790, 14770, 502, 1074, 12763, 21, 504, 6922, 1364, 14809, 12766, 7805, 1241, 5290, 14929, 14266, 1609, 8712, 7372, 17481, 17527, 5201, 2]
// Exports: default

// Module 18486 (AppShare)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useMountEffectDefault from "useMountEffect" /* 5290 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6922 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7805 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14809 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ BackHandler: hasOwnProperty, NativeModules: metroRequire } = get_ActivityIndicator);
const AnalyticsTrackingStore = fn(7790);
const ShareStore = fn(14770);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_9 = fn(12763).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const share = "share";
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(targetUserId) {
  _require = targetUserId;
  targetUserId = targetUserId.targetUserId;
  closure_129_0 = targetUserId;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  [first, closure_129_2] = noop.useState(false);
  closure_129_1 = first;
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = _slicedToArray(noop.useState(tmp4), 2);
  closure_129_3 = tmpResult[1];
  const items = [first];
  const effect = obj.useEffect(() => {
    if (!closure_1_1) {
      AccessibilityManagerDefault.init();
      dependencyMap(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = AuthenticationStore.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = closure_0(12766);
        closure_0(12766).switchAccount(targetUserId, false, constants.SHARE_EXTENSION).then(() => {
          closure_1_3(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  const items2 = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => authenticated.isAuthenticated());
  closure_130_0 = stateFromStores;
  const items3 = [stateFromStores];
  const effect2 = obj.useEffect(() => {
    if (closure_0) {
      AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
      if (obj2.isAndroid()) {
        const NativePermissionManager = timestampProducer.NativePermissionManager;
        const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
      }
      obj2 = PlatformUtils;
    }
  }, items3);
  const items4 = [targetUserId.attachments.length, targetUserId.text];
  const effect3 = obj.useEffect(() => {
    let tmp2 = null != targetUserId.text;
    if (tmp2) {
      tmp2 = tmp.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, { has_content: tmp2, has_attachment: targetUserId.attachments.length > 0 });
  }, items4);
  useMountEffectDefault(() => {
    const attachments = targetUserId.attachments;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: targetUserId.attachments.length, share_attachment_mimetypes: mapped });
  });
  const obj3 = { appEntryKey: share, children: null };
  if (first) {
    const obj4 = { appEntryKey: tmp18, sharedContent: targetUserId, onClose: null };
    const tmp14Result = tmp14(14266);
    if (tmp9Result.isMetaQuest()) {
      exitApp = tmp14(8712).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj4.onClose = exitApp;
    tmp19(tmp14Result, obj4);
    tmp9Result = tmp9(1609);
  } else {
    const items5 = [tmp19(tmp9(7372).SceneLoadingIndicator, {}), , , ];
    const obj5 = { appEntryKey: tmp18 };
    items5[1] = tmp19(tmp9(17481).ActionSheetContainer, obj5);
    items5[2] = tmp19(tmp14(17527), {});
    items5[3] = tmp19(tmp9(5201).AlertModalContainer, {});
    obj3.children = items5;
    return closure_11(tmp17, obj3);
  }
};
