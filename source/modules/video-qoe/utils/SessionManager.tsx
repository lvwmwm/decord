// Module ID: 14282
// Function ID: 14283
// Name: generateSessionId
// Dependencies: [2]

// Module 14282 (generateSessionId)
const result = require("set").fileFinishedImporting("modules/video-qoe/utils/SessionManager.tsx");
const prototype = function SessionManager() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["generateSessionId"] = function generateSessionId() {
  const timestamp = Date.now();
  const str = Math.random();
  return "discord-video-" + timestamp + "-" + Math.random().toString(36).substr(2, 9);
};

export const SessionManager = prototype;
