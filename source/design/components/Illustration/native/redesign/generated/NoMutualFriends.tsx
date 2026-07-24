// Module ID: 11672
// Function ID: 90612
// Name: getNoMutualFriendsSource
// Dependencies: [31, 27, 33, 7405, 11673, 11674, 11675, 3976, 2]
// Exports: NoMutualFriends

// Module 11672 (getNoMutualFriendsSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoMutualFriendsSource(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
