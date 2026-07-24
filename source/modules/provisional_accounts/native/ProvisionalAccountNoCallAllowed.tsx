// Module ID: 12780
// Function ID: 99418
// Name: ProvisionalAccountNoCallAllowed
// Dependencies: [31, 653, 33, 4130, 4475, 7577, 1212, 1920, 4475, 2]
// Exports: default

// Module 12780 (ProvisionalAccountNoCallAllowed)
import "result";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ header: { alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = {};
  obj = { size: "lg", style: callback().header };
  obj.header = jsx(require(7577) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["vh+Zpq"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const tmp = callback();
  obj.helpdeskArticle = importDefault(1920).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj.content = intl2.format(require(1212) /* getSystemLocale */.t["tx08s+"], obj);
  const obj1 = {};
  const obj2 = { variant: "secondary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj1.children = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary" }, "got-it");
  obj.actions = jsx(require(4475) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, {});
};
