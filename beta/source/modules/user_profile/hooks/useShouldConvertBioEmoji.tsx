// Module ID: 7613
// Function ID: 7614
// Name: useShouldConvertBioEmoji
// Dependencies: [2021, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 7613 (useShouldConvertBioEmoji)
import UserSettings from "UserSettings" /* 2021 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = UserSettings.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = UserSettings.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = UserSettings.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = UserSettings.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
