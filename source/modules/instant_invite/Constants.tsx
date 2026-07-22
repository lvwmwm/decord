// Module ID: 6974
// Function ID: 55749
// Name: InviteSendStates
// Dependencies: []

// Module 6974 (InviteSendStates)
const obj = { GUILD: 0, [0]: "GUILD", GROUP_DM: 1, [1]: "GROUP_DM", FRIEND: 2, [2]: "FRIEND" };
const items = [, ];
({ GUILD: arr[0], GROUP_DM: arr[1] } = obj);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/instant_invite/Constants.tsx");

export const InviteSendStates = { SENDING: "sending", SENT: "sent", ERROR: "error" };
export const InviteTypes = obj;
export const DESKTOP_APP_REDIRECTABLE_INVITE_TYPES = new Set(items);
export const InviteTargetTypes = { STREAM: 1, [1]: "STREAM", EMBEDDED_APPLICATION: 2, [2]: "EMBEDDED_APPLICATION", ROLE_SUBSCRIPTIONS_PURCHASE: 3, [3]: "ROLE_SUBSCRIPTIONS_PURCHASE" };
export const InstantInviteModalPages = { MAIN: "main", SETTINGS: "settings" };
