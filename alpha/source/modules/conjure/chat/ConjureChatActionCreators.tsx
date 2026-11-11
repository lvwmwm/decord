// Module ID: 13695
// Function ID: 13696
// Name: ConjureChatActionCreators
// Dependencies: [572, 2]
// Exports: setComposerDraft

// Module 13695 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export function setComposerDraft(CONJURE_HOME_DRAFT_KEY, draft) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId: CONJURE_HOME_DRAFT_KEY, draft };
  obj.dispatch(obj2);
}
