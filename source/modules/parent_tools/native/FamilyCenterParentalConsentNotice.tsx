// Module ID: 14230
// Function ID: 14231
// Name: FamilyCenterParentalConsentNotice
// Dependencies: [19, 21, 4661, 712, 14222, 14223, 4090, 4734, 14231, 1236, 2335, 2]
// Exports: default

// Module 14230 (FamilyCenterParentalConsentNotice)
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let require = arg1;
createCacheKey = { container: null, link: null };
createCacheKey = { marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textDecorationLine: "underline" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(14222) /* useIsParentalConsentBannerActive */;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  let obj1 = require(14223) /* useParentalConsentWarning */;
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  const importDefault = React.useCallback(() => {
    callback(table[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children) {
          return outer1_4(tmp(outer1_2[7]).Text, { variant: "text-sm/medium", color: "text-strong", style: tmp.link, accessibilityRole: "link", onPress: closure_1, children }, arg1);
        }
        obj = { style: null, text: null };
        obj[0] = tmp.container;
        if (0 === daysRemaining) {
          const intl2 = tmp2(1236).intl;
          obj = { learnMoreHook: null };
          obj[0] = learnMoreHook;
          let formatResult = intl2.format(tmp9(2335).S5kmfO, obj);
        } else {
          const intl = tmp2(1236).intl;
          obj1 = { count: null, learnMoreHook: null };
          obj1[0] = daysRemaining;
          obj1[1] = learnMoreHook;
          formatResult = intl.format(tmp9(2335)["5jm+T3"], obj1);
        }
        obj[1] = formatResult;
        return jsx(importDefault(14231), { style: null, text: null });
      }
    }
  }
  return null;
};
