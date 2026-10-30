// Module ID: 7872
// Function ID: 7873
// Name: Constants
// Dependencies: [2]

// Module 7872 (Constants)
import size from "module_2" /* 2 */;

const obj = { GUILD: 0, [0]: "GUILD", GROUP_DM: 1, [1]: "GROUP_DM", FRIEND: 2, [2]: "FRIEND" };
const items = [, ];
({ GUILD: arr[0], GROUP_DM: arr[1] } = obj);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/instant_invite/Constants.tsx");

export const InviteSendStates = { SENDING: "sending", SENT: "sent", ERROR: "error" };
export const InviteTypes = obj;
export const DESKTOP_APP_REDIRECTABLE_INVITE_TYPES = set;
export const InstantInviteModalPages = { MAIN: "main", SETTINGS: "settings" };
