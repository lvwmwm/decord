// Module ID: 7842
// Function ID: 62548
// Name: useShouldConvertBioEmoji
// Dependencies: []
// Exports: default, getShouldConvertBioEmoji

// Module 7842 (useShouldConvertBioEmoji)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(dependencyMap[0]).UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = require(dependencyMap[0]).UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = require(dependencyMap[0]).UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = require(dependencyMap[0]).UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
