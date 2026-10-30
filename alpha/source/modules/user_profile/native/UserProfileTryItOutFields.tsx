// Module ID: 16487
// Function ID: 16488
// Name: UserProfileTryItOutFields
// Dependencies: [19, 17, 1072, 21, 5009, 575, 16488, 7557, 16441, 8730, 16391, 16489, 16492, 1114, 2931, 16493, 16495, 16443, 16502, 16505, 2]
// Exports: default

// Module 16487 (UserProfileTryItOutFields)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default function UserProfileTryItOutFields(initialTarget) {
  let TryItOutEditableTileAvatarButton;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let mode;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  let primaryColor;
  let secondaryColor;
  let tmp13;
  let tmp2Result;
  let tmp2Result2;
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  let onPress;
  let fn2;
  const tmp = closure_8();
  const tmp4 = initialTarget(onPress[6])(currentUser);
  ({ primaryColor, secondaryColor } = tmp4);
  const avatarColors = tmp4.avatarColors;
  onPress = fn2.useCallback(() => {
    const obj = mode(fn[7]);
    const obj2 = { screen: fn4.DISPLAY_NAME_STYLES, params: { isTryItOut: true } };
    obj.openUserSettings(obj2, undefined, { pop: false });
  }, []);
  let obj = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(onPress[9]).setTryItOutThemeColors };
  const tmp5 = initialTarget(onPress[8]);
  const tmp5Result = tmp5(obj);
  fn2 = tmp5Result.openPrimaryColorPicker;
  let fn3 = tmp5Result.openSecondaryColorPicker;
  let fn4 = initialTarget(onPress[10])({ user: currentUser, isTryItOut: true });
  let fn5 = initialTarget(onPress[11])({ user: currentUser, isTryItOut: true });
  const ref = fn2.useRef(false);
  const items = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = fn2.useEffect(() => {
    if ("edit" === mode) {
      if (!ref.current) {
        if ("display-name-styles" === initialTarget) {
          fn();
        } else if ("theme-primary" === initialTarget) {
          fn2();
        } else if ("theme-secondary" === initialTarget) {
          fn3();
        } else if ("banner" === initialTarget) {
          fn4();
        } else if ("avatar" === initialTarget) {
          fn5();
        }
        tmp12.current = true;
      }
    }
  }, items);
  let obj2 = { style: tmp.container, children: items1 };
  const tmp12 = fn5;
  const obj3 = { heading: intl.string(initialTarget(onPress[14])["86GtGH"]), showNitroIcon: true, children: tmp12(tmp13, obj4) };
  const EditableTileGroup = mode(onPress[12]).EditableTileGroup;
  intl = mode(onPress[13]).intl;
  obj4 = { user: currentUser, onPress };
  const tmp10 = ref;
  const tmp11 = fn3;
  tmp13 = initialTarget(onPress[15]);
  if ("edit" !== mode) {
    onPress = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("display-name-styles");
    };
  }
  items1 = [tmp12(EditableTileGroup, obj3), , , ];
  const obj5 = { heading: intl2.string(mode(onPress[13]).t.DMeO2X), showNitroIcon: true, children: tmp12(tmp2Result, obj6) };
  const EditableTileGroup2 = tmp6(tmp3[12]).EditableTileGroup;
  intl2 = tmp6(tmp3[13]).intl;
  obj6 = { primaryColor, secondaryColor, onPressPrimary: fn2, onPressSecondary: fn3 };
  tmp2Result = initialTarget(onPress[17]);
  if ("edit" !== mode) {
    fn2 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("theme-primary");
    };
  }
  if ("edit" !== mode) {
    fn3 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("theme-secondary");
    };
  }
  items1[1] = tmp12(EditableTileGroup2, obj5);
  const obj7 = { heading: intl3.string(mode(onPress[13]).t.Vgdusv), showNitroIcon: true, children: tmp12(tmp2Result2, obj8) };
  const EditableTileGroup3 = tmp6(tmp3[12]).EditableTileGroup;
  intl3 = tmp6(tmp3[13]).intl;
  obj8 = { user: currentUser, onPress: fn4 };
  tmp2Result2 = initialTarget(onPress[18]);
  if ("edit" !== mode) {
    fn4 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("banner");
    };
  }
  items1[2] = tmp12(EditableTileGroup3, obj7);
  const obj9 = { heading: intl4.string(mode(onPress[13]).t.Dt3ZUr), showNitroIcon: true, children: tmp12(TryItOutEditableTileAvatarButton, obj10) };
  const EditableTileGroup4 = tmp6(tmp3[12]).EditableTileGroup;
  intl4 = tmp6(tmp3[13]).intl;
  obj10 = { user: currentUser, onPress: fn5 };
  TryItOutEditableTileAvatarButton = tmp6(tmp3[19]).TryItOutEditableTileAvatarButton;
  if ("edit" !== mode) {
    fn5 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("avatar");
    };
  }
  items1[3] = tmp12(EditableTileGroup4, obj9);
  return tmp10(tmp11, obj2);
};
