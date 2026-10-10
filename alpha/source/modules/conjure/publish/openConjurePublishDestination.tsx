// Module ID: 17111
// Function ID: 17112
// Name: openConjurePublishDestination
// Dependencies: [5440, 4748, 1390, 1085, 10802, 7014, 1112, 7052, 10803, 10804, 2]
// Exports: openConjureProductionDm

// Module 17111 (openConjurePublishDestination)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import transitionToGuild from "transitionToGuild" /* 7052 */;
import FramesConstants from "FramesConstants" /* 10802 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10803 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import UserStore from "UserStore" /* 1390 */;
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
