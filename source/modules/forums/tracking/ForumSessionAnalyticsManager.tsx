// Module ID: 7003
// Function ID: 56200
// Name: createSessionData
// Dependencies: []

// Module 7003 (createSessionData)
function createSessionData(channelId) {
  const obj = { channelId, sessionId: arg1(dependencyMap[2]).v4() };
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class ForumSessionAnalyticsManager {
    constructor() {
      tmp = closure_2(this, ForumSessionAnalyticsManager);
      return;
    }
  }
  const arg1 = ForumSessionAnalyticsManager;
  const items = [
    {
      key: "getForumChannelSessionId",
      value(arg0) {
        const self = this;
        if (null == this.session) {
          self.session = callback2(arg0);
        }
        if (self.session.channelId !== arg0) {
          self.session = callback2(arg0);
        }
        return self.session.sessionId;
      }
    }
  ];
  return callback(ForumSessionAnalyticsManager, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default tmp2;
