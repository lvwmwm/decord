// Module ID: 11172
// Function ID: 86868
// Name: AppsBaner
// Dependencies: []
// Exports: default

// Module 11172 (AppsBaner)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ rocketIconContainer: { "Bool(false)": "ix", "Bool(false)": null }, rocketIcon: { bhk: true, bic: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = callback();
  let obj = { style: tmp.rocketIconContainer, children: jsx(importDefault(dependencyMap[4]), obj) };
  obj = { style: tmp.rocketIcon };
  obj = { image: <View {...obj} /> };
  const tmp2 = <View {...obj} />;
  const intl = arg1(dependencyMap[6]).intl;
  obj.text = intl.string(arg1(dependencyMap[6]).t.sjRwMJ);
  return jsx(importDefault(dependencyMap[5]), obj);
};
