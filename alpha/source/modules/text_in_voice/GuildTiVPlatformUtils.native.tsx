// Module ID: 7912
// Function ID: 7913
// Name: GuildTiVPlatformUtils
// Dependencies: [1125, 2]

// Module 7912 (GuildTiVPlatformUtils)
import intl2 from "intl" /* 1125 */;
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
