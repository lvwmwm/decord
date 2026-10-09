// Module ID: 11886
// Function ID: 11887
// Name: ChatInputImageCarousel
// Dependencies: [19, 7903, 7237, 7889, 9356, 21, 558, 576, 504, 9989, 2]

// Module 11886 (ChatInputImageCarousel)
import Fragment from "Fragment" /* 21 */;
import DraftStore from "DraftStore" /* 7237 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9356 */;
import react from "react" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7903 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7889 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const DraftType = DraftStore.DraftType;
let closure_6 = useChatBottomManagerUIStore.useChatShowingAutoComplete;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputImageCarousel(canUpload) {
  let closure_2;
  let first;
  let tmp = canUpload;
  const obj = canUpload(576);
  const cResult = obj.c(9);
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  const tmp4 = closure_6(canUpload.screenIndex);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore, ];
    items[1] = ApplicationCommandStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === canUpload) {
    if (cResult[2] === channelId) {
      let tmp8;
      let tmp9;
      if (cResult[3] === tmp4) {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[6] === stateFromStores) {
        let tmp11;
        if (cResult[7] === channelId) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      let tmp12 = null;
      if (null != stateFromStores) {
        tmp12 = jsx(channelId(9989), { attachments: stateFromStores, channelId });
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = tmp12;
      tmp11 = tmp12;
    }
  }
  const fn = function h() {
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
  };
  const items1 = [channelId, canUpload, tmp4];
  cResult[1] = canUpload;
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function ChatInputImageCarousel(canUpload) {
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
    tmp4 = jsx(channelId(9989), { attachments: stateFromStores, channelId });
  }
  return tmp4;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;
