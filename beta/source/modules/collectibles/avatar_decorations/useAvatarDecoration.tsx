// Module ID: 8490
// Function ID: 8491
// Name: useAvatarDecoration
// Dependencies: [32, 2109, 558, 568, 565, 2]
// Exports: getAvatarDecoration

// Module 8490 (useAvatarDecoration)
import _slicedToArray from "module_32" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function getAvatarDecoration(user, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildMemberStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != user) {
      member = first.getMember(guildId, user.id);
    }
  }
  let avatarDecoration;
  if (member != null) {
    avatarDecoration = member.avatarDecoration;
  }
  if (avatarDecoration == null) {
    let avatarDecoration1;
    if (user != null) {
      avatarDecoration1 = user.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  }
  return avatarDecoration;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    return require("useStateFromStores").useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const items = [GuildMemberStore];
    const first = _slicedToArray(items, 1)[0];
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = first.getMember(closure_1, tmp.id);
      }
    }
    let avatarDecoration;
    if (member != null) {
      avatarDecoration = member.avatarDecoration;
    }
    if (avatarDecoration == null) {
      let avatarDecoration1;
      if (tmp != null) {
        avatarDecoration1 = tmp.avatarDecoration;
      }
      avatarDecoration = avatarDecoration1;
    }
    return avatarDecoration;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let items = [GuildMemberStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const items = [GuildMemberStore];
    const first = _slicedToArray(items, 1)[0];
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = first.getMember(closure_1, tmp.id);
      }
    }
    let avatarDecoration;
    if (member != null) {
      avatarDecoration = member.avatarDecoration;
    }
    if (avatarDecoration == null) {
      let avatarDecoration1;
      if (tmp != null) {
        avatarDecoration1 = tmp.avatarDecoration;
      }
      avatarDecoration = avatarDecoration1;
    }
    return avatarDecoration;
  });
});
export { getAvatarDecoration };
