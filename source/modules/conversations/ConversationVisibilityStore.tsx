// Module ID: 5020
// Function ID: 5021
// Name: initialize
// Dependencies: [589, 709, 2]

// Module 5020 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = true;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ConversationVisibilityStore extends DeviceSettingsStore {
}
const prototype = ConversationVisibilityStore.prototype;
prototype["initialize"] = function initialize(highlightingEnabled) {
  let flag;
  if (highlightingEnabled != null) {
    flag = highlightingEnabled.highlightingEnabled;
  }
  if (flag == null) {
    flag = true;
  }
};
prototype["isHighlightingEnabled"] = function isHighlightingEnabled() {
  return c0;
};
prototype["getState"] = function getState() {
  return { highlightingEnabled: c0 };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { highlightingEnabled: c0 };
};
ConversationVisibilityStore.displayName = "ConversationVisibilityStore";
ConversationVisibilityStore.persistKey = "ConversationVisibilityStore";
const conversationVisibilityStore = new ConversationVisibilityStore(dispatcherDefault, {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {
    closure_0 = !closure_0;
  }
});
const result = require("set").fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default conversationVisibilityStore;
