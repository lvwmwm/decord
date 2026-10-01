// Module ID: 11383
// Function ID: 11384
// Name: AppealIngestionBreadcrumbs
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 2]
// Exports: default

// Module 11383 (AppealIngestionBreadcrumbs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let rect;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 0, alignSelf: "stretch", marginBottom: 8 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: size, breadCrumbBar: rect, breadCrumbText: { marginStart: 8, lineHeight: 20 } };
size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  let closure_0;
  let intl;
  let items;
  reasons = reasons.reasons;
  const tmp = closure_5();
  _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container, children: items };
    let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: intl.string(require("intl").t.eQg0Ck) };
    const Text = require("Text/Text").Text;
    intl = require("intl").intl;
    items = [
      closure_3(Text, obj2),
      reasons.map((children, index) => {
          let items;
          const obj = { style: closure_0.breadCrumbItemContainer, children: items };
          items = [, , ];
          const obj2 = { style: closure_0.breadCrumbBar };
          items[0] = _false(View, obj2);
          const obj3 = { style: closure_0.breadCrumbDot };
          items[1] = _false(View, obj3);
          const obj4 = { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children };
          items[2] = _false(Text_Text.Text, obj4);
          return React3(View, obj, "" + children + "+" + index);
        })
    ];
    tmp2 = closure_4(View, obj);
  }
  return tmp2;
};
