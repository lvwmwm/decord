// Module ID: 16566
// Function ID: 129222
// Name: SafetyFlowTaskScreen
// Dependencies: [31, 33, 4130, 7572, 7573, 4541, 4126, 5459, 11071, 16564, 9905, 2]
// Exports: default

// Module 16566 (SafetyFlowTaskScreen)
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
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  let tmp5 = null != subtitle;
  if (tmp5) {
    const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp5 = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
  }
  items[2] = tmp5;
  obj.children = items;
  const items1 = [closure_4(require(4541) /* Stack */.Stack, obj), children];
  obj.children = items1;
  const items2 = [closure_4(require(7573) /* ModalContent */.ModalContent, obj), ];
  if (undefined === footer) {
    const obj3 = {};
    if (withLogout) {
      withLogout = callback(importDefault(16564), {});
    }
    const items3 = [withLogout, ];
    let tmp12 = null != action;
    if (tmp12) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp12 = callback(require(9905) /* ModalActionButton */.ModalActionButton, obj4);
    }
    items3[1] = tmp12;
    obj3.children = items3;
    footer = closure_4(require(11071) /* ModalFooter */.ModalFooter, obj3);
    const tmp16 = closure_4;
  }
  items2[1] = footer;
  obj.children = items2;
  return closure_4(require(7572) /* ModalScreen */.ModalScreen, obj);
};
