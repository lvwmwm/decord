// Module ID: 1026
// Function ID: 1027
// Name: feedbackSyncIntegration
// Dependencies: [1023]

// Module 1026 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 1023 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});
