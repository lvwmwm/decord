// Module ID: 15466
// Function ID: 117972
// Name: RESTRICTED_AVATAR_SIZE
// Dependencies: []

// Module 15466 (RESTRICTED_AVATAR_SIZE)
const tmp2 = require(dependencyMap[0]).AVATAR_SIZE_MAP[require(undefined, dependencyMap[0]).AvatarSizes.NORMAL];
const sum = tmp2 + 18;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewLayout.tsx");

export const RESTRICTED_AVATAR_SIZE = tmp2;
export const RESTRICTED_CONTENT_INSET = sum;
