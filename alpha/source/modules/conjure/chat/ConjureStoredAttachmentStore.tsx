// Module ID: 12175
// Function ID: 12176
// Name: ConjureStoredAttachmentStore
// Dependencies: [504, 584, 2]

// Module 12175 (ConjureStoredAttachmentStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

let map = new Map();
const React = map;
let map1 = new Map();
const set = new Set();
const Store = get_initializedDefault.Store;
class ConjureStoredAttachmentStore extends Store {
  getAttachments(arg0) {
    return closure_0.get(arg0);
  }
  getAttachment(arg0) {
    return map1.get(arg0);
  }
  wasLookedUp(arg0) {
    return set.has(arg0);
  }
}
const prototype = ConjureStoredAttachmentStore.prototype;
const obj = {
  LOGOUT: function handleLogout() {
    closure_0 = new Map();
    new Map();
    new Map();
    set.clear();
  },
  CONJURE_STORED_ATTACHMENTS_FETCHED: function handleFetched(attachments) {
    attachments = attachments.attachments;
    const projectId = attachments.projectId;
    map = new Map(closure_0);
    closure_0 = map.set(projectId, attachments);
    map1 = new Map(map1);
    for (const item10022 of attachments) {
      let result = map1.set(item10022.id, item10022);
      continue;
    }
  },
  CONJURE_STORED_ATTACHMENT_LOOKUP: function handleLookup(attachmentId) {
    set.add(attachmentId.attachmentId);
    return false;
  }
};
const conjureStoredAttachmentStore = new ConjureStoredAttachmentStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureStoredAttachmentStore.tsx");

export default conjureStoredAttachmentStore;
