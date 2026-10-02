// Module ID: 11387
// Function ID: 11388
// Name: openCustomKeyboard
// Dependencies: [1489, 6459, 4706, 11346, 2]
// Exports: default

// Module 11387 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1489 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4706 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6459 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11346 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  let keyboardParams;
  let ref;
  let ref2;
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  let obj = KeyboardUIStore;
  obj.setKeyboardType(keyboardParams);
  let obj2 = RunAfterInteractionsUtils;
  obj2.runAfterInteractions(() => {
    const current = importDefault.current;
    current.blur();
    const tmp = importDefault;
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    const obj = PortalKeyboardUIStore;
    obj.openPortalKeyboard(keyboardParams.type, require, tmp);
    const obj2 = ChatInputNativeCommandsDefault;
    obj2.openCustomKeyboard(dependencyMap.current);
  });
};
