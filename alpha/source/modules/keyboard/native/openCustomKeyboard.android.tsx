// Module ID: 12484
// Function ID: 12485
// Name: openCustomKeyboard
// Dependencies: [1501, 6730, 4990, 11988, 2]
// Exports: default

// Module 12484 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4990 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6730 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11988 */;
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
