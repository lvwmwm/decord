// Module ID: 9045
// Function ID: 71053
// Name: getXboxURIForChannel
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9045 (getXboxURIForChannel)
import closure_2 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: closure_7 } = __exportStarResult1);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: closure_9 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(getGuildId) {
  let forQRCode;
  let nonce;
  ({ nonce, forQRCode } = arg1);
  let guildId = getGuildId.getGuildId();
  const guild = guild.getGuild(guildId);
  const obj = {};
  if (null == guildId) {
    guildId = closure_9;
  }
  obj.guildId = guildId;
  obj.channelId = getGuildId.id;
  obj.channelName = arg1(dependencyMap[6]).computeChannelName(getGuildId, closure_5, closure_4);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  if (null == name) {
    const intl = arg1(dependencyMap[7]).intl;
    name = intl.string(arg1(dependencyMap[7]).t.LJpTRF);
  }
  obj.guildName = name;
  obj.muted = closure_3.isSelfMute();
  obj.deafened = closure_3.isSelfDeaf();
  obj.nonce = nonce;
  const str = closure_6(obj);
  if (forQRCode) {
    const aPIBaseURL = arg1(dependencyMap[8]).getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const obj3 = arg1(dependencyMap[8]);
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_7 + "?" + str.toString();
  }
  return combined;
};
