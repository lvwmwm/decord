// Module ID: 11011
// Function ID: 11012
// Name: handleMessagesTapURLLink
// Dependencies: [8279, 4339, 7987, 10254, 1911, 1372, 4287, 4519, 1903, 676, 1479, 1379, 5770, 1235, 11009, 4283, 7135, 11010, 9218, 9212, 8872, 10950, 8723, 4270, 9188, 1988, 5128, 4481, 11012, 9608, 11013, 6857, 5688, 8276, 1607, 11014, 4530, 1222, 8039, 11017, 11040, 2]
// Exports: handleMessagesTapLink

// Module 11011 (handleMessagesTapURLLink)
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
      let obj = require(11009) /* isLinkTrusted */;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = importDefault(4283)(tmp).payload;
        flag2 = false;
        if (payload.type === constants.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !tmp2(7135).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7135);
            }
            if (!num) {
              tmp4(11010)(invite);
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
      const payload2 = importDefault(4283)(data.url).payload;
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
        obj[1] = require(9218) /* GameProfileEmbedAction */.GameProfileSources.Deeplink;
        obj[2] = tmp13;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[3] = obj;
        require(9212).default.openGameProfileModal(obj);
        flag3 = true;
        const _default = require(9212).default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      const obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(11009).isLinkTrusted(data.node);
        const tmp19Result = tmp19(11009);
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      require(8872) /* isLinkTrusted */.handleClick(obj1);
      flag = true;
      const obj5 = require(8872) /* isLinkTrusted */;
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
        const action = data.action;
      }
    }
    tmp4 = handleMessagesTapURLLink;
  } else {
    const obj = require(10950) /* isAlertOrActionSheetOpen */;
  }
};
