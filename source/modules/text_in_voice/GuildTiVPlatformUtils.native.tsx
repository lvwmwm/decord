// Module ID: 8403
// Function ID: 8404
// Name: getSystemLocale
// Dependencies: [1114, 2]

// Module 8403 (getSystemLocale)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;

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
