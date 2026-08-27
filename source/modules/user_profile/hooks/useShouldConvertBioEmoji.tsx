// Module ID: 8010
// Function ID: 8011
// Name: useShouldConvertBioEmoji
// Dependencies: [4134, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 8010 (useShouldConvertBioEmoji)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;

const result = set.fileFinishedImporting("modules/user_profile/hooks/useShouldConvertBioEmoji.tsx");

export default function useShouldConvertBioEmoji() {
  const UseLegacyChatInput = explicitContentFromProto.UseLegacyChatInput;
  let setting = UseLegacyChatInput.useSetting();
  const UseRichChatInput = explicitContentFromProto.UseRichChatInput;
  if (!setting) {
    setting = !UseRichChatInput.useSetting();
  }
  return setting;
};
export const getShouldConvertBioEmoji = function getShouldConvertBioEmoji() {
  const UseLegacyChatInput = explicitContentFromProto.UseLegacyChatInput;
  let setting = UseLegacyChatInput.getSetting();
  if (!setting) {
    const UseRichChatInput = explicitContentFromProto.UseRichChatInput;
    setting = !UseRichChatInput.getSetting();
  }
  return setting;
};
