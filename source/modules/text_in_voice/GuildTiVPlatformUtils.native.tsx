// Module ID: 6699
// Function ID: 59023
// Name: getSystemLocale
// Dependencies: [1212, 2]

// Module 6699 (getSystemLocale)
const result = require("set").fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.cuMfH0);
  }
};
