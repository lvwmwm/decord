// Module ID: 13776
// Function ID: 105635
// Name: FamilyCenterParentalConsentNotice
// Dependencies: [31, 33, 4130, 689, 13768, 13769, 3827, 4126, 13777, 1212, 2198, 2]
// Exports: default

// Module 13776 (FamilyCenterParentalConsentNotice)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.link = { textDecorationLine: "underline" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  function learnMoreHook(children) {
    const obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.link, accessibilityRole: "link", onPress: closure_1, children };
    return outer1_4(tmp(outer1_2[7]).Text, obj, arg1);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(13768) /* useIsParentalConsentBannerActive */;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  let obj1 = require(13769) /* useParentalConsentWarning */;
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (null != parentalConsentWarning) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  let tmp5 = null;
  if (null != daysRemaining) {
    tmp5 = daysRemaining;
  }
  const importDefault = React.useCallback(() => {
    callback(outer1_2[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != tmp5) {
      if (tmp5 >= 0) {
        obj = { style: tmp.container };
        if (0 === tmp5) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj = { learnMoreHook };
          let formatResult = intl2.format(importDefault(2198).S5kmfO, obj);
        } else {
          const intl = require(1212) /* getSystemLocale */.intl;
          obj1 = { count: tmp5, learnMoreHook };
          formatResult = intl.format(importDefault(2198)["5jm+T3"], obj1);
        }
        obj.text = formatResult;
        return jsx(importDefault(13777), { style: tmp.container });
      }
    }
  }
  return null;
};
