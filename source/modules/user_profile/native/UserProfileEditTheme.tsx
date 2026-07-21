// Module ID: 13467
// Function ID: 102229
// Name: ColorSwatch
// Dependencies: []
// Exports: default

// Module 13467 (ColorSwatch)
function ColorSwatch(color) {
  let accessibilityLabel;
  let label;
  let onPress;
  let style;
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const int2hexResult = obj.int2hex(color);
  let obj1 = arg1(dependencyMap[6]);
  const items = [WHITE, PRIMARY_530];
  obj = { style: tmp.colorSwatchContainer };
  const higherContrastColor = obj1.getHigherContrastColor({ backgroundColor: int2hexResult, colors: items });
  obj = { accessibilityRole: "button", accessibilityLabel };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[8]).t.Qp04hK);
  const items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj.style = items1;
  obj.onPress = onPress;
  obj1 = { size: "xs", color: higherContrastColor, style: tmp.dropperIcon };
  obj.children = callback(arg1(dependencyMap[9]).PencilIcon, obj1);
  const items2 = [callback(arg1(dependencyMap[7]).PressableOpacity, obj, color), callback(arg1(dependencyMap[10]).Text, { children: label })];
  obj.children = items2;
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { gap: 6 }, sectionHeader: {}, themeColorContainer: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, colorSwatchContainer: {} };
obj = { <string:1632221346>: "<string:1107296676>", <string:2722977214>: "M168.783 62.4673C169.134 62.0216 169.338 61.4772 169.364 60.9102C169.391 60.3433 169.24 59.7821 168.933 59.3052C168.626 58.8282 168.177 58.4593 167.65 58.2501C167.123 58.0408 166.544 58.0016 165.993 58.138C159.553 59.7673 148.486 60.7682 136.884 53.5759C119.052 42.5199 99.1962 56.4156 103.753 73.1277C108.868 91.8415 142.836 99.4992 153.88 79.0863C153.88 79.0863 163.203 76.526 162.366 67.1923C164.881 66.2055 167.093 64.5764 168.783 62.4673Z", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.colorSwatch = obj;
obj.dropperIcon = { "Null": null, "Null": null, "Null": null };
const tmp3 = arg1(dependencyMap[2]);
obj.overflowMenu = { tintColor: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE };
let closure_6 = obj.createStyles(obj);
const WHITE = importDefault(dependencyMap[4]).unsafe_rawColors.WHITE;
const PRIMARY_530 = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_530;
const obj1 = { tintColor: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(isTryItOut) {
  let guildId;
  let pendingAvatarSrc;
  let showResetMenu;
  let user;
  ({ user, onProfileThemeColorsChanged: closure_0, guildId, pendingAvatarSrc, showResetMenu } = isTryItOut);
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let View;
  let callback;
  function handleProfileThemeColorsChanged(items, arg1) {
    let themeColors;
    if (null != tmp2) {
      themeColors = tmp2.themeColors;
    }
    let tmp5;
    if (!tmp(items, themeColors)) {
      tmp5 = items;
    }
    closure_0(tmp5);
  }
  function makeOnPress(primaryColor, arg1) {
    return () => {
      let obj = arg0(closure_2[15]);
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(arg0(closure_2[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2);
      obj = { color: arg0, onSelect: arg1, suggestedColors: closure_4 };
      arg1(closure_2[17])(obj);
    };
  }
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[11])(user.id, guildId);
  importDefault = tmp2;
  let obj = { user, displayProfile: tmp2, pendingThemeColors: isTryItOut.pendingThemeColors, isPreview: flag };
  const tmp3 = importDefault(dependencyMap[12])(obj);
  const primaryColor = tmp3.primaryColor;
  dependencyMap = primaryColor;
  const secondaryColor = tmp3.secondaryColor;
  View = secondaryColor;
  if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj1 = arg1(dependencyMap[13]);
  callback = obj1.useAvatarColors(pendingAvatarSrc, importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      obj = { style: tmp.container };
      obj = { style: tmp.sectionHeader };
      obj1 = {};
      const intl6 = arg1(dependencyMap[8]).intl;
      obj1.children = intl6.string(arg1(dependencyMap[8]).t.DMeO2X);
      const items = [callback(arg1(dependencyMap[10]).Text, obj1), ];
      if (showResetMenu) {
        const obj2 = { accessibilityRole: "button" };
        const intl = arg1(dependencyMap[8]).intl;
        obj2.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.+1H47t);
        obj2.onPress = function onPress() {
          let obj = tmp2(primaryColor[18]);
          obj = {
            onResetTheme() {
              callback([null, null]);
            }
          };
          obj.openLazy(callback(primaryColor[20])(primaryColor[19], primaryColor.paths), "Profile Theme", obj);
        };
        const obj3 = { color: tmp.overflowMenu.tintColor };
        obj2.children = callback(arg1(dependencyMap[21]).MoreHorizontalIcon, obj3);
        showResetMenu = callback(arg1(dependencyMap[7]).PressableOpacity, obj2);
      }
      items[1] = showResetMenu;
      obj.children = items;
      const items1 = [handleProfileThemeColorsChanged(View, obj), ];
      const obj4 = { style: tmp.themeColorContainer };
      const obj5 = {
        onPress: makeOnPress(primaryColor, (arg0) => {
              if (arg0 !== primaryColor) {
                const items = [arg0, secondaryColor];
                handleProfileThemeColorsChanged(items);
              }
            }),
        color: primaryColor
      };
      const intl2 = arg1(dependencyMap[8]).intl;
      obj5.label = intl2.string(arg1(dependencyMap[8]).t.C3KTQk);
      const intl3 = arg1(dependencyMap[8]).intl;
      const obj6 = {};
      let obj7 = arg1(dependencyMap[5]);
      obj6.colorHex = obj7.int2hex(primaryColor);
      obj5.accessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[8]).t.v4X2kc, obj6);
      const items2 = [callback(ColorSwatch, obj5), ];
      obj7 = {
        color: secondaryColor,
        onPress: makeOnPress(secondaryColor, (arg0) => {
              if (arg0 !== secondaryColor) {
                const items = [primaryColor, arg0];
                handleProfileThemeColorsChanged(items);
              }
            })
      };
      const intl4 = arg1(dependencyMap[8]).intl;
      obj7.label = intl4.string(arg1(dependencyMap[8]).t.8elvy6);
      const intl5 = arg1(dependencyMap[8]).intl;
      const obj8 = { colorHex: arg1(dependencyMap[5]).int2hex(secondaryColor) };
      obj7.accessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[8]).t.I0tmru, obj8);
      items2[1] = callback(ColorSwatch, obj7);
      obj4.children = items2;
      items1[1] = handleProfileThemeColorsChanged(View, obj4);
      obj.children = items1;
      return handleProfileThemeColorsChanged(View, obj);
    }
  }
  return null;
};
