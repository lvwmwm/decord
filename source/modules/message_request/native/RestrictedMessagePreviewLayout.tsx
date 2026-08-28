// Module ID: 16409
// Function ID: 16410
// Name: RESTRICTED_AVATAR_SIZE
// Dependencies: [1297, 2]

// Module 16409 (RESTRICTED_AVATAR_SIZE)
import set from "set" /* 2 */;
import Button from "Button" /* 1297 */;

const tmp2 = Button.AVATAR_SIZE_MAP[Button.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = set.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
