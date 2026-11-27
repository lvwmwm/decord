// Module ID: 9436
// Function ID: 9437
// Name: useShouldConvertBioEmoji
// Dependencies: [4868, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 9436 (useShouldConvertBioEmoji)
import UserSettings from "UserSettings" /* 4868 */;
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
