// Module ID: 14742
// Function ID: 14743
// Name: UserProfileTryItOutFields
// Dependencies: [19, 17, 1085, 21, 5090, 587, 558, 576, 1502, 14743, 6671, 8267, 14697, 14658, 1126, 2955, 14744, 14745, 14699, 14747, 2]

// Module 14742 (UserProfileTryItOutFields)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(initialTarget) {
  let avatarColors;
  let currentUser;
  let mode;
  let primaryColor;
  let secondaryColor;
  let tmp7;
  let tmp8;
  const tmp = mode;
  let obj = mode(navigation[7]);
  const cResult = obj.c(53);
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  ref();
  let obj2 = mode(navigation[8]);
  navigation = obj2.useNavigation();
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
  const tmp6 = initialTarget(navigation[9])(currentUser);
  if (cResult[0] !== navigation) {
    const fn = function y(initialTarget) {
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
      const obj2 = { initialTarget };
      navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, obj2);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  let closure_3 = tmp7;
  if (cResult[2] !== navigation) {
    class S {
      constructor() {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      }
    }
    cResult[2] = navigation;
    cResult[3] = S;
    tmp8 = S;
  } else {
    class S {
      constructor() {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      }
    }
  }
  S = tmp8;
  if (cResult[4] === avatarColors) {
    class S {
      constructor() {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      }
    }
  }
  cResult[4] = avatarColors;
  cResult[5] = primaryColor;
  cResult[6] = secondaryColor;
  cResult[7] = { primaryColor, secondaryColor, avatarColors, onChangeColors: tmp(navigation[11]).setTryItOutThemeColors };
  ({ primaryColor, secondaryColor, avatarColors, onChangeColors: tmp(navigation[11]).setTryItOutThemeColors });
}) : (function UserProfileTryItOutFields(initialTarget) {
  let closure_3;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let mode;
  let obj5;
  let obj7;
  let obj9;
  let primaryColor;
  let secondaryColor;
  let tmp14;
  let tmp5Result;
  let tmp5Result2;
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  navigation = undefined;
  react = undefined;
  let ref;
  const tmp = ref();
  let obj = mode(navigation[8]);
  navigation = obj.useNavigation();
  const tmp6 = initialTarget(navigation[9])(currentUser);
  ({ primaryColor, secondaryColor } = tmp6);
  const items = [navigation];
  const avatarColors = tmp6.avatarColors;
  react = react.useCallback((initialTarget) => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    const obj2 = { initialTarget };
    navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, obj2);
  }, items);
  const items1 = [navigation];
  let onPress = react.useCallback(() => {
    navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
  }, items1);
  let obj2 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(navigation[11]).setTryItOutThemeColors };
  const tmp7 = initialTarget(navigation[12]);
  const tmp7Result = tmp7(obj2);
  let fn2 = tmp7Result.openPrimaryColorPicker;
  let fn3 = tmp7Result.openSecondaryColorPicker;
  let fn4 = initialTarget(navigation[13])({ user: currentUser, isTryItOut: true });
  ref = react.useRef(false);
  const items2 = [mode, initialTarget, onPress, fn2, fn3, fn4];
  const effect = react.useEffect(() => {
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
        }
        tmp.current = true;
      }
    }
  }, items2);
  const obj3 = { style: tmp.container, children: items3 };
  const obj4 = { heading: intl.string(initialTarget(navigation[15])["86GtGH"]), showNitroIcon: true, children: fn3(tmp14, obj5) };
  const EditableTileGroup = mode(navigation[16]).EditableTileGroup;
  intl = mode(navigation[14]).intl;
  obj5 = { user: currentUser, onPress };
  const tmp11 = fn4;
  const tmp12 = onPress;
  tmp14 = initialTarget(navigation[17]);
  if ("edit" !== mode) {
    onPress = () => closure_3("display-name-styles");
  }
  items3 = [fn3(EditableTileGroup, obj4), , ];
  const obj6 = { heading: intl2.string(mode(navigation[14]).t.DMeO2X), showNitroIcon: true, children: fn3(tmp5Result, obj7) };
  const EditableTileGroup2 = tmp2(tmp3[16]).EditableTileGroup;
  intl2 = tmp2(tmp3[14]).intl;
  obj7 = { primaryColor, secondaryColor, onPressPrimary: fn2, onPressSecondary: fn3 };
  tmp5Result = initialTarget(navigation[18]);
  if ("edit" !== mode) {
    fn2 = () => closure_3("theme-primary");
  }
  if ("edit" !== mode) {
    fn3 = () => closure_3("theme-secondary");
  }
  items3[1] = fn3(EditableTileGroup2, obj6);
  const obj8 = { heading: intl3.string(mode(navigation[14]).t.Vgdusv), showNitroIcon: true, children: fn3(tmp5Result2, obj9) };
  const EditableTileGroup3 = tmp2(tmp3[16]).EditableTileGroup;
  intl3 = tmp2(tmp3[14]).intl;
  obj9 = { user: currentUser, onPress: fn4 };
  tmp5Result2 = initialTarget(navigation[19]);
  if ("edit" !== mode) {
    fn4 = () => closure_3("banner");
  }
  items3[2] = fn3(EditableTileGroup3, obj8);
  return tmp11(tmp12, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default tmp3;
