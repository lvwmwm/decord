// Module ID: 894
// Function ID: 895
// Dependencies: [895, 896]

// Module 894
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 896 */;
import mergeOptions from "mergeOptions" /* 895 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });
