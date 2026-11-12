// Module ID: 18905
// Function ID: 18906
// Name: HomePanelContent
// Dependencies: [19, 17, 18607, 1072, 18906, 21, 5243, 18613, 18907, 1493, 1652, 10507, 10202, 18616, 8995, 5839, 575, 1357, 6268, 18999, 2]

// Module 18905 (HomePanelContent)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import ThemedGradientDefault from "ThemedGradient" /* 10202 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10507 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18613 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18906 */;
import GuildsBarDefault from "GuildsBar" /* 18907 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18607 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault, obj1;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const react_native = tmp(6268);
function ContentMaskGradient(offsetX) {
  let items2;
  let obj3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = dependencyMap;
  offsetX = offsetX.offsetX;
  let obj = useHomeDrawerGesture;
  const guildsBarPullX = obj.useHomeDrawerState().guildsBarPullX;
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  let items = [closure_12, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = roundToNearestPixelDefault;
  items[2] = offsetX;
  items[3] = guildsBarPullX;
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class HomePanelContentTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      tmp = -closure_1;
      obj1.translateX = closure_0(tmp - closure_2.get());
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  HomePanelContentTsx1.__closure = items1;
  HomePanelContentTsx1.__workletHash = 2135715759940;
  HomePanelContentTsx1.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(HomePanelContentTsx1);
  let obj2 = { pointerEvents: "none", style: items2, children: React4(ThemedGradientDefault, obj3) };
  items2 = [absoluteFill.absoluteFill, animatedStyle];
  const View = tmp2(1652).View;
  obj3 = { absolute: true, tall: true, wide: true, mix: true, componentStyles: { height } };
  return React4(View, obj2);
}
function HomeDrawerPanelContent() {
  let View2;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj9;
  let ref;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp36Result;
  let tmp37;
  let tmp = GUILD_LIST_WIDTH;
  let tmp2 = closure_11();
  const tmp3 = ref;
  let obj = ref(18616);
  const drawerOpen = obj.useDrawerOpen();
  let obj2 = ref(18613);
  let obj3 = react;
  const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
  ref = react.useRef(null);
  const obj4 = ref(18613);
  const homeDrawerState = obj4.useHomeDrawerState();
  const panelTranslateX = homeDrawerState.panelTranslateX;
  const guildsBarDrawerStyle = homeDrawerState.guildsBarDrawerStyle;
  const tmp9 = HomeDrawerStore((maxX) => maxX.maxX);
  const obj5 = ref(8995);
  const isClientThemeOrCustomThemeActive = obj5.useIsClientThemeOrCustomThemeActive();
  const obj6 = ref(5839);
  const token = obj6.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj7 = ref(5839);
  const token1 = obj7.useToken(nativeDefault.colors.PANEL_BG);
  let items = [closure_14, isClientThemeOrCustomThemeActive, tmp9, , , , ];
  const useAnimatedStyle = ref(1652).useAnimatedStyle;
  ref(1652);
  items[3] = ref(1652).interpolateColor;
  items[4] = panelTranslateX;
  items[5] = token;
  items[6] = token1;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  class HomePanelContentTsx2 {
    constructor() {
      let items;
      let items1;
      const tmp = c0;
      if (!tmp) {
        let obj;
        if (c1 > 0) {
          obj = { backgroundColor: _undefined(_undefined2.get(), items, items1) };
          items = [0, tmp2];
          items1 = [c4, c5];
        }
        return obj;
      }
      obj = { backgroundColor: "transparent" };
    }
  }
  let items1 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  HomePanelContentTsx2.__closure = items1;
  HomePanelContentTsx2.__workletHash = 7998740320749;
  HomePanelContentTsx2.__initData = tmp15;
  const animatedStyle = useAnimatedStyle(HomePanelContentTsx2);
  importDefault = obj3.useRef(false);
  let items2 = [drawerOpen];
  const effect = obj3.useEffect(() => {
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
  }, items2);
  const items3 = [closure_15, , , , , , , , , ];
  const useAnimatedStyle2 = tmp3(1652).useAnimatedStyle;
  tmp3(1652);
  items3[1] = tmp3(1652).interpolate;
  items3[2] = panelTranslateX;
  items3[3] = tmp3(18613).INITIAL_OPEN_WIDTH;
  items3[4] = tmp3(1652).Extrapolation;
  items3[5] = isClientThemeOrCustomThemeActive;
  items3[6] = tmp3(1652).interpolateColor;
  items3[7] = tmp9;
  items3[8] = token;
  items3[9] = token1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  let c7;
  let c8;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items3;
  class HomePanelContentTsx3 {
    constructor() {
      let items1;
      let items2;
      let obj3;
      const items = [0, c2];
      const tmp = _undefined(_undefined2.get(), items, [1, 0], _undefined3.CLAMP);
      const obj = _undefined2;
      const tmp2 = c4;
      if (tmp2) {
        obj3 = { backgroundColor: "transparent", opacity: tmp };
        const obj2 = { backgroundColor: "transparent", opacity: tmp };
      } else {
        obj3 = { backgroundColor: _undefined4(obj.get(), items1, items2), opacity: tmp };
        items1 = [0, c6];
        items2 = [c7, c8];
      }
      return obj3;
    }
  }
  const items4 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  HomePanelContentTsx3.__closure = items4;
  HomePanelContentTsx3.__workletHash = 9398673657751;
  HomePanelContentTsx3.__initData = tmp25;
  const animatedStyle2 = useAnimatedStyle2(HomePanelContentTsx3);
  const obj8 = { style: items5, children: tmp37(View2, obj9) };
  items5 = [tmp2.container, animatedStyle];
  const View = tmp11(1652).View;
  obj9 = { ref, style: items6, children: items7 };
  items6 = [drawerOpen ? tmp2.guildsListContainerGestured : tmp2.guildLisetContainerDefault, guildsBarDrawerStyle];
  View2 = tmp11(1652).View;
  items7 = [closure_9(GuildsBarDefault, { enableHome: true }), , ];
  const obj10 = { style: items8, pointerEvents: "none", collapsable: false, children: tmp36Result };
  items8 = [tmp2.contentMask, { left: tmp }, animatedStyle2];
  tmp36Result = null;
  const View3 = tmp11(1652).View;
  tmp37 = closure_10;
  if (isClientThemeOrCustomThemeActive) {
    const obj11 = { offsetX: tmp };
    tmp36Result = tmp36(ContentMaskGradient, obj11);
  }
  items7[1] = closure_9(View3, obj10);
  let tmp36Result2 = null;
  if (doesLandOnHomeDrawer) {
    tmp36Result2 = tmp36(tmp11(18999), {});
  }
  items7[2] = tmp36Result2;
  return closure_9(View, obj8);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native2);
const DM_WIDTH = Constants.DM_WIDTH;
const GUILD_LIST_WIDTH = GuildsBarConstants.GUILD_LIST_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: obj2, contentMask: { position: "absolute", top: 0, bottom: 0, right: 0, overflow: "hidden" } };
  return obj;
});
let closure_12 = { code: "(function HomePanelContentTsx1(){let[roundToNearestPixel,offsetX,guildsBarPullX]=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-guildsBarPullX.get())}]};})" };
let closure_14 = { code: "(function HomePanelContentTsx2(){let[isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg]=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};})" };
let closure_15 = { code: "(function HomePanelContentTsx3(){let[interpolate,panelTranslateX,INITIAL_OPEN_WIDTH,Extrapolation,isGradientTheme,interpolateColor,maxX,baseLowest,panelBg]=this.__closure;const opacity=interpolate(panelTranslateX.get(),[0,INITIAL_OPEN_WIDTH],[1,0],Extrapolation.CLAMP);if(isGradientTheme){return{backgroundColor:'transparent',opacity:opacity};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg]),opacity:opacity};})" };
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
