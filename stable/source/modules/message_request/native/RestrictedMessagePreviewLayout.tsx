// Module ID: 16724
// Function ID: 16725
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1189, 2]

// Module 16724 (RestrictedMessagePreviewLayout)
import native from "native" /* 1189 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
