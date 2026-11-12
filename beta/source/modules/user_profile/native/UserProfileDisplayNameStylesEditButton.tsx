// Module ID: 16818
// Function ID: 16819
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [32, 19, 17, 1072, 5016, 21, 5170, 575, 1499, 7674, 5003, 8841, 6604, 10926, 1396, 16819, 1252, 1113, 16822, 1187, 15384, 10923, 16823, 16825, 3056, 16826, 2]
// Exports: default

// Module 16818 (UserProfileDisplayNameStylesEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import AssetRegistryDefault from "AssetRegistry" /* 15384 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 16822 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 16823 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  let tmp8;
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let closure_6;
  let displayNameStylesEffectConfig;
  const tmp = closure_11();
  _slicedToArray = tmp;
  let tmp3 = isTryItOut;
  let obj = user(isTryItOut[8]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const useSelectedDismissibleContent = user(isTryItOut[9]).useSelectedDismissibleContent;
  const tmp5 = user(isTryItOut[9]);
  const items = [user(isTryItOut[10]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
  [first, tmp8] = useSelectedDismissibleContent(items, { bypassAutoDismiss: true });
  let closure_5 = tmp8;
  let obj2 = user(isTryItOut[11]);
  const guildMemberOrUserPendingDisplayNameStyles = obj2.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  let tmp10 = guildId;
  const tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp11 = guildId(isTryItOut[12]);
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  const tmp11Result = tmp11(obj3);
  closure_6 = tmp11Result;
  let effectId;
  const useDisplayNameStylesEffectConfig = tmp2(tmp3[13]).useDisplayNameStylesEffectConfig;
  user(tmp3[13]);
  if (tmp11Result != null) {
    effectId = tmp11Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[14]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
  const tmp2Result2 = user(tmp3[15]);
  const hexagonCampaignDisplayNameStylePromo = tmp2Result2.useHexagonCampaignDisplayNameStylePromo({ location: "UserProfileDisplayNameStylesEditButton", displayNameStyles: tmp11Result, isTryItOut });
  let showCampaignNewBadge = hexagonCampaignDisplayNameStylePromo.showCampaignNewBadge;
  const items1 = [guildId, isTryItOut, nativeStackNavigation, tmp8];
  const showCampaignPromo = hexagonCampaignDisplayNameStylePromo.showCampaignPromo;
  const items2 = [displayNameStylesEffectConfig, tmp11Result];
  const tmp17 = nativeStackNavigation(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    const obj2 = { guildId, isTryItOut };
    nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items1);
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
  }, items2);
  const items3 = [tmp11Result, guildId, user.id, tmp];
  const items4 = [tmp11Result];
  const tmp19 = nativeStackNavigation(() => {
    let tmp10;
    if (null == closure_6) {
      const Icon = native.Icon;
      tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
    } else {
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items3);
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
  }, items4);
  const UserProfileEditFormButton = tmp2(tmp3[23]).UserProfileEditFormButton;
  let intl = tmp2(tmp3[17]).intl;
  const UserProfileEditFormLabelBadges = tmp2(tmp3[23]).UserProfileEditFormLabelBadges;
  if (!showCampaignNewBadge) {
    showCampaignNewBadge = first === tmp2(tmp3[10]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
  }
  let tmp21Result;
  if (showCampaignPromo) {
    tmp21Result = tmp21(tmp10(tmp3[25]), {});
  }
  return <UserProfileEditFormButton label={intl.string(tmp10(tmp3[24])["86GtGH"])} labelTrailing={null} buttonText={tmp18} accessibilityValue={{ text: tmp18 }} onPress={tmp17} leading={tmp19()} trailing={tmp20()} footer={tmp21Result} />;
};
