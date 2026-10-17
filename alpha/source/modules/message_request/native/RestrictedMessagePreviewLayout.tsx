// Module ID: 18045
// Function ID: 18046
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1202, 2]

// Module 18045 (RestrictedMessagePreviewLayout)
import native from "native" /* 1202 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
