// Module ID: 12477
// Function ID: 12478
// Name: ConjureChatActionCreators
// Dependencies: [584, 2]
// Exports: setComposerDraft

// Module 12477 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, draft) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj2);
};
