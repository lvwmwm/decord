// Module ID: 16505
// Function ID: 16506
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4431, 1078, 2042, 21, 558, 568, 504, 16506, 16507, 16509, 12712, 16516, 12703, 12704, 2031, 7664, 12700, 16517, 16518, 16520, 2]

// Module 16505 (GuildHeaderCoachmarks)
import dismissible_content from "dismissible_content" /* 2031 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12703 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12712 */;
import useShouldShowGuildThemeMemberCoachmarkDefault from "useShouldShowGuildThemeMemberCoachmark" /* 16507 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 16509 */;
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "useIsCurrentUserEligibleForPowerupUpsells" /* 16516 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4431 */;

require = fn;
const Permissions = fn(1078).Permissions;
const constants = fn(2042).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guild(568).c(22);
  ({ targetRef, guild } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    const tmp6 = C;
  } else {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp7 = cResult[3];
  }
  const obj = guild(568);
  const stateFromStores = guild(504).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = guild(504);
  const mobileBoostProgressBarEnabled = guild(16506).useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const tmp10 = useShouldShowGuildThemeMemberCoachmarkDefault(guild.id);
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
  if (stateFromStores) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
  }
  if (stateFromStores) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
  }
  const items2 = [];
  if (stateFromStores) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp16(tmp(2031).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
  }
  if (tmp10) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp18(tmp(2031).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
  }
  cResult[4] = stateFromStores;
  cResult[5] = guild.premiumProgressBarEnabled;
  cResult[6] = mobileBoostProgressBarEnabled;
  cResult[7] = tmp10;
  cResult[8] = items2;
}) : ((arg0) => {
  ({ targetRef, guild } = arg0);
  let mobileBoostProgressBarEnabled;
  let items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = guild(mobileBoostProgressBarEnabled[8]).useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const obj = guild(mobileBoostProgressBarEnabled[8]);
  mobileBoostProgressBarEnabled = guild(mobileBoostProgressBarEnabled[9]).useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const tmp6 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  _slicedToArray = tmp6;
  stateFromStores(mobileBoostProgressBarEnabled[11])(guild.id);
  const obj2 = guild(mobileBoostProgressBarEnabled[9]);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const tmp10 = stateFromStores(mobileBoostProgressBarEnabled[14])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp6];
  const tmp9 = stateFromStores(mobileBoostProgressBarEnabled[13])();
  const memo = noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    if (tmp) {
      tmp = mobileBoostProgressBarEnabled;
    }
    const items = [];
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (closure_3) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp11 = stateFromStores(mobileBoostProgressBarEnabled[15])();
  const obj3 = guild(mobileBoostProgressBarEnabled[17]);
  const tmp13 = constants;
  const tmp14 = _slicedToArray;
  [tmp16, tmp17] = guild(mobileBoostProgressBarEnabled[17]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
  const tmp15 = _slicedToArray(guild(mobileBoostProgressBarEnabled[17]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  let tmp18 = false === tmp8;
  if (tmp18) {
    tmp18 = tmp9;
  }
  if (tmp18) {
    tmp18 = null != tmp10;
  }
  if (tmp18) {
    tmp18 = tmp11;
  }
  const tmp14Result = tmp14(guild(mobileBoostProgressBarEnabled[18]).useBoostToUnlockCoachmarkDCF(tmp18, guild.id, tmp13.GUILD_HEADER_TOOLTIPS), 2);
  if (first == null) {
    first = tmp14Result[0];
  }
  if (guild(mobileBoostProgressBarEnabled[16]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    const obj5 = { targetRef, guild, markAsDismissed: tmp17 };
    return jsx(tmp5(tmp2[19]), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (tmp(tmp2[16]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    const obj6 = { guildId: guild.id, targetRef, markAsDismissed: tmp17 };
    return jsx(tmp5(tmp2[20]), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (tmp(tmp2[16]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp21 = null;
    if (null != tmp10) {
      const obj7 = { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp14Result[1] };
      tmp21 = jsx(tmp5(tmp2[21]), { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp14Result[1] });
    }
    return tmp21;
  } else {
    return null;
  }
  const obj4 = guild(mobileBoostProgressBarEnabled[18]);
});
