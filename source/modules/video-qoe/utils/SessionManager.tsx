// Module ID: 15062
// Function ID: 15063
// Name: generateSessionId
// Dependencies: [2]

// Module 15062 (generateSessionId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/video-qoe/utils/SessionManager.tsx");
const prototype = function SessionManager() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["generateSessionId"] = function generateSessionId() {
  const timestamp = Date.now();
  const str = Math.random();
  return "discord-video-" + timestamp + "-" + Math.random().toString(36).substr(2, 9);
};

export const SessionManager = prototype;
