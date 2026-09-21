// Module ID: 8679
// Function ID: 8680
// Name: GuildTiVPlatformUtils
// Dependencies: [1119, 2]

// Module 8679 (GuildTiVPlatformUtils)
import util from "util" /* 1119 */;
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
