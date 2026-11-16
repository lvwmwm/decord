// Module ID: 8166
// Function ID: 8167
// Name: usePinotDiscoverableRowState
// Dependencies: [5177, 5238, 8145, 1072, 8144, 8167, 8169, 504, 2]
// Exports: getPinotDiscoverableOption, usePinotDiscoverableRowState

// Module 8166 (usePinotDiscoverableRowState)
import Constants from "Constants" /* 1072 */;
import PinotDiscoverable from "PinotDiscoverable" /* 8144 */;
import PinotConstants from "PinotConstants" /* 8145 */;
import PinotEligibility from "PinotEligibility" /* 8167 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getPinotDiscoverableRowState(guild) {
  let SUMMARIES;
  let canManageGuild;
  let flags;
  let isPrivate;
  guild = guild.guild;
  let tmp = guild;
  ({ flags, isPrivate, canManageGuild } = guild);
  const values = Object.values(guild(8167).PINOT_FEATURES);
  const reduced = values.reduce((acc, channelFlag) => {
    let tmp = acc;
    obj = PinotEligibility;
    if (!obj.isPinotFeatureEnabled(guild, channelFlag)) {
      tmp = acc | channelFlag.channelFlag;
    }
    return tmp;
  }, 0);
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    if (!(reduced & PinotChannelFlags.SWP_CHANNEL_MESSAGES_EXCLUDED)) {
      SUMMARIES = tmp(8144).PinotDiscoverableOption.ALL_CONTENT;
    }
    if (0 === tmp4[SUMMARIES].length) {
      obj = { kind: "hidden" };
    } else if (isPrivate) {
      obj = { kind: "private" };
    } else {
      let SUMMARIES2;
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_MESSAGES_EXCLUDED)) {
          SUMMARIES2 = tmp(8144).PinotDiscoverableOption.ALL_CONTENT;
        }
        obj = { kind: "select", value: SUMMARIES2, options: tmp4[SUMMARIES], serverFlags: reduced, readOnly: !canManageGuild };
      }
      const PinotDiscoverableOption2 = tmp(8144).PinotDiscoverableOption;
      if (!((flags | reduced) & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
        SUMMARIES2 = PinotDiscoverableOption2.SUMMARIES;
      } else {
        SUMMARIES2 = tmp10 ? PinotDiscoverableOption2.MESSAGES : PinotDiscoverableOption2.NONE;
      }
    }
    return obj;
  }
  const PinotDiscoverableOption = tmp(8144).PinotDiscoverableOption;
  if (!(reduced & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    SUMMARIES = PinotDiscoverableOption.SUMMARIES;
  } else {
    SUMMARIES = tmp7 ? PinotDiscoverableOption.MESSAGES : PinotDiscoverableOption.NONE;
  }
}
const PinotChannelFlags = PinotConstants.PinotChannelFlags;
const Permissions = Constants.Permissions;
let obj = {};
const ALL_CONTENT = PinotDiscoverable.PinotDiscoverableOption.ALL_CONTENT;
let items = [PinotDiscoverable.PinotDiscoverableOption.ALL_CONTENT, PinotDiscoverable.PinotDiscoverableOption.SUMMARIES, PinotDiscoverable.PinotDiscoverableOption.MESSAGES, PinotDiscoverable.PinotDiscoverableOption.NONE];
obj[ALL_CONTENT] = items;
let SUMMARIES = PinotDiscoverable.PinotDiscoverableOption.SUMMARIES;
let items1 = [PinotDiscoverable.PinotDiscoverableOption.SUMMARIES, PinotDiscoverable.PinotDiscoverableOption.NONE];
obj[SUMMARIES] = items1;
const MESSAGES = PinotDiscoverable.PinotDiscoverableOption.MESSAGES;
const items2 = [PinotDiscoverable.PinotDiscoverableOption.MESSAGES, PinotDiscoverable.PinotDiscoverableOption.NONE];
obj[MESSAGES] = items2;
obj[PinotDiscoverable.PinotDiscoverableOption.NONE] = [];
const result = size.fileFinishedImporting("modules/pinot/usePinotDiscoverableRowState.tsx");

export function getPinotDiscoverableOption(arg0) {
  let SUMMARIES;
  if (!(arg0 & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    if (!(arg0 & PinotChannelFlags.SWP_CHANNEL_MESSAGES_EXCLUDED)) {
      SUMMARIES = PinotDiscoverable.PinotDiscoverableOption.ALL_CONTENT;
    }
    return SUMMARIES;
  }
  const PinotDiscoverableOption = PinotDiscoverable.PinotDiscoverableOption;
  if (!(arg0 & PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED)) {
    SUMMARIES = PinotDiscoverableOption.SUMMARIES;
  } else {
    SUMMARIES = tmp2 ? PinotDiscoverableOption.MESSAGES : PinotDiscoverableOption.NONE;
  }
}
export { getPinotDiscoverableRowState };
export function usePinotDiscoverableRowState(guildId, flags, isPrivate) {
  let stateFromStores;
  _require = guildId;
  obj = require("PinotExperiment");
  const isPinotAdminEnabled = obj.useIsPinotAdminEnabled(guildId, "create_guild_channel");
  let tmp5 = null;
  const useIsPinotChannelDiscoverableEnabled = require("PinotExperiment").useIsPinotChannelDiscoverableEnabled;
  require("PinotExperiment");
  if (isPinotAdminEnabled) {
    tmp5 = guildId;
  }
  const isPinotChannelDiscoverableEnabled = useIsPinotChannelDiscoverableEnabled(tmp5, "create_guild_channel");
  const items = [GuildStore];
  const items1 = [guildId];
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  require("get initialized");
  [][0] = stateFromStores;
  if (isPinotAdminEnabled) {
    if (isPinotChannelDiscoverableEnabled) {
      if (null != stateFromStores) {
        const obj2 = { guild: stateFromStores, flags, isPrivate, canManageGuild: tmp9 };
        getPinotDiscoverableRowState(obj2);
      }
      return { kind: "hidden" };
    }
  }
}
