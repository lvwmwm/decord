// Module ID: 15276
// Function ID: 15277
// Name: useIsGameCommunityServerPreview
// Dependencies: [3949, 676, 589, 2]
// Exports: default

// Module 15276 (useIsGameCommunityServerPreview)
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
