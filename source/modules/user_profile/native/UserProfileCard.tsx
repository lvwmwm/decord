// Module ID: 5511
// Function ID: 46948
// Name: Divider
// Dependencies: [31, 27, 5512, 33, 4130, 689, 4660, 4126, 5514, 1324, 2]
// Exports: UserProfileCardRows, UserProfileFormRow, default

// Module 5511 (Divider)
import result from "result";
import { View } from "get ActivityIndicator";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function Divider() {
  return callback(View, { style: _createForOfIteratorHelperLoose().rowDivider });
}
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: closure_5 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.titleContent = obj1;
_createForOfIteratorHelperLoose.text = { flexShrink: 1 };
_createForOfIteratorHelperLoose.rowDivider = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -ARBITRARY_LARGE_OFFSET.CARD_PADDING };
_createForOfIteratorHelperLoose.row = { flexDirection: "column", paddingVertical: 20 };
let obj3 = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP };
_createForOfIteratorHelperLoose.rowLabel = obj3;
_createForOfIteratorHelperLoose.rowLabelText = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
_createForOfIteratorHelperLoose.rowSublabel = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -ARBITRARY_LARGE_OFFSET.CARD_PADDING };
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  let children;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let trailingAction;
  ({ title, trailingAction } = arg0);
  let obj = { title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 };
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  const tmp4 = importDefault(1324)("UserProfileCard");
  obj = { style };
  const merged1 = Object.assign(merged);
  let tmp9Result = null != title || null != trailingAction;
  if (tmp9Result) {
    obj = {};
    const items = [tmp3.title, titleStyle];
    obj.style = items;
    let tmp12Result = null != title;
    if (tmp12Result) {
      const obj1 = { style: tmp3.titleContent };
      const items1 = [titleLeadingIcon, , ];
      const obj2 = { style: tmp3.text, accessibilityRole: "header" };
      let str2 = "text-sm/semibold";
      if (tmp4) {
        str2 = "text-sm/medium";
      }
      obj2.variant = str2;
      let str3 = "text-default";
      if (tmp4) {
        str3 = "text-strong";
      }
      obj2.color = str3;
      obj2.lineClamp = 1;
      obj2.children = title;
      items1[1] = closure_6(require(4126) /* Text */.Text, obj2);
      items1[2] = titleIcon;
      obj1.children = items1;
      tmp12Result = closure_7(View, obj1);
      const tmp12 = closure_7;
      const tmp13 = View;
      const tmp14 = closure_6;
    }
    const items2 = [tmp12Result, trailingAction];
    obj.children = items2;
    tmp9Result = closure_7(View, obj);
    const tmp10 = View;
    const tmp9 = closure_7;
  }
  const items3 = [tmp9Result, children];
  obj["children"] = items3;
  return closure_7(View, obj);
};
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  let arrow;
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let label;
  let labelColor;
  let onPress;
  let sublabel;
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (arrow === undefined) {
    arrow = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  let obj = { style: tmp.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress };
  obj = { style: tmp.rowLabel };
  obj = { size: closure_5, color: str };
  const items = [callback(icon, obj), , , ];
  const obj1 = { variant: "text-md/semibold" };
  if (null != labelColor) {
    str2 = labelColor;
  }
  obj1.color = str2;
  obj1.style = tmp.rowLabelText;
  obj1.children = label;
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  let tmp5 = null != hint;
  if (tmp5) {
    const obj2 = { size: closure_5, color: str };
    tmp5 = callback(hint, obj2);
  }
  items[2] = tmp5;
  if (arrow) {
    const obj3 = { size: "sm" };
    arrow = callback(require(5514) /* ChevronSmallRightIcon */.ChevronSmallRightIcon, obj3);
  }
  items[3] = arrow;
  obj.children = items;
  const items1 = [closure_7(View, obj), ];
  let tmp11 = null != sublabel;
  if (tmp11) {
    const obj4 = { style: tmp.rowSublabel, children: sublabel };
    tmp11 = callback(View, obj4);
  }
  items1[1] = tmp11;
  obj.children = items1;
  return closure_7(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  let closure_0 = importDefault(1324)("UserProfileCardRows");
  const Children = React.Children;
  return callback(closure_8, {
    children: Children.map(children.children, (arg0, arg1) => {
      const obj = {};
      let tmp2 = null;
      if (!closure_0) {
        tmp2 = null;
        if (0 !== arg1) {
          tmp2 = outer1_6(outer1_10, {});
        }
      }
      const items = [tmp2, arg0];
      obj.children = items;
      return outer1_7(outer1_3.Fragment, obj, arg1);
    })
  });
};
