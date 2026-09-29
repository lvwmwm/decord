// Module ID: 14844
// Function ID: 14845
// Name: SessionManager
// Dependencies: [2]

// Module 14844 (SessionManager)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video-qoe/utils/SessionManager.tsx");
const prototype = function SessionManager() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["generateSessionId"] = function generateSessionId() {
  const timestamp = Date.now();
  const str = Math.random();
  return "discord-video-" + timestamp + "-" + Math.random().toString(36).substr(2, 9);
};

export const SessionManager = prototype;
