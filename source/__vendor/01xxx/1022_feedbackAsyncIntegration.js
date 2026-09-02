// Module ID: 1022
// Function ID: 1023
// Name: feedbackAsyncIntegration
// Dependencies: [1023, 1024]

// Module 1022 (feedbackAsyncIntegration)
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 1024 */;
import mergeOptions from "mergeOptions" /* 1023 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });
