// Module ID: 20172
// Function ID: 20173
// Name: AgeVerificationManager
// Dependencies: [7036, 5155, 6372, 5209, 1388, 1072, 3, 1094, 14220, 8403, 8660, 11896, 7882, 6830, 6795, 2]

// Module 20172 (AgeVerificationManager)
import LoggerDefault from "Logger" /* 3 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1094 */;
import UserStore2 from "UserStore" /* 1388 */;
import ChannelMessagesDefault from "ChannelMessages" /* 6795 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6830 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8403 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8660 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 14220 */;
import ChannelSectionStore from "ChannelSectionStore" /* 7036 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import MessageStore from "MessageStore" /* 6372 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
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
