// Module ID: 13882
// Function ID: 106262
// Name: FamilyCenterActivityPage
// Dependencies: [31, 27, 33, 4165, 689, 6235, 5155, 13883, 13885, 13895, 11088, 13899, 2]
// Exports: default

// Module 13882 (FamilyCenterActivityPage)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { scrollView: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.dataConfirmation = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(6235) /* useUserIdsForLinkStatus */;
  obj = { style: tmp.scrollView };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { bottom: true };
  const obj1 = { style: tmp.container };
  const items = [callback(importDefault(13883), {}), ];
  if (0 === activeLinkUserIds.length) {
    const obj2 = {};
    const items1 = [callback(importDefault(13885), {}), callback(importDefault(13895), {}), ];
    const obj3 = { style: tmp.dataConfirmation, children: callback(importDefault(11088), {}) };
    items1[2] = callback(closure_3, obj3);
    obj2.children = items1;
    let tmp9 = callback2(closure_6, obj2);
  } else {
    tmp9 = callback(importDefault(13899), {});
  }
  items[1] = tmp9;
  obj1.children = items;
  obj.children = callback2(closure_3, obj1);
  obj.children = callback(require(5155) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};
