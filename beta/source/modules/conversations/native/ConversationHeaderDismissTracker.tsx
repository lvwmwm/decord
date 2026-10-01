// Module ID: 11037
// Function ID: 11038
// Name: ConversationHeaderDismissTracker
// Dependencies: [2]

// Module 11037 (ConversationHeaderDismissTracker)
import size from "module_2" /* 2 */;

let message;

const result = size.fileFinishedImporting("modules/conversations/native/ConversationHeaderDismissTracker.tsx");
class ConversationHeaderDismissTracker {
  constructor() {
    const merged = Object.assign({ state: null });
    merged[0] = { kind: "idle" };
    return merged;
  }
  handleScrollPosition(conversationId) {
    let firstVisibleMessageRowIndex;
    let lastVisibleMessageRowIndex;
    let rows;
    let startMessageId;
    const self = this;
    ({ rows, startMessageId, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex } = conversationId);
    this.reconcile(conversationId.conversationId);
    if ("idle" !== this.state.kind) {
      if (null != startMessageId) {
        if (null != firstVisibleMessageRowIndex) {
          if (null != lastVisibleMessageRowIndex) {
            const findIndexResult = rows.findIndex((message) => {
              message = message.message;
              let id;
              if (message != null) {
                id = message.id;
              }
              return id === startMessageId;
            });
            let tmp2;
            if (-1 !== findIndexResult) {
              tmp2 = findIndexResult;
            }
            if ("waiting" === self.state.kind) {
              if (null != tmp2 && tmp2 >= lastVisibleMessageRowIndex && tmp2 <= firstVisibleMessageRowIndex) {
                const obj = { kind: "armed", conversationId: self.state.conversationId };
                self.state = obj;
              }
              return null;
            } else if (null != tmp2 && tmp2 >= lastVisibleMessageRowIndex && tmp2 <= firstVisibleMessageRowIndex) {
              return null;
            } else {
              self.state = { kind: "idle" };
              return self.state.conversationId;
            }
          }
        }
        return null;
      }
    }
    return null;
  }
  reconcile(conversationId) {
    const self = this;
    if (null != conversationId) {
      const tmp = "idle" !== self.state.kind && self.state.conversationId === conversationId;
      if (!tmp) {
        const obj = { kind: "waiting", conversationId };
        self.state = obj;
      }
    } else {
      self.state = { kind: "idle" };
    }
  }
}
const prototype = ConversationHeaderDismissTracker.prototype;

export default ConversationHeaderDismissTracker;
