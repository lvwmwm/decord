// Module ID: 11572
// Function ID: 90126
// Name: useBadgeableMarketingVersion
// Dependencies: [57, 31, 4017, 4018, 1345, 1334, 566, 11565, 5802, 1336, 2]
// Exports: default, useAutoDismissGuildPowerupsNewBadge

// Module 11572 (useBadgeableMarketingVersion)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "BoostedGuildTiers";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
function useBadgeableMarketingVersion(guildId) {
  const _require = guildId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getStateForGuild(closure_0));
  let tmp3;
  const obj = _require(566);
  if (null != stateFromStores) {
    tmp3 = stateFromStores;
  }
  const tmp2Result = importDefault(11565)(guildId, tmp3);
  let num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  return num;
}
let closure_8 = require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let _require;
  let c1;
  const tmp = useBadgeableMarketingVersion(guildId);
  let obj = _require(5802);
  let tmp2 = null;
  if (tmp > 0) {
    tmp2 = null;
    if (!flag) {
      tmp2 = closure_8;
    }
  }
  const tmp3 = callback(obj.useSelectedVersionedDismissibleContent(tmp2, tmp), 2);
  _require = tmp4;
  c1 = tmp5;
  const items = [tmp3[0] === closure_8, tmp3[1]];
  obj = {
    showNewBadgeOnRow: tmp5,
    dismissNewBadgeIfShown: React.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = outer1_7.TAKE_ACTION;
      }
      if (c1) {
        _undefined(TAKE_ACTION);
      }
    }, items)
  };
  return obj;
};
export const useAutoDismissGuildPowerupsNewBadge = function useAutoDismissGuildPowerupsNewBadge(guildId) {
  let closure_0 = guildId;
  const tmp = useBadgeableMarketingVersion(guildId);
  const importDefault = tmp;
  const items = [tmp, guildId];
  const effect = React.useEffect(() => {
    if (closure_1 > 0) {
      let obj = guildId(outer1_2[9]);
      obj = { dismissAction: outer1_7.AUTO_DISMISS, guildId };
      const result = obj.markVersionedDismissibleContentAsDismissed(outer1_8, closure_1, obj);
    }
  }, items);
};
