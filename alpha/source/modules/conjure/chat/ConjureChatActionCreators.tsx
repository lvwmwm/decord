// Module ID: 12239
// Function ID: 12240
// Name: ConjureChatActionCreators
// Dependencies: [584, 2]
// Exports: setChatSidebarWidth, setComposerDraft

// Module 12239 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, draft) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj2);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj2);
};
