// Module ID: 7186
// Function ID: 7187
// Name: MessageReactionsTypes
// Dependencies: [2]

// Module 7186 (MessageReactionsTypes)
import size from "module_2" /* 2 */;

const obj = { NORMAL: 0, [0]: "NORMAL", BURST: 1, [1]: "BURST", VOTE: 2, [2]: "VOTE" };
const items = [, ];
({ NORMAL: arr[0], BURST: arr[1] } = obj);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/messages/MessageReactionsTypes.tsx");

export const ReactionTypes = obj;
export const NOTIFICATION_REACTION_TYPES = set;
