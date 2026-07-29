// Module ID: 1025
// Function ID: 1026
// Name: feedbackAsyncIntegration
// Dependencies: [1026, 1027]

// Module 1025 (feedbackAsyncIntegration)
import mergeOptions from "mergeOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const feedbackAsyncIntegration = mergeOptions.buildFeedbackIntegration({ lazyLoadIntegration: require("_lazyLoadIntegration").lazyLoadIntegration });
