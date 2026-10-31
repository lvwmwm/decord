// Module ID: 12582
// Function ID: 12583
// Name: ConjureChatActionCreators
// Dependencies: [572, 2]
// Exports: setComposerDraft

// Module 12582 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export function setComposerDraft(projectId, message) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft: message };
  obj.dispatch(obj2);
}
