// Module ID: 13904
// Function ID: 105258
// Name: SessionManager
// Dependencies: []

// Module 13904 (SessionManager)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SessionManager {
    constructor() {
      tmp = SessionManager(this, SessionManager);
      return;
    }
  }
  let closure_0 = SessionManager;
  const items = [
    {
      key: "generateSessionId",
      value() {
        const timestamp = Date.now();
        const str = Math.random();
        return "discord-video-" + timestamp + "-" + Math.random().toString(36).substr(2, 9);
      }
    }
  ];
  return callback(SessionManager, null, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/video-qoe/utils/SessionManager.tsx");

export const SessionManager = tmp2;
