// Module ID: 15577
// Function ID: 120089
// Name: getWebhookEmptySource
// Dependencies: [31, 27, 33, 7405, 15578, 15579, 15580, 3976, 2]
// Exports: WebhookEmpty

// Module 15577 (getWebhookEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWebhookEmptySource(theme) {
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
function useWebhookEmptySource() {
  return getWebhookEmptySource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export { getWebhookEmptySource };
export { useWebhookEmptySource };
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWebhookEmptySource();
  return <Image />;
};
