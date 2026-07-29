// Module ID: 10031
// Function ID: 10032
// Name: UserProfileSection
// Dependencies: [19, 17, 21, 4189, 712, 3901, 5537, 4033, 7641, 4185, 2]
// Exports: default

// Module 10031 (UserProfileSection)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }, title: { flexDirection: "row" }, section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 }, contentContainer: null };
createCacheKey = { borderWidth: 1, borderRadius: require("Themes").radii.sm, borderColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  let children;
  let headerIcon;
  let primaryColor;
  let showContainer;
  let style;
  let theme;
  let trailingIcon;
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(title, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = require(3901) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  let obj1 = require(5537) /* useProfileThemeValues */;
  const profileThemeValues = obj1.useProfileThemeValues(theme);
  obj = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    if (null != profileThemeValues) {
      let borderColor = tmp3(4033).hexOpacityToRgba(tmp3(7641).DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
      const tmp3Result = tmp3(4033);
    }
    obj.borderColor = borderColor;
    obj = { style: null };
    const items = [tmp2.section, style];
    obj[0] = items;
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp2.titleContainer;
      const obj2 = { style: null, children: null };
      obj2[0] = tmp2.title;
      const obj3 = { variant: "eyebrow", accessibilityRole: "header", children: null };
      obj3[2] = title;
      const items1 = [callback(tmp3(4185).Text, obj3), headerIcon];
      obj2[1] = items1;
      const items2 = [tmp8(tmp9, obj2), trailingIcon];
      obj1[1] = items2;
      tmp8Result = tmp8(tmp9, obj1);
    }
    const items3 = [tmp8Result, ];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj;
    }
    const obj4 = { style: null, children: null };
    obj4[0] = tmp16;
    obj4[1] = children;
    items3[1] = callback(View, obj4);
    obj.children = items3;
    return closure_4(View, obj);
  }
  borderColor = tmp2.contentContainer.borderColor;
};
