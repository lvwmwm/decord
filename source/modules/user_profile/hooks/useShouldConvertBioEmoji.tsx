// Module ID: 7945
// Function ID: 7946
// Name: useShouldConvertBioEmoji
// Dependencies: [3862, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 7945 (useShouldConvertBioEmoji)
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3862) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require(3862) /* explicitContentFromProto */.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(3862) /* explicitContentFromProto */.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require(3862) /* explicitContentFromProto */.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
