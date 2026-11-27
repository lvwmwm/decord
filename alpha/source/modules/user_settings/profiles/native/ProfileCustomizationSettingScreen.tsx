// Module ID: 16081
// Function ID: 16082
// Name: ProfileCustomizationSettingScreen
// Dependencies: [109, 19, 17, 9438, 6376, 14572, 1081, 1071, 21, 5043, 575, 1112, 16082, 16181, 16062, 14996, 5607, 5104, 8487, 16064, 7350, 8617, 16065, 16070, 504, 16073, 6013, 9440, 16074, 10590, 16078, 13619, 13622, 2]

// Module 16081 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import intl2 from "intl" /* 1112 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9440 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16082 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16181 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9438 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
import WidgetStore from "WidgetStore" /* 14572 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = react_native.View;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_12, AnalyticsSections: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let obj = { container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 }, profileSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_17 = createStyles.createStyles(obj);
let obj3 = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(arg0) {
    let autoFocusElement;
    let initialTab;
    ({ autoFocusElement, initialTab } = arg0);
    return gesture(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
let items = [
  obj3,
  {
    renderLabel() {
      const intl = intl2.intl;
      return intl.string(intl2.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return gesture(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = react.memo(function ProfileCustomizationSettingScreen() {
  let DisableCustomTheme;
  let field;
  let guardUnsavedChanges;
  let guild;
  let handleSelectGuild;
  let handleSelectMainProfile;
  let handleSubmit;
  let handleSubmit2;
  let hasGuilds;
  let hasSwitchedProfile;
  let id;
  let items4;
  let num2;
  let obj10;
  let obj11;
  let onLayout;
  let ref;
  let state;
  let tmp29;
  let tmp37Result2;
  let tmp43;
  let tmp44;
  let tmpResult3;
  const tmp = handleSubmit;
  let tmp2 = handleSubmit2;
  handleSubmit(handleSubmit2[14])();
  const tmp4 = closure_17();
  let obj = field(handleSubmit2[15]);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = field(handleSubmit2[16]);
  const token = obj2.useToken(handleSubmit(handleSubmit2[10]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj3 = field(handleSubmit2[17]);
  const theme = obj3.useThemeContext().theme;
  const tmp8 = handleSubmit(handleSubmit2[18])();
  const width = tmp8.width;
  let num = 0;
  ({ ref, onLayout } = tmp8);
  if (undefined !== width) {
    num = width;
  }
  ({ hasSwitchedProfile, hasGuilds, handleSelectMainProfile, handleSelectGuild } = tmp(tmp2[19])());
  tmp(tmp2[19])();
  const tmp5Result = field(tmp2[20]);
  const settingNavigationRoute = tmp5Result.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const params2 = settingNavigationRoute.params;
  let initialTab;
  if (params2 != null) {
    initialTab = params2.initialTab;
  }
  field = ProfileCustomizationNavigationStore.useField("subsection");
  let closure_0 = { autoFocusElement, initialTab };
  const mapped = items.map((renderLabel) => {
    let renderPage;
    const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    ({ id, renderPage } = renderLabel);
    return obj;
  });
  const obj4 = {
    items: mapped,
    pageWidth: num,
    defaultIndex: num2,
    onPageChange(arg0) {
      let first = items[arg0];
      if (first == null) {
        first = items[0];
      }
      const obj = { subsection: first.subSection };
      state.setState(obj);
    },
    onPageChangeStart(arg0, arg1) {
      return guardUnsavedChanges(arg1);
    }
  };
  num2 = 0;
  const useSegmentedControlState = field(tmp2[21]).useSegmentedControlState;
  field(tmp2[21]);
  const tmp16 = ProfileCustomizationSubsection;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num2 = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj4);
  const tmp18 = tmp(tmp2[22])();
  handleSubmit = tmp18.handleSubmit;
  const tmp19 = _objectWithoutProperties(tmp18, guardUnsavedChanges);
  const tmp20 = tmp(tmp2[23])();
  ({ guild, handleSubmit: handleSubmit2 } = tmp20);
  items = [UserProfileSettingsStore, WidgetStore];
  const tmp21 = _objectWithoutProperties(tmp20, id);
  const tmp5Result4 = field(tmp2[24]);
  const stateFromStoresObject = tmp5Result4.useStateFromStoresObject(items, () => {
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
  let isSubmitting = tmp19.isSubmitting;
  const hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  if (!isSubmitting) {
    isSubmitting = tmp21.isSubmitting;
  }
  const items1 = [field, handleSubmit, handleSubmit2];
  const callback = react.useCallback(() => {
    let tmp2;
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const obj5 = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, isSubmitting, shouldBlockExit: tmp19.isWaitingForHexagonCampaignEnrollment, onSave: callback };
  const tmp24 = tmp(tmp2[25])(obj5);
  guardUnsavedChanges = tmp24.guardUnsavedChanges;
  const items2 = [field];
  const saveAndClose = tmp24.saveAndClose;
  const effect = react.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: map1.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  id = undefined;
  const GUILD = tmp16.GUILD;
  const obj7 = react;
  if (guild != null) {
    id = guild.id;
  }
  const items3 = [id];
  const effect1 = obj7.useEffect(() => {
    if (null != id) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp);
    }
  }, items3);
  const obj6 = { onSave: saveAndClose, saveButtonDisabled: tmp29, isSubmitting, showTitleAndBackButton: isMobileWidgetEditingEnabled, backgroundColor: token };
  tmp29 = !hasUnsavedChanges;
  const tmpResult = tmp(tmp2[28]);
  if (hasUnsavedChanges) {
    tmp29 = hasInvalidWidgetChanges;
  }
  tmpResult(obj6);
  let tmp33Result = null;
  if (hasGuilds) {
    const obj8 = { theme, children: closure_14(DisableCustomTheme, obj10) };
    const ThemeContextProvider = tmp5(tmp2[17]).ThemeContextProvider;
    const obj9 = { style: tmp4.profileSelector, children: closure_14(tmpResult3, obj11) };
    DisableCustomTheme = tmp5(tmp2[29]).DisableCustomTheme;
    let tmp36 = null;
    const tmp34 = View;
    tmpResult3 = tmp(tmp2[30]);
    if (field === GUILD) {
      tmp36 = guild;
    }
    obj10 = { children: closure_14(tmp34, obj9) };
    obj11 = { guild: tmp36, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild };
    tmp33Result = tmp33(ThemeContextProvider, obj8);
  }
  const obj13 = { style: null, children: null };
  const obj12 = { style: tmp4.container, ref, onLayout, children: tmp37Result2 };
  if (isMobileWidgetEditingEnabled) {
    let tmp37Result;
    obj13.style = tmp4.page;
    if (field === GUILD) {
      const obj14 = { header: tmp33Result, showGuildSelector: false };
      tmp37Result = tmp37(tmp(tmp2[13]), obj14);
    } else {
      const obj15 = { header: tmp33Result, autoFocusElement: tmp43, initialTab: tmp44 };
      tmp43 = undefined;
      const tmpResult4 = tmp(tmp2[12]);
      if (!hasSwitchedProfile) {
        tmp43 = autoFocusElement;
      }
      tmp44 = undefined;
      if (!hasSwitchedProfile) {
        tmp44 = initialTab;
      }
      tmp37Result = tmp37(tmpResult4, obj15);
    }
    obj13.children = tmp37Result;
    tmp37Result2 = tmp37(tmp38, obj13);
  } else {
    const obj16 = { children: items4 };
    obj13.style = tmp4.controls;
    const obj17 = { state: segmentedControlState };
    obj13.children = closure_14(field(tmp2[31]).Tabs, obj17);
    items4 = [closure_14(View, obj13), ];
    const obj18 = { state: segmentedControlState };
    items4[1] = closure_14(field(tmp2[32]).SegmentedControlPages, obj18);
    tmp37Result2 = closure_16(closure_15, obj16);
  }
  return closure_14(View, obj12);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
