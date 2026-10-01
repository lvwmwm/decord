// Module ID: 14845
// Function ID: 14846
// Name: SettingsAppearanceGradientBackground
// Dependencies: [19, 17, 14819, 21, 4566, 5293, 14846, 4837, 4840, 576, 14847, 2]

// Module 14845 (SettingsAppearanceGradientBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LinearGradient from "LinearGradient" /* 5293 */;
import SettingsAppearancePickerUtils from "SettingsAppearancePickerUtils" /* 14846 */;
import react from "react" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 14819 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import size_mod from "module_2" /* 2 */;

let angle2, colors, diff, nativeEvent, num2, obj1, point, point1, set, themeCurrent, themePrev, tmp4, tmp5, tmp6, tmp9, value, value1;

let items;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let ReanimatedRexport = ReanimatedRexport_mod;
let num = ReanimatedRexport.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(LinearGradient.LinearGradientNativeComponent);
let animatedLinearGradientLoadingProps = { colors: items, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
items = [num, num];
const __initData = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const memoResult = react.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  let animatedProps;
  isDimmed = isDimmed.isDimmed;
  const themes = isDimmed.themes;
  const themeIndex = isDimmed.themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    let tmp2 = themeIndex;
    BACKGROUND_SURFACE_HIGH = themes(themeIndex[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let sharedValue2;
  animatedLinearGradientLoadingProps = BACKGROUND_SURFACE_HIGH;
  const memo = BACKGROUND_SURFACE_HIGH.useMemo(() => ["mobile-visual-refresh"], []);
  let items = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const memo1 = BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    const convertThemesToAnimatedThemes = SettingsAppearancePickerUtils.convertThemesToAnimatedThemes;
    SettingsAppearancePickerUtils;
    const tmp2 = themes;
    if (isDimmed) {
      prop = SettingsAppearanceConstants.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = SettingsAppearanceConstants.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return convertThemesToAnimatedThemes(tmp2, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[themeIndex];
  }, items);
  let sharedValue;
  let sharedValue1;
  let obj2 = isDimmed(themeIndex[6]);
  let launchWelcomeSystemTheme = obj2.useLaunchWelcomeSystemTheme();
  let tmp8 = memo1;
  if ("system" === memo1.theme) {
    tmp8 = launchWelcomeSystemTheme;
  }
  launchWelcomeSystemTheme = tmp8;
  const tmp5Result = isDimmed(themeIndex[4]);
  sharedValue = tmp5Result.useSharedValue({ themePrev: tmp8, themeCurrent: tmp8 });
  const tmp5Result4 = isDimmed(themeIndex[4]);
  sharedValue1 = tmp5Result4.useSharedValue(0);
  const items1 = [tmp8, sharedValue, sharedValue1, launchWelcomeSystemTheme];
  const effect = animatedLinearGradientLoadingProps.useEffect(() => {
    const obj = { themePrev: sharedValue.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result = sharedValue.set(obj);
    const result1 = sharedValue1.set(0);
    set = sharedValue1.set;
    const obj2 = isDimmed(themeIndex[7]);
    const result2 = set(obj2.withTiming(1, isDimmed(themeIndex[8]).timingStandard));
  }, items1);
  const tmp5Result5 = isDimmed(themeIndex[4]);
  sharedValue2 = tmp5Result5.useSharedValue({ width: 0, height: 0 });
  const items2 = [sharedValue2];
  const callback = animatedLinearGradientLoadingProps.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = sharedValue2.set(size);
  }, items2);
  const tmp5Result6 = isDimmed(themeIndex[4]);
  class P {
    constructor() {
      value = closure_7.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = closure_5;
          value1 = closure_5.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = isDimmed;
          tmp5 = themeIndex;
          angle = themePrev.angle;
          angle2 = themeCurrent.angle;
          obj = isDimmed(themeIndex[4]);
          tmp6 = closure_6;
          items = [, ];
          items[0] = angle;
          items[1] = angle2;
          num = 90;
          tmp8 = themes;
          diff = 90 - obj.interpolate(closure_6.get(), [0, 1], items);
          tmp9 = themes(themeIndex[10])(diff, width, height);
          obj1 = { colors: null, locations: null, startPoint: null, endPoint: null };
          obj1.colors = colors.map((item, index) => {
            const processColor = ReanimatedRexport.processColor;
            ReanimatedRexport;
            const items = [colors[index].hex, colors2[index].hex];
            const obj = ReanimatedRexport;
            let num = processColor(obj.interpolateColor(sharedValue1.get(), [0, 1], items));
            if (num == null) {
              num = 0;
            }
            return num;
          });
          obj1.locations = colors.map((item, index) => {
            const items = [colors[index].stop / 100, colors2[index].stop / 100];
            const obj = ReanimatedRexport;
            return obj.interpolate(sharedValue1.get(), [0, 1], items);
          });
          point = { x: null, y: null };
          num2 = 2;
          point.x = (width / 2 + tmp9[0]) / width;
          point.y = (height / 2 - tmp9[1]) / height;
          obj1.startPoint = point;
          point1 = { x: null, y: null };
          point1.x = (width / 2 - tmp9[0]) / width;
          point1.y = (height / 2 + tmp9[1]) / height;
          obj1.endPoint = point1;
          return obj1;
        }
      }
      return closure_1_8;
    }
  }
  P.__closure = { gradientSize: sharedValue2, animatedLinearGradientLoadingProps, themeState: sharedValue, interpolate: isDimmed(themeIndex[4]).interpolate, tweener: sharedValue1, getGradientStartPoint: themes(themeIndex[10]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor };
  P.__workletHash = 5151435414824;
  P.__initData = __initData;
  const obj4 = { style: memo.absoluteFill, onLayout: callback, animatedProps };
  ({ gradientSize: sharedValue2, animatedLinearGradientLoadingProps, themeState: sharedValue, interpolate: isDimmed(themeIndex[4]).interpolate, tweener: sharedValue1, getGradientStartPoint: themes(themeIndex[10]), processColor: isDimmed(themeIndex[4]).processColor, interpolateColor: isDimmed(themeIndex[4]).interpolateColor });
  animatedProps = tmp5Result6.useAnimatedProps(P);
  const merged = Object.assign(animatedLinearGradientLoadingProps);
  return sharedValue1(sharedValue2, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;
