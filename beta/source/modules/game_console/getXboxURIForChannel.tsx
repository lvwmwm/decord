// Module ID: 11037
// Function ID: 11038
// Name: getXboxURIForChannel
// Dependencies: [4784, 2131, 4855, 1386, 7073, 1071, 5529, 1112, 1284, 2]
// Exports: default

// Module 11037 (getXboxURIForChannel)
import HTTPUtils from "HTTPUtils" /* 1284 */;
import useChannelName from "useChannelName" /* 5529 */;
import GuildStore from "GuildStore" /* 4784 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1386 */;
import GameConsoleConstants from "GameConsoleConstants" /* 7073 */;
import Constants from "Constants" /* 1071 */;
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
    const intl = tmp5(1112).intl;
    name = intl.string(tmp5(1112).t.LJpTRF);
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
