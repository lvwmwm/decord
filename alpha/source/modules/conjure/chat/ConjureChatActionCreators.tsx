// Module ID: 11754
// Function ID: 11755
// Name: ConjureChatActionCreators
// Dependencies: [584, 2]
// Exports: setComposerDraft

// Module 11754 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, message) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft: message };
  obj.dispatch(obj2);
};
