// Module ID: 11707
// Function ID: 90946
// Name: ContactSyncLandingImage
// Dependencies: []
// Exports: default

// Module 11707 (ContactSyncLandingImage)
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ leftContainer: {}, landingImageLeft: { paddingStart: "merchantId", backgroundColor: "NR" }, rightContainer: {}, landingImageRight: { paddingStart: 1985159506, backgroundColor: -1524176199 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.leftContainer };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: importDefault(dependencyMap[4]) };
  obj.children = callback(closure_2, obj);
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.rightContainer, children: callback(closure_2, { resizeMode: "contain", style: tmp.landingImageRight, source: importDefault(dependencyMap[5]) }) };
  items[1] = callback(closure_3, obj1);
  obj.children = items;
  return callback2(closure_5, obj);
};
