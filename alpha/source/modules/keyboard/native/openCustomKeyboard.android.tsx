// Module ID: 11658
// Function ID: 11659
// Name: openCustomKeyboard
// Dependencies: [1501, 6724, 4949, 11616, 2]
// Exports: default

// Module 11658 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4949 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6724 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11616 */;
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
