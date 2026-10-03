// Module ID: 17055
// Function ID: 17056
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1188, 2]

// Module 17055 (RestrictedMessagePreviewLayout)
import native from "native" /* 1188 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
