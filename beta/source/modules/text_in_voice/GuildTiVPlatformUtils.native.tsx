// Module ID: 8674
// Function ID: 8675
// Name: GuildTiVPlatformUtils
// Dependencies: [1115, 2]

// Module 8674 (GuildTiVPlatformUtils)
import util from "util" /* 1115 */;
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
