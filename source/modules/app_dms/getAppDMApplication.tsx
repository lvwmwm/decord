// Module ID: 11371
// Function ID: 11372
// Name: getAppDMApplication
// Dependencies: [4478, 5365, 1922, 2]
// Exports: getAppDMApplication

// Module 11371 (getAppDMApplication)
import addApplication from "addApplication";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("mergeGuildAvatar").fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  user = user.getUser(recipientId);
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp4;
  if (true === bot) {
    tmp4 = recipientId;
  }
  appIdForBotUserId = appIdForBotUserId.getAppIdForBotUserId(tmp4);
  if (null != tmp4) {
    userProfile = userProfile.getUserProfile(tmp4);
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
  return appIdForBotUserId.getApplication(appIdForBotUserId);
};
