// Module ID: 15314
// Function ID: 116505
// Name: useOnMessageSend
// Dependencies: []
// Exports: default

// Module 15314 (useOnMessageSend)
let closure_2 = importAll(dependencyMap[0]);
const MessageStates = arg1(dependencyMap[1]).MessageStates;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  const importDefault = arg0;
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
    const arg0 = handleMessage;
    function handleMessageCreate(optimistic) {
      optimistic = optimistic.optimistic;
      if (!optimistic) {
        optimistic = optimistic.message.state === constants.SENDING;
      }
      if (optimistic) {
        handleMessage(optimistic);
      }
    }
    const subscription = arg0(handleMessageCreate[2]).subscribe("MESSAGE_CREATE", handleMessageCreate);
    const obj = arg0(handleMessageCreate[2]);
    const subscription1 = arg0(handleMessageCreate[2]).subscribe("UPLOAD_START", handleMessage);
    const obj2 = arg0(handleMessageCreate[2]);
    const subscription2 = arg0(handleMessageCreate[2]).subscribe("CALL_CREATE", handleMessage);
    return () => {
      handleMessage(handleMessageCreate[2]).unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      const obj = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("UPLOAD_START", handleMessage);
      const obj2 = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
};
