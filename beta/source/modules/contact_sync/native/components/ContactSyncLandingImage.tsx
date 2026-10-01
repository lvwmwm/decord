// Module ID: 12186
// Function ID: 12187
// Name: ContactSyncLandingImage
// Dependencies: [19, 17, 21, 4836, 12187, 12188, 2]
// Exports: default

// Module 12186 (ContactSyncLandingImage)
import AssetRegistryDefault from "AssetRegistry" /* 12187 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12188 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  let items;
  let obj3;
  let obj5;
  const tmp = closure_7();
  const obj = { children: items };
  const obj2 = { style: tmp.leftContainer, children: React3(React2, obj3) };
  obj3 = { resizeMode: "contain", style: tmp.landingImageLeft, source: AssetRegistryDefault };
  items = [React3(_false, obj2), ];
  const obj4 = { style: tmp.rightContainer, children: React3(React2, obj5) };
  obj5 = { resizeMode: "contain", style: tmp.landingImageRight, source: AssetRegistryDefault2 };
  items[1] = React3(_false, obj4);
  return metroRequire(hasOwnProperty, obj);
};
