// Module ID: 14187
// Function ID: 109012
// Dependencies: [31, 27, 14161, 33, 3991, 4554, 14188, 4131, 4134, 689, 1324, 14189, 2]

// Module 14187
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import THEME_ITEM_WIDTH from "THEME_ITEM_WIDTH";
import { jsx } from "jsxProd";
import module_3991 from "module_3991";
import importDefaultResult from "module_3991";

const require = arg1;
let num = 0;
let processColorResult = module_3991.processColor("rgba(0, 0, 0, 0)");
if (null != processColorResult) {
  num = processColorResult;
}
let closure_7 = require("module_3991").createAnimatedComponent(require("LinearGradient").LinearGradientNativeComponent);
let items = [num, num];
let closure_8 = { colors: items, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
let closure_9 = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const memoResult = importAllResult.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  isDimmed = isDimmed.isDimmed;
  const themes = isDimmed.themes;
  const themeIndex = isDimmed.themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = themes(themeIndex[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let StyleSheet;
  let memo;
  let themeState;
  let tweener;
  let sharedValue;
  const tmp3 = themes(themeIndex[10])("SettingsAppearanceGradientBackground");
  StyleSheet = tmp3;
  let items = [tmp3];
  memo = BACKGROUND_SURFACE_HIGH.useMemo(() => c4 ? ["mobile-visual-refresh"] : [], items);
  const items1 = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const tmp5 = (function useThemeStateTracker(BACKGROUND_SURFACE_HIGH) {
    let tmp = BACKGROUND_SURFACE_HIGH;
    let obj = isDimmed(themeIndex[6]);
    const launchWelcomeSystemTheme = obj.useLaunchWelcomeSystemTheme();
    if ("system" === BACKGROUND_SURFACE_HIGH.theme) {
      tmp = launchWelcomeSystemTheme;
    }
    isDimmed = tmp;
    obj = { themePrev: tmp, themeCurrent: tmp };
    const themeState = isDimmed(themeIndex[4]).useSharedValue(obj);
    const obj2 = isDimmed(themeIndex[4]);
    const tweener = isDimmed(themeIndex[4]).useSharedValue(0);
    const items = [tmp, themeState, tweener, launchWelcomeSystemTheme];
    const effect = BACKGROUND_SURFACE_HIGH.useEffect(() => {
      const result = themeState.set({ themePrev: themeState.get().themeCurrent, themeCurrent: closure_0 });
      const result1 = tweener.set(0);
      const obj = { themePrev: themeState.get().themeCurrent, themeCurrent: closure_0 };
      const result2 = tweener.set(isDimmed(themeIndex[7]).withTiming(1, isDimmed(themeIndex[8]).timingStandard));
    }, items);
    return { themeState, tweener };
  })(BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    if (isDimmed) {
      prop = memo.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = memo.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return isDimmed(themeIndex[6]).convertThemesToAnimatedThemes(themes, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[themeIndex];
  }, items1));
  themeState = tmp5.themeState;
  tweener = tmp5.tweener;
  let obj = isDimmed(themeIndex[4]);
  sharedValue = obj.useSharedValue({ width: 0, height: 0 });
  const items2 = [sharedValue];
  const callback = BACKGROUND_SURFACE_HIGH.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
  }, items2);
  class P {
    constructor() {
      value = c8.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = themeState;
          value1 = themeState.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = isDimmed;
          tmp5 = themeIndex;
          num = 4;
          obj = isDimmed(themeIndex[4]);
          tmp6 = tweener;
          items = [, ];
          items[0] = themePrev.angle;
          items[1] = themeCurrent.angle;
          num2 = 90;
          tmp8 = themes;
          num3 = 11;
          diff = 90 - obj.interpolate(tweener.get(), [0, 1], items);
          tmp9 = themes(themeIndex[11])(diff, width, height);
          obj = {};
          obj.colors = colors.map((arg0, arg1) => {
            const obj = isDimmed(themeIndex[4]);
            const items = [colors[arg1].hex, colors[arg1].hex];
            const processColorResult = obj.processColor(isDimmed(themeIndex[4]).interpolateColor(outer1_7.get(), [0, 1], items));
            let num = 0;
            if (null != processColorResult) {
              num = processColorResult;
            }
            return num;
          });
          obj.locations = colors.map((arg0, arg1) => {
            const items = [colors[arg1].stop / 100, colors[arg1].stop / 100];
            return isDimmed(themeIndex[4]).interpolate(outer1_7.get(), [0, 1], items);
          });
          obj1 = {};
          num4 = 2;
          obj1.x = (width / 2 + tmp9[0]) / width;
          num5 = 1;
          obj1.y = (height / 2 - tmp9[1]) / height;
          obj.startPoint = obj1;
          obj2 = {};
          obj2.x = (width / 2 - tmp9[0]) / width;
          obj2.y = (height / 2 + tmp9[1]) / height;
          obj.endPoint = obj2;
          return obj;
        }
      }
      return c8;
    }
  }
  obj = { gradientSize: sharedValue, animatedLinearGradientLoadingProps: sharedValue, themeState, interpolate: isDimmed(themeIndex[4]).interpolate, tweener, getGradientStartPoint: themes(themeIndex[11]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor };
  P.__closure = obj;
  P.__workletHash = 5151435414824;
  P.__initData = closure_9;
  obj = { style: StyleSheet.absoluteFill, onLayout: callback };
  const animatedProps = isDimmed(themeIndex[4]).useAnimatedProps(P);
  const merged = Object.assign(sharedValue);
  obj["animatedProps"] = animatedProps;
  return themeState(tweener, obj);
});
let result = require("THEME_ITEM_WIDTH").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;
