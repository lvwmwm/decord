// Module ID: 14011
// Function ID: 107136
// Name: QuestHomeEmptyState
// Dependencies: [31, 27, 653, 33, 4130, 689, 1212, 3834, 3984, 5121, 477, 4126, 14012, 4554, 2]
// Exports: default

// Module 14011 (QuestHomeEmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_3, ImageBackground: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 } };
_createForOfIteratorHelperLoose = { top: -55, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.emptyStateContentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyStateContentTitle = { textAlign: "center" };
_createForOfIteratorHelperLoose.emptyStateContentDescription = { textAlign: "center", marginTop: 4 };
_createForOfIteratorHelperLoose.emptyImage = { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 };
_createForOfIteratorHelperLoose.gradient = { height: 22, width: "100%", position: "absolute", bottom: 0 };
_createForOfIteratorHelperLoose.actionWrapper = { marginTop: 16, alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
  let action;
  let title;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    title = intl.string(require(1212) /* getSystemLocale */.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    subtitle = intl2.string(require(1212) /* getSystemLocale */.t["R7mv+G"]);
  }
  const tmp5 = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWER);
  obj = {};
  let obj2 = require(477) /* set */;
  obj.bottom = obj2.isAndroid();
  obj.style = tmp5.container;
  obj = { style: tmp5.container };
  const obj1 = { style: tmp5.emptyStateContainer };
  obj2 = { style: tmp5.emptyStateContentContainer };
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  const items = [callback(require(4126) /* Text */.Text, obj3), , ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items[1] = callback(require(4126) /* Text */.Text, obj4);
  let tmp10 = null != action;
  if (tmp10) {
    const obj5 = { style: tmp5.actionWrapper, children: action };
    tmp10 = callback(closure_3, obj5);
  }
  items[2] = tmp10;
  obj2.children = items;
  const items1 = [callback2(closure_3, obj2), ];
  let tmp13 = null;
  if (!importDefault(3984)().isChatLockedOpen) {
    const obj6 = {};
    const obj7 = { style: tmp5.emptyImage, source: importDefault(14012), resizeMode: "cover" };
    const items2 = [callback(closure_4, obj7), ];
    const obj8 = { style: tmp5.gradient };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj8.colors = items3;
    items2[1] = callback(importDefault(4554), obj8);
    obj6.children = items2;
    tmp13 = callback2(closure_8, obj6);
  }
  items1[1] = tmp13;
  obj1.children = items1;
  obj.children = callback2(closure_3, obj1);
  obj.children = callback(closure_3, obj);
  return callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
