// Module ID: 11345
// Function ID: 88270
// Name: getAppDMApplication
// Dependencies: [4167, 6855, 1849, 2]
// Exports: getAppDMApplication

// Module 11345 (getAppDMApplication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  user = user.getUser(recipientId);
  let bot;
  if (null != user) {
    bot = user.bot;
  }
  let tmp4;
  if (true === bot) {
    tmp4 = recipientId;
  }
  const appIdForBotUserId = authStore.getAppIdForBotUserId(tmp4);
  let tmp6;
  if (null != tmp4) {
    userProfile = userProfile.getUserProfile(tmp4);
    let id;
    if (null != userProfile) {
      const application = userProfile.application;
      if (null != application) {
        id = application.id;
      }
    }
    tmp6 = id;
  }
  if (null != appIdForBotUserId) {
    tmp6 = appIdForBotUserId;
  }
  return authStore.getApplication(tmp6);
};
