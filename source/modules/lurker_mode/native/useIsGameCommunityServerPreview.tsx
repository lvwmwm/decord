// Module ID: 15367
// Function ID: 15368
// Name: useIsGameCommunityServerPreview
// Dependencies: [4022, 676, 589, 2]
// Exports: default, isGameCommunityServerPreview

// Module 15367 (useIsGameCommunityServerPreview)
import initialize from "initialize";
import { JoinGuildSources } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default function useIsGameCommunityServerPreview(arg0) {
  const _require = arg0;
  const items = [initialize];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const lurkingSourceForGuild = outer1_2.getLurkingSourceForGuild(closure_0);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    return type === outer1_3.GAME_COMMUNITY_UPSELL;
  }, items1);
};
export const isGameCommunityServerPreview = function isGameCommunityServerPreview(id) {
  lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(id);
  let type;
  if (lurkingSourceForGuild != null) {
    type = lurkingSourceForGuild.type;
  }
  return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
};
