// Module ID: 16714
// Function ID: 16715
// Name: RESTRICTED_AVATAR_SIZE
// Dependencies: [1296, 2]

// Module 16714 (RESTRICTED_AVATAR_SIZE)
import set from "set" /* 2 */;
import Button from "Button" /* 1296 */;

const tmp2 = Button.AVATAR_SIZE_MAP[Button.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = set.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
