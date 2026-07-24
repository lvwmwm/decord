// Module ID: 14720
// Function ID: 112156
// Name: setWarningBoosts
// Dependencies: [5, 31, 27, 1316, 11622, 1838, 3947, 14721, 653, 33, 4130, 689, 507, 3712, 4026, 11550, 14635, 5502, 11556, 1331, 1334, 1557, 566, 4126, 5501, 5165, 2]
// Exports: default

// Module 14720 (setWarningBoosts)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import items from "items";
import { Endpoints } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_5;
let closure_6;
const require = arg1;
function setWarningBoosts() {
  return _setWarningBoosts(...arguments);
}
function _setWarningBoosts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _sendPowerupsSystemMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function UserDCSwitchRow(dc) {
  let handleToggleDismissState;
  let isDismissed;
  dc = dc.dc;
  ({ isDismissed, handleToggleDismissState } = importDefault(14635)(dc));
  const obj = { label: callback3(dc), value: isDismissed, onValueChange: handleToggleDismissState };
  return callback4(require(5502) /* TableSwitchRow */.TableSwitchRow, obj);
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const guildId = dc.guildId;
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
  return callback4(dc(5502).TableSwitchRow, obj);
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ GUILD_DCS: closure_11, SERVER_TAG_GUILD_DCS: closure_12, USER_DCS: closure_13, VANITY_URL_POWERUP_DCS: closure_14, getGuildDCString: closure_15, getUserDCString: closure_16 } = items);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { flex: 1, justifyContent: "center", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.noGuildContainer = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default function DevToolsGuildPowerupsScreen() {
  let tmp = _createForOfIteratorHelperLoose();
  let obj = stateFromStores(566);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getGuildId());
  let obj1 = stateFromStores(566);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let tmp = null;
    if (null != stateFromStores) {
      const guild = outer1_9.getGuild(stateFromStores);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp = name;
    }
    return tmp;
  });
  let obj2 = stateFromStores(566);
  const items2 = [_isNativeReflectConstruct];
  const importDefault = obj2.useStateFromStoresArray(items2, () => {
    const items = [...outer1_12];
    return items.filter((GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK) => {
      let isContentDismissedResult = null != outer1_0;
      if (isContentDismissedResult) {
        isContentDismissedResult = stateFromStores(table[18]).isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, outer1_0);
        const obj = stateFromStores(table[18]);
      }
      return isContentDismissedResult;
    });
  });
  let obj3 = stateFromStores(566);
  const items3 = [closure_8];
  const dependencyMap = obj3.useStateFromStoresArray(items3, () => {
    if (null == stateFromStores) {
      let items = [];
    } else {
      items = outer1_8.getAppliedGuildBoostsForGuild(stateFromStores);
    }
    return items;
  });
  if (null == stateFromStores) {
    obj = {};
    const items4 = [, ];
    ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
    obj.style = items4;
    obj.children = callback4(stateFromStores(4126).Text, { variant: "heading-md/semibold", color: "text-muted", children: "No guild selected" });
    let tmp28Result = callback4(closure_6, obj);
  } else {
    obj = { style: tmp.container };
    const items5 = [tmp.scrollContainer, ];
    obj1 = { paddingBottom: tmp2.bottom + importDefault(689).space.PX_16 };
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
          return stateFromStores(arr[15]).guildPowerupsResetNotifications();
        }
    };
    obj2.children = callback4(stateFromStores(5165).TableRow, obj3);
    const items6 = [callback4(stateFromStores(5501).TableRowGroup, obj2), , , , , , ];
    const obj4 = { title: "Warning State", hasIcons: false };
    const obj5 = {
      label: "Set Half Boosts expiring in 1 day",
      onPress() {
          return outer1_21(stateFromStores, arr.slice(Math.floor(arr.length / 2)), false);
        }
    };
    const items7 = [callback4(stateFromStores(5165).TableRow, obj5), ];
    const obj6 = {
      label: "Reset End Date",
      onPress() {
          return outer1_21(stateFromStores, closure_2, true);
        }
    };
    items7[1] = callback4(stateFromStores(5165).TableRow, obj6);
    obj4.children = items7;
    items6[1] = callback5(stateFromStores(5501).TableRowGroup, obj4);
    const obj7 = { title: "User Level DCs", hasIcons: false, children: closure_13.map((dc) => outer1_18(outer1_24, { dc }, dc)) };
    items6[2] = callback4(stateFromStores(5501).TableRowGroup, obj7);
    const obj8 = { title: "Guild Level DCs", hasIcons: false, children: closure_11.map((dc) => outer1_18(outer1_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[3] = callback4(stateFromStores(5501).TableRowGroup, obj8);
    const obj9 = { title: "Server Tag Guild Level DCs", hasIcons: false, children: closure_12.map((dc) => outer1_18(outer1_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[4] = callback4(stateFromStores(5501).TableRowGroup, obj9);
    const obj10 = { title: "Powerup Rollback DCs", hasIcons: false, children: closure_14.map((dc) => outer1_18(outer1_24, { dc }, dc)) };
    items6[5] = callback4(stateFromStores(5501).TableRowGroup, obj10);
    const obj11 = { title: "System Messages", hasIcons: false };
    const obj12 = {
      label: "Send Powerups System Message",
      onPress() {
          return (function sendPowerupsSystemMessage(stateFromStores) {
            return outer2_23(...arguments);
          })(stateFromStores);
        }
    };
    obj11.children = callback4(stateFromStores(5165).TableRow, obj12);
    items6[6] = callback4(stateFromStores(5501).TableRowGroup, obj11);
    obj.children = items6;
    tmp28Result = callback5(closure_5, obj);
    const tmp28 = callback5;
    const tmp29 = closure_5;
    const tmp32 = callback4;
  }
  return tmp28Result;
};
