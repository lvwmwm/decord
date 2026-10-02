// Module ID: 5581
// Function ID: 5582
// Name: StickerMessagePreviewStore
// Dependencies: [5201, 504, 585, 2]

// Module 5581 (StickerMessagePreviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import DraftStore from "DraftStore" /* 5201 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
let closure_1 = {};
let closure_2 = {};
const Store = get_initializedDefault.Store;
class StickerMessagePreviewStore extends Store {
  getStickerPreview(channelId, draftType) {
    return (draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1)[channelId];
  }
}
const prototype = StickerMessagePreviewStore.prototype;
StickerMessagePreviewStore.displayName = "StickerMessagePreviewStore";
const obj = {
  ADD_STICKER_PREVIEW: function handleAddStickerPreview(sticker) {
    const items = [sticker.sticker];
    sticker.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[sticker.channelId] = items;
  },
  CLEAR_STICKER_PREVIEW: function handleClearStickerPreview(channelId) {
    channelId = channelId.channelId;
    const tmp = channelId.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1;
    if (null != tmp[channelId]) {
      delete tmp[channelId];
    }
  },
  LOGOUT: function resetState() {
    closure_1 = {};
    closure_2 = {};
  }
};
const stickerMessagePreviewStore = new StickerMessagePreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default stickerMessagePreviewStore;
