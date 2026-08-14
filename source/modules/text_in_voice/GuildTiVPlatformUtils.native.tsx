// Module ID: 7849
// Function ID: 7850
// Name: getSystemLocale
// Dependencies: [1236, 2]

// Module 7849 (getSystemLocale)
const result = require("set").fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(prop) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cuMfH0);
  }
};
