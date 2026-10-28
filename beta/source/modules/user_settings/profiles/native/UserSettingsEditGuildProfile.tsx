// Module ID: 15992
// Function ID: 15993
// Name: UserSettingsEditGuildProfile
// Dependencies: [19, 17, 8681, 1392, 21, 5003, 587, 7285, 7310, 504, 15993, 11221, 8708, 15995, 6935, 6915, 11103, 5242, 15997, 2002, 15998, 2]
// Exports: default

// Module 15992 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 587 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8708 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11103 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11221 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8681 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  let TableRow;
  let currentUser;
  let guild;
  let items3;
  let obj5;
  let obj6;
  let onReset;
  let onSave;
  let stateFromStores;
  let tmp2Result;
  function onSelectGuild(dependencyMap) {
    dependencyMap();
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(dependencyMap.id);
  }
  let tmp2 = guild;
  let tmp = closure_9();
  const tmp4 = guild(7285);
  const analyticsLocations = tmp4(guild(7310).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(15993)();
  guild = tmp7.guild;
  ({ resetPending: dependencyMap, handleSubmit: react } = tmp7);
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
      let obj3 = { value: analyticsLocations, children: items3 };
      const obj4 = { style: tmp.guildSelector, children: closure_7(TableRow, obj5) };
      const AnalyticsLocationProvider = tmp5(7285).AnalyticsLocationProvider;
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
                    const obj = guild(dependencyMap[17]);
                    obj.openLazy(stateFromStores(dependencyMap[19])(dependencyMap[18], dependencyMap.paths), "GuildSelectComponentActionSheet", obj2);
                  }
                },
                onSave: react
              };
              let tmp = maybeShowUnsavedChangesAlertDefault(obj);
            }
      };
      TableRow = tmp5(6935).TableRow;
      obj6 = { guild, size: stateFromStores(6915).GuildIconSizes.XSMALL };
      tmp2Result = tmp2(6915);
      items3 = [closure_7(hasUnsavedChanges, obj4), ];
      const _HermesInternal = HermesInternal;
      const obj7 = { currentUser: stateFromStores };
      const tmp2Result2 = tmp2(15998);
      items3[1] = closure_7(tmp2Result2, obj7, "" + stateFromStores.id + "-" + guild.id);
      return closure_8(AnalyticsLocationProvider, obj3);
    }
  }
  return closure_7(tmp2(15995), {});
};
