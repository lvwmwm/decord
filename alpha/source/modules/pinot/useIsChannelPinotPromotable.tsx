// Module ID: 11321
// Function ID: 11322
// Name: useIsChannelPinotPromotable
// Dependencies: [4867, 4863, 4920, 4885, 1072, 9055, 504, 9053, 2]
// Exports: useIsChannelPinotPromotable, usePinotPromotableChannelId

// Module 11321 (useIsChannelPinotPromotable)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import PinotEligibility from "PinotEligibility" /* 9053 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/pinot/useIsChannelPinotPromotable.tsx");

export function usePinotPromotableChannelId(guild_id, mobile_member_coachmark) {
  let isPinotAdminEnabled;
  _require = guild_id;
  guild_id = undefined;
  const useIsPinotAdminEnabled = require("PinotExperiment").useIsPinotAdminEnabled;
  require("PinotExperiment");
  const tmp = _require;
  const tmp2 = isPinotAdminEnabled;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  isPinotAdminEnabled = useIsPinotAdminEnabled(guild_id, mobile_member_coachmark);
  const items = [GuildStore, GuildRoleStore, ChannelStore];
  const items1 = [isPinotAdminEnabled, guild_id];
  const tmpResult = tmp(tmp2[6]);
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
}
export function useIsChannelPinotPromotable(guild_id, create_guild_channel) {
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
  isPinotAdminEnabled = useIsPinotAdminEnabled(guild_id, create_guild_channel);
  const items = [GuildStore, GuildRoleStore, ChannelStore];
  const items1 = [isPinotAdminEnabled, guild_id];
  const tmpResult = tmp(tmp2[6]);
  return null != tmpResult.useStateFromStores(items, () => {
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
}
