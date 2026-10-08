// Module ID: 16915
// Function ID: 16916
// Name: openConjurePublishDestination
// Dependencies: [5436, 4705, 1389, 1085, 10613, 7001, 1112, 7043, 10617, 10618, 2]
// Exports: openConjureProductionDm

// Module 16915 (openConjurePublishDestination)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import FramesConstants from "FramesConstants" /* 10613 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10617 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10618 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/conjure/publish/openConjurePublishDestination.tsx");
function openConjurePublishDestination(channel, arg1) {
  let appChannelId;
  let applicationId;
  let guildId;
  let openAutomodSettings;
  let openProfile;
  ({ applicationId, guildId, appChannelId, openProfile, openAutomodSettings } = arg1);
  if ("launch" === channel) {
    if (null != guildId) {
      const obj5 = { applicationId, guildId, appChannelId, openProfile };
      return openConjurePublishDestination("channel", obj5);
    } else {
      const obj8 = canLaunchContextlessFrame;
      if (obj8.canLaunchContextlessFrame(ApplicationStore.getApplication(applicationId))) {
        const obj6 = { applicationId, surface: MAIN_SURFACE };
        const obj4 = FramesActionCreatorsDefault;
        const launchFrameResult = obj4.launchFrame(obj6);
        launchFrameResult.catch(() => {

        });
        return Promise.resolve();
      }
    }
  } else if ("profile" === channel) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      openProfile(id);
      return Promise.resolve();
    }
  } else if ("channel" === channel) {
    if (null != guildId) {
      if (null != appChannelId) {
        const obj7 = router_utils;
        obj7.transitionTo(Routes.CHANNEL(guildId, appChannelId));
        return Promise.resolve();
      }
    }
  } else if ("automod" === channel) {
    if (null != guildId) {
      if (null != openAutomodSettings) {
        openAutomodSettings(guildId);
        return Promise.resolve();
      }
    }
  }
  if ("dm" !== channel) {
    let resolved;
    if (null != guildId) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      let id1;
      if (defaultChannel != null) {
        id1 = defaultChannel.id;
      }
      if (null == id1) {
        const obj3 = transitionToGuild;
        obj3.transitionToGuild(guildId);
      } else {
        const obj2 = router_utils;
        obj2.transitionTo(Routes.CHANNEL(guildId, id1));
      }
      resolved = Promise.resolve();
    }
    return resolved;
  }
  const application = ApplicationStore.getApplication(applicationId);
  let id2;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      id2 = bot.id;
    }
  }
  if (id2 == null) {
    id2 = applicationId;
  }
  const obj = ChannelActionCreatorsDefault;
  resolved = obj.openPrivateChannel({ recipientIds: id2 });
}

export const openConjureProductionDm = function openConjureProductionDm(arg0) {
  const application = ApplicationStore.getApplication(arg0);
  let recipientIds;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      recipientIds = bot.id;
    }
  }
  if (recipientIds == null) {
    recipientIds = arg0;
  }
  const obj = ChannelActionCreatorsDefault;
  return obj.openPrivateChannel({ recipientIds });
};
export { openConjurePublishDestination };
