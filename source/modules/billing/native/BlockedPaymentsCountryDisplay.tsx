// Module ID: 7187
// Function ID: 57912
// Name: BlockedPaymentsCountryDisplay
// Dependencies: [31, 27, 653, 33, 4130, 689, 4066, 1273, 1212, 1920, 3976, 7188, 7189, 2]
// Exports: default

// Module 7187 (BlockedPaymentsCountryDisplay)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { fontSize: 20, fontWeight: "700", color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginBottom: 16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { marginTop: 38 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.vwMEHS);
  const items = [callback(require(1273) /* Button */.LegacyText, obj), , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const obj1 = {};
  const tmp2 = importDefault(4066)();
  const tmp3 = closure_7;
  const tmp4 = closure_3;
  const tmp5 = callback;
  obj1.helpdeskArticle = importDefault(1920).getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj.children = intl2.format(require(1212) /* getSystemLocale */.t.IHxEJU, obj1);
  items[1] = callback(require(1273) /* Button */.LegacyText, obj);
  const obj2 = { style: tmp.image };
  const obj5 = importDefault(1920);
  const tmp6 = closure_4;
  if (obj7.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(7188);
  } else {
    tmp7Result = tmp7(7189);
  }
  obj2.source = tmp7Result;
  items[2] = tmp5(tmp6, obj2);
  obj.children = items;
  return tmp3(tmp4, obj);
};
