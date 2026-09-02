// Module ID: 8689
// Function ID: 8690
// Name: getSystemLocale
// Dependencies: [1233, 2]

// Module 8689 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

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
