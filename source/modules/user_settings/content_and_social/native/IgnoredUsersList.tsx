// Module ID: 13762
// Function ID: 105520
// Name: IgnoredUsersList
// Dependencies: [31, 27, 3767, 33, 4130, 689, 5462, 5482, 1273, 13756, 1212, 5121, 4126, 5501, 13763, 566, 2]
// Exports: default

// Module 13762 (IgnoredUsersList)
import "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function IgnoredUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = _createForOfIteratorHelperLoose();
  importDefault(5462);
  if (0 === userIds.length) {
    let obj = { Illustration: require(13756) /* getBlockedSource */.Blocked };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.body = intl.string(require(1212) /* getSystemLocale */.t.PYrWFW);
    let tmp7 = callback(require(1273) /* Button */.EmptyState, obj);
  } else {
    obj = { value: tmp3 };
    obj = { bottom: true, style: tmp.list };
    const obj1 = {};
    const obj2 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { numberOfIgnoredUsers: userIds.length };
    obj2.children = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.iNKUhU, obj3);
    const items = [callback(require(4126) /* Text */.Text, obj2), ];
    const obj4 = { hasIcons: true, children: userIds.map((userId) => outer1_5(outer1_1(outer1_2[14]), { userId }, userId)) };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items[1] = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj4, intl3.string(require(1212) /* getSystemLocale */.t["93ZDWE"]));
    obj1.children = items;
    obj.children = callback2(ScrollView, obj1);
    obj.children = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    tmp7 = callback(require(5462) /* mergeLocations */.AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.list = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sectionLabelStyle = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { userIds: obj.useStateFromStoresArray(items, () => outer1_4.getIgnoredIDs()) };
  return callback(IgnoredUsersList, obj);
};
