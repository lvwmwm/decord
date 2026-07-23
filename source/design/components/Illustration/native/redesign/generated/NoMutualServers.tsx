// Module ID: 11639
// Function ID: 90350
// Name: getNoMutualServersSource
// Dependencies: [31, 27, 33, 7403, 11640, 11641, 11642, 3976, 2]
// Exports: NoMutualServers

// Module 11639 (getNoMutualServersSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoMutualServersSource(theme) {
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
function useNoMutualServersSource() {
  return getNoMutualServersSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export { getNoMutualServersSource };
export { useNoMutualServersSource };
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useNoMutualServersSource();
  return <Image />;
};
