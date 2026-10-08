// Module ID: 16380
// Function ID: 16381
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4707, 1085, 2060, 21, 558, 576, 504, 16381, 16383, 12264, 16390, 12257, 12258, 2048, 7090, 12254, 16391, 16392, 16394, 2]

// Module 16380 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12257 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12264 */;
import useShouldShowGuildThemeMemberCoachmarkDefault from "useShouldShowGuildThemeMemberCoachmark" /* 16381 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 16383 */;
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "useIsCurrentUserEligibleForPowerupUpsells" /* 16390 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildHeaderCoachmarks(arg0) {
  let first;
  let guild;
  let targetRef;
  let tmp6;
  let tmp7;
  const obj = guild(576);
  const cResult = obj.c(21);
  ({ targetRef, guild } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = C;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = C;
  } else {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = useShouldShowGuildThemeMemberCoachmarkDefault(guild.id);
  useGuildThemeNuxTriggerDefault(guild.id);
  useHasAllocateBoostPermissionDefault(guild.id);
  useIsCurrentUserEligibleForPowerupUpsellsDefault();
  useBoostToUnlockFeaturedPowerupDefault(guild.id);
  if (cResult[4] === stateFromStores) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
  }
  const items2 = [];
  const tmp14 = stateFromStores && !guild.premiumProgressBarEnabled;
  if (tmp14) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp15(guild(2048).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
  }
  if (tmp9) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp17(guild(2048).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
  }
  cResult[4] = stateFromStores;
  cResult[5] = guild.premiumProgressBarEnabled;
  cResult[6] = tmp9;
  cResult[7] = items2;
}) : (function GuildHeaderCoachmarks(arg0) {
  let closure_2;
  let first;
  let guild;
  let targetRef;
  let tmp15;
  let tmp16;
  ({ targetRef, guild } = arg0);
  let tmp = guild;
  let items = [PermissionStore];
  const items1 = [guild];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(16381)(guild.id);
  dependencyMap = tmp5;
  let tmp6 = stateFromStores(16383)(guild.id);
  const tmp7 = stateFromStores(12264)(guild.id);
  const tmp8 = stateFromStores(16390)();
  const tmp9 = stateFromStores(12257)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp10 = stateFromStores(12258)();
  const memo = react.useMemo(() => {
    const items = [];
    const tmp = stateFromStores && !guild.premiumProgressBarEnabled;
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    const tmp6 = closure_2;
    if (tmp6) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const obj2 = guild(7090);
  [tmp15, tmp16] = obj2.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  let tmp18 = false === tmp7;
  const useBoostToUnlockCoachmarkDCF = guild(12254).useBoostToUnlockCoachmarkDCF;
  guild(12254);
  const tmp12 = constants;
  const tmp13 = _slicedToArray;
  if (tmp18) {
    tmp18 = tmp8;
  }
  if (tmp18) {
    tmp18 = null != tmp9;
  }
  if (tmp18) {
    tmp18 = tmp10;
  }
  const tmp13Result = tmp13(useBoostToUnlockCoachmarkDCF(tmp18, guild.id, tmp12.GUILD_HEADER_TOOLTIPS), 2);
  const tmp21 = tmp13Result[1];
  if (first == null) {
    first = tmp13Result[0];
  }
  if (tmp(2048).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(16391), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (tmp(2048).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(16392), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (tmp(2048).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp22 = null;
    if (null != tmp9) {
      tmp22 = jsx(tmp4(16394), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
    }
    return tmp22;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default tmp2;
