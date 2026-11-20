// Module ID: 6389
// Function ID: 6390
// Name: GuildTiVPlatformUtils
// Dependencies: [1112, 2]

// Module 6389 (GuildTiVPlatformUtils)
import intl2 from "intl" /* 1112 */;
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
