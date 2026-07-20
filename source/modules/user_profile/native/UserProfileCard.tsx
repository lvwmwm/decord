// Module ID: 5507
// Function ID: 46867
// Name: Divider
// Dependencies: []
// Exports: UserProfileCardRows, UserProfileFormRow, default

// Module 5507 (Divider)
let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
function Divider() {
  return callback(View, { style: callback2().rowDivider });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: closure_5 } = tmp2);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { title: { required: false, checked: false, preChecked: false, id: false }, text: { flexShrink: 1 } };
obj = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, marginLeft: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP, marginRight: -tmp2.CARD_PADDING };
obj.rowDivider = obj;
obj.row = { storefront: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006901907968906943, state: -5840509983.147556 };
const obj1 = { -9223372036854775808: true, filter: true, columnGap: CARD_ROWS_COLUMN_GAP };
obj.rowLabel = obj1;
obj.rowLabelText = { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE };
obj.rowSublabel = { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(title) {
  let children;
  let style;
  let titleIcon;
  let titleStyle;
  title = title.title;
  let obj = { 9223372036854775807: false, -9223372036854775808: null, -9223372036854775808: "", -9223372036854775808: null, 0: null };
  ({ titleIcon, titleStyle, children, style } = title);
  Object.setPrototypeOf(null);
  const merged = Object.assign(title, obj);
  const tmp3 = callback2();
  const tmp4 = importDefault(dependencyMap[9])("UserProfileCard");
  obj = { style };
  const merged1 = Object.assign(merged);
  let tmp9Result = null != title;
  if (tmp9Result) {
    obj = {};
    const items = [tmp3.title, titleStyle];
    obj.style = items;
    const obj1 = { style: tmp3.text, accessibilityRole: "header" };
    let str2 = "text-sm/semibold";
    if (tmp4) {
      str2 = "text-sm/medium";
    }
    obj1.variant = str2;
    let str3 = "text-default";
    if (tmp4) {
      str3 = "text-strong";
    }
    obj1.color = str3;
    obj1.lineClamp = 1;
    obj1.children = title;
    const items1 = [closure_6(arg1(dependencyMap[7]).Text, obj1), titleIcon];
    obj.children = items1;
    tmp9Result = closure_7(View, obj);
    const tmp10 = View;
    const tmp11 = closure_6;
    const tmp9 = closure_7;
  }
  const items2 = [tmp9Result, children];
  obj["children"] = items2;
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
  const tmp = callback2();
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
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  let tmp5 = null != hint;
  if (tmp5) {
    const obj2 = { size: closure_5, color: str };
    tmp5 = callback(hint, obj2);
  }
  items[2] = tmp5;
  if (arrow) {
    const obj3 = { size: "sm" };
    arrow = callback(arg1(dependencyMap[8]).ChevronSmallRightIcon, obj3);
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
  return closure_7(arg1(dependencyMap[6]).PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  let closure_0 = importDefault(dependencyMap[9])("UserProfileCardRows");
  const Children = React.Children;
  return callback(closure_8, {
    children: Children.map(children.children, (arg0, arg1) => {
      const obj = {};
      let tmp2 = null;
      if (!closure_0) {
        tmp2 = null;
        if (0 !== arg1) {
          tmp2 = callback(closure_10, {});
        }
      }
      const items = [tmp2, arg0];
      obj.children = items;
      return closure_7(React.Fragment, obj, arg1);
    })
  });
};
