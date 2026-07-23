// Module ID: 9523
// Function ID: 74118
// Name: onClose
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 4098, 5187, 5186, 5501, 9524, 4126, 1212, 5459, 1920, 2]
// Exports: default

// Module 9523 (onClose)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
function onClose() {
  importDefault(4098).hideActionSheet();
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
_createForOfIteratorHelperLoose["marginTop"] = 8;
_createForOfIteratorHelperLoose["marginBottom"] = 8;
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
_createForOfIteratorHelperLoose.subtitle = obj1;
_createForOfIteratorHelperLoose.view = { paddingTop: 50, paddingBottom: 100, alignItems: "center" };
_createForOfIteratorHelperLoose.rating = { width: 116, height: 93 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/notifications/native/NotificationSurveyResponseActionSheet.tsx");

export default function NotificationSurveyResponseActionSheet(header) {
  header = header.header;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  let tmp3 = null != header;
  if (tmp3) {
    obj = { title: header };
    obj = { onPress: onClose };
    obj.trailing = callback(require(5501) /* ActionSheetCloseButton */.ActionSheetCloseButton, obj);
    tmp3 = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  }
  const items = [tmp3, ];
  const obj1 = { style: tmp.view };
  const items1 = [callback(closure_4, { style: tmp.rating, source: importDefault(9524) }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t["d9+vQ8"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const obj5 = {};
  const obj2 = { style: tmp.rating, source: importDefault(9524) };
  const tmp2 = callback2;
  obj5.helpUrl = importDefault(1920).getArticleURL(HelpdeskArticles.HIGHLIGHTS_NOTIFICATIONS);
  obj4.children = intl2.format(require(1212) /* getSystemLocale */.t.WxD5QY, obj5);
  items1[2] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj4);
  obj1.children = items1;
  items[1] = callback2(closure_3, obj1);
  obj.children = items;
  return tmp2(require(5187) /* Background */.BottomSheet, obj);
};
