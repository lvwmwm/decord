// Module ID: 13922
// Function ID: 13923
// Name: openCustomKeyboard
// Dependencies: [1497, 7328, 5333, 12934, 2]
// Exports: default

// Module 13922 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1497 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 5333 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7328 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12934 */;
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
