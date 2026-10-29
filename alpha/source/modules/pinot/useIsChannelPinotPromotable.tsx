// Module ID: 11069
// Function ID: 11070
// Name: useIsChannelPinotPromotable
// Dependencies: [4861, 4857, 4911, 4879, 1084, 558, 576, 11070, 11071, 504, 2]
// Exports: useIsChannelPinotPromotable

// Module 11069 (useIsChannelPinotPromotable)
import Constants from "Constants" /* 1084 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import PinotEligibility from "PinotEligibility" /* 11071 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;
import GuildStore from "GuildStore" /* 4879 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const ChannelTypes = Constants.ChannelTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotPromotableChannelId(guild_id, arg1) {
  let first;
  let isPinotAdminEnabled;
  _require = guild_id;
  let tmp = _require;
  const tmp2 = isPinotAdminEnabled;
  let obj = require("react");
  const cResult = obj.c(5);
  guild_id = undefined;
  const useIsPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled;
  const tmp4 = require("PinotExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = useIsPinotAdminEnabled(guild_id, arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, , ];
    items[1] = GuildRoleStore;
    items[2] = ChannelStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id) {
    let tmp11;
    let tmp12;
    if (cResult[2] === isPinotAdminEnabled) {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const tmpResult = tmp(tmp2[9]);
    return tmpResult.useStateFromStores(first, tmp11, tmp12);
  }
  const fn = function h() {
    const tmp = isPinotAdminEnabled;
    if (tmp) {
      if (null != guild_id) {
        if (guild_id.type !== ChannelTypes.PRIVATE_THREAD) {
          let channel = tmp2;
          if (THREAD_CHANNEL_TYPES.has(guild_id.type)) {
            channel = ChannelStore.getChannel(tmp2.parent_id);
          }
          let id = null;
          if (null != channel) {
            id = null;
            const obj = PinotEligibility;
            if (obj.isChannelPinotPromotable(GuildStore.getGuild(guild_id.guild_id), channel)) {
              id = channel.id;
            }
          }
          return id;
        }
      }
    }
    return null;
  };
  const items1 = [isPinotAdminEnabled, guild_id];
  cResult[1] = guild_id;
  cResult[2] = isPinotAdminEnabled;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : (function usePinotPromotableChannelId(guild_id, arg1) {
  let isPinotAdminEnabled;
  _require = guild_id;
  let tmp = _require;
  const tmp2 = isPinotAdminEnabled;
  guild_id = undefined;
  const useIsPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled;
  const tmp3 = require("PinotExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = useIsPinotAdminEnabled(guild_id, arg1);
  const items = [GuildStore, GuildRoleStore, ChannelStore];
  const items1 = [isPinotAdminEnabled, guild_id];
  const tmpResult = tmp(tmp2[9]);
  return tmpResult.useStateFromStores(items, () => {
    const tmp = isPinotAdminEnabled;
    if (tmp) {
      if (null != guild_id) {
        if (guild_id.type !== ChannelTypes.PRIVATE_THREAD) {
          let channel = tmp2;
          if (THREAD_CHANNEL_TYPES.has(guild_id.type)) {
            channel = ChannelStore.getChannel(tmp2.parent_id);
          }
          let id = null;
          if (null != channel) {
            id = null;
            const obj = PinotEligibility;
            if (obj.isChannelPinotPromotable(GuildStore.getGuild(guild_id.guild_id), channel)) {
              id = channel.id;
            }
          }
          return id;
        }
      }
    }
    return null;
  }, items1);
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/pinot/useIsChannelPinotPromotable.tsx");

export const usePinotPromotableChannelId = tmp2;
export function useIsChannelPinotPromotable(arg0, arg1) {
  return null != closure_7(arg0, arg1);
}
