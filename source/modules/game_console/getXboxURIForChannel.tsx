// Module ID: 9091
// Function ID: 71309
// Name: getXboxURIForChannel
// Dependencies: [1838, 4177, 3767, 1849, 8989, 653, 4320, 1212, 507, 2]
// Exports: default

// Module 9091 (getXboxURIForChannel)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: closure_7 } = XBOX_URL_BASE);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(getGuildId) {
  let forQRCode;
  let nonce;
  ({ nonce, forQRCode } = arg1);
  let guildId = getGuildId.getGuildId();
  guild = guild.getGuild(guildId);
  const obj = {};
  if (null == guildId) {
    guildId = closure_9;
  }
  obj.guildId = guildId;
  obj.channelId = getGuildId.id;
  obj.channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(getGuildId, closure_5, closure_4);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  if (null == name) {
    const intl = require(1212) /* getSystemLocale */.intl;
    name = intl.string(require(1212) /* getSystemLocale */.t.LJpTRF);
  }
  obj.guildName = name;
  obj.muted = _isNativeReflectConstruct.isSelfMute();
  obj.deafened = _isNativeReflectConstruct.isSelfDeaf();
  obj.nonce = nonce;
  const str = closure_6(obj);
  if (forQRCode) {
    const aPIBaseURL = require(507) /* _isNativeReflectConstruct */.getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const obj3 = require(507) /* _isNativeReflectConstruct */;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_7 + "?" + str.toString();
  }
  return combined;
};
