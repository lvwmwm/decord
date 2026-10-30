// Module ID: 891
// Function ID: 892
// Name: feedbackSyncIntegration
// Dependencies: [888]

// Module 891 (feedbackSyncIntegration)
import module_888 from "module_888" /* 888 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
  getModalIntegration() {
    return module_888.feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return module_888.feedbackScreenshotIntegration;
  }
};

export const feedbackSyncIntegration = module_888.buildFeedbackIntegration(obj);
