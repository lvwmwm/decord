// Module ID: 12159
// Function ID: 12160
// Name: openCustomKeyboard
// Dependencies: [1486, 7284, 4628, 12118, 2]
// Exports: default

// Module 12159 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1486 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4628 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7284 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  KeyboardUIStore.setKeyboardType(keyboardParams);
  RunAfterInteractionsUtils.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    PortalKeyboardUIStore.openPortalKeyboard(keyboardParams.type, closure_1_0, ref);
    ChatInputNativeCommandsDefault.openCustomKeyboard(ref2.current);
  });
};
