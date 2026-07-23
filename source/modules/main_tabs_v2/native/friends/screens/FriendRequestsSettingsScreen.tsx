// Module ID: 15463
// Function ID: 119013
// Name: FriendRequestsSettingsScreen
// Dependencies: [31, 27, 33, 4130, 689, 4662, 15464, 2]
// Exports: default

// Module 15463 (FriendRequestsSettingsScreen)
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
  const items = [callback(importDefault(4662), { absolute: true }), ];
  obj = { style: _createForOfIteratorHelperLoose().container, children: callback(importDefault(15464), {}) };
  items[1] = callback(ScrollView, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
