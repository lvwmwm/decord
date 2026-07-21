// Module ID: 11305
// Function ID: 87967
// Name: getAppDMApplication
// Dependencies: []
// Exports: getAppDMApplication

// Module 11305 (getAppDMApplication)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  const user = user.getUser(recipientId);
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
    const userProfile = userProfile.getUserProfile(tmp4);
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
