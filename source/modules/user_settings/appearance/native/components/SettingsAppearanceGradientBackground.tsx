// Module ID: 14066
// Function ID: 106816
// Dependencies: []

// Module 14066
let num = 0;
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const processColorResult = arg1(dependencyMap[4]).processColor("rgba(0, 0, 0, 0)");
if (null != processColorResult) {
  num = processColorResult;
}
const obj2 = arg1(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).LinearGradientNativeComponent);
const items = [num, num];
let closure_8 = { colors: items, locations: [], startPoint: {}, endPoint: {} };
let closure_9 = { code: "function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}" };
const importDefaultResult = importDefault(dependencyMap[4]);
const memoResult = importAllResult.memo(function SettingsAppearanceGradientBackground(isDimmed) {
  isDimmed = isDimmed.isDimmed;
  const arg1 = isDimmed;
  const themes = isDimmed.themes;
  const importDefault = themes;
  const themeIndex = isDimmed.themeIndex;
  const dependencyMap = themeIndex;
  let BACKGROUND_SURFACE_HIGH = isDimmed.backgroundToken;
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH;
  }
  let StyleSheet;
  let closure_5;
  let jsx;
  let closure_7;
  let closure_8;
  const tmp3 = importDefault(dependencyMap[10])("SettingsAppearanceGradientBackground");
  StyleSheet = tmp3;
  const items = [tmp3];
  const memo = importAllResult.useMemo(() => [], items);
  closure_5 = memo;
  const items1 = [themes, themeIndex, isDimmed, memo, BACKGROUND_SURFACE_HIGH];
  const tmp5 = function useThemeStateTracker(importAllResult) {
    let tmp = importAllResult;
    let obj = isDimmed(themeIndex[6]);
    const launchWelcomeSystemTheme = obj.useLaunchWelcomeSystemTheme();
    if ("system" === importAllResult.theme) {
      tmp = launchWelcomeSystemTheme;
    }
    const isDimmed = tmp;
    obj = { themePrev: tmp, themeCurrent: tmp };
    const themeState = isDimmed(themeIndex[4]).useSharedValue(obj);
    const themes = themeState;
    const obj2 = isDimmed(themeIndex[4]);
    const tweener = isDimmed(themeIndex[4]).useSharedValue(0);
    const themeIndex = tweener;
    const items = [tmp, themeState, tweener, launchWelcomeSystemTheme];
    const effect = BACKGROUND_SURFACE_HIGH.useEffect(() => {
      const result = themeState.set({ themePrev: themeState.get().themeCurrent, themeCurrent: tmp });
      const result1 = tweener.set(0);
      const obj = { themePrev: themeState.get().themeCurrent, themeCurrent: tmp };
      const result2 = tweener.set(tmp(tweener[7]).withTiming(1, tmp(tweener[8]).timingStandard));
    }, items);
    return { themeState, tweener };
  }(BACKGROUND_SURFACE_HIGH.useMemo(() => {
    let prop;
    if (isDimmed) {
      prop = memo.BACKGROUND_GRADIENT_DARK_OPACITY;
    }
    let prop1;
    if (isDimmed) {
      prop1 = memo.BACKGROUND_GRADIENT_LIGHT_OPACITY;
    }
    return isDimmed(themeIndex[6]).convertThemesToAnimatedThemes(themes, prop, prop1, memo, BACKGROUND_SURFACE_HIGH)[closure_2];
  }, items1));
  const themeState = tmp5.themeState;
  jsx = themeState;
  const tweener = tmp5.tweener;
  closure_7 = tweener;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue({ "Null": -536870861, "Null": -299892737 });
  closure_8 = sharedValue;
  const items2 = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
  }, items2);
  class P {
    constructor() {
      value = closure_8.get();
      ({ width, height } = value);
      if (0 !== width) {
        if (0 !== height) {
          tmp2 = themeState;
          value1 = themeState.get();
          themePrev = value1.themePrev;
          colors = themePrev.colors;
          isDimmed = colors;
          themeCurrent = value1.themeCurrent;
          themes = themeCurrent.colors;
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
          diff = 90 - obj.interpolate(tweener.get(), ["replace", "then"], items);
          tmp9 = themes(themeIndex[11])(diff, width, height);
          obj = {};
          obj.colors = colors.map((arg0, arg1) => {
            const obj = colors(closure_2[4]);
            const items = [colors[arg1].hex, colors[arg1].hex];
            const processColorResult = obj.processColor(colors(closure_2[4]).interpolateColor(store.get(), ["replace", "then"], items));
            let num = 0;
            if (null != processColorResult) {
              num = processColorResult;
            }
            return num;
          });
          obj.locations = colors.map((arg0, arg1) => {
            const items = [colors[arg1].stop / 100, colors[arg1].stop / 100];
            return colors(closure_2[4]).interpolate(store.get(), ["replace", "then"], items);
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
      return closure_8;
    }
  }
  obj = { gradientSize: sharedValue, animatedLinearGradientLoadingProps: closure_8, themeState, interpolate: arg1(dependencyMap[4]).interpolate, tweener, getGradientStartPoint: importDefault(dependencyMap[11]), processColor: arg1(dependencyMap[4]).processColor, interpolateColor: arg1(dependencyMap[4]).interpolateColor };
  P.__closure = obj;
  P.__workletHash = 5151435414824;
  P.__initData = closure_9;
  obj = { style: StyleSheet.absoluteFill, onLayout: callback };
  const animatedProps = arg1(dependencyMap[4]).useAnimatedProps(P);
  const merged = Object.assign(closure_8);
  obj["animatedProps"] = animatedProps;
  return <closure_7 {...obj} />;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceGradientBackground.tsx");

export default memoResult;
