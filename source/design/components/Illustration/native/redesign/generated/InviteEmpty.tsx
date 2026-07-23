// Module ID: 16342
// Function ID: 127594
// Name: getInviteEmptySource
// Dependencies: [31, 27, 33, 7403, 10187, 16343, 10186, 3976, 2]
// Exports: InviteEmpty

// Module 16342 (getInviteEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getInviteEmptySource(theme) {
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
function useInviteEmptySource() {
  return getInviteEmptySource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export { getInviteEmptySource };
export { useInviteEmptySource };
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useInviteEmptySource();
  return <Image />;
};
