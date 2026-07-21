// Module ID: 8266
// Function ID: 65213
// Name: openUserProfileAvatarMediaViewer
// Dependencies: []
// Exports: default

// Module 8266 (openUserProfileAvatarMediaViewer)
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
  obj = { id: "isArray", src: "resolve", forceScriptReload: "title", initialPosition: "r", initialKeyboardState: "isArray", isScrollablePositionLocked: "__d", "Bool(false)": "s", "Bool(false)": "withTiming" };
  const items = [{ uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, description, accessoryType: "embed" }];
  obj.initialSources = items;
  obj.originViewOrOriginLayout = originViewOrOriginLayout;
  obj.openMediaModal(obj);
};
