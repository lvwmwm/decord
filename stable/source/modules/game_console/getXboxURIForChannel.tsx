// Module ID: 9234
// Function ID: 9235
// Name: getXboxURIForChannel
// Dependencies: [2073, 1999, 4482, 1378, 8542, 1086, 4990, 1127, 1283, 2]
// Exports: default

// Module 9234 (getXboxURIForChannel)
import HTTPUtils from "HTTPUtils" /* 1283 */;
import useChannelName from "useChannelName" /* 4990 */;
import GuildStore from "GuildStore" /* 2073 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8542 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ XBOX_HANDOFF_SEARCH_PARAMS: metroRequire, XBOX_URL_BASE: metroImportDefault } = GameConsoleConstants);
({ Endpoints: metroImportAll, ZERO_STRING_GUILD_ID: c9 } = Constants);
const result = size.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId, arg1) {
  let combined;
  let forQRCode;
  let name;
  let nonce;
  let obj2;
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  const guild = GuildStore.getGuild(guildId);
  let tmp4 = guildId;
  const tmp3 = metroRequire;
  if (guildId == null) {
    tmp4 = React4;
  }
  const obj = { guildId: tmp4, channelId: channelId.id, channelName: obj2.computeChannelName(channelId, UserStore, RelationshipStore), guildName: name, muted: MediaEngineStore.isSelfMute(), deafened: MediaEngineStore.isSelfDeaf(), nonce };
  name = undefined;
  obj2 = useChannelName;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp5(1127).intl;
    name = intl.string(tmp5(1127).t.LJpTRF);
  }
  const str = tmp3(obj);
  if (forQRCode) {
    const tmp5Result = HTTPUtils;
    const aPIBaseURL = tmp5Result.getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    combined = "" + aPIBaseURL + metroImportAll.XBOX_HANDOFF + "?" + str.toString();
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + metroImportDefault + "?" + str.toString();
  }
  return combined;
};
