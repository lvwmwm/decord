// Module ID: 15630
// Function ID: 120468
// Name: RESTRICTED_AVATAR_SIZE
// Dependencies: [1273, 2]

// Module 15630 (RESTRICTED_AVATAR_SIZE)
const tmp2 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
