// Module ID: 15587
// Function ID: 120217
// Name: getWebhookEmptySource
// Dependencies: [31, 27, 33, 6481, 15588, 15589, 15590, 3977, 2]
// Exports: WebhookEmpty

// Module 15587 (getWebhookEmptySource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWebhookEmptySource(theme) {
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
function useWebhookEmptySource() {
  return getWebhookEmptySource(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
