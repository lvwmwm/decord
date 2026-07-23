// Module ID: 14766
// Function ID: 112632
// Name: ExternalLink
// Dependencies: [31, 27, 33, 4130, 689, 9197, 1456, 9221, 1212, 4126, 4965, 4543, 2]
// Exports: default

// Module 14766 (ExternalLink)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Linking: closure_4, ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, height: "100%", display: "flex" };
  let str = "center";
  if (arg0) {
    str = "space-between";
  }
  obj.justifyContent = str;
  const space = importDefault(689).space;
  obj.paddingLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = importDefault(689).space;
  obj.paddingRight = arg0 ? space2.PX_24 : space2.PX_16;
  obj.container = obj;
  obj.description = { textAlign: "center", marginTop: 8 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default function ExternalLink(externalURL) {
  externalURL = externalURL.externalURL;
  const tmp = callback3(importDefault(callback[5])());
  let obj = externalURL(callback[6]);
  importDefault = obj.useNavigation();
  const items = [externalURL];
  callback = React.useCallback(() => {
    outer1_4.openURL(externalURL);
  }, items);
  const items1 = [callback];
  const effect = React.useEffect(() => {
    callback();
  }, items1);
  obj = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.container };
  obj = {};
  const obj1 = {};
  const intl = externalURL(callback[8]).intl;
  obj1.children = intl.string(externalURL(callback[8]).t["0Niu/F"]);
  const items2 = [callback(importDefault(callback[7]), obj1), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-default" };
  const intl2 = externalURL(callback[8]).intl;
  obj2.children = intl2.string(externalURL(callback[8]).t.nToOEg);
  items2[1] = callback(externalURL(callback[9]).Text, obj2);
  obj.children = items2;
  const items3 = [callback2(closure_6, obj), ];
  const obj3 = {};
  const obj4 = { shrink: true, variant: "primary" };
  const intl3 = externalURL(callback[8]).intl;
  obj4.text = intl3.string(externalURL(callback[8]).t["2ixEBi"]);
  obj4.onPress = callback;
  const items4 = [callback(externalURL(callback[11]).Button, obj4), ];
  const obj5 = { shrink: true, variant: "secondary" };
  const intl4 = externalURL(callback[8]).intl;
  obj5.text = intl4.string(externalURL(callback[8]).t.j3cG2p);
  obj5.onPress = function onPress() {
    return arr.pop();
  };
  items4[1] = callback(externalURL(callback[11]).Button, obj5);
  obj3.children = items4;
  items3[1] = callback2(externalURL(callback[10]).ButtonGroup, obj3);
  obj.children = items3;
  return callback2(closure_5, obj);
};
