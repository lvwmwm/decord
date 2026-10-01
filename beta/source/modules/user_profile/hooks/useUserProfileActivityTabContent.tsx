// Module ID: 12651
// Function ID: 12652
// Name: useUserProfileActivityTabContent
// Dependencies: [19, 8254, 4876, 5591, 4855, 7035, 1074, 3, 12652, 12614, 12616, 7789, 504, 2]
// Exports: default

// Module 12651 (useUserProfileActivityTabContent)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1074 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 7789 */;
import maybeFetchContentInventoryOutboxDefault from "maybeFetchContentInventoryOutbox" /* 12652 */;
import react from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import size from "module_2" /* 2 */;

const StatusTypes = Constants.StatusTypes;
let tmp2 = new LoggerDefault("useUserProfileActivityTabContent");
let closure_10 = tmp2;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivityTabContent.tsx");

export default function useUserProfileActivityTabContent(userId) {
  let currentUserId;
  let guildId;
  let live;
  let logger;
  let recent;
  userId = userId.userId;
  recent = undefined;
  let voiceChannel;
  let voiceActivity;
  let closure_4;
  const items = [userId];
  ({ currentUserId, guildId } = userId);
  const effect = voiceActivity.useEffect(() => {
    const promise = maybeFetchContentInventoryOutboxDefault(userId);
    if (promise != null) {
      promise.catch((error) => {
        logger.log("Failed to fetch content inventory outbox for " + userId + ":", error);
      });
    }
  }, items);
  const tmp2 = recent(voiceChannel[9])(userId);
  ({ live, recent } = tmp2);
  const stream = tmp2.stream;
  const tmp3 = recent(voiceChannel[10])({ userId, guildId });
  voiceChannel = tmp3.voiceChannel;
  voiceActivity = tmp3.voiceActivity;
  const items1 = [recent];
  const memo = voiceActivity.useMemo(() => recent.filter(ContentInventoryTypes.isRecentActivityEntry), items1);
  const items2 = [closure_4];
  closure_4 = tmp5;
  const obj = userId(voiceChannel[12]);
  const stateFromStores = obj.useStateFromStores(items2, () => ContentInventoryOutboxStore.isFetchingUserOutbox(userId));
  const items3 = [SelfPresenceStore, PresenceStore];
  const obj2 = userId(voiceChannel[12]);
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let status;
    const tmp = closure_4;
    if (tmp) {
      status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(userId);
    }
    return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
  });
  const items4 = [UserProfileStore];
  const obj3 = userId(voiceChannel[12]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const userProfile = UserProfileStore.getUserProfile(userId);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  const items5 = [VoiceStateStore];
  let found = live;
  const obj4 = userId(voiceChannel[12]);
  const stateFromStores3 = obj4.useStateFromStores(items5, () => {
    const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  });
  if (null != voiceActivity) {
    found = live.filter((item) => item !== voiceActivity);
  }
  let tmp10 = !((stateFromStores1 || stateFromStores2) && null != voiceChannel && stateFromStores3) && !stateFromStores1;
  if (tmp10) {
    let tmp11 = found.length > 0;
    if (!tmp11) {
      tmp11 = !stateFromStores2 && null != voiceChannel;
    }
    if (!tmp11) {
      let tmp13 = !stateFromStores2 && null != stream;
      if (tmp13) {
        let id;
        const channelId = stream.channelId;
        if (voiceChannel != null) {
          id = voiceChannel.id;
        }
        tmp13 = channelId !== id;
      }
      tmp11 = tmp13;
    }
    tmp10 = tmp11;
  }
  return { recent: memo, isFetching: stateFromStores, isCurrentUser: userId === currentUserId, hasCurrentActivity: tmp10, hasRecentActivity: memo.length > 0 };
};
