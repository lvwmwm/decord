// Module ID: 18301
// Function ID: 18302
// Name: HomePanelContent
// Dependencies: [19, 17, 18018, 1072, 18302, 21, 5009, 18024, 18303, 1492, 5090, 12233, 10716, 18027, 9802, 5591, 575, 1377, 6016, 18377, 2]

// Module 18301 (HomePanelContent)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18024 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18302 */;
import GuildsBarDefault from "GuildsBar" /* 18303 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import HomeDrawerStore_mod from "HomeDrawerStore" /* 18018 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const react_native = tmp(6016);
function ContentMaskGradient(offsetX) {
  let items;
  let obj5;
  offsetX = offsetX.offsetX;
  let obj = offsetX(18024);
  const guildsBarPullX = obj.useHomeDrawerState().guildsBarPullX;
  const height = guildsBarPullX(1492)({ ignoreKeyboard: true }).height;
  let obj2 = offsetX(5090);
  const fn = function n() {
    let items;
    let tmp;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - guildsBarPullX.get()) };
    items = [obj2];
    tmp = roundToNearestPixelDefault;
    return obj;
  };
  fn.__closure = { roundToNearestPixel: guildsBarPullX(12233), offsetX, guildsBarPullX };
  fn.__workletHash = 7539125302557;
  fn.__initData = __initData;
  ({ roundToNearestPixel: guildsBarPullX(12233), offsetX, guildsBarPullX });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { pointerEvents: "none", style: items, children: closure_9(guildsBarPullX(10716), obj5) };
  items = [absoluteFill.absoluteFill, animatedStyle];
  const View = guildsBarPullX(5090).View;
  obj5 = { absolute: true, tall: true, wide: true, mix: true, componentStyles: { height } };
  return closure_9(View, obj4);
}
function HomeDrawerPanelContent() {
  let View2;
  let closure_2;
  let isClientThemeOrCustomThemeActive;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let ref;
  let tmp16Result;
  let tmp17;
  let tmp = GUILD_LIST_WIDTH;
  const tmp2 = closure_11();
  const tmp3 = dependencyMap;
  let obj = ref(18027);
  const drawerOpen = obj.useDrawerOpen();
  let obj2 = ref(18024);
  const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
  ref = isClientThemeOrCustomThemeActive.useRef(null);
  let obj3 = ref(18024);
  const homeDrawerState = obj3.useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const guildsBarDrawerStyle = homeDrawerState.guildsBarDrawerStyle;
  const tmp8 = HomeDrawerStore((maxX) => maxX.maxX);
  dependencyMap = tmp8;
  const obj4 = ref(9802);
  isClientThemeOrCustomThemeActive = obj4.useIsClientThemeOrCustomThemeActive();
  const obj5 = ref(5591);
  const token = obj5.useToken(panelTranslateX(575).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = ref(5591);
  const token1 = obj6.useToken(panelTranslateX(575).colors.PANEL_BG);
  const fn = function n() {
    let items;
    let items1;
    let obj2;
    const tmp = isClientThemeOrCustomThemeActive;
    if (!tmp) {
      let obj;
      if (closure_2 > 0) {
        obj = { backgroundColor: obj2.interpolateColor(panelTranslateX.get(), items, items1) };
        items = [0, tmp2];
        items1 = [token, token1];
        obj2 = ReanimatedRexport;
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  const obj7 = ref(5090);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(5090).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 11992338029652;
  fn.__initData = __initData2;
  ({ isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp8, interpolateColor: ref(5090).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 });
  const animatedStyle = obj7.useAnimatedStyle(fn);
  HomeDrawerStore = isClientThemeOrCustomThemeActive.useRef(false);
  let items = [drawerOpen];
  const effect = isClientThemeOrCustomThemeActive.useEffect(() => {
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      if (ref.current) {
        const obj2 = { ref, delay: 100 };
        const tmpResult = react_native;
        const result = tmpResult.setAccessibilityFocus(obj2);
      } else {
        tmp3.current = true;
      }
    }
  }, items);
  const fn2 = function k() {
    let items1;
    let items2;
    let obj3;
    let tmpResult;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = panelTranslateX.get();
    const items = [0, useHomeDrawerGesture.INITIAL_OPEN_WIDTH];
    const interpolateResult = interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
    const obj = panelTranslateX;
    const tmp6 = isClientThemeOrCustomThemeActive;
    if (tmp6) {
      obj3 = { backgroundColor: "transparent", opacity: interpolateResult };
      const obj2 = { backgroundColor: "transparent", opacity: interpolateResult };
    } else {
      obj3 = { backgroundColor: tmpResult.interpolateColor(obj.get(), items1, items2), opacity: interpolateResult };
      items1 = [0, closure_2];
      items2 = [token, token1];
      tmpResult = ReanimatedRexport;
    }
    return obj3;
  };
  const obj9 = ref(5090);
  fn2.__closure = { interpolate: ref(5090).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(18024).INITIAL_OPEN_WIDTH, Extrapolation: ref(5090).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(5090).interpolateColor, maxX: tmp8, baseLowest: token, panelBg: token1 };
  fn2.__workletHash = 380238951470;
  fn2.__initData = __initData3;
  ({ interpolate: ref(5090).interpolate, panelTranslateX, INITIAL_OPEN_WIDTH: ref(18024).INITIAL_OPEN_WIDTH, Extrapolation: ref(5090).Extrapolation, isGradientTheme: isClientThemeOrCustomThemeActive, interpolateColor: ref(5090).interpolateColor, maxX: tmp8, baseLowest: token, panelBg: token1 });
  const animatedStyle1 = obj9.useAnimatedStyle(fn2);
  const obj11 = { style: items1, children: tmp17(View2, obj12) };
  items1 = [tmp2.container, animatedStyle];
  const View = panelTranslateX(5090).View;
  obj12 = { ref, style: items2, children: items3 };
  items2 = [drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault, guildsBarDrawerStyle];
  View2 = panelTranslateX(5090).View;
  items3 = [closure_9(panelTranslateX(18303), { enableHome: true }), , ];
  const obj13 = { style: items4, pointerEvents: "none", collapsable: false, children: tmp16Result };
  items4 = [tmp2.contentMask, { left: tmp }, animatedStyle1];
  tmp16Result = null;
  const View3 = tmp10(5090).View;
  tmp17 = closure_10;
  if (isClientThemeOrCustomThemeActive) {
    const obj14 = { offsetX: tmp };
    tmp16Result = tmp16(ContentMaskGradient, obj14);
  }
  items3[1] = closure_9(View3, obj13);
  let tmp16Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp16Result2 = tmp16(tmp10(18377), {});
  }
  items3[2] = tmp16Result2;
  return closure_9(View, obj11);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native2);
let HomeDrawerStore = HomeDrawerStore_mod;
const DM_WIDTH = Constants.DM_WIDTH;
const GUILD_LIST_WIDTH = GuildsBarConstants.GUILD_LIST_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: obj2, contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" } };
  return obj;
});
const __initData = { code: "function HomePanelContentTsx1(){const{roundToNearestPixel,offsetX,guildsBarPullX}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};}" };
const __initData2 = { code: "function HomePanelContentTsx2(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const __initData3 = { code: "function HomePanelContentTsx3(){const{interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg}=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};}" };
const memoResult = react.memo(function HomePanelContent() {
  let obj3;
  let tmp3Result;
  const tmp = closure_11(DM_WIDTH);
  const obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    tmp3Result = tmp3(HomeDrawerPanelContent, {});
  } else {
    const obj2 = { style: tmp.container, children: React4(hasOwnProperty, obj3) };
    obj3 = { style: tmp.guildLisetContainerDefault, children: React4(GuildsBarDefault, {}) };
    tmp3Result = tmp3(hasOwnProperty, obj2);
  }
  return tmp3Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;
