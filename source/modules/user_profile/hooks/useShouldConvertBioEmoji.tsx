// Module ID: 7937
// Function ID: 62914
// Name: useShouldConvertBioEmoji
// Dependencies: [3803, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 7937 (useShouldConvertBioEmoji)
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3803) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require(3803) /* explicitContentFromProto */.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3803) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require(3803) /* explicitContentFromProto */.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
