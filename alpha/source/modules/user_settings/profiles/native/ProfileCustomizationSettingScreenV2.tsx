// Module ID: 15979
// Function ID: 15980
// Name: ProfileCustomizationSettingScreenV2
// Dependencies: [109, 19, 17, 9395, 6345, 14513, 1081, 1071, 21, 5012, 575, 5576, 15980, 15981, 15986, 504, 5982, 9397, 15988, 15989, 15993, 2]
// Exports: default

// Module 15979 (ProfileCustomizationSettingScreenV2)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5982 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9397 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6345 */;
import WidgetStore from "WidgetStore" /* 14513 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let map1;
let obj2;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = react_native.View;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_12, AnalyticsSections: map1 } = Constants);
const jsx = Fragment.jsx;
let obj = { container: { flex: 1 }, profileSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_15 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenV2.tsx");

export default function ProfileCustomizationSettingScreenV2() {
  let closure_1;
  let field;
  let guardUnsavedChanges;
  let guild;
  let handleSelectGuild;
  let handleSelectMainProfile;
  let handleSubmit;
  let handleSubmit2;
  let hasGuilds;
  let id;
  let saveAndClose;
  let tmp20;
  let tmp = closure_15();
  let tmp3 = handleSubmit;
  let obj = field(handleSubmit[11]);
  const token = obj.useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  const tmp2 = field;
  field = ProfileCustomizationNavigationStore.useField("subsection");
  importDefault = tmp7;
  ({ hasGuilds, handleSelectMainProfile, handleSelectGuild } = require("useProfileSelection")());
  require("useProfileSelection")();
  const tmp9 = require("useUserProfileEditForm")();
  handleSubmit = tmp9.handleSubmit;
  const tmp10 = _objectWithoutProperties(tmp9, handleSubmit2);
  const tmp11 = require("useGuildProfileEditForm")();
  ({ guild, handleSubmit: handleSubmit2 } = tmp11);
  const tmp12 = tmp10.isSubmitting || _objectWithoutProperties(tmp11, id).isSubmitting;
  const items = [UserProfileSettingsStore, WidgetStore];
  const tmp2Result = tmp2(tmp3[15]);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => {
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
  const callback = react.useCallback(() => {
    let tmp3;
    const tmp = closure_1;
    if (tmp) {
      tmp3 = handleSubmit2();
    } else {
      tmp3 = handleSubmit();
    }
    return tmp3;
  }, items1);
  const effect = react.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: map1.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  id = undefined;
  const obj3 = react;
  if (guild != null) {
    id = guild.id;
  }
  const items3 = [id];
  const effect1 = obj3.useEffect(() => {
    if (null != id) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp);
    }
  }, items3);
  let obj2 = { location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp12, shouldBlockExit: tmp10.isWaitingForHexagonCampaignEnrollment };
  ({ saveAndClose, guardUnsavedChanges } = require("useProfileEditorExitHandling")(obj2));
  const obj4 = { onSave: saveAndClose, saveButtonDisabled: tmp20, isSubmitting: tmp12, showTitleAndBackButton: true, backgroundColor: token };
  tmp20 = !hasUnsavedChanges;
  require("useProfileEditorExitHandling")(obj2);
  const tmp4Result = require("useConfigureProfileEditorScreen");
  if (hasUnsavedChanges) {
    tmp20 = hasInvalidWidgetChanges;
  }
  tmp4Result(obj4);
  let tmp22Result = null;
  if (hasGuilds) {
    const obj6 = { style: tmp.profileSelector, children: null };
    require("ProfileCustomizationProfileSelector");
    tmp22Result = tmp22(tmp23, obj6);
  }
  return <View style={tmp.container}>{tmp22Result}</View>;
};
