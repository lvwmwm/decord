// Module ID: 8094
// Function ID: 8095
// Name: GuildTiVPlatformUtils
// Dependencies: [1113, 2]

// Module 8094 (GuildTiVPlatformUtils)
import intl2 from "intl" /* 1113 */;
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
