// Module ID: 10148
// Function ID: 10149
// Name: getXboxURIForChannel
// Dependencies: [2066, 1992, 4474, 1372, 9439, 1074, 4982, 1115, 1271, 2]
// Exports: default

// Module 10148 (getXboxURIForChannel)
import useChannelName from "useChannelName" /* 4982 */;
import GuildStore from "GuildStore" /* 2066 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const GameConsoleConstants = fn(9439);
({ XBOX_HANDOFF_SEARCH_PARAMS: metroRequire, XBOX_URL_BASE: closure_7 } = GameConsoleConstants);
const Constants = fn(1074);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId, arg1) {
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  const guild = GuildStore.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = React7;
  }
  const obj = { guildId: tmp4, channelId: channelId.id, channelName: useChannelName.computeChannelName(channelId, UserStore, RelationshipStore), guildName: null, muted: null, deafened: null, nonce: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp5(1115).intl;
    name = intl.string(tmp5(1115).t.LJpTRF);
  }
  obj.guildName = name;
  obj.muted = MediaEngineStore.isSelfMute();
  obj.deafened = MediaEngineStore.isSelfDeaf();
  obj.nonce = nonce;
  const str = timestampProducer(obj);
  if (forQRCode) {
    const aPIBaseURL = tmp5(1271).getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const tmp5Result = tmp5(1271);
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + React5 + "?" + str.toString();
  }
  return combined;
};
