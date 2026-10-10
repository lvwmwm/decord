// Module ID: 16569
// Function ID: 16570
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4750, 1085, 2062, 21, 558, 576, 504, 16570, 16572, 12247, 16579, 12240, 12241, 2049, 7099, 12237, 16580, 16581, 16583, 2]

// Module 16569 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12240 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12247 */;
import useShouldShowGuildThemeMemberCoachmarkDefault from "useShouldShowGuildThemeMemberCoachmark" /* 16570 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 16572 */;
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "useIsCurrentUserEligibleForPowerupUpsells" /* 16579 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
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
    tmp15(guild(2049).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
  }
  if (tmp9) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp17(guild(2049).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
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
  const tmp5 = stateFromStores(16570)(guild.id);
  dependencyMap = tmp5;
  let tmp6 = stateFromStores(16572)(guild.id);
  const tmp7 = stateFromStores(12247)(guild.id);
  const tmp8 = stateFromStores(16579)();
  const tmp9 = stateFromStores(12240)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp10 = stateFromStores(12241)();
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
  const obj2 = guild(7099);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp15, tmp16] = obj2.useSelectedDismissibleContent(memo, obj3);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo, obj3), 2);
  let tmp18 = false === tmp7;
  const useBoostToUnlockCoachmarkDCF = guild(12237).useBoostToUnlockCoachmarkDCF;
  guild(12237);
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
  if (tmp(2049).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(16580), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (tmp(2049).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(16581), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (tmp(2049).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp22 = null;
    if (null != tmp9) {
      tmp22 = jsx(tmp4(16583), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
    }
    return tmp22;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default tmp2;
