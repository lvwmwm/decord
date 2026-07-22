// Module ID: 14614
// Function ID: 110139
// Name: getInitialAuthScreen
// Dependencies: []

// Module 14614 (getInitialAuthScreen)
function getInitialAuthScreen() {
  return AuthStates.WELCOME;
}
function NavigatorWithCaptchaHook() {
  let obj = callback(dependencyMap[12]);
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp3 = callback4();
  const tmp4 = callback2(importAllResult.useState(getInitialAuthScreen()), 2);
  const first = tmp4[0];
  let callback = tmp4[1];
  const tmp6 = callback2(importAllResult.useState(false), 2);
  const importDefault = tmp7;
  let obj1 = callback(dependencyMap[14]);
  const keyboardState = obj1.useKeyboardState((height) => height.height);
  obj = {};
  callback = importAllResult.useCallback((arg0) => {
    let name;
    if (null != arg0) {
      if (null != arg0.routes[arg0.index]) {
        name = tmp3.name;
      }
    }
    let tmp4 = null;
    if (null != name) {
      tmp4 = name;
    }
    closure_0(tmp4);
    tmp7(false);
  }, []);
  obj = {};
  const tmp11 = closure_10;
  const tmp12 = closure_9;
  const tmp2 = importDefault(dependencyMap[13])();
  obj.backgroundImageSource = callback(dependencyMap[16]);
  obj.backgroundImageCover = true;
  const items = [callback3(importDefault(dependencyMap[15]), obj), ];
  if (tmp2) {
    obj1 = { value: tmp7 };
    const obj2 = {};
    const items1 = [tmp3.wideOuterContainer, ];
    let tmp24 = null;
    if (tmp9) {
      const obj3 = { paddingBottom: keyboardState };
      tmp24 = obj3;
    }
    items1[1] = tmp24;
    obj2.style = items1;
    const obj4 = {};
    const items2 = [tmp3.wideCard, , ];
    let tmp27 = null;
    if (null != first) {
      const obj5 = {};
      let num4 = 520;
      if (null != obj[first]) {
        num4 = tmp29;
      }
      obj5.height = num4;
      tmp27 = obj5;
    }
    items2[1] = tmp27;
    let obj6 = null;
    if (tmp9) {
      obj6 = {};
    }
    items2[2] = obj6;
    obj4.style = items2;
    const obj7 = { "Bool(false)": -1, "Bool(false)": "Not Eligible", "Bool(false)": "Not Eligible", "Bool(false)": "long-animation-frame", "Bool(false)": true, "Bool(false)": "onunhandledrejection", screens: closure_12, containerStyle: tmp3.cardContainer };
    let transparent = null;
    if (first === AuthStates.WELCOME) {
      transparent = tmp3.transparent;
    }
    obj7.viewStyle = transparent;
    obj7.initialRouteName = getInitialAuthScreen();
    obj7.onWillFocus = closure_5.dismiss;
    obj7.onStateChange = callback;
    obj7.headerStyle = tmp6[0] ? tmp3.wideHeader : tmp3.wideHeaderFlat;
    const obj8 = {};
    let num7 = 20;
    if (obj15.isAndroid()) {
      num7 = importDefault(dependencyMap[11]).space.PX_12;
    }
    obj8.paddingLeft = num7;
    obj8.paddingTop = importDefault(dependencyMap[11]).space.PX_24;
    obj8.paddingBottom = importDefault(dependencyMap[11]).space.PX_16;
    obj7.headerLeftContainerStyle = obj8;
    obj7.disableHeaderAnimation = true;
    obj4.children = callback3(callback(dependencyMap[18]).Navigator, obj7);
    obj2.children = callback3(closure_6, obj4);
    obj1.children = callback3(closure_6, obj2);
    let tmp14Result = tmp14(tmp15(tmp16[17]).WideAuthScrollContext.Provider, obj1);
    const obj15 = callback(dependencyMap[19]);
    const tmp21 = callback3;
    const tmp22 = closure_6;
    const tmp25 = callback3;
    const tmp26 = closure_6;
    const tmp30 = callback3;
  } else {
    const obj9 = { screens: allAuthScreens };
    ({ transparent: obj5.viewStyle, transparent: obj5.containerStyle } = tmp3);
    const intl = tmp15(tmp16[20]).intl;
    obj9.headerBackTitle = intl.string(tmp15(tmp16[20]).t.13/7kX);
    obj9.initialRouteName = getInitialAuthScreen();
    obj9.onWillFocus = closure_5.dismiss;
    const obj10 = { borderBottomWidth: 0 };
    obj9.headerStyle = obj10;
    tmp14Result = tmp14(tmp15(tmp16[18]).Navigator, obj9);
  }
  items[1] = tmp14Result;
  obj.children = items;
  return tmp11(tmp12, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ Keyboard: closure_5, View: closure_6 } = tmp2);
