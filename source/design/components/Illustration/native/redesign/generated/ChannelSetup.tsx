// Module ID: 16422
// Function ID: 128216
// Name: getChannelSetupSource
// Dependencies: [31, 27, 33, 6481, 16423, 16424, 16425, 3977, 2]
// Exports: ChannelSetup

// Module 16422 (getChannelSetupSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getChannelSetupSource(theme) {
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
function useChannelSetupSource() {
  return getChannelSetupSource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
