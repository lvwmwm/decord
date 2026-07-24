// Module ID: 11666
// Function ID: 90588
// Name: getNoMutualServersSource
// Dependencies: [31, 27, 33, 7405, 11667, 11668, 11669, 3976, 2]
// Exports: NoMutualServers

// Module 11666 (getNoMutualServersSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getNoMutualServersSource(theme) {
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
