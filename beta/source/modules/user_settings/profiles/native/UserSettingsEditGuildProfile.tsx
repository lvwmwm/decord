// Module ID: 16913
// Function ID: 16914
// Name: UserSettingsEditGuildProfile
// Dependencies: [19, 17, 8835, 1385, 21, 5170, 575, 7420, 7445, 504, 16914, 11697, 8862, 16916, 7071, 7053, 11580, 5406, 16918, 2118, 16919, 2]
// Exports: default

// Module 16913 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 575 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8862 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11580 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11697 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8835 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { guildSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile(arg0) {
  let TableRow;
  let c2;
  let c3;
  let currentUser;
  let header;
  let items3;
  let items4;
  let obj4;
  let obj5;
  let onReset;
  let onSave;
  let showGuildSelector;
  let tmp2Result;
  ({ header, showGuildSelector } = arg0);
  if (showGuildSelector === undefined) {
    showGuildSelector = true;
  }
  let stateFromStores;
  let guild;
  dependencyMap = undefined;
  react = undefined;
  function onSelectGuild(guild) {
    onReset();
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(guild.id);
  }
  let tmp2 = guild;
  let tmp = closure_10();
  const tmp4 = guild(7420);
  const analyticsLocations = tmp4(guild(7445).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(16914)();
  guild = tmp7.guild;
  ({ resetPending: c2, handleSubmit: c3 } = tmp7);
  let obj2 = stateFromStores(504);
  const items1 = [onSelectGuild];
  const hasUnsavedChanges = obj2.useStateFromStores(items1, () => onSelectGuild.showNotice());
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
      let obj3 = { style: tmp.guildSelector, children: closure_7(TableRow, obj4) };
      obj4 = {
        icon: closure_7(tmp2Result, obj5),
        label: guild.name,
        arrow: true,
        onPress() {
              let paths;
              let selectedGuild;
              let obj = {
                location: "UserSettingsEditGuildProfile",
                hasUnsavedChanges,
                onReset,
                onContinue: function openGuildSelectActionSheet() {
                  let tmp2 = null != closure_1_0;
                  const tmp = closure_1_0;
                  if (tmp2) {
                    tmp2 = null != selectedGuild;
                  }
                  if (tmp2) {
                    const obj2 = { user: tmp, selectedGuild, onSelectGuild };
                    const obj = guild(paths[17]);
                    obj.openLazy(stateFromStores(paths[19])(paths[18], paths.paths), "GuildSelectComponentActionSheet", obj2);
                  }
                },
                onSave
              };
              let tmp = maybeShowUnsavedChangesAlertDefault(obj);
            }
      };
      TableRow = tmp5(7071).TableRow;
      obj5 = { guild, size: stateFromStores(7053).GuildIconSizes.XSMALL };
      const obj6 = { value: analyticsLocations, children: items3 };
      tmp2Result = tmp2(7053);
      const tmp14 = closure_7(hasUnsavedChanges, obj3);
      const AnalyticsLocationProvider = tmp5(7420).AnalyticsLocationProvider;
      const tmp11 = closure_7;
      const tmp15 = closure_9;
      if (showGuildSelector) {
        showGuildSelector = tmp14;
      }
      items3 = [showGuildSelector, ];
      const _HermesInternal = HermesInternal;
      const obj7 = { currentUser: stateFromStores, header };
      const tmp2Result2 = tmp2(16919);
      items3[1] = tmp11(tmp2Result2, obj7, "" + stateFromStores.id + "-" + guild.id);
      return tmp15(AnalyticsLocationProvider, obj6);
    }
  }
  const obj8 = { children: items4 };
  items4 = [header, closure_7(tmp2(16916), {})];
  return closure_9(closure_8, obj8);
};
