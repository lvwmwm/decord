// Module ID: 19766
// Function ID: 19767
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1187, 2]

// Module 19766 (RestrictedMessagePreviewLayout)
import native from "native" /* 1187 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
