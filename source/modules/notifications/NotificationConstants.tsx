// Module ID: 3768
// Function ID: 28948
// Name: AccountNotificationFlags
// Dependencies: [284214097]

// Module 3768 (AccountNotificationFlags)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/notifications/NotificationConstants.tsx");

export const AccountNotificationFlags = { USE_NEW_NOTIFICATIONS: 16, [16]: "USE_NEW_NOTIFICATIONS", MENTION_ON_ALL_MESSAGES: 32, [32]: "MENTION_ON_ALL_MESSAGES" };
export const NotificationSettingsUpdateType = { GUILD: "guild", CHANNEL: "channel", ACCOUNT: "account", AUTHORIZED_APP_DM: "authorized_app_dm", AUTHORIZED_APP_DM_PUSH_NOTIFICATION: "authorized_app_dm_push_notification" };
