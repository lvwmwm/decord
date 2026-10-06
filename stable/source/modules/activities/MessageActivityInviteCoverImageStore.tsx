// Module ID: 12813
// Function ID: 12814
// Name: MessageActivityInviteCoverImageStore
// Dependencies: [1445, 504, 585, 2]

// Module 12813 (MessageActivityInviteCoverImageStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import LRUCacheDefault from "LRUCache" /* 1445 */;
import size from "module_2" /* 2 */;

const React = new LRUCacheDefault({ max: 500 });
new LRUCacheDefault({ max: 500 });
const Store = get_initializedDefault.Store;
class MessageActivityInviteCoverImageStore extends Store {
  getCoverImageURL(messageId) {
    return closure_0.get(messageId.messageId);
  }
}
const prototype = MessageActivityInviteCoverImageStore.prototype;
MessageActivityInviteCoverImageStore.displayName = "MessageActivityInviteCoverImageStore";
let obj = {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    let coverImageURL;
    let messageId;
    ({ messageId, coverImageURL } = arg0);
    const obj = closure_0;
    if (closure_0.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = obj.set(messageId, coverImageURL);
    }
  }
};
const messageActivityInviteCoverImageStore = new MessageActivityInviteCoverImageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default messageActivityInviteCoverImageStore;
