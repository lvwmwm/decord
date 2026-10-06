// Module ID: 10921
// Function ID: 10922
// Name: CategoryCollapseActionCreators
// Dependencies: [585, 2]
// Exports: categoryCollapse, categoryCollapseAll, categoryExpand, categoryExpandAll

// Module 10921 (CategoryCollapseActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
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
