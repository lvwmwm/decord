// Module ID: 7521
// Function ID: 59974
// Name: BuyNitroPurchaseButtonLegalDisclaimer
// Dependencies: [31, 653, 33, 4130, 689, 1212, 477, 3776, 1920, 4126, 2]
// Exports: default

// Module 7521 (BuyNitroPurchaseButtonLegalDisclaimer)
import "result";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ HelpdeskArticles: closure_3, MarketingURLs: closure_4 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center" };
_createForOfIteratorHelperLoose.disclaimer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx");

export default function BuyNitroPurchaseButtonLegalDisclaimer(arg0) {
  let ctaText;
  let isDiscounted;
  let isTrial;
  let item;
  ({ item, ctaText } = arg0);
  ({ isTrial, isDiscounted } = arg0);
  let interval;
  if (null != item) {
    interval = item.interval;
  }
  if (null == interval) {
    return null;
  } else {
    let tmp3 = require;
    const intl = require(1212) /* getSystemLocale */.intl;
    let format = intl.format;
    if (!isTrial) {
      if (isDiscounted) {
        let obj = { buttonText: ctaText, interval: importDefault(3776).formatInterval(item.interval) };
        const obj5 = importDefault(3776);
        obj.cancelSubscriptionArticle = importDefault(1920).getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
        const obj6 = importDefault(1920);
        obj.paidServiceTermsArticle = importDefault(1920).getArticleURL(constants.PAID_TERMS);
        let formatResult = format(tmp3(1212).t["3uC7vj"], obj);
        const obj7 = importDefault(1920);
      } else {
        let tmp3Result = tmp3(477);
        let t = require(1212) /* getSystemLocale */.t;
        obj = { paidURL: constants2.PAID_TERMS };
        const isAndroidResult = tmp3Result.isAndroid();
        const tmp8 = tmp3Result.isAndroid() ? t.COObWR : t["7wpqfj"];
        obj.interval = require(3776) /* _createForOfIteratorHelperLoose */.getIntervalStringAsNoun(item.interval);
        obj.ctaText = ctaText;
        formatResult = format(tmp8, obj);
        const obj3 = require(3776) /* _createForOfIteratorHelperLoose */;
      }
      tmp3 = jsx;
      format = dependencyMap;
      const obj1 = { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult };
      jsx(require(4126) /* Text */.Text, { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult });
    }
    tmp3Result = tmp3(477);
    t = require(1212) /* getSystemLocale */.t;
    const isAndroidResult1 = tmp3Result.isAndroid();
    t = { paidURL: constants2.PAID_TERMS };
    const tmp18 = tmp3Result.isAndroid() ? t.tINI9V : t.ZWXtAj;
    t.interval = require(3776) /* _createForOfIteratorHelperLoose */.getIntervalStringAsNoun(item.interval);
    const obj10 = require(3776) /* _createForOfIteratorHelperLoose */;
    item = importDefault(1920).getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
    t.cancelURL = item;
    format(tmp18, t);
    const obj11 = importDefault(1920);
  }
};
