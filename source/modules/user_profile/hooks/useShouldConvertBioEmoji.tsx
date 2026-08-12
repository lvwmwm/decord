// Module ID: 8313
// Function ID: 8314
// Name: useShouldConvertBioEmoji
// Dependencies: [4034, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 8313 (useShouldConvertBioEmoji)
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(4034) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require(4034) /* explicitContentFromProto */.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(4034) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require(4034) /* explicitContentFromProto */.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
