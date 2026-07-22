// Module ID: 13498
// Function ID: 102416
// Name: UserSettingsEditGuildProfile
// Dependencies: []
// Exports: default

// Module 13498 (UserSettingsEditGuildProfile)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
obj.guildSelector = obj;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(id) {
    resetPending();
    stateFromStores(resetPending[11]).setCurrentGuild(id.id);
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  const tmp4 = importDefault(dependencyMap[10])();
  const guild = tmp4.guild;
  const importDefault = guild;
  const dependencyMap = tmp4.resetPending;
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_5];
  const React = obj1.useStateFromStores(items1, () => closure_5.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = React.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      let obj = stateFromStores(resetPending[11]);
      obj.setCurrentGuild(guild.id);
      obj = { guildId: guild.id, dispatchWait: true };
      guild(resetPending[12])(stateFromStores.id, stateFromStores.getAvatarURL(guild.id, 80), obj);
      const tmp8 = guild(resetPending[12]);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      obj = { value: tmp2(importDefault(dependencyMap[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations };
      obj = { style: tmp.guildSelector };
      obj1 = {};
      const obj2 = { guild, size: arg1(dependencyMap[15]).GuildIconSizes.XSMALL };
      obj1.icon = callback(importDefault(dependencyMap[15]), obj2);
      obj1.label = guild.name;
      obj1.arrow = true;
      obj1.onPress = function onPress() {
        guild(resetPending[16])({
          onConfirm() {
            let tmp = null != callback;
            if (tmp) {
              tmp = null != callback2;
            }
            if (tmp) {
              let obj = callback2(paths[17]);
              obj = { user: callback, selectedGuild: callback2, onSelectGuild: closure_4 };
              obj.openLazy(callback(paths[19])(paths[18], paths.paths), "GuildSelectComponentActionSheet", obj);
            }
          },
          hasEdits: closure_3,
          resetPending
        });
      };
      obj.children = callback(arg1(dependencyMap[14]).TableRow, obj1);
      const items3 = [callback(onSelectGuild, obj), ];
      const obj3 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      const tmp12 = importDefault(dependencyMap[15]);
      items3[1] = callback(importDefault(dependencyMap[20]), obj3, "" + stateFromStores.id + "-" + guild.id);
      obj.children = items3;
      return callback2(arg1(dependencyMap[7]).AnalyticsLocationProvider, obj);
    }
  }
  return callback(importDefault(dependencyMap[13]), {});
};
