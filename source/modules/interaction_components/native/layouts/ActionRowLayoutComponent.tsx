// Module ID: 15958
// Function ID: 122390
// Name: ActionRowLayoutComponent
// Dependencies: []
// Exports: default

// Module 15958 (ActionRowLayoutComponent)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: tmp(components) };
      tmp2 = <View {...obj} />;
    }
  }
  return tmp2;
};
