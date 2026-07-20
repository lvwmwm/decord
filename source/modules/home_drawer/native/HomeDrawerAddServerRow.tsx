// Module ID: 14748
// Function ID: 111196
// Name: HomeDrawerAddServerRowExpandedChildren
// Dependencies: []
// Exports: HomeDrawerAddServerRowExpandedChildren

// Module 14748 (HomeDrawerAddServerRowExpandedChildren)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.children = intl.string(arg1(dependencyMap[4]).t.l5WIbf);
  obj.title = jsx(arg1(dependencyMap[3]).Text, obj);
  obj.subtitle = null;
  return jsx(arg1(dependencyMap[2]).HomeDrawerSharedItem, obj);
};
