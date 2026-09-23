// Module ID: 11913
// Function ID: 11914
// Name: UserProfileSection
// Dependencies: [19, 17, 21, 4827, 576, 4533, 7515, 4676, 8953, 4823, 2]
// Exports: default

// Module 11913 (UserProfileSection)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4533 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7515 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4827);
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
      let borderColor = tmp3(4676).hexOpacityToRgba(tmp3(8953).DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
      const tmp3Result = tmp3(4676);
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
      const items1 = [React3(tmp3(4823).Text, obj7), headerIcon];
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
