// Module ID: 12134
// Function ID: 12135
// Name: PortalKeyboardInlineComponent
// Dependencies: [19, 17, 4825, 4703, 1879, 6043, 1611, 5298, 4704, 4701, 4707, 10898, 2]

// Module 12134 (PortalKeyboardInlineComponent)
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let react = react_mod;
({ NativeModules: closure_4, findNodeHandle: hasOwnProperty } = react_native);
const memoResult = react.memo(function InlinePortalKeyboard(messagesRef) {
  let closure_2;
  let closure_3;
  messagesRef = messagesRef.messagesRef;
  react = undefined;
  const channelId = messagesRef.channelId;
  const id = react.useId();
  const tmp2 = id(4703)();
  dependencyMap = tmp2;
  const tmp3 = id(1879)();
  let tmp4 = id(6043)({ includeCustomKeyboard: false });
  react = tmp4;
  let obj = messagesRef(4703);
  const keyboardContextForType = obj.useKeyboardContextForType(messagesRef(1611).KeyboardTypes.SYSTEM);
  id(5298)(() => () => {
    const PortalKeyboardUIStore = messagesRef(closure_2[8]).PortalKeyboardUIStore;
    field = PortalKeyboardUIStore.getField("keyboard");
    const tmp4 = null != field && field.handlerId === id;
    if (tmp4) {
      const tmpResult = messagesRef(closure_2[9]);
      tmpResult.dismissKeyboard();
      const tmpResult2 = messagesRef(closure_2[8]);
      tmpResult2.closePortalKeyboard();
    }
  });
  let PortalKeyboardUIStore = messagesRef(4704).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(4704).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  const ref = react.useRef(false);
  const items = [channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = react.useLayoutEffect(() => {
    let closure_0;
    const current = ref.current;
    if (null != field) {
      if (null == field.handlerId) {
        if (null != field) {
          if (field1 === messagesRef(closure_2[10]).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const obj2 = messagesRef(closure_2[8]);
                const result = obj2.handlePortalKeyboardOpen(id);
                ref.current = true;
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const obj3 = messagesRef(closure_2[11]);
                const result1 = DCDChatManager3.customKeyboardWillShow(tmp38, obj3.getKeyboardActionSheetHeight().minimum, 0.25, 7);
              }
            }
          }
        }
        if (closure_2 === messagesRef(closure_2[6]).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(closure_2[10]).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(closure_2[8]).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          const obj = messagesRef(closure_2[8]);
          obj.closePortalKeyboard();
          const current3 = messagesRef.current;
          let chatRef1;
          if (current3 != null) {
            chatRef1 = current3.getChatRef();
          }
          if (null != chatRef1) {
            const tmp21 = field(chatRef1.current);
            if (null != tmp21) {
              ref.current = false;
              const DCDChatManager = keyboardContextForType.DCDChatManager;
              const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
            }
          }
        }
      }
    } else {
      let tmp4 = closure_3;
      if (!tmp4) {
        tmp4 = !current && !tmp28;
      }
      if (!tmp4) {
        const current2 = messagesRef.current;
        let chatRef2;
        if (current2 != null) {
          chatRef2 = current2.getChatRef();
        }
        if (null != chatRef2) {
          const tmp30 = field(chatRef2.current);
          if (null != tmp30) {
            ref.current = false;
            const DCDChatManager2 = keyboardContextForType.DCDChatManager;
            const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
          }
        }
      }
    }
  }, items);
  return null;
});
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;
