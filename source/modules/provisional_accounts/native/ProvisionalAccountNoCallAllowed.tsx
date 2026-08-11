// Module ID: 13076
// Function ID: 13077
// Name: ProvisionalAccountNoCallAllowed
// Dependencies: [19, 676, 21, 4303, 4647, 7795, 1236, 1993, 4647, 2]
// Exports: default

// Module 13076 (ProvisionalAccountNoCallAllowed)
import "noop";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ header: { alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { size: "lg", style: callback().header };
  obj[0] = jsx(require(7795) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: callback().header });
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["vh+Zpq"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  const tmp = callback();
  obj[0] = importDefault(1993).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj[2] = intl2.format(require(1236) /* getSystemLocale */.t["tx08s+"], obj);
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t["NX+WJN"]);
  obj1[0] = jsx(require(4647) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj[3] = jsx(require(4647) /* getAlertModalItemKey */.AlertActions, { children: null });
  return jsx(require(4647) /* getAlertModalItemKey */.AlertModal, { helpdeskArticle: null });
};
