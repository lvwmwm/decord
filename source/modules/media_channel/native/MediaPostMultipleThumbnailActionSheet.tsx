// Module ID: 9596
// Function ID: 74711
// Name: MediaPostThumbnailActionSheet
// Dependencies: [31, 27, 1345, 33, 4130, 689, 1557, 5187, 5189, 4126, 1212, 1273, 4543, 2]
// Exports: default

// Module 9596 (MediaPostThumbnailActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, width: "100%", paddingVertical: 40, paddingHorizontal: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.topContainer = obj1;
let obj2 = { flex: 1, flexDirection: "row", padding: 12, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.setAsThumbnailContainer = obj2;
_createForOfIteratorHelperLoose.contentContainer = { alignItems: "center", flex: 1 };
_createForOfIteratorHelperLoose.title = { marginTop: 24 };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ContentDismissActionType").fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(outer1_4.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: items };
  items = [tmp.contentContainer, { paddingBottom: importDefault(1557)().bottom }];
  const obj1 = { style: tmp.topContainer };
  const obj2 = { style: tmp.setAsThumbnailContainer };
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl = markAsDismissed(1212).intl;
  obj3.children = intl.string(markAsDismissed(1212).t.ews2pj);
  const items1 = [callback(markAsDismissed(4126).Text, obj3), callback(markAsDismissed(1273).Checkbox, { selected: true })];
  obj2.children = items1;
  obj1.children = callback2(View, obj2);
  const items2 = [callback(View, obj1), , , , , ];
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl2 = markAsDismissed(1212).intl;
  obj4.children = intl2.string(markAsDismissed(1212).t.WJisip);
  items2[1] = callback(markAsDismissed(4126).Text, obj4);
  items2[2] = callback(markAsDismissed(1273).Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description };
  const intl3 = markAsDismissed(1212).intl;
  obj5.children = intl3.string(markAsDismissed(1212).t.X6ZH6d);
  items2[3] = callback(markAsDismissed(4126).Text, obj5);
  items2[4] = callback(markAsDismissed(1273).Spacer, { size: 48 });
  const obj6 = {};
  const intl4 = markAsDismissed(1212).intl;
  obj6.text = intl4.string(markAsDismissed(1212).t["NX+WJN"]);
  obj6.grow = true;
  obj6.onPress = function onPress() {
    return markAsDismissed(outer1_4.UNKNOWN);
  };
  items2[5] = callback(markAsDismissed(4543).Button, obj6);
  obj.children = items2;
  obj.children = callback2(markAsDismissed(5189).BottomSheetScrollView, obj);
  obj.children = callback(View, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
