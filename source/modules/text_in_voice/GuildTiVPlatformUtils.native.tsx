// Module ID: 7477
// Function ID: 60028
// Dependencies: []

// Module 7477
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/text_in_voice/GuildTiVPlatformUtils.native.tsx");

export default {
  getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled) {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.WQ6zpT);
  },
  getTextInVoiceReadMessageHistoryChannelPermissionText(arg0) {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.cuMfH0);
  }
};
