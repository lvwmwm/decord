// Module ID: 5669
// Function ID: 48676
// Name: ContentHarmTypeChannel
// Dependencies: []

// Module 5669 (ContentHarmTypeChannel)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionModels.tsx");

export const ContentHarmTypeChannel = { GUILD: "guild", FRIEND_DM: "friend_dm", NON_FRIEND_DM: "non_friend_dm" };
export const ObscuredMediaTypes = { Attachment: 0, [0]: "Attachment", Embed: 1, [1]: "Embed", GenericMedia: 2, [2]: "GenericMedia" };
