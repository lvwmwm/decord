// Module ID: 18386
// Function ID: 18387
// Name: AppShare
// Dependencies: [32, 19, 17, 7707, 14678, 502, 1078, 12563, 21, 558, 568, 504, 6832, 1368, 14717, 12566, 7722, 1245, 5203, 14171, 1613, 8638, 7285, 17380, 17426, 5116, 14837, 2]

// Module 18386 (AppShare)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6832 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7722 */;
import ShareScreenDefault from "ShareScreen" /* 14171 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14717 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ BackHandler: hasOwnProperty, NativeModules: metroRequire } = get_ActivityIndicator);
const AnalyticsTrackingStore = fn(7707);
const ShareStore = fn(14678);
const AnalyticEvents = fn(1078).AnalyticEvents;
let closure_9 = fn(12563).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(568).c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return authenticated.isAuthenticated();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function u() {
      if (stateFromStores) {
        AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
        if (obj2.isAndroid()) {
          const NativePermissionManager = timestampProducer.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        obj2 = PlatformUtils;
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
}) : (() => {
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => authenticated.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      AuthenticationActionCreatorsDefault.startSession(AuthenticationStore.getToken());
      if (obj2.isAndroid()) {
        const NativePermissionManager = timestampProducer.NativePermissionManager;
        const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
      }
      obj2 = PlatformUtils;
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  const cResult = targetUserId(568).c(8);
  targetUserId = targetUserId.targetUserId;
  [first, dependencyMap] = noop.useState(false);
  if (cResult[0] !== targetUserId) {
    let tmp7 = null == targetUserId;
    if (!tmp7) {
      tmp7 = AuthenticationStore.getId() === targetUserId;
    }
    cResult[0] = targetUserId;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  let obj = targetUserId(568);
  [r10031, _slicedToArray] = noop.useState(tmp5);
  if (cResult[2] !== first) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[14]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    const items = [first];
    cResult[2] = first;
    cResult[3] = A;
    cResult[4] = items;
    let tmp11 = items;
    const tmp10 = A;
  } else {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[14]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  if (cResult[5] !== targetUserId) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[14]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    const items1 = [targetUserId];
    cResult[5] = targetUserId;
    cResult[6] = tmp15;
    cResult[7] = items1;
    let tmp14 = items1;
    const tmp13 = tmp15;
  } else {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[14]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
    tmp14 = cResult[7];
  }
  const effect1 = obj2.useEffect(tmp13, tmp14);
  if (first) {
    class A {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[14]);
          initResult = obj.init();
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
        }
        return;
      }
    }
  }
  return first;
}) : ((targetUserId) => {
  targetUserId = targetUserId.targetUserId;
  first = undefined;
  closure_2 = undefined;
  _slicedToArray = undefined;
  [first, closure_2] = noop.useState(false);
  let tmp4 = null == targetUserId;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = _slicedToArray(noop.useState(tmp4), 2);
  _slicedToArray = tmpResult[1];
  const items = [first];
  const effect = obj.useEffect(() => {
    if (!first) {
      AccessibilityManagerDefault.init();
      closure_2(true);
    }
  }, items);
  const items1 = [targetUserId];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != targetUserId;
    if (tmp2) {
      tmp2 = AuthenticationStore.getId() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = targetUserId(dependencyMap[15]);
        targetUserId(dependencyMap[15]).switchAccount(closure_1_0, false, constants.SHARE_EXTENSION).then(() => {
          closure_1_3(true);
        });
      }, 18);
    }
  }, items1);
  if (first) {
    first = tmpResult[0];
  }
  return first;
});
const share = "share";
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((attachments) => {
  _require = attachments;
  const cResult = require("c").c(14);
  const tmp4 = closure_13(attachments);
  closure_12();
  if (cResult[0] === attachments.attachments.length) {
    if (cResult[1] === attachments.text) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[4] !== attachments.attachments) {
      const fn2 = function h() {
        attachments = attachments.attachments;
        const mapped = attachments.map((mimeType) => {
          let str = mimeType.mimeType;
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: attachments.attachments.length, share_attachment_mimetypes: mapped });
      };
      cResult[4] = attachments.attachments;
      cResult[5] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    useMountEffectDefault(tmp10);
    if (cResult[6] === tmp4) {
      if (cResult[7] === attachments) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { appEntryKey: share };
          const tmp27 = closure_10(tmp(17380).ActionSheetContainer, obj2);
          const tmp28 = closure_10(tmp11(17426), {});
          const tmp29 = closure_10(tmp(5116).AlertModalContainer, {});
          cResult[9] = tmp27;
          cResult[10] = tmp28;
          cResult[11] = tmp29;
          let tmp24 = tmp29;
          let tmp23 = tmp28;
          let tmp22 = tmp27;
        } else {
          tmp22 = cResult[9];
          tmp23 = cResult[10];
          tmp24 = cResult[11];
        }
        if (cResult[12] !== cResult[8]) {
          const obj3 = { appEntryKey: share, children: null };
          const items = [tmp13, tmp22, tmp23, tmp24];
          obj3.children = items;
          const tmp33 = closure_11(tmp11(14837), obj3);
          cResult[12] = tmp13;
          cResult[13] = tmp33;
          let tmp30 = tmp33;
        } else {
          tmp30 = cResult[13];
        }
        return tmp30;
      }
    }
    if (!tmp4) {
      const tmp14Result = tmp14(tmp(7285).SceneLoadingIndicator, {});
      cResult[6] = tmp4;
      cResult[7] = attachments;
      cResult[8] = tmp14Result;
    }
    const obj4 = { appEntryKey: share, sharedContent: attachments, onClose: null };
    const tmp11Result = ShareScreenDefault;
    if (tmpResult.isMetaQuest()) {
      let exitApp = tmp11(8638).close;
    } else {
      exitApp = closure_5.exitApp;
    }
    obj4.onClose = exitApp;
    closure_10(tmp11Result, obj4);
    tmpResult = tmp(1613);
  }
  const fn = function s() {
    let tmp2 = null != attachments.text;
    if (tmp2) {
      tmp2 = tmp.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, { has_content: tmp2, has_attachment: attachments.attachments.length > 0 });
  };
  const items1 = [attachments.attachments.length, attachments.text];
  cResult[0] = attachments.attachments.length;
  cResult[1] = attachments.text;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((attachments) => {
  _require = attachments;
  closure_12();
  const items = [attachments.attachments.length, attachments.text];
  const effect = noop.useEffect(() => {
    let tmp2 = null != attachments.text;
    if (tmp2) {
      tmp2 = tmp.text.length > 0;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.EXTERNAL_SHARE_OPENED, { has_content: tmp2, has_attachment: attachments.attachments.length > 0 });
  }, items);
  useMountEffectDefault(() => {
    attachments = attachments.attachments;
    const mapped = attachments.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
    TTIAnalyticsUtils.trackAppUIViewed("share", { share_num_attachments: attachments.attachments.length, share_attachment_mimetypes: mapped });
  });
  const obj = { appEntryKey: share, children: null };
  if (tmp) {
    const obj2 = { appEntryKey: tmp9, sharedContent: attachments, onClose: null };
    const tmp4Result = tmp4(14171);
    if (obj3.isMetaQuest()) {
      let exitApp = tmp4(8638).close;
    } else {
      exitApp = closure_5.exitApp;
    }
    obj2.onClose = exitApp;
    tmp10(tmp4Result, obj2);
    obj3 = require("MetaQuestUtils");
  } else {
    const items1 = [tmp10(require("SceneLoadingIndicator").SceneLoadingIndicator, {}), , , ];
    const obj4 = { appEntryKey: tmp9 };
    items1[1] = tmp10(require("MainShared").ActionSheetContainer, obj4);
    items1[2] = tmp10(tmp4(17426), {});
    items1[3] = tmp10(require("AlertModal").AlertModalContainer, {});
    obj.children = items1;
    return closure_11(tmp8, obj);
  }
});
