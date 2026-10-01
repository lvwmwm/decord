// Module ID: 10467
// Function ID: 10468
// Name: PileOverflow
// Dependencies: [19, 17, 2112, 21, 4836, 576, 563, 4832, 1882, 2]
// Exports: PileOverflow

// Module 10467 (PileOverflow)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
let closure_6 = createStyles.createStyles(obj);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  let Text;
  let borderRadius;
  let items2;
  let locale;
  let num;
  let obj4;
  let tmp6;
  let value;
  size = size.size;
  ({ borderRadius, value } = size);
  const items = [LocaleStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [closure_6().container, ];
  const obj2 = { borderRadius, minWidth: size, height: size, paddingHorizontal: num };
  num = 4;
  const tmp4 = hasOwnProperty;
  const tmp5 = View;
  if (size >= 32) {
    num = 8;
  }
  items1[1] = obj2;
  const obj3 = { style: items1, children: tmp6(Text, obj4) };
  Text = tmp(4832).Text;
  let str = map.get(size);
  tmp6 = React3;
  if (str == null) {
    str = "text-md/semibold";
  }
  obj4 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: items2 };
  items2 = ["+"];
  const tmpResult = NumberUtils;
  items2[1] = tmpResult.humanizeValue(value, stateFromStores);
  return tmp4(tmp5, obj3);
};
