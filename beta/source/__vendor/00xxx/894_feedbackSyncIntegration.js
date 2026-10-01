// Module ID: 894
// Function ID: 895
// Name: feedbackSyncIntegration
// Dependencies: [891]

// Module 894 (feedbackSyncIntegration)
import module_891 from "module_891" /* 891 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
  getModalIntegration() {
    return module_891.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return module_891.feedbackScreenshotIntegration;
  }
};

export const feedbackSyncIntegration = module_891.buildFeedbackIntegration(obj);
