// Module ID: 11949
// Function ID: 11950
// Name: getAppDMApplication
// Dependencies: [5500, 7537, 1390, 2]
// Exports: getAppDMApplication

// Module 11949 (getAppDMApplication)
import ApplicationStore from "ApplicationStore" /* 5500 */;
import UserProfileStore from "UserProfileStore" /* 7537 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
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
};
