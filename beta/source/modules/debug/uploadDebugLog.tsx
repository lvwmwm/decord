// Module ID: 13056
// Function ID: 13057
// Name: uploadDebugLog
// Dependencies: [1078, 1275, 2]
// Exports: default

// Module 13056 (uploadDebugLog)
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/debug/uploadDebugLog.tsx");

export default function uploadDebugLog(arg0) {
  ({ category, filename, body } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.DEBUG_LOG(category, filename), body, headers: { "Content-Type": "text/plain; charset=utf-8" }, timeout: 60000, retries: 3, rejectWithError: true };
  return HTTP.post(request);
};
