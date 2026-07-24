// Module ID: 1005
// Function ID: 10982
// Name: feedbackSyncIntegration
// Dependencies: [1002]

// Module 1005 (feedbackSyncIntegration)
import mergeOptions from "mergeOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackSyncIntegration = mergeOptions.buildFeedbackIntegration({
  getModalIntegration() {
    return require(1002) /* mergeOptions */.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return require(1002) /* mergeOptions */.feedbackScreenshotIntegration;
  }
});
