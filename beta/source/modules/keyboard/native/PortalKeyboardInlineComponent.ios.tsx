// Module ID: 12837
// Function ID: 12838
// Name: PortalKeyboardInlineComponent
// Dependencies: [19, 17, 4782, 558, 568, 4659, 1882, 6893, 1614, 4660, 4657, 5235, 4663, 10386, 2]

// Module 12837 (PortalKeyboardInlineComponent)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, findNodeHandle: hasOwnProperty } = get_ActivityIndicator);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = messagesRef(568).c(21);
  ({ channelId, messagesRef } = arg0);
  const id = noop.useId();
  const tmp6 = id(4659)();
  dependencyMap = tmp6;
  id(1882)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { includeCustomKeyboard: false };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp9 = id(6893)(first);
  noop = tmp9;
  let obj = messagesRef(568);
  let obj2 = noop;
  const keyboardContextForType = messagesRef(4659).useKeyboardContextForType(tmp(1614).KeyboardTypes.SYSTEM);
  if (cResult[1] !== id) {
    class K {
      constructor() {
        return () => {
          const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          let tmp4 = null != field;
          if (tmp4) {
            tmp4 = field.handlerId === id;
          }
          if (tmp4) {
            tmp(tmp2[10]).dismissKeyboard();
            const tmpResult = tmp(tmp2[10]);
            tmp(tmp2[9]).closePortalKeyboard();
            const tmpResult2 = tmp(tmp2[9]);
          }
        };
      }
    }
    cResult[1] = id;
    cResult[2] = K;
    const tmp11 = K;
  } else {
    class K {
      constructor() {
        return () => {
          const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          let tmp4 = null != field;
          if (tmp4) {
            tmp4 = field.handlerId === id;
          }
          if (tmp4) {
            tmp(tmp2[10]).dismissKeyboard();
            const tmpResult = tmp(tmp2[10]);
            tmp(tmp2[9]).closePortalKeyboard();
            const tmpResult2 = tmp(tmp2[9]);
          }
        };
      }
    }
  }
  id(5235)(tmp11);
  let PortalKeyboardUIStore = tmp(4660).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = tmp(4660).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  obj2.useRef(false);
  if (cResult[3] === id) {
    class K {
      constructor() {
        return () => {
          const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          let tmp4 = null != field;
          if (tmp4) {
            tmp4 = field.handlerId === id;
          }
          if (tmp4) {
            tmp(tmp2[10]).dismissKeyboard();
            const tmpResult = tmp(tmp2[10]);
            tmp(tmp2[9]).closePortalKeyboard();
            const tmpResult2 = tmp(tmp2[9]);
          }
        };
      }
    }
  }
  const fn = function v() {
    const current = ref.current;
    if (null != field) {
      if (null == tmp2.handlerId) {
        if (null != tmp2) {
          if (field1 === messagesRef(4663).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const result = messagesRef(4660).handlePortalKeyboardOpen(id);
                tmp.current = true;
                const obj2 = messagesRef(4660);
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const result1 = DCDChatManager3.customKeyboardWillShow(tmp38, messagesRef(10386).getKeyboardActionSheetHeight().minimum, 0.25, 7);
                const obj3 = messagesRef(10386);
              }
            }
          }
        }
        if (dependencyMap === messagesRef(1614).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(4663).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(4660).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(4660).closePortalKeyboard();
          const current3 = messagesRef.current;
          let chatRef1;
          if (current3 != null) {
            chatRef1 = current3.getChatRef();
          }
          if (null != chatRef1) {
            const tmp21 = field(chatRef1.current);
            if (null != tmp21) {
              tmp.current = false;
              const DCDChatManager = keyboardContextForType.DCDChatManager;
              const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
            }
          }
          const obj = messagesRef(4660);
        }
      }
    } else {
      let tmp4 = closure_3;
      if (!closure_3) {
        let tmp3 = !current;
        if (!current) {
          tmp3 = !tmp28;
        }
        tmp4 = tmp3;
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
            tmp.current = false;
            const DCDChatManager2 = keyboardContextForType.DCDChatManager;
            const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
          }
        }
      }
    }
  };
  cResult[3] = id;
  cResult[4] = field1;
  cResult[5] = tmp6;
  cResult[6] = field;
  cResult[7] = messagesRef;
  cResult[8] = keyboardContextForType;
  cResult[9] = tmp9;
  cResult[10] = fn;
}) : ((messagesRef) => {
  messagesRef = messagesRef.messagesRef;
  noop = undefined;
  const id = noop.useId();
  const tmp2 = id(4659)();
  dependencyMap = tmp2;
  let tmp4 = id(6893)({ includeCustomKeyboard: false });
  noop = tmp4;
  let tmp3 = id(1882)();
  const keyboardContextForType = messagesRef(4659).useKeyboardContextForType(messagesRef(1614).KeyboardTypes.SYSTEM);
  id(5235)(() => () => {
    const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
    field = PortalKeyboardUIStore.getField("keyboard");
    let tmp4 = null != field;
    if (tmp4) {
      tmp4 = field.handlerId === id;
    }
    if (tmp4) {
      tmp(tmp2[10]).dismissKeyboard();
      const tmpResult = tmp(tmp2[10]);
      tmp(tmp2[9]).closePortalKeyboard();
      const tmpResult2 = tmp(tmp2[9]);
    }
  });
  let PortalKeyboardUIStore = messagesRef(4660).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(4660).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  noop.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (null != field) {
      if (null == tmp2.handlerId) {
        if (null != tmp2) {
          if (field1 === messagesRef(4663).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const result = messagesRef(4660).handlePortalKeyboardOpen(id);
                tmp.current = true;
                const obj2 = messagesRef(4660);
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const result1 = DCDChatManager3.customKeyboardWillShow(tmp38, messagesRef(10386).getKeyboardActionSheetHeight().minimum, 0.25, 7);
                const obj3 = messagesRef(10386);
              }
            }
          }
        }
        if (dependencyMap === messagesRef(1614).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(4663).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(4660).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(4660).closePortalKeyboard();
          const current3 = messagesRef.current;
          let chatRef1;
          if (current3 != null) {
            chatRef1 = current3.getChatRef();
          }
          if (null != chatRef1) {
            const tmp21 = field(chatRef1.current);
            if (null != tmp21) {
              tmp.current = false;
              const DCDChatManager = keyboardContextForType.DCDChatManager;
              const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
            }
          }
          const obj = messagesRef(4660);
        }
      }
    } else {
      let tmp4 = closure_3;
      if (!closure_3) {
        let tmp3 = !current;
        if (!current) {
          tmp3 = !tmp28;
        }
        tmp4 = tmp3;
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
            tmp.current = false;
            const DCDChatManager2 = keyboardContextForType.DCDChatManager;
            const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
          }
        }
      }
    }
  }, items);
  return null;
}));
