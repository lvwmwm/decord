// Module ID: 15489
// Function ID: 119078
// Name: useOnMessageSend
// Dependencies: [31, 653, 686, 2]
// Exports: default

// Module 15489 (useOnMessageSend)
import result from "result";
import { MessageStates } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  let closure_0 = arg0;
  const dependencyMap = tmp;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    function handleMessage(channelId) {
      let tmp = undefined !== handleMessageCreate;
      if (tmp) {
        tmp = channelId.channelId !== handleMessageCreate;
      }
      if (!tmp) {
        handleMessage();
      }
    }
    function handleMessageCreate(optimistic) {
      optimistic = optimistic.optimistic;
      if (!optimistic) {
        optimistic = optimistic.message.state === outer2_3.SENDING;
      }
      if (optimistic) {
        handleMessage(optimistic);
      }
    }
    const subscription = callback(tmp[2]).subscribe("MESSAGE_CREATE", handleMessageCreate);
    let obj = callback(tmp[2]);
    const subscription1 = callback(tmp[2]).subscribe("UPLOAD_START", handleMessage);
    let obj2 = callback(tmp[2]);
    const subscription2 = callback(tmp[2]).subscribe("CALL_CREATE", handleMessage);
    return () => {
      handleMessage(handleMessageCreate[2]).unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      const obj = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("UPLOAD_START", handleMessage);
      const obj2 = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
};
