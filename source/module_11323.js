// Module ID: 11323
// Function ID: 88087
// Dependencies: []

// Module 11323
let closure_3 = importDefault(dependencyMap[1]);
const DraftType = arg1(dependencyMap[2]).DraftType;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).useChatShowingAutoComplete;
const jsx = arg1(dependencyMap[5]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const arg1 = canUpload;
  const channelId = canUpload.channelId;
  const importDefault = channelId;
  const tmp = callback(canUpload.screenIndex);
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5, closure_3];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!tmp) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == activeCommand.getActiveCommand(channelId)) {
          uploads = uploads.getUploads(channelId, ChannelMessage.ChannelMessage);
        }
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { attachments: stateFromStores, channelId };
    tmp3 = jsx(importDefault(dependencyMap[7]), obj);
  }
  return tmp3;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;
