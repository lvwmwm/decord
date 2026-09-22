// Module ID: 18040
// Function ID: 18041
// Name: AppShare
// Dependencies: [32, 19, 17, 7563, 14484, 502, 1074, 12547, 21, 504, 6694, 1363, 14523, 12550, 7578, 1240, 5073, 14643, 13988, 1608, 8480, 7142, 17023, 17071, 4986, 2]
// Exports: default

// Module 18040 (AppShare)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import useMountEffectDefault from "useMountEffect" /* 5073 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6694 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7578 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14523 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ BackHandler: hasOwnProperty, NativeModules: metroRequire } = get_ActivityIndicator);
const AnalyticsTrackingStore = fn(7563);
const ShareStore = fn(14484);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_9 = fn(12547).MultiAccountSwitchLocation;
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
        const obj = closure_0(12550);
        closure_0(12550).switchAccount(targetUserId, false, constants.SHARE_EXTENSION).then(() => {
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
    const tmp14Result = tmp14(13988);
    if (tmp9Result.isMetaQuest()) {
      exitApp = tmp14(8480).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj4.onClose = exitApp;
    tmp19(tmp14Result, obj4);
    tmp9Result = tmp9(1608);
  } else {
    const items5 = [tmp19(tmp9(7142).SceneLoadingIndicator, {}), , , ];
    const obj5 = { appEntryKey: tmp18 };
    items5[1] = tmp19(tmp9(17023).ActionSheetContainer, obj5);
    items5[2] = tmp19(tmp14(17071), {});
    items5[3] = tmp19(tmp9(4986).AlertModalContainer, {});
    obj3.children = items5;
    return closure_11(tmp17, obj3);
  }
};
