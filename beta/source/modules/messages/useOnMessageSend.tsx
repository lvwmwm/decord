// Module ID: 16581
// Function ID: 16582
// Name: useOnMessageSend
// Dependencies: [19, 1074, 573, 2]
// Exports: default

// Module 16581 (useOnMessageSend)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MessageStates = Constants.MessageStates;
const result = size.fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  let closure_0 = arg0;
  const tmp = arg1;
  let closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = react.useEffect(() => {
    function handleMessage(channelId) {
      const tmp2 = undefined !== handleMessageCreate && channelId.channelId !== tmp;
      if (!tmp2) {
        handleMessage();
      }
    }
    function handleMessageCreate(optimistic) {
      optimistic = optimistic.optimistic || optimistic.message.state === constants.SENDING;
      if (optimistic) {
        const tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
        if (!tmp3) {
          handleMessage();
        }
      }
    }
    let obj = closure_0(closure_1[2]);
    const subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
    let obj2 = closure_0(closure_1[2]);
    const subscription1 = obj2.subscribe("UPLOAD_START", handleMessage);
    let obj3 = closure_0(closure_1[2]);
    const subscription2 = obj3.subscribe("CALL_CREATE", handleMessage);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      const obj2 = DispatcherDefault;
      obj2.unsubscribe("UPLOAD_START", handleMessage);
      const obj3 = DispatcherDefault;
      obj3.unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
};
