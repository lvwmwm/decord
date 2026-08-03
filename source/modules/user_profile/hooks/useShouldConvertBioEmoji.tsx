// Module ID: 8067
// Function ID: 8068
// Name: useShouldConvertBioEmoji
// Dependencies: [3928, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 8067 (useShouldConvertBioEmoji)
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3928) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require(3928) /* explicitContentFromProto */.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3928) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require(3928) /* explicitContentFromProto */.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
