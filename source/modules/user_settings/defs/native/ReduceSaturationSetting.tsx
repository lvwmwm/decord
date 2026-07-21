// Module ID: 14123
// Function ID: 107222
// Name: slider
// Dependencies: []

// Module 14123 (slider)
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
      const obj = { subLabel: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000002635550177452878, value: saturation.saturation, onValueChange: 292062.0972035229, disabled: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000382680721467197, icon: 258069997799067900000000000000000000000000000000000000000000000000000000000000000000, onSlidingComplete: callback(closure_1[4]).setSaturation, startIcon: callback2(callback(closure_1[5]).CircleMinusIcon, {}), endIcon: callback2(callback(closure_1[6]).CirclePlusIcon, {}) };
      return obj;
    }, []);
  }
};
const slider = obj.createSlider(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
