// Module ID: 16461
// Function ID: 16462
// Name: UserSettingsEditGuildProfile
// Dependencies: [19, 17, 8689, 1389, 21, 5005, 587, 16355, 5071, 7313, 7338, 504, 16462, 11282, 8716, 16464, 6963, 6943, 11164, 5247, 16466, 2000, 16467, 11825, 2]
// Exports: default

// Module 16461 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 587 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8716 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11164 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11282 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8689 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { guildSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  let TableRow;
  let currentUser;
  let guild;
  let items3;
  let items4;
  let obj10;
  let obj5;
  let obj6;
  let onReset;
  let onSave;
  let stateFromStores;
  let tmp14Result;
  let tmp2Result;
  function onSelectGuild(dependencyMap) {
    dependencyMap();
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(dependencyMap.id);
  }
  let tmp2 = guild;
  let tmp = closure_10();
  const context = react.useContext(guild(16355));
  let obj = stateFromStores(5071);
  const theme = obj.useThemeContext().theme;
  const tmp6 = guild(7313);
  const analyticsLocations = tmp6(guild(7338).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
  let obj2 = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp8 = guild(16462)();
  guild = tmp8.guild;
  ({ resetPending: dependencyMap, handleSubmit: react } = tmp8);
  let obj3 = stateFromStores(504);
  const items1 = [onSelectGuild];
  const hasUnsavedChanges = obj3.useStateFromStores(items1, () => onSelectGuild.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = react.useEffect(() => {
    const tmp = null != stateFromStores && null != guild;
    if (tmp) {
      const obj2 = GuildIdentityActionCreators;
      obj2.setCurrentGuild(guild.id);
      const obj3 = { guildId: guild.id };
      const tmp8 = maybeFetchUserProfileDefault;
      tmp8(stateFromStores.id, stateFromStores.getAvatarURL(guild.id, 80), obj3);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      const obj4 = { style: tmp.guildSelector, children: closure_7(TableRow, obj5) };
      obj5 = {
        icon: closure_7(tmp2Result, obj6),
        label: guild.name,
        arrow: true,
        onPress() {
              let selectedGuild;
              let obj = {
                location: "UserSettingsEditGuildProfile",
                hasUnsavedChanges,
                onReset: dependencyMap,
                onContinue: function openGuildSelectActionSheet() {
                  let tmp2 = null != closure_1_0;
                  const tmp = closure_1_0;
                  if (tmp2) {
                    tmp2 = null != selectedGuild;
                  }
                  if (tmp2) {
                    const obj2 = { user: tmp, selectedGuild, onSelectGuild };
                    const obj = guild(dependencyMap[19]);
                    obj.openLazy(stateFromStores(dependencyMap[21])(dependencyMap[20], dependencyMap.paths), "GuildSelectComponentActionSheet", obj2);
                  }
                },
                onSave: react
              };
              let tmp = maybeShowUnsavedChangesAlertDefault(obj);
            }
      };
      TableRow = tmp5(6963).TableRow;
      obj6 = { guild, size: stateFromStores(6943).GuildIconSizes.XSMALL };
      tmp2Result = tmp2(6943);
      const tmp17 = closure_7(hasUnsavedChanges, obj4);
      let tmp10 = null == context;
      const obj7 = { value: analyticsLocations, children: items3 };
      const AnalyticsLocationProvider = tmp5(7313).AnalyticsLocationProvider;
      const tmp18 = closure_9;
      if (tmp10) {
        tmp10 = tmp17;
      }
      items3 = [tmp10, ];
      const obj8 = { currentUser: stateFromStores, stickyHeader: tmp14Result };
      tmp14Result = undefined;
      const tmp2Result2 = tmp2(16467);
      if (null != context) {
        const obj9 = { theme, children: closure_7(stateFromStores(11825).DisableCustomTheme, obj10) };
        const ThemeContextProvider = tmp5(5071).ThemeContextProvider;
        obj10 = { children: tmp17 };
        tmp14Result = tmp14(ThemeContextProvider, obj9);
      }
      const _HermesInternal = HermesInternal;
      items3[1] = closure_7(tmp2Result2, obj8, "" + stateFromStores.id + "-" + guild.id);
      return tmp18(AnalyticsLocationProvider, obj7);
    }
  }
  const obj11 = { children: items4 };
  items4 = [closure_7(tmp5(16355).ProfileCustomizationHeaderSpacer, {}), closure_7(tmp2(16464), {})];
  return closure_9(closure_8, obj11);
};
