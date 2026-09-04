// Module ID: 6548
// Function ID: 6549
// Name: Input
// Dependencies: [19, 17, 21, 4481, 709, 4199, 1233, 4477, 6549, 2]
// Exports: Input

// Module 6548 (Input)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getNodeText from "getNodeText" /* 4199 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { inputRow: null, labelWrapper: null, label: null, description: null, error: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
let obj1 = { marginBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_4 };
let obj2 = { marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_4 };
let obj3 = { marginTop: ThemesDefault.space.PX_4 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4, width: "auto" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: ThemesDefault.space.PX_4, width: "auto" };
const result = require("set").fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  const tmp = callback2();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  let obj = getNodeText;
  const nodeText = obj.getNodeText(label);
  if (null != nodeText) {
    if (true === required) {
      const intl = tmp2(1233).intl;
      const _HermesInternal = HermesInternal;
      const combined = "" + nodeText + " (" + intl.string(tmp2(1233).t.EkokLy) + ")";
    }
  }
  obj = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: null, children: null };
    obj[0] = tmp.inputRow;
    obj[1] = children;
    items[1] = callback(tmp9, obj);
    let tmp14Result = null;
    if (null != description) {
      obj1 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj1[2] = tmp.description;
      obj1[3] = description;
      tmp14Result = tmp14(tmp2(4477).Text, obj1);
    }
    items[2] = tmp14Result;
    tmp14Result = null;
    if (null != errorMessage) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.error;
      obj2[1] = errorMessage;
      tmp14Result = tmp14(tmp2(6549).ErrorText, obj2);
    }
    items[3] = tmp14Result;
    obj[1] = items;
    return tmp8(tmp9, obj);
  } else if (null != labelTrailing) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.labelWrapper;
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: null, children: null };
    obj4[2] = labelId;
    obj4[3] = label;
    const items1 = [callback(tmp2(4477).Text, obj4), labelTrailing];
    obj3[1] = items1;
    let tmp8Result = tmp8(tmp9, obj3);
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: null, nativeID: null, accessibilityLabel: null, children: null };
    obj5[2] = tmp.label;
    obj5[3] = labelId;
    obj5[4] = combined;
    const items2 = [label, ];
    tmp8Result = null;
    if (required) {
      const obj6 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: null };
      obj6[3] = [" ", "*"];
      tmp8Result = tmp8(tmp2(4477).Text, obj6);
    }
    items2[1] = tmp8Result;
    obj5[5] = items2;
    tmp8Result = tmp8(tmp2(4477).Text, obj5);
  }
};
