// Module ID: 13406
// Function ID: 13407
// Name: OneTimeLoginModal
// Dependencies: [5, 19, 17, 502, 1372, 1074, 1229, 21, 4836, 576, 1613, 1479, 1365, 1241, 5039, 4692, 1101, 5205, 5209, 6028, 1115, 5209, 6010, 5437, 4652, 13407, 4832, 6361, 2]
// Exports: default

// Module 13406 (OneTimeLoginModal)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let bottom, c4, c5, dependencyMap, importDefault;

let c10;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, Image: metroImportDefault } = react_native);
({ Routes: c10, AnalyticEvents: unpackModuleId } = Constants);
let closure_12 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MOBILE;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, centerContent: { flex: 1, justifyContent: "center", alignItems: "center" }, bottomContent: obj3, logo: { width: 80, height: 80, alignSelf: "center" }, loadingContainer: obj4, link: obj5, raisedIcon: size };
obj2 = { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: nativeDefault.radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", marginBottom: 48 };
obj5 = { textDecorationLine: "underline", textDecorationColor: nativeDefault.colors.TEXT_DEFAULT, flexShrink: 1 };
size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
let closure_15 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
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
  let onPress;
  let tmp = closure_15();
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
    obj.track(unpackModuleId.ONE_TIME_LOGIN_MODAL_OPENED, obj2);
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(unpackModuleId.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
  }, items1);
  onPress = onPress.useCallback(() => {
    const obj = closure_1(bottom[13]);
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj2 = closure_1(bottom[14]);
    obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj3 = token(bottom[15]);
    obj3.resetToAuthRoute();
  }, []);
  const callback1 = onPress.useCallback(() => {
    const obj = closure_1(bottom[13]);
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj2 = closure_1(bottom[14]);
    obj2.popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj3 = token(bottom[16]);
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
    const obj = { header: map1(hasOwnProperty, obj2), title: intl.string(intl4.t.L6htwI), content: intl2.string(intl4.t["4fnE/J"]), actions: map1(AlertActions, obj3) };
    obj2 = { style: closure_1.raisedIcon, children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
    useAlertStore;
    const AlertModal = AlertModal2.AlertModal;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj3 = { children: map1(AlertActionButton, obj4, "confirm") };
    AlertActions = AlertModal2.AlertActions;
    obj4 = { onPress, text: intl3.string(intl4.t["9vN0pz"]) };
    AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    openAlert("invalid-login-alert", map1(AlertModal, obj));
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
    const obj = { header: map1(hasOwnProperty, obj2), title: intl.string(intl4.t.MKW8z2), content: formatToPlainString(YOeM7B, { username: str }), actions: map1(AlertActions, obj3) };
    obj2 = { style: closure_1.raisedIcon, children: map1(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
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
    obj3 = { children: map1(AlertActionButton, obj4, "confirm") };
    AlertActions = tmp(5209).AlertActions;
    obj4 = { onPress: callback1, text: intl3.string(intl4.t["3PatSz"]) };
    AlertActionButton = tmp(5209).AlertActionButton;
    intl3 = tmp(1115).intl;
    openAlert("already-logged-in-alert", map1(AlertModal, obj));
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
        return { value: "HermesInternal", done: null };
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
              const obj9 = tmp(bottom[13]);
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
              const obj5 = tmp(bottom[13]);
              obj5.track(constants.ONE_TIME_LOGIN_ATTEMPTED, { source: "native_modal" });
              c4 = 2;
              c5 = 1;
              const obj10 = { value: obj6.oneTimeLogin(tmp49), done: false };
              obj6 = tmp(bottom[22]);
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
            const obj3 = tmp(bottom[13]);
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
            let obj = tmp(bottom[13]);
            obj.track(constants.LOGIN_SUCCESSFUL, { source: "native_modal", login_method: "one_time_login" });
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              const obj = closure_1_1(closure_1_2[14]);
              obj.popWithKey("ONE_TIME_LOGIN_MODAL");
            }, 1500);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
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
  let obj2 = { absolute: true, wide: true, tall: true, gradientOverride: closure_12[5], mix: true, angleOverride: 0, mixAmount: obj3 };
  obj3 = { dark: token(4652).OverlayOpacity.LEVEL_1 };
  const tmp11 = ThemedGradientDefault;
  items6 = [closure_13(tmp11, obj2), ];
  let obj4 = { style: tmp.container, children: items9 };
  let obj5 = { style: tmp.centerContent, children: items7 };
  let obj6 = { source: token(13407), style: tmp.logo };
  items7 = [closure_13(callback3, obj6), ];
  let obj7 = { style: tmp.loadingContainer, children: items8 };
  items8 = [closure_13(callback2, {}), ];
  let obj8 = { variant: "text-lg/semibold", children: intl.string(token(1115).t.W9uNdG) };
  const Text = token(4832).Text;
  intl = token(1115).intl;
  items8[1] = closure_13(Text, obj8);
  items7[1] = closure_14(callback1, obj7);
  items9 = [closure_14(callback1, obj5), ];
  let obj9 = { style: tmp.bottomContent, children: items10 };
  let obj10 = { variant: "text-sm/normal", children: intl2.string(token(1115).t["ZXe5/Y"]) };
  const Text2 = token(4832).Text;
  intl2 = token(1115).intl;
  items10 = [closure_13(Text2, obj10), ];
  let obj11 = { textColor: "text-default", text: intl3.string(token(1115).t.FIEwfG), variant: "text-sm/medium", onPress, textStyle: tmp.link };
  const LinkButton = token(6361).LinkButton;
  intl3 = token(1115).intl;
  items10[1] = closure_13(LinkButton, obj11);
  items9[1] = closure_14(callback1, obj9);
  items6[1] = closure_14(callback1, obj4);
  return closure_14(callback1, obj);
};
