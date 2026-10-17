// Module ID: 17280
// Function ID: 17281
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4845, 1087, 2065, 21, 558, 576, 504, 17281, 17283, 13194, 17290, 13187, 13188, 2052, 7376, 13184, 17291, 17292, 17294, 2]

// Module 17280 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2065 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 13187 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 13194 */;
import useShouldShowGuildThemeMemberCoachmarkDefault from "useShouldShowGuildThemeMemberCoachmark" /* 17281 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 17283 */;
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "useIsCurrentUserEligibleForPowerupUpsells" /* 17290 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4845 */;
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
  const cResult = obj.c(22);
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
    tmp15(guild(2052).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
  }
  if (tmp9) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp17(guild(2052).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
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
  const tmp5 = stateFromStores(17281)(guild.id);
  dependencyMap = tmp5;
  let tmp6 = stateFromStores(17283)(guild.id);
  const tmp7 = stateFromStores(13194)(guild.id);
  const tmp8 = stateFromStores(17290)();
  const tmp9 = stateFromStores(13187)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp10 = stateFromStores(13188)();
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
  const obj2 = guild(7376);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp15, tmp16] = obj2.useSelectedDismissibleContent(memo, obj3);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo, obj3), 2);
  let tmp18 = false === tmp7;
  const useBoostToUnlockCoachmarkDCF = guild(13184).useBoostToUnlockCoachmarkDCF;
  guild(13184);
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
  if (tmp(2052).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(17291), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (tmp(2052).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(17292), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (tmp(2052).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp22 = null;
    if (null != tmp9) {
      tmp22 = jsx(tmp4(17294), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
    }
    return tmp22;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default tmp2;
