// Module ID: 14060
// Function ID: 14061
// Name: OneTimeLoginModal
// Dependencies: [5, 19, 17, 502, 1390, 1085, 1253, 21, 5092, 587, 558, 576, 1631, 1497, 1383, 1265, 5934, 4976, 1112, 5301, 5305, 6289, 1126, 5305, 5930, 10225, 4936, 6156, 14061, 5088, 6622, 2]

// Module 14060 (OneTimeLoginModal)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1253 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useAlertStore from "useAlertStore" /* 5301 */;
import AlertModal2 from "AlertModal" /* 5305 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import ThemedGradientDefault from "ThemedGradient" /* 10225 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, bottom, c4, c5, dependencyMap, importDefault, onPress;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
({ Routes: c9, AnalyticEvents: c10 } = Constants);
let closure_11 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MOBILE;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, centerContent: { flex: 1, justifyContent: "center", alignItems: "center" }, bottomContent: obj3, logo: { width: 80, height: 80, alignSelf: "center" }, loadingContainer: obj4, link: obj5, raisedIcon: size };
obj2 = { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: nativeDefault.radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", marginBottom: 48 };
obj5 = { textDecorationLine: "underline", textDecorationColor: nativeDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
let closure_14 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function OneTimeLoginModal(token) {
  let closure_1;
  let constants2;
  let onPress2;
  const tmp = token;
  let obj = token(576);
  const cResult = obj.c(46);
  token = token.token;
  const tmp4 = closure_14();
  importDefault = tmp4;
  const tmp5 = useSafeAreaInsetsDefault();
  const height = useWindowDimensionsDefault().height;
  if (cResult[0] === tmp5.bottom) {
    let tmp6;
    let tmp9;
    let tmp8;
    let tmp13;
    let tmp14;
    if (cResult[1] === height) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      let obj2 = { height: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
    }
    if (cResult[5] !== token) {
      const fn = function p() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { has_token: null != token };
        obj.track(constants2.ONE_TIME_LOGIN_MODAL_OPENED, obj2);
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(constants2.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
      };
      const items = [token];
      cResult[5] = token;
      cResult[6] = fn;
      cResult[7] = items;
      tmp9 = items;
      tmp8 = fn;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    const effect = G.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function k() {
        const obj = closure_1(onPress[15]);
        obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
        const obj2 = closure_1(onPress[16]);
        obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
        const obj3 = token(onPress[17]);
        obj3.resetToAuthRoute();
      };
      cResult[8] = fn2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[8];
    }
    dependencyMap = tmp13;
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function b() {
        const obj = closure_1(onPress[15]);
        obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
        const obj2 = closure_1(onPress[16]);
        obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
        const obj3 = token(onPress[18]);
        obj3.transitionTo(constants.ME);
      };
      cResult[9] = fn3;
      tmp14 = fn3;
    } else {
      tmp14 = cResult[9];
    }
    onPress = tmp14;
    if (cResult[10] !== tmp4.raisedIcon) {
      class G {
        constructor() {
          let AlertActionButton;
          let AlertActions;
          let intl;
          let intl2;
          let intl3;
          let obj2;
          let obj3;
          let obj4;
          const openAlert = useAlertStore.openAlert;
          const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.L6htwI), content: intl2.string(intl4.t["4fnE/J"]), actions: authStore2(AlertActions, obj3) };
          obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          useAlertStore;
          const AlertModal = AlertModal2.AlertModal;
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
          AlertActions = AlertModal2.AlertActions;
          obj4 = { onPress, text: intl3.string(intl4.t["9vN0pz"]) };
          AlertActionButton = AlertModal2.AlertActionButton;
          intl3 = intl4.intl;
          openAlert("invalid-login-alert", authStore2(AlertModal, obj));
        }
      }
      cResult[10] = tmp4.raisedIcon;
      cResult[11] = G;
    } else {
      class G {
        constructor() {
          let AlertActionButton;
          let AlertActions;
          let intl;
          let intl2;
          let intl3;
          let obj2;
          let obj3;
          let obj4;
          const openAlert = useAlertStore.openAlert;
          const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.L6htwI), content: intl2.string(intl4.t["4fnE/J"]), actions: authStore2(AlertActions, obj3) };
          obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          useAlertStore;
          const AlertModal = AlertModal2.AlertModal;
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
          AlertActions = AlertModal2.AlertActions;
          obj4 = { onPress, text: intl3.string(intl4.t["9vN0pz"]) };
          AlertActionButton = AlertModal2.AlertActionButton;
          intl3 = intl4.intl;
          openAlert("invalid-login-alert", authStore2(AlertModal, obj));
        }
      }
    }
    G = tmp15;
    if (cResult[12] !== tmp4.raisedIcon) {
      class R {
        constructor() {
          let AlertActionButton;
          let AlertActions;
          let YOeM7B;
          let formatToPlainString;
          let intl;
          let intl3;
          let obj2;
          let obj3;
          let obj4;
          let str;
          const openAlert = useAlertStore.openAlert;
          const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: authStore2(AlertActions, obj3) };
          obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          useAlertStore;
          const AlertModal = AlertModal2.AlertModal;
          intl = intl4.intl;
          const intl2 = intl4.intl;
          formatToPlainString = intl2.formatToPlainString;
          YOeM7B = intl4.t.YOeM7B;
          const currentUser = UserStore.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
          AlertActions = tmp(5305).AlertActions;
          obj4 = { onPress: onPress2, text: intl3.string(intl4.t["3PatSz"]) };
          AlertActionButton = tmp(5305).AlertActionButton;
          intl3 = tmp(1126).intl;
          openAlert("already-logged-in-alert", authStore2(AlertModal, obj));
        }
      }
      cResult[12] = tmp4.raisedIcon;
      cResult[13] = R;
    } else {
      class R {
        constructor() {
          let AlertActionButton;
          let AlertActions;
          let YOeM7B;
          let formatToPlainString;
          let intl;
          let intl3;
          let obj2;
          let obj3;
          let obj4;
          let str;
          const openAlert = useAlertStore.openAlert;
          const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: authStore2(AlertActions, obj3) };
          obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          useAlertStore;
          const AlertModal = AlertModal2.AlertModal;
          intl = intl4.intl;
          const intl2 = intl4.intl;
          formatToPlainString = intl2.formatToPlainString;
          YOeM7B = intl4.t.YOeM7B;
          const currentUser = UserStore.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
          AlertActions = tmp(5305).AlertActions;
          obj4 = { onPress: onPress2, text: intl3.string(intl4.t["3PatSz"]) };
          AlertActionButton = tmp(5305).AlertActionButton;
          intl3 = tmp(1126).intl;
          openAlert("already-logged-in-alert", authStore2(AlertModal, obj));
        }
      }
    }
    R = tmp16;
    if (cResult[14] === tmp16) {
      class R {
        constructor() {
          let AlertActionButton;
          let AlertActions;
          let YOeM7B;
          let formatToPlainString;
          let intl;
          let intl3;
          let obj2;
          let obj3;
          let obj4;
          let str;
          const openAlert = useAlertStore.openAlert;
          const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: authStore2(AlertActions, obj3) };
          obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
          useAlertStore;
          const AlertModal = AlertModal2.AlertModal;
          intl = intl4.intl;
          const intl2 = intl4.intl;
          formatToPlainString = intl2.formatToPlainString;
          YOeM7B = intl4.t.YOeM7B;
          const currentUser = UserStore.getCurrentUser();
          str = undefined;
          if (currentUser != null) {
            str = currentUser.username;
          }
          if (str == null) {
            str = "current user";
          }
          obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
          AlertActions = tmp(5305).AlertActions;
          obj4 = { onPress: onPress2, text: intl3.string(intl4.t["3PatSz"]) };
          AlertActionButton = tmp(5305).AlertActionButton;
          intl3 = tmp(1126).intl;
          openAlert("already-logged-in-alert", authStore2(AlertModal, obj));
        }
      }
    }
    _require = onPress(function*(arg0, value) {
      let obj6;
      let v1;
      let v3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c3;
        try {
          let message;
          let str;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              message = tmp;
              closure_0 = tmp4;
              str = undefined;
              c3 = 1;
              if (null == closure_0) {
                const obj9 = closure_2_1(onPress[15]);
                obj9.track(constants.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "missing_token", error_message: "No token provided" });
                c4();
                c3 = 0;
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else if (authenticated.isAuthenticated()) {
                c5();
                c3 = 0;
                c5 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                const obj5 = closure_2_1(onPress[15]);
                obj5.track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
                c4 = 2;
                c5 = 1;
                const obj10 = { value: obj6.oneTimeLogin(tmp49), done: false };
                obj6 = closure_2_1(onPress[24]);
                return obj10;
              }
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              message = closure_2;
              const _Error = Error;
              str = "Login failed";
              if (message instanceof Error) {
                str = message.message;
              }
              const obj11 = { source: "native_modal", error_reason: "api_error", error_message: str };
              const obj3 = closure_2_1(onPress[15]);
              obj3.track(constants.ONE_TIME_LOGIN_ERROR, obj11);
              c4();
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              let obj = closure_2_1(onPress[15]);
              obj.track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                const obj = message(closure_1_2[16]);
                obj.popWithKey("ONE_TIME_LOGIN_MODAL");
              }, 1500);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp41) {
          closure_2 = tmp41;
          if (0 === c3) {
            c5 = 3;
            throw tmp41;
          } else {
            c4 = 1;
          }
        }
      }
    });
    function t9() {
      return closure_0(...arguments);
    }
    cResult[14] = tmp16;
    cResult[15] = tmp15;
    cResult[16] = token;
    cResult[17] = t9;
  }
  let str = "100%";
  const tmpResult = tmp(1383);
  if (tmpResult.isAndroid()) {
    class R {
      constructor() {
        let AlertActionButton;
        let AlertActions;
        let YOeM7B;
        let formatToPlainString;
        let intl;
        let intl3;
        let obj2;
        let obj3;
        let obj4;
        let str;
        const openAlert = useAlertStore.openAlert;
        const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: authStore2(AlertActions, obj3) };
        obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
        useAlertStore;
        const AlertModal = AlertModal2.AlertModal;
        intl = intl4.intl;
        const intl2 = intl4.intl;
        formatToPlainString = intl2.formatToPlainString;
        YOeM7B = intl4.t.YOeM7B;
        const currentUser = UserStore.getCurrentUser();
        str = undefined;
        if (currentUser != null) {
          str = currentUser.username;
        }
        if (str == null) {
          str = "current user";
        }
        obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
        AlertActions = tmp(5305).AlertActions;
        obj4 = { onPress: onPress2, text: intl3.string(intl4.t["3PatSz"]) };
        AlertActionButton = tmp(5305).AlertActionButton;
        intl3 = tmp(1126).intl;
        openAlert("already-logged-in-alert", authStore2(AlertModal, obj));
      }
    }
  }
  cResult[0] = tmp5.bottom;
  cResult[1] = height;
  cResult[2] = str;
  tmp6 = str;
}) : (function OneTimeLoginModal(token) {
  let closure_1;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  token = token.token;
  onPress = undefined;
  let tmp = closure_14();
  importDefault = tmp;
  const tmp2 = useSafeAreaInsetsDefault();
  dependencyMap = tmp2;
  let height = useWindowDimensionsDefault().height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = onPress.useMemo(() => {
    height = "100%";
    const obj = utils_PlatformUtils;
    if (obj.isAndroid()) {
      height = height + bottom.bottom;
    }
    return { height };
  }, items);
  const effect = onPress.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { has_token: null != token };
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_OPENED, obj2);
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(constants2.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
  }, items1);
  onPress = onPress.useCallback(() => {
    const obj = closure_1(bottom[15]);
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj2 = closure_1(bottom[16]);
    obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj3 = token(bottom[17]);
    obj3.resetToAuthRoute();
  }, []);
  const callback1 = onPress.useCallback(() => {
    const obj = closure_1(bottom[15]);
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj2 = closure_1(bottom[16]);
    obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj3 = token(bottom[18]);
    obj3.transitionTo(constants.ME);
  }, []);
  const items2 = [onPress, tmp.raisedIcon];
  const callback2 = onPress.useCallback(() => {
    let AlertActionButton;
    let AlertActions;
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj3;
    let obj4;
    const openAlert = useAlertStore.openAlert;
    const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.L6htwI), content: intl2.string(intl4.t["4fnE/J"]), actions: authStore2(AlertActions, obj3) };
    obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
    useAlertStore;
    const AlertModal = AlertModal2.AlertModal;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
    AlertActions = AlertModal2.AlertActions;
    obj4 = { onPress, text: intl3.string(intl4.t["9vN0pz"]) };
    AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    openAlert("invalid-login-alert", authStore2(AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const callback3 = onPress.useCallback(() => {
    let AlertActionButton;
    let AlertActions;
    let YOeM7B;
    let formatToPlainString;
    let intl;
    let intl3;
    let obj2;
    let obj3;
    let obj4;
    let str;
    const openAlert = useAlertStore.openAlert;
    const obj = { header: authStore2(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: authStore2(AlertActions, obj3) };
    obj2 = { style: closure_1.raisedIcon, children: authStore2(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
    useAlertStore;
    const AlertModal = AlertModal2.AlertModal;
    intl = intl4.intl;
    const intl2 = intl4.intl;
    formatToPlainString = intl2.formatToPlainString;
    YOeM7B = intl4.t.YOeM7B;
    const currentUser = UserStore.getCurrentUser();
    str = undefined;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "current user";
    }
    obj3 = { children: authStore2(AlertActionButton, obj4, "confirm") };
    AlertActions = tmp(5305).AlertActions;
    obj4 = { onPress: callback1, text: intl3.string(intl4.t["3PatSz"]) };
    AlertActionButton = tmp(5305).AlertActionButton;
    intl3 = tmp(1126).intl;
    openAlert("already-logged-in-alert", authStore2(AlertModal, obj));
  }, items3);
  const items4 = [token, callback2, callback3];
  const callback4 = onPress.useCallback(height(function*(arg0, value) {
    let closure_2;
    let obj6;
    let tmp;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c3;
      try {
        let str;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp4;
            str = undefined;
            c3 = 1;
            if (null == token) {
              const obj9 = tmp(bottom[15]);
              obj9.track(constants.ONE_TIME_LOGIN_ERROR, { source: "native_modal", error_reason: "missing_token", error_message: "No token provided" });
              callback2();
              c3 = 0;
              c5 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else if (authenticated.isAuthenticated()) {
              callback3();
              c3 = 0;
              c5 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              const obj5 = tmp(bottom[15]);
              obj5.track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
              c4 = 2;
              c5 = 1;
              const obj10 = { value: obj6.oneTimeLogin(tmp49), done: false };
              obj6 = tmp(bottom[24]);
              return obj10;
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            tmp = bottom;
            const _Error = Error;
            str = "Login failed";
            if (tmp instanceof Error) {
              str = tmp.message;
            }
            const obj11 = { source: "native_modal", error_reason: "api_error", error_message: str };
            const obj3 = tmp(bottom[15]);
            obj3.track(constants.ONE_TIME_LOGIN_ERROR, obj11);
            closure_129_6();
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            let obj = tmp(bottom[15]);
            obj.track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              const obj = closure_1_1(closure_1_2[16]);
              obj.popWithKey("ONE_TIME_LOGIN_MODAL");
            }, 1500);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp41) {
        bottom = tmp41;
        if (0 === c3) {
          c5 = 3;
          throw tmp41;
        } else {
          c4 = 1;
        }
      }
    }
  }), items4);
  const items5 = [callback4];
  const effect1 = onPress.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo, children: items6 };
  let obj2 = { absolute: true, wide: true, tall: true, gradientOverride: closure_11[5], mix: true, angleOverride: 0, mixAmount: obj3 };
  obj3 = { dark: token(4936).OverlayOpacity.LEVEL_1 };
  const tmp11 = ThemedGradientDefault;
  items6 = [closure_12(tmp11, obj2), ];
  let obj4 = { style: tmp.container, children: items9 };
  let obj5 = { style: tmp.centerContent, children: items7 };
  let obj6 = { source: token(14061), style: tmp.logo };
  const tmp12 = FastImageDefault;
  items7 = [closure_12(tmp12, obj6), ];
  let obj7 = { style: tmp.loadingContainer, children: items8 };
  items8 = [closure_12(callback2, {}), ];
  let obj8 = { variant: "text-lg/semibold", children: intl.string(token(1126).t.W9uNdG) };
  const Text = token(5088).Text;
  intl = token(1126).intl;
  items8[1] = closure_12(Text, obj8);
  items7[1] = closure_13(callback1, obj7);
  items9 = [closure_13(callback1, obj5), ];
  let obj9 = { style: tmp.bottomContent, children: items10 };
  let obj10 = { variant: "text-sm/normal", children: intl2.string(token(1126).t["ZXe5/Y"]) };
  const Text2 = token(5088).Text;
  intl2 = token(1126).intl;
  items10 = [closure_12(Text2, obj10), ];
  let obj11 = { textColor: "text-default", text: intl3.string(token(1126).t.FIEwfG), variant: "text-sm/medium", onPress, textStyle: tmp.link };
  const LinkButton = token(6622).LinkButton;
  intl3 = token(1126).intl;
  items10[1] = closure_12(LinkButton, obj11);
  items9[1] = closure_13(callback1, obj9);
  items6[1] = closure_13(callback1, obj4);
  return closure_13(callback1, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default tmp6;
