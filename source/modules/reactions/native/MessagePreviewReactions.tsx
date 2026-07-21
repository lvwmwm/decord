// Module ID: 9428
// Function ID: 73400
// Name: MessagePreviewReactions
// Dependencies: []
// Exports: default

// Module 9428 (MessagePreviewReactions)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = [];
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = emoji);
  const arr = function usePreviewMessageReactions(channelId, messageId) {
    const items = [closure_4, closure_3];
    const items1 = [channelId, messageId];
    return channelId(closure_2[4]).useStateFromStores(items, () => {
      let message = message2.getMessage(arg1);
      if (null == message) {
        message = message.getMessage(arg0, arg1);
      }
      return null != message ? message.reactions : closure_6;
    }, items1);
  }(channelId, messageId);
  let obj = { value: importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).MESSAGE_PREVIEW_REACTIONS).analyticsLocations };
  if (arr.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: arr };
    let tmp6 = jsx(arg1(dependencyMap[7]).MessageReactionsContent, obj);
  } else {
    tmp6 = jsx(arg1(dependencyMap[7]).MessageReactionsEmpty, {});
  }
  obj.children = tmp6;
  return jsx(arg1(dependencyMap[5]).AnalyticsLocationProvider, obj);
};
