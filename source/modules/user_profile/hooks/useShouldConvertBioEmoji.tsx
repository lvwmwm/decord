// Module ID: 8168
// Function ID: 8169
// Name: useShouldConvertBioEmoji
// Dependencies: [1935, 2]
// Exports: default, getShouldConvertBioEmoji

// Module 8168 (useShouldConvertBioEmoji)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;

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
