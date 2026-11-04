// Module ID: 7880
// Function ID: 7881
// Name: InviteTargetTypes
// Dependencies: [2]

// Module 7880 (InviteTargetTypes)
import size from "module_2" /* 2 */;

const obj = { HIDDEN: new Set([3, 4, 5]), USER_CREATABLE: new Set([1, 2]), STORE_PAGE: new Set([3, 4]) };
new Set([3, 4, 5]);
new Set([1, 2]);
new Set([3, 4]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/InviteTargetTypes.tsx");

export const InviteTargetTypes = { STREAM: 1, [1]: "STREAM", EMBEDDED_APPLICATION: 2, [2]: "EMBEDDED_APPLICATION", ROLE_SUBSCRIPTIONS_PURCHASE: 3, [3]: "ROLE_SUBSCRIPTIONS_PURCHASE", SERVER_JOIN_HIDDEN: 4, [4]: "SERVER_JOIN_HIDDEN", LINKED_LOBBY_CHANNEL: 5, [5]: "LINKED_LOBBY_CHANNEL" };
export const InviteTargetTypesSets = obj;
