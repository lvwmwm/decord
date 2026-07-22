// Module ID: 14130
// Function ID: 107260
// Name: slider
// Dependencies: []

// Module 14130 (slider)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.TYyfO/);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.ACCESSIBILITY,
  useTrailing() {
    const obj = { size: arg1(dependencyMap[9]).BetaSizes.SMALL };
    return jsx(arg1(dependencyMap[9]).BetaTag, obj);
  },
  useProps: function useContrastSettingProps() {
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(closure_1[4]).setContrast, startIcon: callback2(callback(closure_1[5]).CircleMinusIcon, {}), endIcon: callback2(callback(closure_1[6]).CirclePlusIcon, {}) }), []);
  }
};
const slider = obj.createSlider(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
