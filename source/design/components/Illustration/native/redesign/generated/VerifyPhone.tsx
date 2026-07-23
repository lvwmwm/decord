// Module ID: 16198
// Function ID: 125740
// Name: getVerifyPhoneSource
// Dependencies: [31, 27, 33, 7403, 16199, 16200, 16201, 3976, 2]
// Exports: VerifyPhone

// Module 16198 (getVerifyPhoneSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getVerifyPhoneSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
  return getVerifyPhoneSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
