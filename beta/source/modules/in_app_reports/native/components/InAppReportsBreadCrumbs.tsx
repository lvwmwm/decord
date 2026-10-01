// Module ID: 12465
// Function ID: 12466
// Name: InAppReportsBreadCrumbs
// Dependencies: [19, 17, 21, 4836, 576, 12, 4832, 8092, 1115, 2619, 2]
// Exports: default

// Module 12465 (InAppReportsBreadCrumbs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let rect;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" }, breadCrumbDot: size, breadCrumbBar: rect, breadCrumbText: { marginStart: 8, lineHeight: 20 } };
size = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
rect = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  let closure_0;
  let items;
  let stringResult;
  element = element.element;
  const menuName = element.menuName;
  let found;
  const merged = Object.assign(element, Object.assign({ element: 0, menuName: 0 }));
  const tmp2 = closure_6();
  _require = tmp2;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      let obj = found(12);
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        let state;
        const _Object = Object;
        if (multiSelect != null) {
          state = multiSelect.state;
        }
        if (state == null) {
          state = {};
        }
        const items = [null, null];
        const values2 = values(state);
        if (values2.length > 0) {
          items[0] = values2.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      });
      const tmp5 = found;
      found = flatMapResult.filter((item) => null != item);
      let tmp7Result = null;
      if (0 !== found.length) {
        let obj2 = { style: tmp2.container, children: items };
        let obj3 = { style: tmp2.title, accessibilityRole: "header", variant: "text-xs/bold", children: stringResult };
        const Text = require("Text/Text").Text;
        const REPORT_TO_MOD = require("ReportMenuType").ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(menuName);
        const intl = require("intl").intl;
        const string = intl.string;
        const tmp10 = _require;
        const tmp7 = closure_5;
        const tmp8 = View;
        const tmp9 = closure_4;
        if (hasItem) {
          stringResult = string(tmp5(2619)["6mx/DP"]);
        } else {
          stringResult = string(tmp10(1115).t["+3V9Tp"]);
        }
        items = [
          tmp9(Text, obj3),
          found.map((children, index) => {
                  let items;
                  let tmp4 = null;
                  const obj = { style: closure_0.breadCrumbItemContainer, children: items };
                  const tmp = hasOwnProperty;
                  if (index !== found.length - 1) {
                    const obj2 = { style: closure_0.breadCrumbBar };
                    tmp4 = React3(tmp2, obj2);
                  }
                  items = [tmp4, , ];
                  const obj3 = { style: closure_0.breadCrumbDot };
                  items[1] = React3(View, obj3);
                  const obj4 = { lineClamp: 2, ellipsizeMode: "tail", style: closure_0.breadCrumbText, variant: "text-md/medium", children };
                  items[2] = React3(Text_Text.Text, obj4);
                  return tmp(View, obj, "" + children + "+" + index);
                })
        ];
        tmp7Result = tmp7(tmp8, obj2);
      }
      return tmp7Result;
    }
  }
  return null;
};
