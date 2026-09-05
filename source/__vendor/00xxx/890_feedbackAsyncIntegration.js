// Module ID: 890
// Function ID: 891
// Name: feedbackAsyncIntegration
// Dependencies: [891, 892]

// Module 890 (feedbackAsyncIntegration)
import _lazyLoadIntegration from "_lazyLoadIntegration" /* 892 */;
import mergeOptions from "mergeOptions" /* 891 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: _lazyLoadIntegration.lazyLoadIntegration });
