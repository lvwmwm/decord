// Module ID: 11665
// Function ID: 90464
// Name: customKeyboardWillHide
// Dependencies: [31, 27, 4123, 3997, 1823, 6687, 1555, 4560, 3998, 3990, 4001, 11147, 2]

// Module 11665 (customKeyboardWillHide)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_4;
let closure_5;
const require = arg1;
function customKeyboardWillHide(viewHandle, arg1, arg2) {
  DCDChatManager = DCDChatManager.DCDChatManager;
  const result = DCDChatManager.customKeyboardWillHide(viewHandle.viewHandle, 0.25, 7);
}
function withChatViewHandle(current) {
  current = current.current;
  let chatRef;
  if (null != current) {
    chatRef = current.getChatRef();
  }
  if (null != chatRef) {
    const tmp3 = callback(chatRef.current);
    if (null != tmp3) {
      arg1(tmp3);
    }
  }
}
({ NativeModules: closure_4, findNodeHandle: closure_5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(function InlinePortalKeyboard(messagesRef) {
  messagesRef = messagesRef.messagesRef;
  const id = importAllResult.useId();
  let tmp2 = id(3997)();
  const dependencyMap = tmp2;
  let tmp4 = id(6687)({ includeCustomKeyboard: false });
  const tmp3 = id(1823)();
  const keyboardContextForType = messagesRef(3997).useKeyboardContextForType(messagesRef(1555).KeyboardTypes.SYSTEM);
  id(4560)(() => () => {
    const PortalKeyboardUIStore = messagesRef(3998).PortalKeyboardUIStore;
    const field = PortalKeyboardUIStore.getField("keyboard");
    let tmp2 = null != field;
    if (tmp2) {
      tmp2 = field.handlerId === outer1_1;
    }
    if (tmp2) {
      messagesRef(3990).dismissKeyboard();
      const obj = messagesRef(3990);
      messagesRef(3998).closePortalKeyboard();
      const obj2 = messagesRef(3998);
    }
  });
  let PortalKeyboardUIStore = messagesRef(3998).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(3998).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  let closure_7 = importAllResult.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != field) {
      if (null == field.handlerId) {
        if (null != field) {
          if (field1 === messagesRef(tmp2[10]).PortalKeyboardState.REQUEST_OPEN) {
            outer1_8(timeout, (viewHandle) => {
              let obj = messagesRef(3998);
              const result = obj.handlePortalKeyboardOpen(outer1_1);
              outer1_7.current = true;
              obj = { viewHandle, height: messagesRef(11147).getKeyboardActionSheetHeight().minimum };
              const DCDChatManager = keyboardContextForType.DCDChatManager;
              const result1 = DCDChatManager.customKeyboardWillShow(obj.viewHandle, obj.height, 0.25, 7);
            });
          }
        }
        if (tmp2 === messagesRef(tmp2[6]).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(tmp2[10]).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              timeout = setTimeout(messagesRef(tmp2[8]).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(tmp2[8]).closePortalKeyboard();
          outer1_8(timeout, (viewHandle) => {
            outer1_7.current = false;
            callback({ viewHandle });
          });
          let obj = messagesRef(tmp2[8]);
        }
      }
    } else {
      let tmp4 = closure_3;
      if (!closure_3) {
        tmp4 = !tmp && !tmp3;
        const tmp5 = !tmp && !tmp3;
      }
      if (!tmp4) {
        outer1_8(timeout, (viewHandle) => {
          outer1_7.current = false;
          callback({ viewHandle });
        });
      }
    }
  }, items);
  return null;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;
