// Module ID: 13715
// Function ID: 13716
// Name: ChatInputImageCarousel
// Dependencies: [19, 9018, 8736, 8883, 11060, 21, 504, 12294, 2]

// Module 13715 (ChatInputImageCarousel)
import Fragment from "Fragment" /* 21 */;
import DraftStore from "DraftStore" /* 8736 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 11060 */;
import react from "react" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 9018 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8883 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const DraftType = DraftStore.DraftType;
let closure_6 = useChatBottomManagerUIStore.useChatShowingAutoComplete;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputImageCarousel(canUpload) {
  let closure_2;
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const obj = canUpload(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        const tmp5 = channelId;
        if (null == ApplicationCommandStore.getActiveCommand(channelId)) {
          uploads = UploadAttachmentStore.getUploads(tmp5, DraftType.ChannelMessage);
        }
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    let tmp5 = jsx;
    tmp4 = jsx(channelId(12294), { attachments: stateFromStores, channelId });
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;
