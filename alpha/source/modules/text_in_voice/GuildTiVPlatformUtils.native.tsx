// Module ID: 7810
// Function ID: 7811
// Name: GuildTiVPlatformUtils
// Dependencies: [1112, 2]

// Module 7810 (GuildTiVPlatformUtils)
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
