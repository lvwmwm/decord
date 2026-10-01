// Module ID: 11077
// Function ID: 11078
// Name: UserProfileSection
// Dependencies: [19, 17, 21, 4836, 576, 4540, 6605, 4683, 8059, 4832, 2]
// Exports: default

// Module 11077 (UserProfileSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import useProfileThemeValues from "useProfileThemeValues" /* 6605 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }, title: { flexDirection: "row" }, section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 }, contentContainer: obj2 };
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  let children;
  let headerIcon;
  let items;
  let items1;
  let items2;
  let items3;
  let primaryColor;
  let showContainer;
  let style;
  let theme;
  let trailingIcon;
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(title, Object.assign({ title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 }));
  const tmp2 = closure_5();
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const obj2 = useProfileThemeValues;
  const profileThemeValues = obj2.useProfileThemeValues(theme);
  const obj3 = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    let borderColor;
    if (null != profileThemeValues) {
      const tmp3Result = ColorUtils;
      borderColor = tmp3Result.hexOpacityToRgba(tmp3(8059).DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
    }
    obj3.borderColor = borderColor;
    const obj4 = { style: items, children: items3 };
    items = [tmp2.section, style];
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      const obj5 = { style: tmp2.titleContainer, children: items2 };
      const obj6 = { style: tmp2.title, children: items1 };
      const obj7 = { variant: "eyebrow", accessibilityRole: "header", children: title };
      items1 = [_false(Text_Text.Text, obj7), headerIcon];
      items2 = [React3(View, obj6), trailingIcon];
      tmp8Result = tmp8(tmp9, obj5);
    }
    items3 = [tmp8Result, ];
    let tmp16 = null;
    const tmp15 = _false;
    if (showContainer) {
      tmp16 = obj3;
    }
    const obj8 = { style: tmp16, children };
    items3[1] = tmp15(View, obj8);
    return React3(View, obj4);
  }
  borderColor = tmp2.contentContainer.borderColor;
};
