// Module ID: 10964
// Function ID: 10965
// Name: handleMessagesTapURLLink
// Dependencies: [8122, 4292, 7829, 10207, 1882, 1372, 4240, 4472, 1874, 676, 1479, 1379, 5724, 1235, 10962, 4236, 7089, 10963, 9172, 9166, 8826, 10903, 8677, 4223, 9142, 1959, 5081, 4434, 10965, 9563, 10966, 6811, 5615, 8119, 1579, 10967, 4483, 1222, 7881, 10970, 10993, 2]
// Exports: handleMessagesTapLink

// Module 10964 (handleMessagesTapURLLink)
import { getSection } from "getIndexKey";
import addApplication from "addApplication";
import handleMessageSendFailedAutomod from "handleMessageSendFailedAutomod";
import handleQuickSwitcherUpdate from "handleQuickSwitcherUpdate";
import createdAt from "createdAt";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateInvite from "updateInvite";
import reinjectEphemerals from "reinjectEphemerals";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { StaticChannelRoute } from "set";
import { NotificationTypes } from "str2";
import { OpenThreadAnalyticsLocations as closure_18 } from "AbortCodes";

let closure_12;
let closure_14;
let map1;
function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = require(10962) /* isLinkTrusted */;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = importDefault(4236)(tmp).payload;
        flag2 = false;
        if (payload.type === constants.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !tmp2(7089).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7089);
            }
            if (!num) {
              tmp4(10963)(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
        tmp4 = importDefault;
      }
      tmp2 = require;
    }
    if (!flag2) {
      const payload2 = importDefault(4236)(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp13;
        if (null != channelId) {
          if (null != data.messageId) {
            message = message.getMessage(channelId, data.messageId);
            let id;
            if (message != null) {
              id = message.author.id;
            }
            tmp13 = id;
          }
        }
        obj = { gameId: null, source: null, sourceUserId: null, gameProfileModalChecks: null };
        obj[0] = gameId;
        obj[1] = require(9172) /* GameProfileEmbedAction */.GameProfileSources.Deeplink;
        obj[2] = tmp13;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[3] = obj;
        require(9166).default.openGameProfileModal(obj);
        flag3 = true;
        const _default = require(9166).default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      const obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(10962).isLinkTrusted(data.node);
        const tmp19Result = tmp19(10962);
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      require(8826) /* isLinkTrusted */.handleClick(obj1);
      flag = true;
      const obj5 = require(8826) /* isLinkTrusted */;
      tmp19 = require;
    }
  }
  return flag;
}
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = ME);
const result = require("handleMessageSendFailedAutomod").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  let chatInputRef;
  let handleTransitionToThread;
  let message;
  let messageChannel;
  ({ chatInputRef, handleTransitionToThread, message, messageChannel } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!tmp4(data, id)) {
      if (null != data.action) {
        if (chatInputRef != null) {
          const current = chatInputRef.current;
          if (current != null) {
            let flag = data.addSpace;
            if (flag == null) {
              flag = true;
            }
            current.insertText(data.text, null, flag);
          }
        }
      }
    }
    tmp4 = handleMessagesTapURLLink;
  } else {
    const obj = require(10903) /* isAlertOrActionSheetOpen */;
  }
};
