// Module ID: 16800
// Function ID: 16801
// Name: UserSettingsEditGuildProfile
// Dependencies: [19, 17, 8872, 1385, 21, 5141, 575, 7462, 7487, 504, 16801, 11708, 8899, 16803, 7116, 7098, 11595, 5382, 16805, 2123, 16806, 2]
// Exports: default

// Module 16800 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 575 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8899 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11595 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11708 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile(showGuildSelector) {
  let TableRow;
  let c2;
  let c3;
  let currentUser;
  let items3;
  let obj4;
  let obj5;
  let onReset;
  let onSave;
  let tmp2Result;
  let flag = showGuildSelector.showGuildSelector;
  if (flag === undefined) {
    flag = true;
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
  let tmp = closure_9();
  const tmp4 = guild(7462);
  const analyticsLocations = tmp4(guild(7487).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(16801)();
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
      TableRow = tmp5(7116).TableRow;
      obj5 = { guild, size: stateFromStores(7098).GuildIconSizes.XSMALL };
      const obj6 = { value: analyticsLocations, children: items3 };
      tmp2Result = tmp2(7098);
      const tmp14 = closure_7(hasUnsavedChanges, obj3);
      const AnalyticsLocationProvider = tmp5(7462).AnalyticsLocationProvider;
      const tmp11 = closure_7;
      const tmp15 = closure_8;
      if (flag) {
        flag = tmp14;
      }
      items3 = [flag, ];
      const _HermesInternal = HermesInternal;
      const obj7 = { currentUser: stateFromStores };
      const tmp2Result2 = tmp2(16806);
      items3[1] = tmp11(tmp2Result2, obj7, "" + stateFromStores.id + "-" + guild.id);
      return tmp15(AnalyticsLocationProvider, obj6);
    }
  }
  return closure_7(tmp2(16803), {});
};
