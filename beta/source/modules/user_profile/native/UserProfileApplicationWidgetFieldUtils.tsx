// Module ID: 8477
// Function ID: 8478
// Name: UserProfileApplicationWidgetFieldUtils
// Dependencies: [19, 17, 21, 4836, 576, 1115, 8478, 4832, 8479, 2]
// Exports: FieldText, formatDurationNarrow

// Module 8477 (UserProfileApplicationWidgetFieldUtils)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 8478 */;
import ApplicationWidgetMarkupUtils from "ApplicationWidgetMarkupUtils" /* 8479 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { fieldTextRow: obj2, fieldIcon: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export const formatDurationNarrow = function formatDurationNarrow(arg0) {
  let num = 0;
  if (Number.isFinite(arg0)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(arg0));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  const result1 = Math.floor(num / 1000) % 60;
  const items = [];
  if (rounded > 0) {
    const push = items.push;
    const intl = intl4.intl;
    const obj = { hours: rounded };
    push(intl.formatToPlainString(intl4.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const push2 = items.push;
    const intl2 = intl4.intl;
    const obj2 = { minutes: result };
    push2(intl2.formatToPlainString(intl4.t["XIGt+W"], obj2));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const push3 = items.push;
    const intl3 = intl4.intl;
    const obj3 = { seconds: result1 };
    push3(intl3.formatToPlainString(intl4.t.pyvjRp, obj3));
  }
  return items.join(" ");
};
export const FieldText = function FieldText(arg0) {
  let color;
  let field;
  let items;
  let obj5;
  let obj6;
  let obj7;
  let skeletonWidthChars;
  let variant;
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = closure_6();
  let tmp2 = null;
  if ("hidden" !== field.status) {
    let tmp9Result;
    if ("skeleton" === field.status) {
      const obj2 = { variant, widthChars: skeletonWidthChars };
      tmp9Result = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj2);
    } else {
      const obj3 = { style: tmp.fieldTextRow, children: items };
      const obj4 = { variant, color, lineClamp: 2, children: obj6.parseApplicationWidgetText(field.text, obj5) };
      const Text = Text_Text.Text;
      obj5 = { linkVariant: variant };
      obj6 = ApplicationWidgetMarkupUtils;
      items = [React3(Text, obj4), ];
      let tmp11Result = null != field.icon;
      const tmp10 = _false;
      const tmp11 = React3;
      const tmp9 = hasOwnProperty;
      if (tmp11Result) {
        const obj = { source: obj7, style: tmp.fieldIcon, resizeMode: "contain" };
        obj7 = { uri: field.icon.url };
        tmp11Result = tmp11(React2, obj);
      }
      items[1] = tmp11Result;
      tmp9Result = tmp9(tmp10, obj3);
    }
    tmp2 = tmp9Result;
  }
  return tmp2;
};
