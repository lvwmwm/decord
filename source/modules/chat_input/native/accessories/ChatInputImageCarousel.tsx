// Module ID: 11340
// Function ID: 88185
// Dependencies: [31, 7022, 4468, 4467, 9313, 33, 566, 9648, 2]

// Module 11340
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { useChatShowingAutoComplete as closure_6 } from "getChatInputContainerHeight";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = callback(canUpload.screenIndex);
  const dependencyMap = tmp;
  let obj = canUpload(566);
  const items = [closure_5, _isNativeReflectConstruct];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == outer1_3.getActiveCommand(channelId)) {
          uploads = outer1_5.getUploads(channelId, outer1_4.ChannelMessage);
        }
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { attachments: stateFromStores, channelId };
    tmp3 = jsx(channelId(9648), { attachments: stateFromStores, channelId });
  }
  return tmp3;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;
