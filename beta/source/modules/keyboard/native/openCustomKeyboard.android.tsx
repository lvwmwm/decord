// Module ID: 12195
// Function ID: 12196
// Name: openCustomKeyboard
// Dependencies: [1486, 7316, 4660, 12154, 2]
// Exports: default

// Module 12195 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1486 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4660 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7316 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12154 */;
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
