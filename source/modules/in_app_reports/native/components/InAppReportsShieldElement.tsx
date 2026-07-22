// Module ID: 7611
// Function ID: 61013
// Name: ShieldElement
// Dependencies: []
// Exports: default

// Module 7611 (ShieldElement)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ container: { borderWidth: "<string:1062273028>", borderColor: "<string:3332911364>", borderStyle: "<string:1099511627>" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(arg1(dependencyMap[4]).ShieldSpotIllustration, {}) };
      tmp2 = <View {...obj} />;
    }
  }
  return tmp2;
};
