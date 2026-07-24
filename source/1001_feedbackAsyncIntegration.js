// Module ID: 1001
// Function ID: 10735
// Name: feedbackAsyncIntegration
// Dependencies: [1002, 1003]

// Module 1001 (feedbackAsyncIntegration)
import mergeOptions from "mergeOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: require("_lazyLoadIntegration").lazyLoadIntegration });
