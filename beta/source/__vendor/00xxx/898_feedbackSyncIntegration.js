// Module ID: 898
// Function ID: 899
// Name: feedbackSyncIntegration
// Dependencies: [895]

// Module 898 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions" /* 895 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return mergeOptions.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return mergeOptions.feedbackScreenshotIntegration;
  }
});
