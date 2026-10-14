// Module ID: 15769
// Function ID: 15770
// Name: SessionManager
// Dependencies: [2]

// Module 15769 (SessionManager)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video-qoe/utils/SessionManager.tsx");
class SessionManager {
  static generateSessionId() {
    const timestamp = Date.now();
    const str = Math.random();
    const str2 = str.toString(36);
    return "discord-video-" + timestamp + "-" + str2.substr(2, 9);
  }
}

export { SessionManager };
