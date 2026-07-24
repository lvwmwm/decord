// Module ID: 11446
// Function ID: 89034
// Name: useIsHubForGuild
// Dependencies: [1838, 653, 566, 2]
// Exports: default

// Module 11446 (useIsHubForGuild)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_2.getGuild(closure_0);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(outer1_3.HUB);
      }
      return null != hasItem && hasItem;
    }
  }, items1);
};
