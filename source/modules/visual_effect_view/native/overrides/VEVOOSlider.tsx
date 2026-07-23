// Module ID: 14713
// Function ID: 112152
// Dependencies: [31, 33, 4130, 477, 689, 7523, 2]

// Module 14713
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import importAllResult from "result";
import set from "_createForOfIteratorHelperLoose";

const require = arg1;
let num = 0;
let obj = {};
obj = {};
if (set.isAndroid()) {
  num = require("_createForOfIteratorHelperLoose").space.PX_8;
}
obj.marginTop = num;
obj.slider = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = set.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default require("result").memo(function VEVOOSlider(disabledOpacity) {
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
  obj.minimumTrackTintColor = importDefault(689).unsafe_rawColors.BRAND_500;
  obj.maximumTrackTintColor = importDefault(689).unsafe_rawColors.PRIMARY_400;
  obj.onValueChange = onValueChange;
  const tmp3 = importDefault(7523);
  let fn;
  if (obj3.isAndroid()) {
    fn = () => true;
  }
  obj.onResponderGrant = fn;
  return tmp2(tmp3, obj);
});
