// Module ID: 14561
// Function ID: 109741
// Name: SelectMenuNativeComponent
// Dependencies: []
// Exports: default

// Module 14561 (SelectMenuNativeComponent)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
if (obj.isFabric()) {
  let importDefaultResult = importDefault(dependencyMap[4]);
} else {
  importDefaultResult = arg1(dependencyMap[1]).requireNativeComponent("DCDSelectActionComponentView");
}
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default function SelectMenuNativeComponent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["style"] = { width: "100%" };
  return <importDefaultResult {...obj} />;
};
