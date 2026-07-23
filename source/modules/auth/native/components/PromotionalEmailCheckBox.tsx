// Module ID: 14770
// Function ID: 112660
// Name: PromotionalEmailCheckBox
// Dependencies: [31, 27, 5591, 33, 4130, 3848, 1212, 7497, 4126, 2]
// Exports: default

// Module 14770 (PromotionalEmailCheckBox)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import setPromoEmailConsentState from "setPromoEmailConsentState";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
({ View: closure_2, Pressable: closure_3 } = get_ActivityIndicator);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: closure_5 } = setPromoEmailConsentState);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ checkboxRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 }, checkboxLabel: { flex: 1 } });
const result = require("setPromoEmailConsentState").fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default function PromotionalEmailCheckBox(style) {
  const tmp = callback4();
  const tmp3 = callback((checked) => checked.checked);
  const require = tmp3;
  let obj = require(3848) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  let tmp7 = null;
  if (tmp2) {
    obj = { style: style.style };
    obj = { accessibilityRole: tmp5 };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.ylFCLt);
    obj.accessibilityState = tmp6;
    obj.onPress = function onPress() {
      return outer1_5(!closure_0);
    };
    obj.style = tmp.checkboxRow;
    const obj1 = { checked: tmp3 };
    const items = [callback2(require(7497) /* FormCheckbox */.FormCheckbox, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp.checkboxLabel };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.ylFCLt);
    items[1] = callback2(require(4126) /* Text */.Text, obj2);
    obj.children = items;
    obj.children = callback3(closure_3, obj);
    tmp7 = callback2(closure_2, obj);
  }
  return tmp7;
};
