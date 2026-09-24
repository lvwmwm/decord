// Module ID: 17382
// Function ID: 17383
// Name: RestrictedMessagePreviewLayout
// Dependencies: [1181, 2]

// Module 17382 (RestrictedMessagePreviewLayout)
import native from "native" /* 1181 */;
import size from "module_2" /* 2 */;

const tmp2 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
