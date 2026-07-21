// Module ID: 1693
// Function ID: 18752
// Name: IS_ANDROID
// Dependencies: []

// Module 1693 (IS_ANDROID)
const Platform = require(dependencyMap[0]).Platform;
let flag = tmp3;
if (!process.env.JEST_WORKER_ID) {
  flag = false;
}

export const IS_ANDROID = true;
export const IS_IOS = false;
export const IS_WEB = false;
export const IS_JEST = !!process.env.JEST_WORKER_ID;
export const IS_WINDOWS = false;
export const IS_WINDOW_AVAILABLE = "undefined" !== typeof window;
export const SHOULD_BE_USE_WEB = flag;
