// Module ID: 903
// Function ID: 904
// Name: feedbackSyncIntegration
// Dependencies: [900]

// Module 903 (feedbackSyncIntegration)
import module_900 from "module_900" /* 900 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
  getModalIntegration() {
    return module_900.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return module_900.feedbackScreenshotIntegration;
  }
};

export const feedbackSyncIntegration = module_900.buildFeedbackIntegration(obj);
