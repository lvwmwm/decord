// Module ID: 12747
// Function ID: 97782
// Name: OneTimeLoginModal
// Dependencies: []
// Exports: default

// Module 12747 (OneTimeLoginModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6, Image: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ Routes: closure_10, AnalyticEvents: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = arg1(dependencyMap[6]).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { "Null": "png", "Null": null, "Null": "stretch", "Null": "row", "Null": "center", "Null": "flex-start", "Null": 16, borderRadius: importDefault(dependencyMap[9]).radii.md };
obj.container = obj;
obj.centerContent = {};
const tmp4 = arg1(dependencyMap[7]);
obj.bottomContent = { alignItems: "center", gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.logo = {};
const obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.loadingContainer = obj2;
const obj1 = { alignItems: "center", gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.link = { textDecorationColor: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
const obj3 = { textDecorationColor: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
obj.raisedIcon = { borderRadius: importDefault(dependencyMap[9]).radii.round, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH };
let closure_15 = obj.createStyles(obj);
const obj4 = { borderRadius: importDefault(dependencyMap[9]).radii.round, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/one_time_login/native/OneTimeLoginModal.tsx");

export default function OneTimeLoginModal(token) {
  token = token.token;
  const arg1 = token;
  const tmp = callback4();
  const importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[10])();
  const dependencyMap = tmp2;
  const height = importDefault(dependencyMap[11])().height;
  let callback = height;
  const items = [tmp2.bottom, height];
  const items1 = [token];
  const memo = React.useMemo(() => {
    const obj = {};
    let str = "100%";
    if (obj2.isAndroid()) {
      str = height + tmp2.bottom;
    }
    obj.height = str;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    let obj = tmp(tmp2[13]);
    obj = { has_token: null != token };
    obj.track(constants2.ONE_TIME_LOGIN_MODAL_OPENED, obj);
    tmp(tmp2[13]).track(constants2.DEEP_LINK_CLICKED, {});
  }, items1);
  callback = React.useCallback(() => {
    tmp(tmp2[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "loading" });
    const obj = tmp(tmp2[13]);
    tmp(tmp2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = tmp(tmp2[14]);
    token(tmp2[15]).resetToAuthRoute();
  }, []);
  const React = callback;
  const callback1 = React.useCallback(() => {
    tmp(tmp2[13]).track(constants2.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: "already_logged_in" });
    const obj = tmp(tmp2[13]);
    tmp(tmp2[14]).popWithKey("ONE_TIME_LOGIN_MODAL");
    const obj2 = tmp(tmp2[14]);
    token(tmp2[16]).transitionTo(constants.ME);
  }, []);
  const items2 = [callback, tmp.raisedIcon];
  const callback2 = React.useCallback(() => {
    let obj = token(tmp2[17]);
    obj = {};
    obj = { style: tmp.raisedIcon, children: callback(token(tmp2[19]).CircleErrorIcon, { size: "custom", style: {} }) };
    obj.header = callback(callback1, obj);
    const intl = token(tmp2[20]).intl;
    obj.title = intl.string(token(tmp2[20]).t.L6htwI);
    const intl2 = token(tmp2[20]).intl;
    obj.content = intl2.string(token(tmp2[20]).t.4fnE/J);
    const obj1 = {};
    const obj2 = { onPress: callback };
    const intl3 = token(tmp2[20]).intl;
    obj2.text = intl3.string(token(tmp2[20]).t.9vN0pz);
    obj1.children = callback(token(tmp2[18]).AlertActionButton, obj2, "confirm");
    obj.actions = callback(token(tmp2[21]).AlertActions, obj1);
    obj.openAlert("invalid-login-alert", callback(token(tmp2[18]).AlertModal, obj));
  }, items2);
  const items3 = [tmp.raisedIcon, callback1];
  const fn = () => {
    let obj = token(tmp2[17]);
    obj = {};
    obj = { style: tmp.raisedIcon, children: callback(token(tmp2[19]).CircleErrorIcon, { size: "custom", style: {} }) };
    obj.header = callback(callback1, obj);
    const intl = token(tmp2[20]).intl;
    obj.title = intl.string(token(tmp2[20]).t.MKW8z2);
    const intl2 = token(tmp2[20]).intl;
    const obj1 = {};
    const currentUser = currentUser.getCurrentUser();
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
    obj3.text = intl3.string(token(tmp2[20]).t.3PatSz);
    obj2.children = callback(token(tmp2[18]).AlertActionButton, obj3, "confirm");
    obj.actions = callback(token(tmp2[21]).AlertActions, obj2);
    obj.openAlert("already-logged-in-alert", callback(token(tmp2[18]).AlertModal, obj));
  };
  const callback3 = React.useCallback(fn, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [token, callback2, callback3];
  const callback4 = React.useCallback(callback(fn), items4);
  let closure_8 = callback4;
  const items5 = [callback4];
  const effect1 = React.useEffect(() => {
    callback4();
  }, items5);
  let obj = { style: memo };
  obj = { gradientOverride: closure_12[5] };
  obj = { dark: arg1(dependencyMap[24]).OverlayOpacity.LEVEL_1 };
  obj.mixAmount = obj;
  const items6 = [callback2(importDefault(dependencyMap[23]), obj), ];
  const obj1 = { style: tmp.container };
  const obj2 = { style: tmp.centerContent };
  const tmp11 = importDefault(dependencyMap[23]);
  const items7 = [callback2(callback3, { source: arg1(dependencyMap[25]), style: tmp.logo }), ];
  const obj4 = { style: tmp.loadingContainer };
  const items8 = [callback2(callback2, {}), ];
  const obj5 = { variant: "text-lg/semibold" };
  const intl = arg1(dependencyMap[20]).intl;
  obj5.children = intl.string(arg1(dependencyMap[20]).t.W9uNdG);
  items8[1] = callback2(arg1(dependencyMap[26]).Text, obj5);
  obj4.children = items8;
  items7[1] = callback3(callback1, obj4);
  obj2.children = items7;
  const items9 = [callback3(callback1, obj2), ];
  const obj6 = { style: tmp.bottomContent };
  const obj7 = { variant: "text-sm/normal" };
  const intl2 = arg1(dependencyMap[20]).intl;
  obj7.children = intl2.string(arg1(dependencyMap[20]).t.ZXe5/Y);
  const items10 = [callback2(arg1(dependencyMap[26]).Text, obj7), ];
  const obj8 = { "Bool(true)": 29246658, "Bool(true)": 2161, "Bool(true)": 1153585408 };
  const intl3 = arg1(dependencyMap[20]).intl;
  obj8.text = intl3.string(arg1(dependencyMap[20]).t.FIEwfG);
  obj8.onPress = callback;
  obj8.textStyle = tmp.link;
  items10[1] = callback2(arg1(dependencyMap[27]).LinkButton, obj8);
  obj6.children = items10;
  items9[1] = callback3(callback1, obj6);
  obj1.children = items9;
  items6[1] = callback3(callback1, obj1);
  obj.children = items6;
  return callback3(callback1, obj);
};
