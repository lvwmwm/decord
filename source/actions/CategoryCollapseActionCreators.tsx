// Module ID: 10011
// Function ID: 77304
// Name: categoryCollapse
// Dependencies: [686, 2]
// Exports: categoryCollapse, categoryCollapseAll, categoryExpand, categoryExpandAll

// Module 10011 (categoryCollapse)
const result = require("set").fileFinishedImporting("actions/CategoryCollapseActionCreators.tsx");

export const categoryCollapse = function categoryCollapse(closure_0) {
  let obj = importDefault(686);
  obj = { type: "CATEGORY_COLLAPSE", id: closure_0 };
  obj.dispatch(obj);
};
export const categoryExpand = function categoryExpand(closure_0) {
  let obj = importDefault(686);
  obj = { type: "CATEGORY_EXPAND", id: closure_0 };
  obj.dispatch(obj);
};
export const categoryCollapseAll = function categoryCollapseAll(guildId) {
  let obj = importDefault(686);
  obj = { type: "CATEGORY_COLLAPSE_ALL", guildId };
  obj.dispatch(obj);
};
export const categoryExpandAll = function categoryExpandAll(guildId) {
  let obj = importDefault(686);
  obj = { type: "CATEGORY_EXPAND_ALL", guildId };
  obj.dispatch(obj);
};
