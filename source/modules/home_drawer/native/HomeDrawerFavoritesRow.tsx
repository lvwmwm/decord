// Module ID: 14727
// Function ID: 111068
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: []
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 14727 (HomeDrawerFavoritesRowExpandedChildren)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = {};
  obj = { 803799044: true, 1269170180: true, 711589892: true };
  const intl = arg1(dependencyMap[4]).intl;
  obj.children = intl.string(arg1(dependencyMap[4]).t.wMWyci);
  obj.title = jsx(arg1(dependencyMap[3]).Text, obj);
  obj.subtitle = null;
  return jsx(arg1(dependencyMap[2]).HomeDrawerSharedItem, obj);
};
