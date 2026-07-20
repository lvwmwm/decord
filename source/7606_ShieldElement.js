// Module ID: 7606
// Function ID: 60979
// Name: ShieldElement
// Dependencies: []
// Exports: default

// Module 7606 (ShieldElement)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ container: { "Null": false, "Null": false, "Null": false } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(arg1(dependencyMap[4]).ShieldSpotIllustration, { aze: "isArray", azj: "jsx" }) };
      tmp2 = <View {...obj} />;
    }
  }
  return tmp2;
};
