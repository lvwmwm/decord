// Module ID: 16307
// Function ID: 126435
// Name: getVerifyPhoneSource
// Dependencies: [31, 27, 33, 6517, 16308, 16309, 16310, 4011, 2]
// Exports: VerifyPhone

// Module 16307 (getVerifyPhoneSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getVerifyPhoneSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useVerifyPhoneSource() {
  return getVerifyPhoneSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export { getVerifyPhoneSource };
export { useVerifyPhoneSource };
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useVerifyPhoneSource();
  return <Image />;
};
