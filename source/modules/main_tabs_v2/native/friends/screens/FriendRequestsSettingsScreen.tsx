// Module ID: 15572
// Function ID: 119668
// Name: FriendRequestsSettingsScreen
// Dependencies: [31, 27, 33, 4165, 689, 4697, 15573, 2]
// Exports: default

// Module 15572 (FriendRequestsSettingsScreen)
import "result";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = {};
  const items = [callback(importDefault(4697), { absolute: true }), ];
  obj = { style: _createForOfIteratorHelperLoose().container, children: callback(importDefault(15573), {}) };
  items[1] = callback(ScrollView, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
