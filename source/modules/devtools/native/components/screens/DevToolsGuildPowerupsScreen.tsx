// Module ID: 14559
// Function ID: 109675
// Name: setWarningBoosts
// Dependencies: []
// Exports: default

// Module 14559 (setWarningBoosts)
function setWarningBoosts() {
  return _setWarningBoosts(...arguments);
}
function _setWarningBoosts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setWarningBoosts = obj;
  return obj(...arguments);
}
function _sendPowerupsSystemMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendPowerupsSystemMessage = obj;
  return obj(...arguments);
}
function UserDCSwitchRow(dc) {
  let handleToggleDismissState;
  let isDismissed;
  dc = dc.dc;
  ({ isDismissed, handleToggleDismissState } = importDefault(dependencyMap[16])(dc));
  const obj = { label: callback3(dc), value: isDismissed, onValueChange: handleToggleDismissState };
  return callback4(arg1(dependencyMap[17]).TableSwitchRow, obj);
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const arg1 = dc;
  const guildId = dc.guildId;
  const importDefault = guildId;
  const items = [dc, guildId];
  const callback = React.useCallback((arg0) => {
    if (arg0) {
      let tmpResult = tmp(tmp2[18]);
      const result = tmpResult.markContentAsDismissed(dc, guildId, false);
    } else {
      tmpResult = tmp(tmp2[19]);
      const result1 = tmpResult.removeDismissedRecurringContent(tmp(tmp2[20]).DismissibleContent.GUILD_POWERUP_NOTIFICATION);
      const result2 = tmp(tmp2[18]).unmarkContentAsDismissed(dc, guildId);
      const tmpResult1 = tmp(tmp2[18]);
    }
  }, items);
  const obj = { label: callback2(dc), value: dc.isDismissed, onValueChange: callback };
  return callback4(arg1(dependencyMap[17]).TableSwitchRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ GUILD_DCS: closure_11, SERVER_TAG_GUILD_DCS: closure_12, USER_DCS: closure_13, VANITY_URL_POWERUP_DCS: closure_14, getGuildDCString: closure_15, getUserDCString: closure_16 } = arg1(dependencyMap[7]));
const Endpoints = arg1(dependencyMap[8]).Endpoints;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.scrollContainer = { padding: importDefault(dependencyMap[11]).space.PX_16, gap: importDefault(dependencyMap[11]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[11]).space.PX_16, gap: importDefault(dependencyMap[11]).space.PX_16 };
obj.noGuildContainer = { padding: importDefault(dependencyMap[11]).space.PX_32 };
let closure_20 = obj.createStyles(obj);
const obj2 = { padding: importDefault(dependencyMap[11]).space.PX_32 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default function DevToolsGuildPowerupsScreen() {
  const tmp = callback6();
  let obj = arg1(closure_2[22]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const arg1 = stateFromStores;
  let obj1 = arg1(closure_2[22]);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let tmp = null;
    if (null != stateFromStores) {
      const guild = guild.getGuild(stateFromStores);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp = name;
    }
    return tmp;
  });
  let obj2 = arg1(closure_2[22]);
  const items2 = [closure_7];
  const importDefault = obj2.useStateFromStoresArray(items2, () => {
    const items = [...closure_12];
    return items.filter((GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK) => {
      let isContentDismissedResult = null != callback;
      if (isContentDismissedResult) {
        isContentDismissedResult = callback(closure_2[18]).isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, callback);
        const obj = callback(closure_2[18]);
      }
      return isContentDismissedResult;
    });
  });
  let obj3 = arg1(closure_2[22]);
  const items3 = [closure_8];
  closure_2 = obj3.useStateFromStoresArray(items3, () => {
    if (null == stateFromStores) {
      let items = [];
    } else {
      items = appliedGuildBoostsForGuild.getAppliedGuildBoostsForGuild(stateFromStores);
    }
    return items;
  });
  if (null == stateFromStores) {
    obj = {};
    const items4 = [, ];
    ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
    obj.style = items4;
    obj.children = callback4(arg1(closure_2[23]).Text, {});
    let tmp28Result = callback4(closure_6, obj);
  } else {
    obj = { style: tmp.container };
    const items5 = [tmp.scrollContainer, ];
    obj1 = { paddingBottom: tmp2.bottom + importDefault(closure_2[11]).space.PX_16 };
    items5[1] = obj1;
    obj.contentContainerStyle = items5;
    obj2 = {};
    let str = "Unknown";
    if (null != stateFromStores1) {
      str = stateFromStores1;
    }
    const _HermesInternal = HermesInternal;
    obj2.title = "Current Guild: " + str;
    obj2.hasIcons = false;
    obj3 = {
      label: "Reset Notification Indicators",
      onPress() {
          return stateFromStores(closure_2[15]).guildPowerupsResetNotifications();
        }
    };
    obj2.children = callback4(arg1(closure_2[25]).TableRow, obj3);
    const items6 = [callback4(arg1(closure_2[24]).TableRowGroup, obj2), , , , , , ];
    const obj4 = { -9223372036854775808: true, 9223372036854775807: true };
    const obj5 = {
      label: "Set Half Boosts expiring in 1 day",
      onPress() {
          return callback2(stateFromStores, arr.slice(Math.floor(arr.length / 2)), false);
        }
    };
    const items7 = [callback4(arg1(closure_2[25]).TableRow, obj5), ];
    const obj6 = {
      label: "Reset End Date",
      onPress() {
          return callback2(stateFromStores, closure_2, true);
        }
    };
    items7[1] = callback4(arg1(closure_2[25]).TableRow, obj6);
    obj4.children = items7;
    items6[1] = callback5(arg1(closure_2[24]).TableRowGroup, obj4);
    const obj7 = { -9223372036854775808: "LIGHT", 9223372036854775807: "Array", children: closure_13.map((dc) => callback(closure_24, { dc }, dc)) };
    items6[2] = callback4(arg1(closure_2[24]).TableRowGroup, obj7);
    const obj8 = { -9223372036854775808: 1090584577, 9223372036854775807: 82415, children: closure_11.map((dc) => callback(closure_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[3] = callback4(arg1(closure_2[24]).TableRowGroup, obj8);
    const obj9 = { -9223372036854775808: "<string:928055297>", 9223372036854775807: "CONNECTIONS_STEP", children: closure_12.map((dc) => callback(closure_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[4] = callback4(arg1(closure_2[24]).TableRowGroup, obj9);
    const obj10 = { -9223372036854775808: null, 9223372036854775807: "Primary Product SKU ID", children: closure_14.map((dc) => callback(closure_24, { dc }, dc)) };
    items6[5] = callback4(arg1(closure_2[24]).TableRowGroup, obj10);
    const obj11 = { -9223372036854775808: "text-xs/normal", 9223372036854775807: null };
    const obj12 = {
      label: "Send Powerups System Message",
      onPress() {
          return function sendPowerupsSystemMessage(stateFromStores) {
            return callback(...arguments);
          }(stateFromStores);
        }
    };
    obj11.children = callback4(arg1(closure_2[25]).TableRow, obj12);
    items6[6] = callback4(arg1(closure_2[24]).TableRowGroup, obj11);
    obj.children = items6;
    tmp28Result = callback5(closure_5, obj);
    const tmp28 = callback5;
    const tmp29 = closure_5;
    const tmp32 = callback4;
  }
  return tmp28Result;
};
