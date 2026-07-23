// Module ID: 11645
// Function ID: 90374
// Name: getNoMutualFriendsSource
// Dependencies: [31, 27, 33, 7403, 11646, 11647, 11648, 3976, 2]
// Exports: NoMutualFriends

// Module 11645 (getNoMutualFriendsSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoMutualFriendsSource(theme) {
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
function useNoMutualFriendsSource() {
  return getNoMutualFriendsSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export { getNoMutualFriendsSource };
export { useNoMutualFriendsSource };
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoMutualFriendsSource();
  return <Image />;
};
