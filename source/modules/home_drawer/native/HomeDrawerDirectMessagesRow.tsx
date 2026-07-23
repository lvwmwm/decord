// Module ID: 14839
// Function ID: 113219
// Name: HomeDrawerDMsRow
// Dependencies: [31, 27, 4217, 3767, 653, 33, 4130, 689, 566, 4126, 1212, 14835, 3987, 3984, 2]
// Exports: default

// Module 14839 (HomeDrawerDMsRow)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function HomeDrawerDMsRow() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_5, _isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const friendIDs = outer1_5.getFriendIDs();
    return friendIDs.filter((arg0) => outer2_4.getStatus(arg0) !== outer2_6.OFFLINE).length;
  });
  let tmp3 = null;
  if (stateFromStores > 0) {
    obj = { style: tmp.subtitle };
    obj = { style: tmp.onlineDot };
    const items1 = [callback(View, obj), ];
    const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1 };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj2 = { numFriends: stateFromStores };
    obj1.children = intl.format(require(1212) /* getSystemLocale */.t.N5UIKr, obj2);
    items1[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items1;
    tmp3 = callback2(View, obj);
  }
  const obj3 = {};
  const obj4 = { variant: "text-md/medium", color: "text-default", lineClamp: 1 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.YUU0RF);
  obj3.title = callback(require(4126) /* Text */.Text, obj4);
  obj3.subtitle = tmp3;
  return callback(require(14835) /* HomeDrawerSharedItem */.HomeDrawerSharedItem, obj3);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 } };
_createForOfIteratorHelperLoose = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_ONLINE };
_createForOfIteratorHelperLoose.onlineDot = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = require(3987) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = callback(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
};
