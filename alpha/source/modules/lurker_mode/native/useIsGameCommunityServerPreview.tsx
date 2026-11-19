// Module ID: 17673
// Function ID: 17674
// Name: useIsGameCommunityServerPreview
// Dependencies: [4725, 1072, 504, 2]
// Exports: default, isGameCommunityServerPreview

// Module 17673 (useIsGameCommunityServerPreview)
import Constants from "Constants" /* 1072 */;
import LurkingStore from "LurkingStore" /* 4725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const JoinGuildSources = Constants.JoinGuildSources;
const result = size.fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default function useIsGameCommunityServerPreview(arg0) {
  let closure_0;
  _require = arg0;
  const items = [LurkingStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_0);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
  }, items1);
};
export function isGameCommunityServerPreview(id) {
  const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(id);
  let type;
  if (lurkingSourceForGuild != null) {
    type = lurkingSourceForGuild.type;
  }
  return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
}
