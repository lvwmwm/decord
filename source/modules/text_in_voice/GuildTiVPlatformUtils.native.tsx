// Module ID: 7928
// Function ID: 7929
// Name: getSystemLocale
// Dependencies: [1236, 2]

// Module 7928 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(prop) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cuMfH0);
  }
};
