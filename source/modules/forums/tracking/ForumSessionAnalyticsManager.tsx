// Module ID: 7012
// Function ID: 56277
// Name: createSessionData
// Dependencies: [6, 7, 491, 2]

// Module 7012 (createSessionData)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function createSessionData(channelId) {
  const obj = { channelId, sessionId: require(491) /* v1 */.v4() };
  return obj;
}
let tmp2 = (() => {
  class ForumSessionAnalyticsManager {
    constructor() {
      tmp = outer1_2(this, ForumSessionAnalyticsManager);
      return;
    }
  }
  const items = [
    {
      key: "getForumChannelSessionId",
      value(arg0) {
        const self = this;
        if (null == this.session) {
          self.session = outer1_4(arg0);
        }
        if (self.session.channelId !== arg0) {
          self.session = outer1_4(arg0);
        }
        return self.session.sessionId;
      }
    }
  ];
  return callback(ForumSessionAnalyticsManager, items);
})();
tmp2 = new tmp2();
const result = require("v1").fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default tmp2;
