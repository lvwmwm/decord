// Module ID: 15852
// Function ID: 15853
// Dependencies: [19, 21, 4481, 1234, 709, 8208, 2]

// Module 15852
import ThemesDefault from "Themes" /* 709 */;
import _modDef8208 from "module_8208" /* 8208 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import set from "set" /* 1234 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let num = 0;
if (set.isAndroid()) {
  num = ThemesDefault.space.PX_8;
}
let closure_4 = createCacheKey.createStyles({ slider: { marginTop: num } });
const result = set.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default importAllResult.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabled);
  const items = [callback().slider, ];
  let num = 1;
  const tmp = callback();
  const tmp2 = jsx;
  if (flag) {
    num = 0.5;
  }
  const obj = { style: items, disabled: disabled.disabled, value: current, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: ThemesDefault.unsafe_rawColors.BRAND_500, maximumTrackTintColor: ThemesDefault.unsafe_rawColors.PRIMARY_400, onValueChange, onResponderGrant: null };
  items[1] = { opacity: num };
  current = initialValue.current;
  const tmp5 = _modDef8208;
  let fn;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  obj[8] = fn;
  return tmp2(tmp5, obj);
});
