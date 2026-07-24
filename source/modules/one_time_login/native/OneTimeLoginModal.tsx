// Module ID: 12920
// Function ID: 100294
// Name: OneTimeLoginModal
// Dependencies: [5, 31, 27, 1194, 1849, 653, 3943, 33, 4130, 689, 1557, 1450, 478, 675, 4337, 3981, 1198, 4472, 4475, 7577, 1212, 4475, 5588, 4662, 3941, 12921, 4126, 9231, 2]
// Exports: default

// Module 12920 (OneTimeLoginModal)
import closure_3 from "ME";
import result from "result";
import get_ActivityIndicator from "LinkButton";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_12 } from "items1";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, ActivityIndicator: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ Routes: closure_10, AnalyticEvents: closure_11 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 24, paddingTop: 128, paddingBottom: 96, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, alignItems: "center", flex: 1, justifyContent: "space-between" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.centerContent = { flex: 1, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.bottomContent = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.logo = { width: 80, height: 80, alignSelf: "center" };
let obj2 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", marginBottom: 48 };
_createForOfIteratorHelperLoose.loadingContainer = obj2;
let obj3 = { textDecorationLine: "underline", textDecorationColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, flexShrink: 1 };
_createForOfIteratorHelperLoose.link = obj3;
let obj4 = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "center" };
_createForOfIteratorHelperLoose.raisedIcon = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
  token = token.token;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const tmp2 = importDefault(1557)();
  const dependencyMap = tmp2;
  const height = importDefault(1450)().height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = callback.useMemo(() => {
    const obj = {};
    let str = "100%";
    if (obj2.isAndroid()) {
      str = height + tmp2.bottom;
    }
    obj.height = str;
    return obj;
  }, items);
  const effect = callback.useEffect(() => {
    let obj = tmp(tmp2[13]);
    obj = { has_token: null != token };
    obj.track(outer1_11.ONE_TIME_LOGIN_MODAL_OPENED, obj);
    tmp(tmp2[13]).track(outer1_11.DEEP_LINK_CLICKED, { source: "native_modal", destination: "one_time_login_native_modal", deep_link_provider: "native_app" });
  }, items1);
  callback = callback.useCallback(() => {
    tmp(tmp2[13]).track(outer1_11.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = tmp(tmp2[13]);
    tmp(tmp2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = tmp(tmp2[14]);
    token(tmp2[15]).resetToAuthRoute();
  }, []);
  const callback1 = callback.useCallback(() => {
    tmp(tmp2[13]).track(outer1_11.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = tmp(tmp2[13]);
    tmp(tmp2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = tmp(tmp2[14]);
    token(tmp2[16]).transitionTo(outer1_10.ME);
  }, []);
  const items2 = [callback, tmp.raisedIcon];
  const callback2 = callback.useCallback(() => {
    let obj = token(tmp2[17]);
    obj = {};
    obj = { style: tmp.raisedIcon, children: outer1_13(token(tmp2[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
    obj.header = outer1_13(callback1, obj);
    const intl = token(tmp2[20]).intl;
    obj.title = intl.string(token(tmp2[20]).t.L6htwI);
    const intl2 = token(tmp2[20]).intl;
    obj.content = intl2.string(token(tmp2[20]).t["4fnE/J"]);
    const obj1 = {};
    const obj2 = { onPress: callback };
    const intl3 = token(tmp2[20]).intl;
    obj2.text = intl3.string(token(tmp2[20]).t["9vN0pz"]);
    obj1.children = outer1_13(token(tmp2[18]).AlertActionButton, obj2, "confirm");
    obj.actions = outer1_13(token(tmp2[21]).AlertActions, obj1);
    obj.openAlert("invalid-login-alert", outer1_13(token(tmp2[18]).AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const fn = () => {
    let obj = token(tmp2[17]);
    obj = {};
    obj = { style: tmp.raisedIcon, children: outer1_13(token(tmp2[19]).CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
    obj.header = outer1_13(callback1, obj);
    const intl = token(tmp2[20]).intl;
    obj.title = intl.string(token(tmp2[20]).t.MKW8z2);
    const intl2 = token(tmp2[20]).intl;
    const obj1 = {};
    const currentUser = outer1_9.getCurrentUser();
    let username;
    if (null != currentUser) {
      username = currentUser.username;
    }
    let str = "current user";
    if (null != username) {
      str = username;
    }
    obj1.username = str;
    obj.content = intl2.formatToPlainString(token(tmp2[20]).t.YOeM7B, obj1);
    const obj2 = {};
    const obj3 = { onPress: callback1 };
    const intl3 = token(tmp2[20]).intl;
    obj3.text = intl3.string(token(tmp2[20]).t["3PatSz"]);
    obj2.children = outer1_13(token(tmp2[18]).AlertActionButton, obj3, "confirm");
    obj.actions = outer1_13(token(tmp2[21]).AlertActions, obj2);
    obj.openAlert("already-logged-in-alert", outer1_13(token(tmp2[18]).AlertModal, obj));
  };
  const callback3 = callback.useCallback(fn, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [token, callback2, callback3];
  const callback4 = callback.useCallback(height(fn), items4);
  const items5 = [callback4];
  const effect1 = callback.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo };
  obj = { absolute: true, wide: true, tall: true, gradientOverride: table[5], mix: true, angleOverride: 0 };
  obj = { dark: token(3941).OverlayOpacity.LEVEL_1 };
  obj.mixAmount = obj;
  const items6 = [callback(importDefault(4662), obj), ];
  let obj1 = { style: tmp.container };
  let obj2 = { style: tmp.centerContent };
  const tmp11 = importDefault(4662);
  const items7 = [callback(callback3, { source: token(12921), style: tmp.logo }), ];
  const obj4 = { style: tmp.loadingContainer };
  const items8 = [callback(callback2, {}), ];
  const obj5 = { variant: "text-lg/semibold" };
  let intl = token(1212).intl;
  obj5.children = intl.string(token(1212).t.W9uNdG);
  items8[1] = callback(token(4126).Text, obj5);
  obj4.children = items8;
  items7[1] = callback2(callback1, obj4);
  obj2.children = items7;
  const items9 = [callback2(callback1, obj2), ];
  const obj6 = { style: tmp.bottomContent };
  const obj7 = { variant: "text-sm/normal" };
  let intl2 = token(1212).intl;
  obj7.children = intl2.string(token(1212).t["ZXe5/Y"]);
  const items10 = [callback(token(4126).Text, obj7), ];
  const obj8 = { textColor: "text-default", text: null, variant: "text-sm/medium" };
  let intl3 = token(1212).intl;
  obj8.text = intl3.string(token(1212).t.FIEwfG);
  obj8.onPress = callback;
  obj8.textStyle = tmp.link;
  items10[1] = callback(token(9231).LinkButton, obj8);
  obj6.children = items10;
  items9[1] = callback2(callback1, obj6);
  obj1.children = items9;
  items6[1] = callback2(callback1, obj1);
  obj.children = items6;
  return callback2(callback1, obj);
};
