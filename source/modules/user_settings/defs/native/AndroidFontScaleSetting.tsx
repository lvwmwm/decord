// Module ID: 14079
// Function ID: 106901
// Name: slider
// Dependencies: []

// Module 14079 (slider)
let closure_2 = importAll(dependencyMap[0]);
const useFontScaleStore = arg1(dependencyMap[1]).useFontScaleStore;
const FontScales = arg1(dependencyMap[2]).FontScales;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.i19n5L);
  },
  parent: arg1(dependencyMap[3]).MobileSetting.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    const arg1 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    const dependencyMap = index;
    const callback = React.useCallback((arg0) => {
      arg0(index[5]).batchUpdates(() => state.setState({ fontScale: closure_4[closure_0] }));
    }, []);
    const React = callback;
    const items = [index, callback, tmp.fontScale];
    return React.useMemo(() => {
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: closure_4.length - 1, step: 1, onValueChange: callback, startIcon: callback(tmp(index[6]).CircleMinusIcon, {}), endIcon: callback(tmp(index[7]).CirclePlusIcon, {}) };
      const intl = tmp(index[8]).intl;
      obj.accessibilityLabel = intl.string(tmp(index[8]).t.i19n5L);
      obj.accessibilityValue = { text };
      obj.valueLabel = text;
      obj.defaultValue = closure_4.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: arg1(dependencyMap[10]).isAndroid
};
const slider = obj.createSlider(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;
