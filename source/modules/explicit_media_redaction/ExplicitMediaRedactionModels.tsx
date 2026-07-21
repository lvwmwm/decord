// Module ID: 5671
// Function ID: 48719
// Name: ContentHarmTypeChannel
// Dependencies: [284214097]

// Module 5671 (ContentHarmTypeChannel)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionModels.tsx");

export const ContentHarmTypeChannel = { GUILD: "guild", FRIEND_DM: "friend_dm", NON_FRIEND_DM: "non_friend_dm" };
export const ObscuredMediaTypes = { Attachment: 0, [0]: "Attachment", Embed: 1, [1]: "Embed", GenericMedia: 2, [2]: "GenericMedia" };
