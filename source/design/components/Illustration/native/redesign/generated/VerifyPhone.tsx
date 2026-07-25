// Module ID: 16256
// Function ID: 126232
// Name: getVerifyPhoneSource
// Dependencies: [31, 27, 33, 6481, 16257, 16258, 16259, 3977, 2]
// Exports: VerifyPhone

// Module 16256 (getVerifyPhoneSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getVerifyPhoneSource(theme) {
  let obj = require(6481) /* getIllustrationSource */;
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
  return getVerifyPhoneSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
