// Module ID: 16454
// Function ID: 16455
// Name: useIsGameCommunityServerPreview
// Dependencies: [4397, 1074, 504, 2]
// Exports: default, isGameCommunityServerPreview

// Module 16454 (useIsGameCommunityServerPreview)
import LurkingStore from "LurkingStore" /* 4397 */;

const require = globalThis.__r;

const require = fn;
const JoinGuildSources = fn(1074).JoinGuildSources;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default function useIsGameCommunityServerPreview(arg0) {
  _require = arg0;
  const items = [LurkingStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_0);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
  }, items1);
};
export const isGameCommunityServerPreview = function isGameCommunityServerPreview(id) {
  const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(id);
  let type;
  if (lurkingSourceForGuild != null) {
    type = lurkingSourceForGuild.type;
  }
  return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
};
