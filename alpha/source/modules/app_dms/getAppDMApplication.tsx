// Module ID: 12978
// Function ID: 12979
// Name: getAppDMApplication
// Dependencies: [2165, 6837, 1388, 2]
// Exports: getAppDMApplication

// Module 12978 (getAppDMApplication)
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export function getAppDMApplication(channel) {
  let tmp7;
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
  const tmp5 = ApplicationStore;
  if (null != tmp4) {
    const userProfile = UserProfileStore.getUserProfile(tmp4);
    let id;
    if (userProfile != null) {
      const application = userProfile.application;
      if (application != null) {
        id = application.id;
      }
    }
    tmp7 = id;
  }
  const getApplication = tmp5.getApplication;
  if (appIdForBotUserId == null) {
    appIdForBotUserId = tmp7;
  }
  return getApplication(appIdForBotUserId);
}
