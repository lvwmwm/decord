// Module ID: 11084
// Function ID: 11085
// Name: getXboxURIForChannel
// Dependencies: [2086, 2012, 4719, 1390, 9194, 1085, 5418, 1126, 1295, 2]
// Exports: default

// Module 11084 (getXboxURIForChannel)
import HTTPUtils from "HTTPUtils" /* 1295 */;
import useChannelName from "useChannelName" /* 5418 */;
import GuildStore from "GuildStore" /* 2086 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9194 */;
import Constants from "Constants" /* 1085 */;
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
    const intl = tmp5(1126).intl;
    name = intl.string(tmp5(1126).t.LJpTRF);
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
