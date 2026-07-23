// Module ID: 11497
// Function ID: 89480
// Dependencies: [31, 1194, 1917, 3746, 33, 566, 3764, 11006, 1212, 11481, 11498, 2]

// Module 11497
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct, closure_5];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = outer1_4.getId();
      return guildId(outer1_2[6]).getAutomodQuarantinedGuildMemberFlags(outer1_5.getMember(guildId, id));
    }
  }, items1);
  const callback = importAllResult.useCallback(() => {
    const result = guildId(outer1_2[7]).openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const automodReason = guildId(3764).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = guildId(1212).intl;
    let stringResult = intl2.string(guildId(1212).t.Viksoo);
  } else {
    const intl = guildId(1212).intl;
    stringResult = intl.string(guildId(1212).t["/PGQf0"]);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = guildId(1212).intl;
    let stringResult1 = intl4.string(guildId(1212).t.ml72ZU);
  } else {
    const intl3 = guildId(1212).intl;
    stringResult1 = intl3.string(guildId(1212).t["8HW7r9"]);
  }
  obj = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult };
  const obj2 = guildId(3764);
  obj.icon = jsx(guildId(11498).ChatXIcon, {});
  obj.message = stringResult1;
  return jsx(importDefault(11481), { type: "simple-action", actionOnPress: callback, actionLabel: stringResult });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;
