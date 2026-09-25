// Module ID: 16689
// Function ID: 16690
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1177, 2]

// Module 16689 (RestrictedMessagePreviewLayout)
import native from "native" /* 1177 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
