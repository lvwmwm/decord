// Module ID: 12367
// Function ID: 12368
// Name: ChatInputImageCarousel
// Dependencies: [19, 7882, 4977, 4976, 9615, 21, 504, 10760, 2]

// Module 12367 (ChatInputImageCarousel)
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7882 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4976 */;

const require = fn;
const DraftType = fn(4977).DraftType;
let closure_6 = fn(9615).useChatShowingAutoComplete;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default noop.memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = canUpload(504).useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == ApplicationCommandStore.getActiveCommand(channelId)) {
          uploads = UploadAttachmentStore.getUploads(tmp5, DraftType.ChannelMessage);
        }
        tmp5 = channelId;
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { attachments: stateFromStores, channelId };
    tmp4 = jsx(channelId(10760), { attachments: stateFromStores, channelId });
  }
  return tmp4;
});
