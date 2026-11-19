// Module ID: 5374
// Function ID: 5375
// Name: MessageReactionsTypes
// Dependencies: [2]

// Module 5374 (MessageReactionsTypes)
import size from "module_2" /* 2 */;

const obj = { NORMAL: 0, [0]: "NORMAL", BURST: 1, [1]: "BURST", VOTE: 2, [2]: "VOTE", SOUND: 3, [3]: "SOUND" };
const items = [, ];
({ NORMAL: arr[0], BURST: arr[1] } = obj);
const items1 = [, , ];
({ NORMAL: arr2[0], BURST: arr2[1], VOTE: arr2[2] } = obj);
const set = new Set(items);
const set1 = new Set(items1);
const result = size.fileFinishedImporting("modules/messages/MessageReactionsTypes.tsx");

export const ReactionTypes = obj;
export const NOTIFICATION_REACTION_TYPES = set;
export const SUPPORTED_REACTION_TYPES = set1;
