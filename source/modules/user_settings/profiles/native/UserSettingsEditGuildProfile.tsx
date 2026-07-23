// Module ID: 13612
// Function ID: 104572
// Name: UserSettingsEditGuildProfile
// Dependencies: [31, 27, 7841, 1849, 33, 4130, 689, 5464, 5484, 566, 13613, 9785, 7888, 13615, 5165, 5515, 9111, 4098, 13617, 1934, 13618, 2]
// Exports: default

// Module 13612 (UserSettingsEditGuildProfile)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
_createForOfIteratorHelperLoose.guildSelector = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(id) {
    resetPending();
    stateFromStores(resetPending[11]).setCurrentGuild(id.id);
  }
  let tmp = _createForOfIteratorHelperLoose();
  let obj = stateFromStores(resetPending[9]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  const tmp4 = guild(resetPending[10])();
  guild = tmp4.guild;
  resetPending = tmp4.resetPending;
  let obj1 = stateFromStores(resetPending[9]);
  const items1 = [_isNativeReflectConstruct];
  const React = obj1.useStateFromStores(items1, () => outer1_5.showNotice());
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
      obj = { value: tmp2(guild(resetPending[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations };
      obj = { style: tmp.guildSelector };
      obj1 = {};
      const obj2 = { guild, size: stateFromStores(resetPending[15]).GuildIconSizes.XSMALL };
      obj1.icon = callback(guild(resetPending[15]), obj2);
      obj1.label = guild.name;
      obj1.arrow = true;
      obj1.onPress = function onPress() {
        guild(resetPending[16])({
          onConfirm() {
            let tmp = null != outer1_0;
            if (tmp) {
              tmp = null != outer1_1;
            }
            if (tmp) {
              let obj = guild(resetPending[17]);
              obj = { user: outer1_0, selectedGuild: outer1_1, onSelectGuild: outer1_4 };
              obj.openLazy(stateFromStores(resetPending[19])(resetPending[18], resetPending.paths), "GuildSelectComponentActionSheet", obj);
            }
          },
          hasEdits: result,
          resetPending
        });
      };
      obj.children = callback(stateFromStores(resetPending[14]).TableRow, obj1);
      const items3 = [callback(onSelectGuild, obj), ];
      const obj3 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      const tmp12 = guild(resetPending[15]);
      items3[1] = callback(guild(resetPending[20]), obj3, "" + stateFromStores.id + "-" + guild.id);
      obj.children = items3;
      return callback2(stateFromStores(resetPending[7]).AnalyticsLocationProvider, obj);
    }
  }
  return callback(guild(resetPending[13]), {});
};
