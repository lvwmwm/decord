// Module ID: 16418
// Function ID: 16419
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [32, 19, 17, 1072, 4855, 5034, 21, 5009, 575, 1498, 7563, 4842, 8729, 6433, 10755, 1403, 5037, 16411, 6778, 16419, 1253, 1114, 16422, 1188, 15035, 10752, 16423, 16425, 2931, 16426, 2]
// Exports: default

// Module 16418 (UserProfileDisplayNameStylesEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import AssetRegistryDefault from "AssetRegistry" /* 15035 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 16422 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 16423 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useMemo: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c10, HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { ggContainer: size, noneIcon: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles(obj);
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
  const tmp = closure_14();
  _slicedToArray = tmp;
  let tmp3 = isTryItOut;
  let obj = user(isTryItOut[9]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const useSelectedDismissibleContent = user(isTryItOut[10]).useSelectedDismissibleContent;
  const tmp5 = user(isTryItOut[10]);
  const items = [user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
  [first, tmp8] = useSelectedDismissibleContent(items, { bypassAutoDismiss: true });
  let closure_5 = tmp8;
  let obj2 = user(isTryItOut[12]);
  const guildMemberOrUserPendingDisplayNameStyles = obj2.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let pendingDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  let tmp10 = guildId;
  const tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp11 = guildId(isTryItOut[13]);
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  const tmp11Result = tmp11(obj3);
  closure_6 = tmp11Result;
  let effectId;
  const useDisplayNameStylesEffectConfig = tmp2(tmp3[14]).useDisplayNameStylesEffectConfig;
  user(tmp3[14]);
  if (tmp11Result != null) {
    effectId = tmp11Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
  const tmp2Result4 = user(tmp3[16]);
  let tmp16 = tmp2Result4.useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE && true !== isTryItOut;
  if (tmp16) {
    let fontId;
    if (tmp11Result != null) {
      fontId = tmp11Result.fontId;
    }
    tmp16 = fontId !== closure_10;
  }
  const useTrackHexagonCampaignContentViewed = tmp2(tmp3[17]).useTrackHexagonCampaignContentViewed;
  user(tmp3[17]);
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(tmp2(tmp3[18]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp2(tmp3[17]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp16);
  const items1 = [guildId, isTryItOut, nativeStackNavigation, tmp8];
  const tmp2Result6 = user(tmp3[19]);
  const hexagonCampaignHasVisitedDisplayNameStyles = tmp2Result6.useHexagonCampaignHasVisitedDisplayNameStyles();
  const items2 = [displayNameStylesEffectConfig, tmp11Result];
  const tmp22 = nativeStackNavigation(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    const obj2 = { guildId, isTryItOut };
    nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const tmp23 = closure_5(() => {
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
  const tmp24 = nativeStackNavigation(() => {
    let tmp10;
    if (null == closure_6) {
      const Icon = native.Icon;
      tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
    } else {
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items3);
  const tmp25 = nativeStackNavigation(() => {
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
  const UserProfileEditFormButton = tmp2(tmp3[27]).UserProfileEditFormButton;
  let intl = tmp2(tmp3[21]).intl;
  let tmp27 = tmp16;
  const UserProfileEditFormLabelBadges = tmp2(tmp3[27]).UserProfileEditFormLabelBadges;
  if (tmp16) {
    tmp27 = !hexagonCampaignHasVisitedDisplayNameStyles;
  }
  if (!tmp27) {
    tmp27 = first === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
  }
  let tmp26Result;
  if (tmp16) {
    tmp26Result = tmp26(tmp10(tmp3[29]), {});
  }
  return <UserProfileEditFormButton label={intl.string(tmp10(tmp3[28])["86GtGH"])} labelTrailing={null} buttonText={tmp23} accessibilityValue={{ text: tmp23 }} onPress={tmp22} leading={tmp24()} trailing={tmp25()} footer={tmp26Result} />;
};
