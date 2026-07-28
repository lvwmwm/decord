// Module ID: 15638
// Function ID: 120420
// Name: getWebhookEmptySource
// Dependencies: [31, 27, 33, 6517, 15639, 15640, 15641, 4011, 2]
// Exports: WebhookEmpty

// Module 15638 (getWebhookEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWebhookEmptySource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
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
  return getWebhookEmptySource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
