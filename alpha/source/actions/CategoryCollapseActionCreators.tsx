// Module ID: 10673
// Function ID: 10674
// Name: CategoryCollapseActionCreators
// Dependencies: [584, 2]
// Exports: categoryCollapse, categoryCollapseAll, categoryExpand, categoryExpandAll

// Module 10673 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj2);
};
export const categoryExpand = function categoryExpand(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj2);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj2);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj2);
};
