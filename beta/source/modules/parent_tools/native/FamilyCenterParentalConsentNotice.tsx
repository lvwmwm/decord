// Module ID: 14409
// Function ID: 14410
// Name: FamilyCenterParentalConsentNotice
// Dependencies: [19, 21, 4836, 576, 14401, 14402, 4525, 4832, 14410, 1115, 2487, 2]
// Exports: default

// Module 14409 (FamilyCenterParentalConsentNotice)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import FamilyCenterInlineWarningNoticeDefault from "FamilyCenterInlineWarningNotice" /* 14410 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2, link: { textDecorationLine: "underline" } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  let formatResult;
  let link;
  let onPress;
  const tmp = closure_5();
  _require = tmp;
  let obj = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  const obj2 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj2.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  importDefault = react.useCallback(() => {
    const obj = onPress(dependencyMap[6]);
    obj.openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != daysRemaining) {
      if (daysRemaining >= 0) {
        function learnMoreHook(children, arg1) {
          return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress, children }, arg1);
        }
        const obj3 = { style: tmp.container, text: formatResult };
        const tmp10 = FamilyCenterInlineWarningNoticeDefault;
        const tmp8 = jsx;
        if (0 === daysRemaining) {
          const intl2 = tmp2(1115).intl;
          const obj4 = { learnMoreHook };
          formatResult = intl2.format(tmp9(2487).S5kmfO, obj4);
        } else {
          const intl = tmp2(1115).intl;
          const obj5 = { count: daysRemaining, learnMoreHook };
          formatResult = intl.format(tmp9(2487)["5jm+T3"], obj5);
        }
        return tmp8(tmp10, obj3);
      }
    }
  }
  return null;
};
