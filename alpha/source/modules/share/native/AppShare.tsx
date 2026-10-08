// Module ID: 18453
// Function ID: 18454
// Name: AppShare
// Dependencies: [32, 19, 17, 7171, 14477, 502, 1085, 12145, 21, 558, 576, 504, 5936, 1381, 7500, 14517, 12148, 7185, 1264, 5392, 13952, 1627, 8458, 6718, 17396, 17449, 5303, 14638, 2]

// Module 18453 (AppShare)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7185 */;
import Constants2 from "Constants" /* 12145 */;
import ShareScreenDefault from "ShareScreen" /* 13952 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14517 */;
import AppContainerDefault from "AppContainer" /* 14638 */;
import AppToastContainerDefault from "AppToastContainer" /* 17449 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 7171 */;
import ShareStore from "ShareStore" /* 14477 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, initResult;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const BackHandler = react_native.BackHandler;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_8 = Constants2.MultiAccountSwitchLocation;
({ jsx: c9, jsxs: c10 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthenticated() {
  let authenticated;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores;
  let tmp2 = dependencyMap;
  let obj = stateFromStores(576);
  const cResult = obj.c(5);
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
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function h() {
      const tmp = stateFromStores;
      if (tmp) {
        const obj = AuthenticationActionCreatorsDefault;
        obj.startSession(AuthenticationStore.getToken());
        const obj2 = PlatformUtils;
        const tmp2 = importDefault;
        if (obj2.isAndroid()) {
          const tmp2Result = tmp2(7500);
          const notificationAuthorization = tmp2Result.requestNotificationAuthorization();
        }
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
}) : (function useAuthenticated() {
  let authenticated;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = AuthenticationActionCreatorsDefault;
      obj.startSession(AuthenticationStore.getToken());
      const obj2 = PlatformUtils;
      const tmp2 = importDefault;
      if (obj2.isAndroid()) {
        const tmp2Result = tmp2(7500);
        const notificationAuthorization = tmp2Result.requestNotificationAuthorization();
      }
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitialization(targetUserId) {
  let closure_2;
  let first;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp5;
  let obj = targetUserId(576);
  const cResult = obj.c(8);
  targetUserId = targetUserId.targetUserId;
  let tmp2 = _slicedToArray;
  [first, dependencyMap] = react.useState(false);
  if (cResult[0] !== targetUserId) {
    const tmp7 = null == targetUserId || AuthenticationStore.getId() === targetUserId;
    cResult[0] = targetUserId;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  [r10031, _slicedToArray] = tmp2(react.useState(tmp5), 2);
  tmp2(react.useState(tmp5), 2);
  if (cResult[2] !== first) {
    class A {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp5 = closure_2;
          flag = true;
          tmp6 = closure_2(true);
        }
        return;
      }
    }
    const items = [first];
    cResult[2] = first;
    cResult[3] = A;
    cResult[4] = items;
    tmp11 = items;
    tmp10 = A;
  } else {
    class A {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp5 = closure_2;
          flag = true;
          tmp6 = closure_2(true);
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
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp5 = closure_2;
          flag = true;
          tmp6 = closure_2(true);
        }
        return;
      }
    }
    const items1 = [targetUserId];
    cResult[5] = targetUserId;
    cResult[6] = tmp15;
    cResult[7] = items1;
    tmp14 = items1;
    tmp13 = tmp15;
  } else {
    class A {
      constructor() {
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp5 = closure_2;
          flag = true;
          tmp6 = closure_2(true);
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
        tmp = closure_1;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initResult = obj.init();
          tmp5 = closure_2;
          flag = true;
          tmp6 = closure_2(true);
        }
        return;
      }
    }
  }
  return first;
}) : (function useInitialization(targetUserId) {
  let closure_2;
  let closure_3;
  let first;
  targetUserId = targetUserId.targetUserId;
  first = undefined;
  closure_2 = undefined;
  _slicedToArray = undefined;
  let obj = react;
  let tmp = _slicedToArray;
  [first, closure_2] = react.useState(false);
  let tmp4 = null == targetUserId;
  const useState = react.useState;
  if (!tmp4) {
    tmp4 = AuthenticationStore.getId() === targetUserId;
  }
  const tmpResult = tmp(useState(tmp4), 2);
  _slicedToArray = tmpResult[1];
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
    const tmp2 = null != targetUserId && AuthenticationStore.getId() !== tmp;
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const obj = targetUserId(closure_2[16]);
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
  return first;
});
const share = "share";
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppShare(attachments) {
  let exitApp;
  let items;
  _require = attachments;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp4 = closure_12(attachments);
  closure_11();
  if (cResult[0] === attachments.attachments.length) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp14Result;
    if (cResult[1] === attachments.text) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = react.useEffect(tmp6, tmp7);
    if (cResult[4] !== attachments.attachments) {
      const fn2 = function u() {
        attachments = attachments.attachments;
        const length = attachments.attachments.length;
        const mapped = attachments.map((mimeType) => {
          let str = mimeType.mimeType;
          if (str == null) {
            str = "unknown";
          }
          return str;
        });
        const obj = TTIAnalyticsUtils;
        obj.trackAppUIViewed("share", { share_num_attachments: length, share_attachment_mimetypes: mapped });
      };
      cResult[4] = attachments.attachments;
      cResult[5] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[5];
    }
    useMountEffectDefault(tmp10);
    if (cResult[6] === tmp4) {
      let tmp13;
      let tmp22;
      let tmp21;
      let tmp20;
      let tmp28;
      if (cResult[7] === attachments) {
        tmp13 = cResult[8];
      }
      const _Symbol = Symbol;
      let str = "react.memo_cache_sentinel";
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { appEntryKey: share };
        const tmp25 = closure_9(tmp(17396).ActionSheetContainer, obj2);
        const tmp26 = closure_9(AppToastContainerDefault, { appChrome: false });
        const tmp27 = closure_9(tmp(5303).AlertModalContainer, {});
        cResult[9] = tmp25;
        cResult[10] = tmp26;
        cResult[11] = tmp27;
        tmp22 = tmp27;
        tmp21 = tmp26;
        tmp20 = tmp25;
      } else {
        tmp20 = cResult[9];
        tmp21 = cResult[10];
        tmp22 = cResult[11];
      }
      if (cResult[12] !== tmp13) {
        const obj3 = { appEntryKey: share, children: items };
        items = [tmp13, tmp20, tmp21, tmp22];
        const tmp31 = closure_10(AppContainerDefault, obj3);
        cResult[12] = tmp13;
        cResult[13] = tmp31;
        tmp28 = tmp31;
      } else {
        tmp28 = cResult[13];
      }
      return tmp28;
    }
    if (tmp4) {
      const obj4 = { appEntryKey: share, sharedContent: attachments, onClose: exitApp };
      const tmp11Result = ShareScreenDefault;
      const tmpResult = tmp(1627);
      if (tmpResult.isMetaQuest()) {
        exitApp = tmp11(8458).close;
      } else {
        exitApp = BackHandler.exitApp;
      }
      tmp14Result = tmp14(tmp11Result, obj4);
    } else {
      tmp14Result = tmp14(tmp(6718).SceneLoadingIndicator, {});
    }
    cResult[6] = tmp4;
    cResult[7] = attachments;
    cResult[8] = tmp14Result;
    tmp13 = tmp14Result;
  }
  const fn = function c() {
    let tmp3 = null != attachments.text;
    const track = AnalyticsUtilsDefault.track;
    const EXTERNAL_SHARE_OPENED = AnalyticEvents.EXTERNAL_SHARE_OPENED;
    AnalyticsUtilsDefault;
    if (tmp3) {
      tmp3 = tmp2.text.length > 0;
    }
    const obj = { has_content: tmp3, has_attachment: attachments.attachments.length > 0 };
    track(EXTERNAL_SHARE_OPENED, obj);
  };
  const items1 = [attachments.attachments.length, attachments.text];
  cResult[0] = attachments.attachments.length;
  cResult[1] = attachments.text;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function AppShare(attachments) {
  let exitApp;
  let items1;
  let tmp10Result;
  let tmp11;
  let tmp13;
  _require = attachments;
  const tmp = closure_12(attachments);
  const tmp2 = closure_11();
  const items = [attachments.attachments.length, attachments.text];
  const effect = react.useEffect(() => {
    let tmp3 = null != attachments.text;
    const track = AnalyticsUtilsDefault.track;
    const EXTERNAL_SHARE_OPENED = AnalyticEvents.EXTERNAL_SHARE_OPENED;
    AnalyticsUtilsDefault;
    if (tmp3) {
      tmp3 = tmp2.text.length > 0;
    }
    const obj = { has_content: tmp3, has_attachment: attachments.attachments.length > 0 };
    track(EXTERNAL_SHARE_OPENED, obj);
  }, items);
  useMountEffectDefault(() => {
    attachments = attachments.attachments;
    const length = attachments.attachments.length;
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
  let obj = { appEntryKey: share, children: items1 };
  const tmp7 = closure_10;
  const tmp8 = AppContainerDefault;
  if (tmp) {
    const obj2 = { appEntryKey: share, sharedContent: attachments, onClose: exitApp };
    const tmp4Result = ShareScreenDefault;
    const obj3 = require("MetaQuestUtils");
    const tmp15 = _require;
    if (obj3.isMetaQuest()) {
      exitApp = tmp4(8458).close;
    } else {
      exitApp = BackHandler.exitApp;
    }
    tmp10Result = tmp10(tmp4Result, obj2);
    tmp11 = tmp15;
    tmp13 = tmp10;
  } else {
    tmp11 = _require;
    tmp10Result = tmp10(require("SceneLoadingIndicator").SceneLoadingIndicator, {});
    tmp13 = tmp10;
  }
  items1 = [tmp10Result, tmp13(tmp11(17396).ActionSheetContainer, { appEntryKey: share }), tmp13(AppToastContainerDefault, { appChrome: false }), tmp13(tmp11(5303).AlertModalContainer, {})];
  return tmp7(tmp8, obj);
});
const result = size.fileFinishedImporting("modules/share/native/AppShare.tsx");

export default tmp5;
