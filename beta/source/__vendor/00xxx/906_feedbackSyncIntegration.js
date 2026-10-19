// Module ID: 906
// Function ID: 907
// Name: feedbackSyncIntegration
// Dependencies: [903]

// Module 906 (feedbackSyncIntegration)
import module_903 from "module_903" /* 903 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
  getModalIntegration() {
    return module_903.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return module_903.feedbackScreenshotIntegration;
  }
};

export const feedbackSyncIntegration = module_903.buildFeedbackIntegration(obj);
