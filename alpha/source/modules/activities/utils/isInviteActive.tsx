// Module ID: 11351
// Function ID: 11352
// Name: isInviteActive
// Dependencies: [4824, 1101, 11, 11352, 2]
// Exports: default

// Module 11351 (isInviteActive)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1101 */;
import RequestToStreamNonGamesExperimentDefault from "RequestToStreamNonGamesExperiment" /* 11352 */;
import ChannelStore from "ChannelStore" /* 4824 */;
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
      const getConfig = tmp(11352).getConfig;
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
