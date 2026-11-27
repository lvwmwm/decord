// Module ID: 16037
// Function ID: 16038
// Name: ProfileCustomizationSettingScreenV2
// Dependencies: [109, 19, 17, 9438, 6376, 6163, 14572, 4955, 1387, 1081, 1071, 7557, 21, 575, 1654, 5043, 6379, 6380, 504, 2174, 16038, 6375, 1112, 16054, 9488, 16056, 9489, 9504, 5104, 9490, 9503, 16057, 9528, 9808, 16062, 11150, 1629, 5607, 16064, 16065, 16070, 6013, 6162, 9486, 8487, 14856, 16072, 9440, 6309, 16073, 16074, 14859, 10590, 16078, 2]
// Exports: default

// Module 16037 (ProfileCustomizationSettingScreenV2)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 6309 */;
import Constants2 from "Constants" /* 7557 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9440 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9438 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import WidgetStore from "WidgetStore" /* 14572 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import module_1654 from "module_1654" /* 1654 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let ScrollView;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function ProfilePreviewBanner(user) {
  let banner;
  let disabled;
  let displayProfile;
  let num;
  let obj4;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let stringResult;
  let tmp4Result;
  let tmpResult4;
  user = user.user;
  const guildId = user.guildId;
  ({ displayProfile, pendingBanner } = user);
  const tmp = guildId;
  ({ pendingAvatarSrc, pendingThemeColors, pendingAccentColor, disabled } = user);
  const tmp3 = guildId(6379);
  const analyticsLocations = tmp3(guildId(6380).EDIT_BANNER).analyticsLocations;
  const items = [UserProfileStore];
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildMemberProfile = null;
    if (null != guildId) {
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
    }
    return guildMemberProfile;
  });
  let result = !tmp6;
  if (null != guildId) {
    const tmpResult = tmp(2174);
    result = tmpResult.canUsePremiumGuildMemberProfile(user);
  }
  if (null != guildId) {
    let banner1;
    if (stateFromStores != null) {
      banner1 = stateFromStores.banner;
    }
    banner = banner1;
  } else if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  const obj2 = { user, guildId, analyticsLocations, showRemoveBanner: tmp4Result.showRemoveBanner(pendingBanner, banner) };
  const tmpResult3 = tmp(16038);
  tmp4Result = user(6375);
  const tmpResult1Result = tmpResult3(obj2);
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const t = tmp4(1112).t;
  if (null != guildId) {
    stringResult = string(t["95hPAe"]);
  } else {
    stringResult = string(t.VqsHy0);
  }
  const obj3 = { value: analyticsLocations, children: closure_18(tmpResult4, obj4) };
  const AnalyticsLocationProvider = tmp4(6379).AnalyticsLocationProvider;
  let banner2;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: num, showEditButton: result, onPressEdit: tmpResult1Result, editButtonAccessibilityLabel: stringResult, editDisabled: disabled, isUserProfileEditingRefresh: true };
  tmpResult4 = tmp(16054);
  if (displayProfile != null) {
    banner2 = displayProfile.banner;
  }
  num = undefined;
  if (null == banner2) {
    num = 12;
  }
  return closure_18(AnalyticsLocationProvider, obj3);
}
function ProfilePreviewFrame(user) {
  let disabled;
  let displayProfile;
  let items1;
  let items2;
  let items3;
  let items4;
  let pendingChanges;
  let pendingGlobalName;
  let primaryColor;
  let secondaryColor;
  let theme;
  user = user.user;
  const guildId = user.guildId;
  ({ displayProfile, pendingChanges, disabled } = user);
  const tmp = closure_22();
  let tmp2 = guildId;
  const tmp4 = guildId(9488)();
  const tmp5 = guildId(16056)();
  const obj = user(9489);
  const customStatusActivity = obj.useCustomStatusActivity();
  const tmp8 = guildId(9504)(displayProfile);
  const obj2 = user(5104);
  const themeContext = obj2.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj3 = user(9490);
  const userProfileColors = obj3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const obj4 = { backgroundColor: userProfileColors.avatarBackground };
  let num = 0;
  const containerBackground = userProfileColors.containerBackground;
  if (null == customStatusActivity) {
    num = closure_17;
  }
  const obj5 = { userId: user.id, image: pendingChanges.pendingAvatar };
  const tmp6Result = user(9503);
  const pendingAvatarSrc = tmp6Result.getPendingAvatarSrc(obj5);
  user(504);
  [][0] = GuildMemberStore;
  const items = [guildId, user.id];
  if (null != guildId) {
    let str = pendingChanges.pendingNickname;
    if (str == null) {
      str = tmp13;
    }
    if (str == null) {
      str = "";
    }
    pendingGlobalName = str;
  } else {
    pendingGlobalName = pendingChanges.pendingGlobalName;
  }
  let str2;
  if (displayProfile != null) {
    str2 = displayProfile.getPreviewPronouns(pendingChanges.pendingPronouns);
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3 = guildId;
  const id = user.id;
  const obj6 = { style: tmp.previewFrame, children: items1 };
  const obj7 = { user, guildId, displayProfile, pendingAvatarSrc, pendingBanner: pendingChanges.pendingBanner, pendingThemeColors: pendingChanges.pendingThemeColors, pendingAccentColor: pendingChanges.pendingAccentColor, disabled };
  const tmp17 = ProfilePreviewBanner;
  if (guildId == null) {
    str3 = "main";
  }
  items1 = [closure_18(tmp17, obj7, "" + id + "-" + str3), ];
  const obj8 = { style: items2, children: items4 };
  items2 = [, , , ];
  ({ profileContentWrapper: arr3[0], profileContent: arr3[1] } = tmp4);
  items2[2] = { paddingTop: num };
  items2[3] = tmp.previewContent;
  const obj9 = { style: items3, children: closure_18(tmp2(16057), { user, guildId, disabled, disableStatus: false, statusStyle: obj4, isUserProfileEditingRefresh: true }) };
  items3 = [, , , ];
  ({ avatarBackground: arr4[0], avatarPosition: arr4[1] } = tmp4);
  items3[2] = tmp5.avatarContainer;
  items3[3] = obj4;
  items4 = [closure_18(closure_7, obj9), , ];
  const obj10 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp4.customStatusBubble, emojiOnlyStyle: tmp4.emojiOnlyCustomStatusBubble };
  items4[1] = closure_18(tmp2(9528), obj10);
  const obj11 = { user, guildId, displayName: pendingGlobalName, pronouns: str2, badges: tmp8, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: pendingChanges.pendingDisplayNameStyles, canOpenBadgeDirectory: null == guildId, showsBadgeUnreadDot: null != guildId };
  items4[2] = closure_18(tmp2(9808), obj11);
  items1[1] = closure_19(closure_7, obj8);
  return closure_19(closure_7, obj6);
}
function ProfileCustomizationSettingScreenV2(currentUser) {
  let DisableCustomTheme;
  let ThemeContextProvider;
  let closure_2;
  let guardUnsavedChanges;
  let guild;
  let handleSelectGuild;
  let handleSelectMainProfile;
  let handleSubmit2;
  let hasGuilds;
  let headerStyle;
  let items10;
  let items11;
  let items12;
  let items13;
  let items9;
  let obj11;
  let obj16;
  let obj17;
  let obj18;
  let obj8;
  let obj9;
  let onLayout;
  let primaryColor;
  let ref;
  let saveAndClose;
  let scrollHandler;
  let secondaryColor;
  let theme2;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp45;
  let tmp47Result;
  let width;
  currentUser = currentUser.currentUser;
  let field;
  handleSubmit2 = undefined;
  let id;
  let sharedValue1;
  let handleHeaderLayout;
  let id1;
  let tmp = field;
  let tmp3 = field(16062)();
  field(11150)();
  let tmp5 = closure_22();
  const tmp6 = field(16056)();
  let obj = currentUser(5104);
  const theme = obj.useThemeContext().theme;
  const tmp8 = field(1629)();
  let obj2 = currentUser(5607);
  const token = obj2.useToken(field(575).colors.BACKGROUND_BASE_LOWEST);
  field = id1.useField("subsection");
  dependencyMap = tmp11;
  ({ hasGuilds, handleSelectMainProfile, handleSelectGuild } = field(16064)());
  field(16064)();
  const tmp13 = field(6379);
  const tmp14 = field(6380);
  const analyticsLocations = tmp13(tmp11 ? tmp14.USER_SETTINGS_GUILD_PROFILE : tmp14.USER_SETTINGS_USER_PROFILE).analyticsLocations;
  const tmp15 = tmp(16065)();
  const handleSubmit = tmp15.handleSubmit;
  const tmp16 = id(tmp15, handleSubmit);
  const tmp17 = tmp(16070)();
  ({ guild, handleSubmit: handleSubmit2 } = tmp17);
  const tmp18 = tmp16.isSubmitting || id(tmp17, handleSubmit2).isSubmitting;
  const items = [UserProfileSettingsStore, WidgetStore];
  const tmp7Result = currentUser(504);
  const stateFromStoresObject = tmp7Result.useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = WidgetStore.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    const obj = WidgetStore;
    if (!showNoticeResult) {
      showNoticeResult = UserProfileSettingsStore.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: hasUnsavedChangesResult };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !obj.canSaveChanges();
    }
    return obj2;
  });
  const hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  const items1 = [field === constants.GUILD, handleSubmit, handleSubmit2];
  const hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  const items2 = [field];
  const callback = sharedValue1.useCallback(() => {
    let tmp3;
    const tmp = closure_2;
    if (tmp) {
      tmp3 = handleSubmit2();
    } else {
      tmp3 = handleSubmit();
    }
    return tmp3;
  }, items1);
  const effect = sharedValue1.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  let tmp23 = null;
  const tmp19 = UserProfileSettingsStore;
  if (field === constants.GUILD) {
    tmp23 = guild;
  }
  id = undefined;
  if (tmp23 != null) {
    id = tmp23.id;
  }
  const items3 = [tmp19];
  const tmp7Result6 = currentUser(504);
  const stateFromStores = tmp7Result6.useStateFromStores(items3, () => UserProfileSettingsStore.getPendingChanges(id));
  const tmp26 = tmp(6162)(currentUser.id, id);
  const obj3 = { user: currentUser, displayProfile: tmp26, pendingThemeColors: stateFromStores.pendingThemeColors };
  const tmp27 = tmp(9486)(obj3);
  const tmp28 = tmp(8487)();
  const height = tmp28.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp28);
  if (undefined !== height) {
    num = height;
  }
  const tmp29 = tmp(14856)(width);
  const tmp7Result7 = currentUser(1654);
  const animatedRef = tmp7Result7.useAnimatedRef();
  const tmp7Result8 = currentUser(1654);
  const sharedValue = tmp7Result8.useSharedValue(0);
  const tmp7Result9 = currentUser(1654);
  sharedValue1 = tmp7Result9.useSharedValue(0);
  const tmp33 = tmp(16072)(sharedValue, animatedRef);
  handleHeaderLayout = tmp33.handleHeaderLayout;
  const items4 = [handleHeaderLayout, sharedValue1];
  ({ headerStyle, scrollHandler } = tmp33);
  const callback1 = obj4.useCallback((nativeEvent) => {
    handleHeaderLayout(nativeEvent);
    const layout = nativeEvent.nativeEvent.layout;
    const result = sharedValue1.set(layout.y + layout.height);
  }, items4);
  const items5 = [closure_25, sharedValue1, sharedValue, xl];
  let c0;
  let c1;
  let c2;
  [tmp35, tmp36, tmp37, tmp38] = items5;
  const tmp7Result10 = currentUser(1654);
  class ProfileCustomizationSettingScreenV2Tsx1 {
    constructor() {
      const value = _undefined.get();
      const value2 = _undefined2.get();
      const bound = Math.min(c2, Math.max(0, value + c2 - value2));
      const obj = { top: Math.max(0, value - value2), borderTopLeftRadius: bound, borderTopRightRadius: bound };
      return obj;
    }
  }
  const items6 = [tmp36, tmp37, tmp38];
  ProfileCustomizationSettingScreenV2Tsx1.__closure = items6;
  ProfileCustomizationSettingScreenV2Tsx1.__workletHash = 7571175928607;
  ProfileCustomizationSettingScreenV2Tsx1.__initData = tmp35;
  id1 = undefined;
  const animatedStyle = tmp7Result10.useAnimatedStyle(ProfileCustomizationSettingScreenV2Tsx1);
  if (guild != null) {
    id1 = guild.id;
  }
  const items7 = [id1];
  const effect1 = obj4.useEffect(() => {
    if (null != id1) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp);
    }
  }, items7);
  const items8 = [currentUser, id];
  const effect2 = obj4.useEffect(() => {
    if (null != id) {
      const obj = GuildIdentityActionCreators;
      obj.setCurrentGuild(id);
    }
    const tmp5 = maybeFetchUserProfileDefault;
    tmp5(currentUser.id, currentUser.getAvatarURL(id, 80), { guildId: id });
  }, items8);
  const obj5 = { location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp18, shouldBlockExit: tmp16.isWaitingForHexagonCampaignEnrollment };
  ({ saveAndClose, guardUnsavedChanges } = tmp(16073)(obj5));
  const obj6 = { onSave: saveAndClose, saveButtonDisabled: tmp45, isSubmitting: tmp18, showTitleAndBackButton: true, backgroundColor: token };
  tmp45 = !hasUnsavedChanges;
  tmp(16073)(obj5);
  const tmpResult = tmp(16074);
  if (hasUnsavedChanges) {
    tmp45 = hasInvalidWidgetChanges;
  }
  tmpResult(obj6);
  ({ theme: theme2, primaryColor, secondaryColor } = tmp27);
  const obj7 = { value: analyticsLocations, children: closure_18(handleHeaderLayout, obj8) };
  obj8 = { ref, style: tmp5.container, onLayout, children: closure_19(ThemeContextProvider, obj9) };
  const AnalyticsLocationProvider = tmp7(6379).AnalyticsLocationProvider;
  obj9 = { theme: theme2, primaryColor, secondaryColor, children: items10 };
  ThemeContextProvider = tmp7(5104).ThemeContextProvider;
  const obj10 = { style: items9, children: closure_18(tmp(14859), obj11) };
  items9 = [tmp5.previewBackground, animatedStyle];
  const View = tmp(1654).View;
  obj11 = { gradientHeight: num, bannerHeight: tmp29, style: { top: "auto", height: num } };
  items10 = [closure_18(View, obj10), ];
  const obj13 = { style: items11 };
  items11 = [tmp6.bounceOffset, tmp5.bounceOffset];
  const obj12 = { ref: animatedRef, onScroll: scrollHandler, scrollEventThrottle: 16, contentContainerStyle: { paddingBottom: tmp8.bottom }, keyboardShouldPersistTaps: "handled", children: items12 };
  items12 = [closure_18(handleHeaderLayout, obj13), , ];
  const obj14 = { style: items13, onLayout: callback1, children: tmp47Result };
  items13 = [tmp5.stickyProfileSelector, headerStyle];
  tmp47Result = null;
  const View2 = tmp(1654).View;
  const tmp50 = closure_21;
  if (hasGuilds) {
    const obj15 = { theme, children: closure_18(DisableCustomTheme, obj16) };
    const ThemeContextProvider2 = tmp7(5104).ThemeContextProvider;
    obj16 = { children: closure_18(handleHeaderLayout, obj17) };
    obj17 = { style: tmp5.profileSelector, children: closure_18(tmp(16078), obj18) };
    DisableCustomTheme = tmp7(10590).DisableCustomTheme;
    obj18 = { guild: tmp23, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild };
    tmp47Result = tmp47(ThemeContextProvider2, obj15);
  }
  items12[1] = closure_18(View2, obj14);
  items12[2] = closure_18(ProfilePreviewFrame, { user: currentUser, guildId: id, displayProfile: tmp26, pendingChanges: stateFromStores, disabled: tmp18 });
  items10[1] = closure_19(tmp50, obj12);
  return closure_18(AnalyticsLocationProvider, obj7);
}
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
({ View: metroImportDefault, ScrollView } = react_native);
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
let closure_17 = Constants2.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
const xl = nativeDefault.radii.xl;
let closure_21 = module_1654.createAnimatedComponent(ScrollView);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: obj3, previewBackground: { position: "absolute", bottom: 0, left: 0, right: 0, overflow: "hidden" }, stickyProfileSelector: { zIndex: 2 }, profileSelector: obj4, previewFrame: { overflow: "hidden", borderTopLeftRadius: xl, borderTopRightRadius: xl }, previewContent: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj);
let closure_25 = { code: "(function ProfileCustomizationSettingScreenV2Tsx1(){let[previewTop,scrollPosition,PREVIEW_CORNER_RADIUS]=this.__closure;const top=previewTop.get();const scrollY=scrollPosition.get();const radius=Math.min(PREVIEW_CORNER_RADIUS,Math.max(0,top+PREVIEW_CORNER_RADIUS-scrollY));return{top:Math.max(0,top-scrollY),borderTopLeftRadius:radius,borderTopRightRadius:radius};})" };
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenV2.tsx");

export default function ProfileCustomizationSettingScreenV2Connected() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { currentUser: stateFromStores };
    tmp2 = closure_18(ProfileCustomizationSettingScreenV2, obj2);
  }
  return tmp2;
};
