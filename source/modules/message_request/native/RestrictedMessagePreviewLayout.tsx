// Module ID: 15640
// Function ID: 120596
// Name: RESTRICTED_AVATAR_SIZE
// Dependencies: [1273, 2]

// Module 15640 (RESTRICTED_AVATAR_SIZE)
const tmp2 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
