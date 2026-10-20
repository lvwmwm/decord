// Module ID: 11222
// Function ID: 11223
// Name: isInviteActive
// Dependencies: [4800, 1104, 11, 11223, 2]
// Exports: default

// Module 11222 (isInviteActive)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1104 */;
import RequestToStreamNonGamesExperimentDefault from "RequestToStreamNonGamesExperiment" /* 11223 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import size from "module_2" /* 2 */;

const result = 2 * DurationsDefault.Millis.HOUR;
let c3 = result;
const result1 = size.fileFinishedImporting("modules/activities/utils/isInviteActive.tsx");

export default function isInviteActive(party, id, arg2) {
  const obj = SnowflakeUtilsDefault;
  const sum = obj.extractTimestamp(id.id) + c3;
  if (sum < Date.now()) {
    return false;
  } else {
    if (null == arg2) {
      const basicChannel = ChannelStore.getBasicChannel(id.channel_id);
      let str;
      if (basicChannel != null) {
        str = basicChannel.guild_id;
      }
      const getConfig = tmp(11223).getConfig;
      RequestToStreamNonGamesExperimentDefault;
      if (str == null) {
        str = "";
      }
      const obj2 = { guildId: str, location: "canFulfillStreamRequest" };
      if (getConfig(obj2).enabled) {
        return true;
      }
    }
    if (null == party) {
      return false;
    } else {
      let party_id = null;
      if (null != id.activity) {
        party_id = id.activity.party_id;
      }
      let tmp9 = null != party_id;
      if (tmp9) {
        party = party.party;
        id = undefined;
        if (party != null) {
          id = party.id;
        }
        tmp9 = id !== party_id;
      }
      return !tmp9 && !(null != party.application_id && party.application_id !== arg2);
    }
  }
};
export const EMBED_LIFETIME = result;
