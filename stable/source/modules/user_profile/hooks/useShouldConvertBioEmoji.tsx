// Module ID: 8739
// Function ID: 8740
// Name: useShouldConvertBioEmoji
// Dependencies: [4839, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 8739 (useShouldConvertBioEmoji)
import UserSettings from "UserSettings" /* 4839 */;
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
export function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = UserSettings.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = UserSettings.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
}
