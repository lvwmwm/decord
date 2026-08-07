// Module ID: 16873
// Function ID: 16874
// Name: SafetyFlowTaskScreen
// Dependencies: [19, 21, 4302, 7747, 7748, 4710, 4298, 11267, 16871, 10199, 2]
// Exports: default

// Module 16873 (SafetyFlowTaskScreen)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("createCacheKey").fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

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
  let tmp6 = null != ImageComponent;
  if (tmp6) {
    tmp6 = ImageComponent;
  }
  const items = [tmp6, , ];
  let obj = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title };
  items[1] = callback(require(4298) /* Text */.Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    obj = { variant: "text-md/medium", color: null, style: null, children: null };
    obj[1] = subtitleColor;
    obj[2] = tmp2.header;
    obj[3] = subtitle;
    tmp7Result = tmp7(tmp4(4298).Text, obj);
  }
  obj = { children: null };
  items[2] = tmp7Result;
  const items1 = [closure_4(require(4710) /* Stack */.Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  obj[0] = items1;
  children = [closure_4(require(7748) /* ModalContent */.ModalContent, obj), ];
  if (undefined === footer) {
    if (withLogout) {
      withLogout = tmp7(importDefault(16871), {});
    }
    const items3 = [withLogout, ];
    tmp7Result = null != action;
    if (tmp7Result) {
      const obj1 = { variant: "primary", text: null, onPress: null, loading: null };
      obj1[1] = action;
      obj1[2] = onAction;
      obj1[3] = submitting;
      tmp7Result = tmp7(tmp4(10199).ModalActionButton, obj1);
    }
    const obj2 = { children: null };
    items3[1] = tmp7Result;
    obj2[0] = items3;
    footer = tmp3(tmp4(11267).ModalFooter, obj2);
  }
  children[1] = footer;
  return closure_4(require(7747) /* ModalScreen */.ModalScreen, { children });
};
