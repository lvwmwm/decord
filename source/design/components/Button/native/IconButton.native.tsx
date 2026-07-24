// Module ID: 7533
// Function ID: 60036
// Name: IconButton
// Dependencies: [31, 33, 4130, 689, 4550, 7534, 4126, 2]

// Module 7533 (IconButton)
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(689).space.PX_4, gap: importDefault(689).space.PX_8, alignItems: "center", alignSelf: "center" };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj.flexGrow = num;
  obj.labelPressable = obj;
  obj.label = { textAlign: "center" };
  return obj;
});
const forwardRefResult = require("result").forwardRef((grow, ref) => {
  let accessibilityHint;
  let accessibilityLabel;
  let label;
  let maxFontSizeMultiplier;
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
  let obj = { label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(grow, obj);
  const tmp3 = callback3(grow.grow);
  if (null != label) {
    obj = { style: tmp3.labelPressable };
    const merged1 = Object.assign(merged);
    obj["variant"] = "none";
    obj["accessibilityLabel"] = accessibilityLabel;
    obj["accessibilityHint"] = accessibilityHint;
    obj = { ref };
    const merged2 = Object.assign(merged);
    obj["accessibilityRole"] = "none";
    obj["accessibilityLabel"] = "";
    obj["size"] = "lg";
    obj["maxFontSizeMultiplier"] = maxFontSizeMultiplier;
    const items = [callback(require(7534) /* BaseIconButton */.BaseIconButton, obj), ];
    const obj1 = { style: tmp3.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj["children"] = items;
    let tmp10 = callback2(require(4550) /* BaseButton */.BaseButton, obj);
  } else {
    const obj2 = { ref };
    const merged3 = Object.assign(merged);
    obj2["accessibilityLabel"] = accessibilityLabel;
    obj2["accessibilityHint"] = accessibilityHint;
    obj2["maxFontSizeMultiplier"] = maxFontSizeMultiplier;
    tmp10 = callback(require(7534) /* BaseIconButton */.BaseIconButton, obj2);
  }
  return tmp10;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = forwardRefResult;
