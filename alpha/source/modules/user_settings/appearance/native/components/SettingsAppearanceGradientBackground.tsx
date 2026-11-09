// Module ID: 17612
// Function ID: 17613
// Name: SettingsAppearanceGradientBackground
// Dependencies: [19, 17, 17586, 21, 1652, 5715, 17613, 5370, 5373, 575, 17614, 2]

// Module 17612 (SettingsAppearanceGradientBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LinearGradient from "LinearGradient" /* 5715 */;
import SettingsAppearancePickerUtils from "SettingsAppearancePickerUtils" /* 17613 */;
import react from "react" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 17586 */;
import module_1652_mod from "module_1652" /* 1652 */;
import size_mod from "module_2" /* 2 */;

let colors, nativeEvent, num2, point, point1, set, themeCurrent, themePrev, tmp4, tmp5, tmp6, tmp7, value, value1;

let items;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let module_1652 = module_1652_mod;
let num = module_1652.processColor("rgba(0, 0, 0, 0)");
if (num == null) {
  num = 0;
}
module_1652 = module_1652_mod;
let closure_7 = module_1652.createAnimatedComponent(LinearGradient.LinearGradientNativeComponent);
let obj = { colors: items, locations: [], startPoint: { x: 0, y: 0 }, endPoint: { x: 0, y: 0 } };
items = [num, num];
let closure_9 = { code: "(function SettingsAppearanceGradientBackgroundTsx1(){let[gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor]=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};})" };
const memoResult = react.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  isDimmed = isDimmed.isDimmed;
  const themes = isDimmed.themes;
  const themeIndex = isDimmed.themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    let tmp2 = themeIndex;
    BACKGROUND_SURFACE_HIGH = themes(themeIndex[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let sharedValue2;
  obj = BACKGROUND_SURFACE_HIGH;
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
  const effect = obj.useEffect(() => {
    obj = { themePrev: sharedValue.get().themeCurrent, themeCurrent: launchWelcomeSystemTheme };
    const result = sharedValue.set(obj);
    const result1 = sharedValue1.set(0);
    set = sharedValue1.set;
    const obj2 = isDimmed(themeIndex[7]);
    const result2 = set(obj2.withTiming(1, isDimmed(themeIndex[8]).timingStandard));
  }, items1);
  const tmp5Result5 = isDimmed(themeIndex[4]);
  sharedValue2 = tmp5Result5.useSharedValue({ width: 0, height: 0 });
  const items2 = [sharedValue2];
  const callback = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
    const result = sharedValue2.set(size);
  }, items2);
  const items3 = [closure_9, sharedValue2, obj, sharedValue, , , , , ];
  const useAnimatedProps = tmp5(tmp6[4]).useAnimatedProps;
  isDimmed(themeIndex[4]);
  items3[4] = isDimmed(themeIndex[4]).interpolate;
  items3[5] = sharedValue1;
  items3[6] = themes(themeIndex[10]);
  items3[7] = isDimmed(themeIndex[4]).processColor;
  items3[8] = isDimmed(themeIndex[4]).interpolateColor;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items3;
  const tmp15 = obj;
  class SettingsAppearanceGradientBackgroundTsx1 {
    constructor() {
      value = colors.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = closure_2;
          value1 = closure_2.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          themeCurrent = value1.themeCurrent;
          colors = themeCurrent.colors;
          tmp4 = closure_3;
          tmp5 = closure_4;
          items = [, ];
          items[0] = themePrev.angle;
          items[1] = themeCurrent.angle;
          num = 90;
          tmp6 = closure_5;
          tmp7 = closure_5(90 - closure_3(closure_4.get(), [0, 1], items), width, height);
          obj = { colors: null, locations: null, startPoint: null, endPoint: null };
          obj.colors = colors.map((item, index) => {
            const items = [colors[index].hex, colors2[index].hex];
            let num = c6(c7(c4.get(), [0, 1], items));
            if (num == null) {
              num = 0;
            }
            return num;
          });
          obj.locations = colors.map((item, index) => {
            const items = [colors[index].stop / 100, colors2[index].stop / 100];
            return c3(c4.get(), [0, 1], items);
          });
          point = { x: null, y: null };
          num2 = 2;
          point.x = (width / 2 + tmp7[0]) / width;
          point.y = (height / 2 - tmp7[1]) / height;
          obj.startPoint = point;
          point1 = { x: null, y: null };
          point1.x = (width / 2 - tmp7[0]) / width;
          point1.y = (height / 2 + tmp7[1]) / height;
          obj.endPoint = point1;
          return obj;
        }
      }
      return colors;
    }
  }
  const items4 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  SettingsAppearanceGradientBackgroundTsx1.__closure = items4;
  SettingsAppearanceGradientBackgroundTsx1.__workletHash = 1728256022641;
  SettingsAppearanceGradientBackgroundTsx1.__initData = tmp16;
  const animatedProps = useAnimatedProps(SettingsAppearanceGradientBackgroundTsx1);
  const merged = Object.assign(tmp15);
  return <closure_7 style={memo.absoluteFill} onLayout={callback} animatedProps={animatedProps} />;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;
