// Module ID: 14302
// Function ID: 14303
// Name: ConjureProjectGroupsActionCreators
// Dependencies: [572, 2]
// Exports: setConjureProjectGroupCollapsed

// Module 14302 (ConjureProjectGroupsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/project_groups/ConjureProjectGroupsActionCreators.tsx");

export function setConjureProjectGroupCollapsed(key, collapsed) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key, collapsed };
  obj.dispatch(obj2);
}
