// Module ID: 1693
// Function ID: 18754
// Name: IS_ANDROID
// Dependencies: [27]

// Module 1693 (IS_ANDROID)
import { Platform } from "get ActivityIndicator";

const tmp3 = !!process.env.JEST_WORKER_ID;
let flag = tmp3;
if (!process.env.JEST_WORKER_ID) {
  flag = false;
}

export const IS_ANDROID = true;
export const IS_IOS = false;
export const IS_WEB = false;
export const IS_JEST = tmp3;
export const IS_WINDOWS = false;
export const IS_WINDOW_AVAILABLE = "undefined" !== typeof window;
export const SHOULD_BE_USE_WEB = flag;
