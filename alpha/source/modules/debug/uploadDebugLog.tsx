// Module ID: 13613
// Function ID: 13614
// Name: uploadDebugLog
// Dependencies: [1087, 1297, 2]
// Exports: default

// Module 13613 (uploadDebugLog)
import Constants from "Constants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/debug/uploadDebugLog.tsx");

export default function uploadDebugLog(arg0) {
  let body;
  let category;
  let filename;
  ({ category, filename, body } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.DEBUG_LOG(category, filename), body, headers: { "Content-Type": "text/plain; charset=utf-8" }, timeout: 60000, retries: 3, rejectWithError: true };
  return HTTP.post(request);
};
