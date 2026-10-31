// Module ID: 14069
// Function ID: 14070
// Name: useGuildPowerupsNewBadge
// Dependencies: [32, 19, 5229, 5230, 4860, 4847, 504, 14064, 7569, 4848, 2]
// Exports: default, useAutoDismissGuildPowerupsNewBadge

// Module 14069 (useGuildPowerupsNewBadge)
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4848 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5230 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 14064 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5229 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const f105743 = () => stateForGuild.getStateForGuild(closure_0);
const constants = GuildPowerupsConstants.GuildPowerupNewPerkMarketingVersion;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_8 = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(arg0) {
  let closure_0;
  let closure_1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  importDefault = undefined;
  _require = arg0;
  let tmp2 = dependencyMap;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f105743);
  const tmp4 = useGuildPowerupNewPerkMarketingVersionDefault;
  const tmp4Result = tmp4(arg0, stateFromStores);
  let num = 0;
  if (tmp4Result >= constants.GUILD_THEME) {
    num = tmp4Result;
  }
  let tmp7 = null;
  const useSelectedVersionedDismissibleContent = tmp(7569).useSelectedVersionedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (num > 0) {
    tmp7 = null;
    if (!flag) {
      tmp7 = closure_8;
    }
  }
  const tmp8 = _slicedToArray(useSelectedVersionedDismissibleContent(tmp7, num), 2);
  _require = tmp9;
  importDefault = tmp10;
  const items1 = [tmp8[0] === closure_8, tmp8[1]];
  const obj2 = {
    showNewBadgeOnRow: tmp8[0] === closure_8,
    dismissNewBadgeIfShown: react.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
      }
      const tmp2 = closure_1;
      if (tmp2) {
        closure_0(TAKE_ACTION);
      }
    }, items1)
  };
  return obj2;
};
export function useAutoDismissGuildPowerupsNewBadge(guildId) {
  let num;
  let stateForGuild;
  _require = guildId;
  let obj = require("get initialized");
  const items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, f105743);
  const tmp2 = num(14064);
  const tmp2Result = tmp2(guildId, stateFromStores);
  num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  const items1 = [num, guildId];
  const effect = react.useEffect(() => {
    if (num > 0) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const obj = DismissibleContentUtils;
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj2);
    }
  }, items1);
}
