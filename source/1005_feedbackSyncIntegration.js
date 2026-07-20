// Module ID: 1005
// Function ID: 10976
// Name: feedbackSyncIntegration
// Dependencies: [67174400]

// Module 1005 (feedbackSyncIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const feedbackSyncIntegration = _module.buildFeedbackIntegration({
  getModalIntegration() {
    return require(dependencyMap[0]).feedbackModalIntegration;
  },
  getScreenshotIntegration() {
    return require(dependencyMap[0]).feedbackScreenshotIntegration;
  }
});
