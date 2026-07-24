// Module ID: 16411
// Function ID: 128048
// Name: getChannelSetupSource
// Dependencies: [31, 27, 33, 7405, 16412, 16413, 16414, 3976, 2]
// Exports: ChannelSetup

// Module 16411 (getChannelSetupSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getChannelSetupSource(theme) {
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
function useChannelSetupSource() {
  return getChannelSetupSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export { getChannelSetupSource };
export { useChannelSetupSource };
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useChannelSetupSource();
  return <Image />;
};
