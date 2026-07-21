// Module ID: 14590
// Function ID: 109945
// Dependencies: []

// Module 14590
let num = 0;
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = {};
const obj2 = arg1(dependencyMap[2]);
if (obj5.isAndroid()) {
  num = importDefault(dependencyMap[4]).space.PX_8;
}
obj.marginTop = num;
obj.slider = obj;
let closure_4 = obj2.createStyles(obj);
const obj5 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function VEVOOSlider(disabledOpacity) {
  let initialValue;
  let onValueChange;
  let flag = disabledOpacity.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabledOpacity);
  let obj = {};
  const items = [callback().slider, ];
  obj = {};
  let num = 1;
  const tmp = callback();
  const tmp2 = jsx;
  if (flag) {
    num = 0.5;
  }
  obj.opacity = num;
  items[1] = obj;
  obj.style = items;
  obj.disabled = disabledOpacity.disabled;
  const current = initialValue.current;
  let tmp4;
  if (null != current) {
    tmp4 = current;
  }
  obj.value = tmp4;
  obj.minimumValue = 0;
  obj.maximumValue = 1;
  obj.minimumTrackTintColor = importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_500;
  obj.maximumTrackTintColor = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_400;
  obj.onValueChange = onValueChange;
  const tmp3 = importDefault(dependencyMap[5]);
  let fn;
  if (obj3.isAndroid()) {
    fn = () => true;
  }
  obj.onResponderGrant = fn;
  return tmp2(tmp3, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
