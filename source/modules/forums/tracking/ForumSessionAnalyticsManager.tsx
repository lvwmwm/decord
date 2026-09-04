// Module ID: 7703
// Function ID: 7704
// Name: getForumChannelSessionId
// Dependencies: [511, 2]

// Module 7703 (getForumChannelSessionId)
import set from "set" /* 2 */;
import v1 from "v1" /* 511 */;

class ForumSessionAnalyticsManager {
}
ForumSessionAnalyticsManager.prototype["getForumChannelSessionId"] = function getForumChannelSessionId(arg0) {
  const self = this;
  if (null == this.session) {
    let obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1.v4();
    self.session = obj;
    const obj2 = v1;
  }
  if (self.session.channelId !== arg0) {
    obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1.v4();
    self.session = obj;
    const obj4 = v1;
  }
  return self.session.sessionId;
};
const result = set.fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(ForumSessionAnalyticsManager.prototype);
