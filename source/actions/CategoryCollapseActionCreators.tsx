// Module ID: 9970
// Function ID: 77057
// Name: categoryCollapse
// Dependencies: [646840323, 899088385]
// Exports: categoryCollapse, categoryCollapseAll, categoryExpand, categoryExpandAll

// Module 9970 (categoryCollapse)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CATEGORY_COLLAPSE", id };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CATEGORY_EXPAND", id };
  obj.dispatch(obj);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj);
};
