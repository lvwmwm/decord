// Module ID: 16624
// Function ID: 129714
// Name: SafetyFlowTaskScreen
// Dependencies: [31, 33, 4131, 6725, 6726, 4542, 4127, 11057, 16622, 9865, 2]
// Exports: default

// Module 16624 (SafetyFlowTaskScreen)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ header: { textAlign: "center" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default function SafetyFlowTaskScreen(action) {
  let ImageComponent;
  let children;
  let footer;
  let onAction;
  let submitting;
  let subtitle;
  let subtitleColor;
  let withLogout;
  ({ ImageComponent, subtitle, subtitleColor } = action);
  if (subtitleColor === undefined) {
    subtitleColor = "text-strong";
  }
  action = action.action;
  if (action === undefined) {
    action = null;
  }
  ({ footer, withLogout, onAction, children, submitting } = action);
  if (withLogout === undefined) {
    withLogout = true;
  }
  const tmp2 = callback2();
  let obj = {};
  obj = {};
  obj = { align: "center", justify: "center", spacing: 8 };
  let tmp4 = null != ImageComponent;
  if (tmp4) {
    tmp4 = ImageComponent;
  }
  const items = [tmp4, , ];
  const obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title };
  items[1] = callback(require(4127) /* Text */.Text, obj1);
  let tmp5 = null != subtitle;
  if (tmp5) {
    const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp5 = callback(require(4127) /* Text */.Text, obj2);
  }
  items[2] = tmp5;
  obj.children = items;
  const items1 = [closure_4(require(4542) /* Stack */.Stack, obj), children];
  obj.children = items1;
  const items2 = [closure_4(require(6726) /* ModalContent */.ModalContent, obj), ];
  if (undefined === footer) {
    const obj3 = {};
    if (withLogout) {
      withLogout = callback(importDefault(16622), {});
    }
    const items3 = [withLogout, ];
    let tmp12 = null != action;
    if (tmp12) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp12 = callback(require(9865) /* ModalActionButton */.ModalActionButton, obj4);
    }
    items3[1] = tmp12;
    obj3.children = items3;
    footer = closure_4(require(11057) /* ModalFooter */.ModalFooter, obj3);
    const tmp16 = closure_4;
  }
  items2[1] = footer;
  obj.children = items2;
  return closure_4(require(6725) /* ModalScreen */.ModalScreen, obj);
};
