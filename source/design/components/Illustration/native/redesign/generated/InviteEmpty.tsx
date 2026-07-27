// Module ID: 16412
// Function ID: 128133
// Name: getInviteEmptySource
// Dependencies: [31, 27, 33, 6481, 10149, 16413, 10148, 3977, 2]
// Exports: InviteEmpty

// Module 16412 (getInviteEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getInviteEmptySource(theme) {
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
function useInviteEmptySource() {
  return getInviteEmptySource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
