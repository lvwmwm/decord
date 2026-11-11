// Module ID: 14535
// Function ID: 14536
// Name: ChatInputImageCarousel
// Dependencies: [19, 8941, 8658, 8806, 11805, 21, 504, 11570, 2]

// Module 14535 (ChatInputImageCarousel)
import Fragment from "Fragment" /* 21 */;
import DraftStore from "DraftStore" /* 8658 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 11805 */;
import react from "react" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8941 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8806 */;
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
    tmp4 = jsx(channelId(11570), { attachments: stateFromStores, channelId });
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;
