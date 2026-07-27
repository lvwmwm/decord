// Module ID: 5852
// Function ID: 51656
// Name: ContentHarmTypeChannel
// Dependencies: [2]

// Module 5852 (ContentHarmTypeChannel)
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionModels.tsx");

export const ContentHarmTypeChannel = { GUILD: "guild", FRIEND_DM: "friend_dm", NON_FRIEND_DM: "non_friend_dm" };
export const ObscuredMediaTypes = { Attachment: 0, [0]: "Attachment", Embed: 1, [1]: "Embed", GenericMedia: 2, [2]: "GenericMedia" };
