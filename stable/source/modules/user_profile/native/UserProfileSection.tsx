// Module ID: 11715
// Function ID: 11716
// Name: UserProfileSection
// Dependencies: [19, 17, 21, 4636, 576, 4347, 7287, 4486, 8722, 4632, 2]
// Exports: default

// Module 11715 (UserProfileSection)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4347 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7287 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4636);
const obj2 = { titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }, title: { flexDirection: "row" }, section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 }, contentContainer: { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(title, Object.assign({ title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 }));
  const tmp2 = closure_5();
  const themeContext = native.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme);
  const obj3 = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    if (null != profileThemeValues) {
      let borderColor = tmp3(4486).hexOpacityToRgba(tmp3(8722).DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
      const tmp3Result = tmp3(4486);
    }
    obj3.borderColor = borderColor;
    const obj4 = { style: null };
    const items = [tmp2.section, style];
    obj4.style = items;
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      const obj5 = { style: tmp2.titleContainer, children: null };
      const obj6 = { style: tmp2.title, children: null };
      const obj7 = { variant: "eyebrow", accessibilityRole: "header", children: title };
      const items1 = [React3(tmp3(4632).Text, obj7), headerIcon];
      obj6.children = items1;
      const items2 = [tmp8(tmp9, obj6), trailingIcon];
      obj5.children = items2;
      tmp8Result = tmp8(tmp9, obj5);
    }
    const items3 = [tmp8Result, ];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj3;
    }
    const obj8 = { style: tmp16, children };
    items3[1] = React3(View, obj8);
    obj4.children = items3;
    return React4(View, obj4);
  }
  borderColor = tmp2.contentContainer.borderColor;
};
