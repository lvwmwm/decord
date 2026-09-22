// Module ID: 8521
// Function ID: 8522
// Name: GuildTiVPlatformUtils
// Dependencies: [1114, 2]

// Module 8521 (GuildTiVPlatformUtils)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.cuMfH0);
  }
};
