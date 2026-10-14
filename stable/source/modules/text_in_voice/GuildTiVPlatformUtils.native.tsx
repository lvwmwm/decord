// Module ID: 8079
// Function ID: 8080
// Name: GuildTiVPlatformUtils
// Dependencies: [1126, 2]

// Module 8079 (GuildTiVPlatformUtils)
import intl2 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const obj = {
  getTextInVoiceSendMessageChannelPermissionText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.cuMfH0);
  }
};
const result = size.fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default obj;
