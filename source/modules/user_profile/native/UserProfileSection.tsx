// Module ID: 10008
// Function ID: 77355
// Name: UserProfileSection
// Dependencies: [31, 27, 33, 4130, 689, 3842, 5486, 3974, 7191, 4126, 2]
// Exports: default

// Module 10008 (UserProfileSection)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" }, title: { flexDirection: "row" }, section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 } };
_createForOfIteratorHelperLoose = { borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  let children;
  let headerIcon;
  let showContainer;
  let style;
  let trailingIcon;
  title = title.title;
  let obj = { title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 };
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  Object.setPrototypeOf(null);
  const merged = Object.assign(title, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj1 = require(3842) /* ManaContext */;
  const themeContext = obj1.useThemeContext();
  const theme = themeContext.theme;
  let obj2 = require(5486) /* useProfileThemeValues */;
  const profileThemeValues = obj2.useProfileThemeValues(theme);
  obj = {};
  const merged1 = Object.assign(tmp3.contentContainer);
  if (null != themeContext.primaryColor) {
    if (null != profileThemeValues) {
      let obj4 = require(3974) /* hexToRgb */;
      let borderColor = obj4.hexOpacityToRgba(require(7191) /* Divider */.DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
    }
    obj["borderColor"] = borderColor;
    obj = {};
    const items = [tmp3.section, style];
    obj.style = items;
    const merged2 = Object.assign(merged);
    let tmp14 = null;
    if (null != title) {
      obj1 = { style: tmp3.titleContainer };
      obj2 = { style: tmp3.title };
      const obj3 = { variant: "eyebrow", accessibilityRole: "header", children: title };
      const items1 = [callback(require(4126) /* Text */.Text, obj3), headerIcon];
      obj2.children = items1;
      const items2 = [callback2(View, obj2), trailingIcon];
      obj1.children = items2;
      tmp14 = callback2(View, obj1);
    }
    const items3 = [tmp14, ];
    obj4 = {};
    let tmp22 = null;
    if (showContainer) {
      tmp22 = obj;
    }
    obj4.style = tmp22;
    obj4.children = children;
    items3[1] = callback(View, obj4);
    obj["children"] = items3;
    return callback2(View, obj);
  }
  borderColor = tmp3.contentContainer.borderColor;
};
