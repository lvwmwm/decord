// Module ID: 12965
// Function ID: 98633
// Name: ModalDisclaimer
// Dependencies: []
// Exports: ModalDisclaimer

// Module 12965 (ModalDisclaimer)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ container: {}, disclaimer: { marginBottom: 12 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = callback();
  let obj = { style: tmp.container, children: jsx(arg1(dependencyMap[4]).Text, obj) };
  obj = { style: tmp.disclaimer, children: children.children };
  return <View {...obj} />;
};
