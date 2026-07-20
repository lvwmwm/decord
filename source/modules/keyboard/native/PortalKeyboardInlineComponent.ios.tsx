// Module ID: 11651
// Function ID: 90385
// Name: customKeyboardWillHide
// Dependencies: []

// Module 11651 (customKeyboardWillHide)
function customKeyboardWillHide(viewHandle, arg1, arg2) {
  const DCDChatManager = DCDChatManager.DCDChatManager;
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
const importAllResult = importAll(dependencyMap[0]);
({ NativeModules: closure_4, findNodeHandle: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function InlinePortalKeyboard(messagesRef) {
  messagesRef = messagesRef.messagesRef;
  const arg1 = messagesRef;
  const id = importAllResult.useId();
  const importDefault = id;
  const tmp2 = importDefault(dependencyMap[3])();
  const dependencyMap = tmp2;
  const tmp4 = importDefault(dependencyMap[5])({ includeCustomKeyboard: false });
  const tmp3 = importDefault(dependencyMap[4])();
  const keyboardContextForType = arg1(dependencyMap[3]).useKeyboardContextForType(arg1(dependencyMap[6]).KeyboardTypes.SYSTEM);
  importDefault(dependencyMap[7])(() => () => {
    const PortalKeyboardUIStore = callback(closure_2[8]).PortalKeyboardUIStore;
    const field = PortalKeyboardUIStore.getField("keyboard");
    let tmp2 = null != field;
    if (tmp2) {
      tmp2 = field.handlerId === closure_1;
    }
    if (tmp2) {
      callback(closure_2[9]).dismissKeyboard();
      const obj = callback(closure_2[9]);
      callback(closure_2[8]).closePortalKeyboard();
      const obj2 = callback(closure_2[8]);
    }
  });
  const PortalKeyboardUIStore = arg1(dependencyMap[8]).PortalKeyboardUIStore;
  const field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = arg1(dependencyMap[8]).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  let closure_6 = field1;
  let closure_7 = importAllResult.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != field) {
      if (null == field.handlerId) {
        if (null != field) {
          if (field1 === messagesRef(tmp2[10]).PortalKeyboardState.REQUEST_OPEN) {
            callback(messagesRef, (viewHandle) => {
              let obj = callback(closure_2[8]);
              const result = obj.handlePortalKeyboardOpen(closure_1);
              closure_7.current = true;
              obj = { viewHandle, height: callback(closure_2[11]).getKeyboardActionSheetHeight().minimum };
              const DCDChatManager = DCDChatManager.DCDChatManager;
              const result1 = DCDChatManager.customKeyboardWillShow(obj.viewHandle, obj.height, 0.25, 7);
            });
          }
        }
        if (tmp2 === messagesRef(tmp2[6]).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(tmp2[10]).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              const messagesRef = setTimeout(messagesRef(tmp2[8]).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(tmp2[8]).closePortalKeyboard();
          callback(messagesRef, (viewHandle) => {
            callback2.current = false;
            callback2({ viewHandle });
          });
          const obj = messagesRef(tmp2[8]);
        }
      }
    } else {
      if (!tmp4) {
        const tmp4 = !tmp && !tmp3;
        const tmp5 = !tmp && !tmp3;
      }
      if (!tmp4) {
        callback(messagesRef, (viewHandle) => {
          callback2.current = false;
          callback2({ viewHandle });
        });
      }
    }
  }, items);
  return null;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;