const AuthStates = arg1(dependencyMap[3]).AuthStates;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
const allAuthScreens = obj1.getAllAuthScreens();
const entries = Object.entries(allAuthScreens);
let closure_12 = Object.fromEntries(entries.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  const items = [tmp, ];
  let obj = {};
  const merged = Object.assign(tmp2);
  obj = null;
  if (tmp2.fullscreen) {
    obj = { justifyContent: true, maxWidth: true };
  }
  const merged1 = Object.assign(obj);
  let tmp5 = null;
  if (tmp !== AuthStates.MFA) {
    tmp5 = null;
    if (tmp !== AuthStates.WELCOME) {
      obj = {
        headerLeft(arg0) {
              function backImage() {
                return callback2(callback(closure_2[6]).HeaderBackImage, {});
              }
              if (null != lib.headerLeft) {
                let obj = {};
                const merged = Object.assign(arg0);
                obj["backImage"] = backImage;
                let headerLeftResult = lib.headerLeft(obj);
              } else {
                obj = {};
                const merged1 = Object.assign(arg0);
                obj["backImage"] = backImage;
                headerLeftResult = callback(lib(closure_2[7]).BackButtonWithTracking, obj);
              }
              return headerLeftResult;
            }
      };
      tmp5 = obj;
    }
  }
  const merged2 = Object.assign(tmp5);
  const items1 = [AuthStates.REGISTER_IDENTITY, AuthStates.LOGIN, AuthStates.AGE_GATE_UNDERAGE];
  let tmp8 = null;
  if (set.has(tmp)) {
    const obj1 = { cardStyleInterpolator: arg1(dependencyMap[8]).CardStyleInterpolators.forFadeFromCenter };
    tmp8 = obj1;
  }
  const merged3 = Object.assign(tmp8);
  items[1] = obj;
  return items;
}));
let obj = {};
let num = 540;
if (arg1(dependencyMap[9]).hasWebAuthn) {
  num = 600;
}
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
let obj3 = arg1(dependencyMap[10]);
obj = { transparent: { backgroundColor: "transparent" }, cardContainer: { <string:2748081004>: null, <string:855833682>: 1416709355, <string:1454072520>: 822083585 }, wideOuterContainer: { "Null": "<string:3942646034>", "Null": "<string:3355444267>" } };
obj1 = { borderRadius: importDefault(dependencyMap[11]).radii.lg };
obj.wideCard = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.wideHeaderFlat = { borderBottomWidth: 0, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj3 = { borderBottomWidth: tmp2.StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj.wideHeader = obj3;
let closure_14 = obj3.createStyles(obj);
const context = importAllResult.createContext(() => {

});
const obj2 = { borderBottomWidth: 0, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo(function Auth() {
  const effect = importAllResult.useEffect(() => {
    callback2(closure_2[21]).initialize();
    return () => callback(closure_2[21]).terminate();
  }, []);
  const layoutEffect = importAllResult.useLayoutEffect(() => callback(closure_2[22]).trackAppUIViewed(), []);
  importDefault(dependencyMap[23])();
  let closure_0 = importAllResult.useRef(undefined);
  return callback3(context.Provider, { value: importAllResult.useCallback(() => callback(closure_2[7]).getTrackRegTransition(callback), [])(), children: callback3(NavigatorWithCaptchaHook, {}) });
});
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;
