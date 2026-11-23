// Module ID: 19439
// Function ID: 19440
// Name: AgeVerificationManager
// Dependencies: [6640, 4762, 5964, 4816, 1386, 1071, 3, 1093, 12463, 7993, 8250, 11673, 7484, 6411, 6389, 2]

// Module 19439 (AgeVerificationManager)
import LoggerDefault from "Logger" /* 3 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1093 */;
import UserStore2 from "UserStore" /* 1386 */;
import ChannelMessagesDefault from "ChannelMessages" /* 6389 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 7993 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8250 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 12463 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6640 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import MessageStore from "MessageStore" /* 5964 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import Constants from "Constants" /* 1071 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
import size from "module_2" /* 2 */;

const UserStore = UserStore2;
let channel;

let c10;
let c9;
function handleMessageCreate(channelId) {
  const message = MessageStore.getMessage(channelId.channelId, channelId.message.id);
  let type;
  if (message != null) {
    const embeds = message.embeds;
    if (embeds != null) {
      const first = embeds[0];
      if (first != null) {
        type = first.type;
      }
    }
  }
  if (type === MessageEmbedTypes.MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
    let found;
    if (message != null) {
      const embeds2 = message.embeds;
      if (embeds2 != null) {
        const first1 = embeds2[0];
        if (first1 != null) {
          const fields = first1.fields;
          if (fields != null) {
            found = fields.find((rawName) => rawName.rawName === AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationEmbedKeys.CONTENT_TYPE);
          }
        }
      }
    }
    let rawValue;
    if (found != null) {
      rawValue = found.rawValue;
    }
    if (rawValue === AgeVerificationSystemNotificationUtils.AgeVerificationSystemNotificationContentType.MANUAL_REVIEW_SUBMITTED) {
      const tmp4Result = ManualReviewActionCreators;
      const result = tmp4Result.invalidateAgeVerificationCaches();
    }
  }
}
function handleLoadChannelMessages(channelId) {
  const obj = MessageActionCreatorsDefault;
  const obj2 = { channelId, limit };
  const messages = obj.fetchMessages(obj2);
}
const transformUser = UserStore2.transformUser;
({ ChannelTypes: c9, MAX_MESSAGES_PER_CHANNEL: c10 } = Constants);
let tmp3 = new LoggerDefault("AgeVerificationManager");
let closure_11 = tmp3;
class AgeVerificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._previousAgeVerificationStatus = null;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const currentUser = UserStore.getCurrentUser();
      let prop;
      const tmp = require;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      if (prop == null) {
        prop = null;
      }
      tmp._previousAgeVerificationStatus = prop;
    };
    applyArgumentsResult.handleCurrentUserUpdate = function handleCurrentUserUpdate(user) {
      function handleLoadForumPosts(arg0) {
        channel = channel.getChannel(arg0);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp4 = type !== constants.GUILD_FORUM;
        if (tmp4) {
          let type1;
          if (channel != null) {
            type1 = channel.type;
          }
          tmp4 = type1 !== tmp3.GUILD_MEDIA;
        }
        if (!tmp4) {
          const obj = closure_1_0(closure_1_2[11]);
          obj.preloadForumThreads(channel);
        }
      }
      let prop = transformUser(user.user).ageVerificationStatus;
      if (prop == null) {
        prop = null;
      }
      const tmp3 = require._previousAgeVerificationStatus !== prop;
      let isAdultStatusResult = tmp3;
      if (isAdultStatusResult) {
        let obj = AgeVerificationUtils;
        isAdultStatusResult = obj.isAdultStatus(prop);
      }
      if (tmp3) {
        const obj2 = ManualReviewActionCreators;
        const result = obj2.invalidateManualReviewCache();
      }
      try {
        if (isAdultStatusResult) {
          const arr = ChannelMessagesDefault;
          const item = arr.forEach((channelId) => {
            channelId = channelId.channelId;
            const obj = closure_1_1(closure_1_2[14]);
            return obj.clear(channelId);
          });
          let channelId = SelectedChannelStore.getChannelId();
          if (null != channelId) {
            handleLoadChannelMessages(channelId);
            handleLoadForumPosts(channelId);
            const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(tmp15);
            const tmp16 = handleLoadChannelMessages;
            if (null != currentSidebarChannelId) {
              tmp16(currentSidebarChannelId);
            }
          }
        }
        require._previousAgeVerificationStatus = prop;
      } catch (tmp24) {
        require._previousAgeVerificationStatus = prop;
        throw tmp24;
      }
    };
    let obj = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate, MESSAGE_CREATE: handleMessageCreate };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const ageVerificationManager = new AgeVerificationManager();
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationManager.tsx");

export default ageVerificationManager;
