// Module ID: 8267
// Function ID: 65225
// Name: openUserProfileAvatarMediaViewer
// Dependencies: []
// Exports: default

// Module 8267 (openUserProfileAvatarMediaViewer)
let closure_2 = importDefault(dependencyMap[0]);
const AVATAR_MAX_SIZE = arg1(dependencyMap[1]).AVATAR_MAX_SIZE;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let description;
  let guildId;
  let originViewOrOriginLayout;
  user = user.user;
  let animate = !useReducedMotion.useReducedMotion;
  ({ guildId, originViewOrOriginLayout, description } = user);
  if (animate) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  let obj = arg1(dependencyMap[2]);
  obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, computeCardsLayout: null, GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED: null };
  const items = [{ uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, description, accessoryType: "embed" }];
  obj.initialSources = items;
  obj.originViewOrOriginLayout = originViewOrOriginLayout;
  obj.openMediaModal(obj);
};
