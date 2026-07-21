// Module ID: 11531
// Function ID: 89819
// Name: useBadgeableMarketingVersion
// Dependencies: [4096, 11540, 1934, 2, 27, 4120, 4017, 4016, 33, 4126, 689]
// Exports: default, useAutoDismissGuildPowerupsNewBadge

// Module 11531 (useBadgeableMarketingVersion)
import showActionSheet from "showActionSheet";
import GuildPowerupsBottomSheetHeader from "GuildPowerupsBottomSheetHeader";
import maybeLoadBundle from "maybeLoadBundle";
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "result2";
import { ContentDismissActionType } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function useBadgeableMarketingVersion(guildId) {
  const arg1 = guildId;
  const items = [maybeLoadBundle];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  let tmp3;
  const obj = arg1(dependencyMap[6]);
  if (null != stateFromStores) {
    tmp3 = stateFromStores;
  }
  const tmp2Result = importDefault(dependencyMap[7])(guildId, tmp3);
  let num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  return num;
}
let closure_8 = require("_isNativeReflectConstruct").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let arg1;
  let importDefault;
  const tmp = useBadgeableMarketingVersion(guildId);
  let obj = arg1(dependencyMap[8]);
  let tmp2 = null;
  if (tmp > 0) {
    tmp2 = null;
    if (!flag) {
      tmp2 = closure_8;
    }
  }
  const tmp3 = callback(obj.useSelectedVersionedDismissibleContent(tmp2, tmp), 2);
  arg1 = tmp4;
  importDefault = tmp5;
  const items = [tmp3[0] === closure_8, tmp3[1]];
  obj = {
    showNewBadgeOnRow: tmp5,
    dismissNewBadgeIfShown: React.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = constants.TAKE_ACTION;
      }
      if (tmp5) {
        tmp4(TAKE_ACTION);
      }
    }, items)
  };
  return obj;
};
export const useAutoDismissGuildPowerupsNewBadge = function useAutoDismissGuildPowerupsNewBadge(guildId) {
  const arg1 = guildId;
  const tmp = useBadgeableMarketingVersion(guildId);
  const importDefault = tmp;
  const items = [tmp, guildId];
  const effect = React.useEffect(() => {
    if (tmp > 0) {
      let obj = arg0(closure_2[9]);
      obj = { dismissAction: constants.AUTO_DISMISS, guildId: arg0 };
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj);
    }
  }, items);
};
