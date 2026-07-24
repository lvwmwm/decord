// Module ID: 11239
// Function ID: 87556
// Name: PlaceholderAppRow
// Dependencies: [31, 27, 33, 4130, 689, 11204, 5165, 2]
// Exports: default

// Module 11239 (PlaceholderAppRow)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.loadingAppIcon = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.loadingTextPlaceholder = obj1;
_createForOfIteratorHelperLoose.loadingTextPlaceholderSmall = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11204) /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = require(11204) /* usePlaceholderWidth */;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = {};
  obj = { style: tmp.loadingAppIcon };
  obj.icon = <View style={tmp.loadingAppIcon} />;
  obj1 = {};
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1.style = items;
  obj.label = <View />;
  const obj3 = {};
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3.style = items1;
  obj.subLabel = <View />;
  obj.subLabelLineClamp = 1;
  obj.start = flag;
  obj.end = flag2;
  obj.onPress = function onPress() {

  };
  return jsx(require(5165) /* TableRowInner */.TableRow, { style: tmp.loadingAppIcon });
};
