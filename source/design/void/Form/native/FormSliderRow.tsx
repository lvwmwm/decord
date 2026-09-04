// Module ID: 8540
// Function ID: 8541
// Name: FormSliderRow
// Dependencies: [19, 17, 21, 4481, 5641, 5562, 4477, 8208, 7077, 2]
// Exports: default

// Module 8540 (FormSliderRow)
import context2 from "context" /* 5641 */;
import _modDef7077 from "module_7077" /* 7077 */;
import _modDef8208 from "module_8208" /* 8208 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(context2.RedesignCompatContext);
  const tmp5 = callback2();
  if (context) {
    let obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp5.labels;
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = label;
    const items = [callback(tmp2(4477).Text, obj1), trailing];
    obj[1] = items;
    const items1 = [tmp6(View, obj), ];
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.style = tmp5.slider;
    items1[1] = callback(_modDef8208, obj2);
    obj[0] = items1;
    let tmp6Result = tmp6(tmp2(5562).Card, obj);
    const tmp18 = _modDef8208;
  } else {
    obj = { children: null };
    const obj3 = { label: null, trailing: null };
    obj3[0] = label;
    obj3[1] = trailing;
    const items2 = [callback(_modDef7077, obj3), ];
    const obj4 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(_modDef8208, obj4);
    obj[0] = items2;
    tmp6Result = tmp6(closure_7, obj);
    const tmp10 = _modDef8208;
  }
  return tmp6Result;
};
