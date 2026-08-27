// Module ID: 1025
// Function ID: 1026
// Name: feedbackAsyncIntegration
// Dependencies: [1026, 1027]

// Module 1025 (feedbackAsyncIntegration)
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 1027 */;
import mergeOptions from "mergeOptions" /* 1026 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });
