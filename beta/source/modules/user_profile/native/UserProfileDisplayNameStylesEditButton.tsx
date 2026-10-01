// Module ID: 14171
// Function ID: 14172
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [32, 19, 17, 1074, 2042, 21, 4836, 576, 1485, 9189, 6806, 2029, 7611, 5084, 10360, 1391, 1241, 1115, 14172, 1177, 12745, 10357, 14173, 14175, 2877, 2]
// Exports: default

// Module 14171 (UserProfileDisplayNameStylesEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import AssetRegistryDefault from "AssetRegistry" /* 12745 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14172 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 14173 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useMemo: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { ggContainer: size, noneIcon: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  let closure_3;
  let first;
  let items1;
  let pendingDisplayNameStyles;
  let tmp9;
  let tryItOutDisplayNameStyles;
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let closure_5;
  let closure_6;
  let displayNameStylesEffectConfig;
  const tmp = closure_11();
  _slicedToArray = tmp;
  let tmp3 = isTryItOut;
  let obj = user(isTryItOut[8]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = user(isTryItOut[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let tmp6 = user(isTryItOut[10]);
  const useSelectedDismissibleContent = tmp6.useSelectedDismissibleContent;
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    items1 = items;
  } else {
    items1 = [];
  }
  [first, tmp9] = useSelectedDismissibleContent(items1, undefined, true);
  closure_5 = tmp9;
  const tmp2Result = user(tmp3[12]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp11 = guildId;
  const tmp12 = guildId(tmp3[13]);
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  const tmp12Result = tmp12(obj3);
  closure_6 = tmp12Result;
  let effectId;
  const useDisplayNameStylesEffectConfig = tmp2(tmp3[14]).useDisplayNameStylesEffectConfig;
  user(tmp3[14]);
  if (tmp12Result != null) {
    effectId = tmp12Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp9];
  const items3 = [displayNameStylesEffectConfig, tmp12Result];
  const tmp17 = nativeStackNavigation(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    const obj2 = { guildId, isTryItOut };
    nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp18 = closure_5(() => {
    let stringResult;
    if (null == closure_6) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.PoWNfe);
    } else {
      const intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp12Result, guildId, user.id, tmp];
  const items5 = [tmp12Result];
  const tmp19 = nativeStackNavigation(() => {
    let tmp10;
    if (null == closure_6) {
      const Icon = native.Icon;
      tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
    } else {
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items4);
  const tmp20 = nativeStackNavigation(() => {
    let effectId;
    let tmp3Result = null;
    if (null != closure_6) {
      let colors;
      const tmp3 = jsx;
      const tmp6 = DisplayNameStylesColorSwatchDefault;
      if (closure_6 != null) {
        colors = tmp.colors;
      }
      if (colors == null) {
        colors = [];
      }
      const obj = { colors, effectId };
      effectId = undefined;
      if (closure_6 != null) {
        effectId = tmp.effectId;
      }
      tmp3Result = tmp3(tmp6, obj);
    }
    return tmp3Result;
  }, items5);
  const UserProfileEditFormButton = tmp2(tmp3[23]).UserProfileEditFormButton;
  let intl = tmp2(tmp3[17]).intl;
  ({ showPremiumIcon: true, showNewBadge: first === user(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = tmp2(tmp3[23]).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl.string(tmp11(tmp3[24])["86GtGH"])} labelTrailing={null} buttonText={tmp18} accessibilityValue={{ text: tmp18 }} onPress={tmp17} leading={tmp19()} trailing={tmp20()} />;
};
