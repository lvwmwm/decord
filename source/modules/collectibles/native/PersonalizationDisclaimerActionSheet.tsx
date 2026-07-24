// Module ID: 14546
// Function ID: 111030
// Name: PersonalizationDisclaimerActionSheet
// Dependencies: [31, 653, 33, 4130, 689, 3827, 1920, 5187, 4126, 1212, 4965, 4543, 7620, 4098, 2]
// Exports: default

// Module 14546 (PersonalizationDisclaimerActionSheet)
import result from "result";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    const obj = outer1_1(outer1_2[5]);
    obj.openURL(outer1_1(outer1_2[6]).getArticleURL(outer1_4.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container };
  obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.euks4U);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = {};
  const obj1 = { size: "lg" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl2.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj1.onPress = callback;
  const obj2 = { color: importDefault(689).colors.WHITE };
  obj1.icon = callback(require(7620) /* LinkExternalSmallIcon */.LinkExternalSmallIcon, obj2);
  obj1.iconPosition = "end";
  const items1 = [callback(require(4543) /* Button */.Button, obj1), ];
  const obj3 = { variant: "tertiary", size: "lg" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj3.onPress = function onPress() {
    return outer1_1(outer1_2[13]).hideActionSheet();
  };
  items1[1] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items1;
  items[1] = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
