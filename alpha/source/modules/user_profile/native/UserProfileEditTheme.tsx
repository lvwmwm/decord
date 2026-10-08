// Module ID: 14696
// Function ID: 14697
// Name: UserProfileEditTheme
// Dependencies: [19, 17, 21, 5090, 587, 8286, 8329, 8244, 5200, 14697, 5086, 1126, 6189, 5054, 14698, 1999, 9180, 14699, 2]
// Exports: default

// Module 14696 (UserProfileEditTheme)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import isEqualDefault from "isEqual" /* 5200 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, labelRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, overflowMenu: obj3 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  let guildId;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj6;
  let onProfileThemeColorsChanged;
  let pendingAvatarSrc;
  let primaryColor;
  let secondaryColor;
  let showResetMenu;
  let user;
  ({ user, onProfileThemeColorsChanged } = pendingThemeColors);
  ({ guildId, pendingAvatarSrc, showResetMenu } = pendingThemeColors);
  pendingThemeColors = pendingThemeColors.pendingThemeColors;
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let onChangeColors;
  let tmp = closure_7();
  let tmp3 = onChangeColors;
  let tmp4 = require("useDisplayProfile")(user.id, guildId);
  importDefault = tmp4;
  ({ primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors, isPreview: flag }));
  require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors, isPreview: flag });
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj = onProfileThemeColorsChanged(tmp3[7]);
  let themeColors;
  const avatarColors = obj.useAvatarColors(pendingAvatarSrc, tmp2(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  const useCallback = react.useCallback;
  if (tmp4 != null) {
    themeColors = tmp4.themeColors;
  }
  const items = [themeColors, onProfileThemeColorsChanged];
  onChangeColors = useCallback((arg0) => {
    themeColors = undefined;
    const tmp = isEqualDefault;
    if (themeColors != null) {
      themeColors = themeColors.themeColors;
    }
    let tmp4;
    const tmp3 = onProfileThemeColorsChanged;
    if (!tmp(arg0, themeColors)) {
      tmp4 = arg0;
    }
    tmp3(tmp4);
  }, items);
  require("useOpenThemeColorPickerActionSheet")({ primaryColor, secondaryColor, avatarColors, onChangeColors });
  let tmp15Result = null;
  if (null != primaryColor) {
    tmp15Result = null;
    if (null != secondaryColor) {
      let obj2 = { style: tmp.container, children: items2 };
      const obj3 = { style: tmp.labelRow, children: items1 };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: intl.string(onProfileThemeColorsChanged(tmp3[11]).t.DMeO2X) };
      const Text = tmp6(tmp3[10]).Text;
      intl = tmp6(tmp3[11]).intl;
      items1 = [closure_5(Text, obj4), ];
      if (showResetMenu) {
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.string(onProfileThemeColorsChanged(tmp3[11]).t["+1H47t"]),
          onPress: function handleOverflowMenuPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  const obj2 = {
                    onResetTheme() {
                      return onChangeColors([null, null]);
                    }
                  };
                  obj.openLazy(asyncRequire(14698, dependencyMap.paths), "Profile Theme", obj2);
                },
          children: closure_5(onProfileThemeColorsChanged(tmp3[16]).MoreHorizontalIcon, obj6)
        };
        const PressableOpacity = tmp6(tmp3[12]).PressableOpacity;
        intl2 = tmp6(tmp3[11]).intl;
        obj6 = { color: tmp.overflowMenu.tintColor };
        showResetMenu = tmp17(PressableOpacity, obj5);
      }
      items1[1] = showResetMenu;
      items2 = [closure_6(View, obj3), ];
      const obj7 = { primaryColor, secondaryColor, onPressPrimary: tmp12, onPressSecondary: tmp13 };
      items2[1] = closure_5(require("UserProfileThemePicker"), obj7);
      tmp15Result = tmp15(tmp16, obj2);
    }
  }
  return tmp15Result;
};
