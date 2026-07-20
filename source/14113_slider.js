// Module ID: 14113
// Function ID: 107167
// Name: slider
// Dependencies: []

// Module 14113 (slider)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.5PWWCY);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.ACCESSIBILITY,
  useTrailing() {
    const obj = { size: arg1(dependencyMap[9]).BetaSizes.SMALL };
    return jsx(arg1(dependencyMap[9]).BetaTag, obj);
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => {
      const obj = { -1396813214: 1181876226, -1436373867: 788529152, -37435562: 16777216, 949638129: 37849665, 26602089: 654922240, value: saturation.saturation, onSlidingComplete: callback(closure_1[4]).setSaturation, startIcon: callback2(callback(closure_1[5]).CircleMinusIcon, {}), endIcon: callback2(callback(closure_1[6]).CirclePlusIcon, {}) };
      return obj;
    }, []);
  }
};
const slider = obj.createSlider(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
