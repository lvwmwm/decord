// Module ID: 12378
// Function ID: 12379
// Name: getAppDMApplication
// Dependencies: [5017, 7894, 1376, 2]
// Exports: getAppDMApplication

// Module 12378 (getAppDMApplication)
import ApplicationStore from "ApplicationStore" /* 5017 */;
import UserProfileStore from "UserProfileStore" /* 7894 */;
import UserStore from "UserStore" /* 1376 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  const user = UserStore.getUser(recipientId);
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp4;
  if (true === bot) {
    tmp4 = recipientId;
  }
  let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(tmp4);
  if (null != tmp4) {
    const userProfile = UserProfileStore.getUserProfile(tmp4);
    let id;
    if (userProfile != null) {
      const application = userProfile.application;
      if (application != null) {
        id = application.id;
      }
    }
    const tmp6 = id;
  }
  if (appIdForBotUserId == null) {
    appIdForBotUserId = tmp6;
  }
  return ApplicationStore.getApplication(appIdForBotUserId);
};
