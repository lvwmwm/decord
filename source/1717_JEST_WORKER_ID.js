// Module ID: 1717
// Function ID: 1718
// Name: JEST_WORKER_ID
// Dependencies: [17]

// Module 1717 (JEST_WORKER_ID)
import { Platform } from "get ActivityIndicator";

let flag = JEST_WORKER_ID;
if (!JEST_WORKER_ID) {
  flag = false;
}

export const IS_ANDROID = true;
export const IS_IOS = false;
export const IS_WEB = false;
export const IS_JEST = JEST_WORKER_ID;
export const IS_WINDOWS = false;
export const IS_WINDOW_AVAILABLE = typeof window === "ta";
export const SHOULD_BE_USE_WEB = flag;
