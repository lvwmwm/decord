// Module ID: 15787
// Function ID: 15788
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4472, 1086, 2048, 21, 558, 576, 504, 15788, 15789, 15791, 11917, 15798, 11908, 11909, 2035, 6807, 11905, 15799, 15800, 15802, 2]

// Module 15787 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1086 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 11908 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11917 */;
import useShouldShowGuildThemeMemberCoachmarkDefault from "useShouldShowGuildThemeMemberCoachmark" /* 15789 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 15791 */;
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "useIsCurrentUserEligibleForPowerupUpsells" /* 15798 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const tmpResult2 = guild(15788);
  const mobileBoostProgressBarEnabled = tmpResult2.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
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
  const items2 = [];
  const tmp15 = stateFromStores && !guild.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
  if (tmp15) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp16(guild(2035).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
  }
  if (tmp10) {
    class C {
      constructor() {
        return closure_5.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    tmp18(guild(2035).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
  }
  cResult[4] = stateFromStores;
  cResult[5] = guild.premiumProgressBarEnabled;
  cResult[6] = mobileBoostProgressBarEnabled;
  cResult[7] = tmp10;
  cResult[8] = items2;
}) : ((arg0) => {
  let closure_3;
  let first;
  let guild;
  let targetRef;
  let tmp16;
  let tmp17;
  ({ targetRef, guild } = arg0);
  let mobileBoostProgressBarEnabled;
  let tmp = guild;
  let items = [PermissionStore];
  const items1 = [guild];
  const obj = guild(mobileBoostProgressBarEnabled[8]);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const obj2 = guild(mobileBoostProgressBarEnabled[9]);
  mobileBoostProgressBarEnabled = obj2.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  let tmp6 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  _slicedToArray = tmp6;
  stateFromStores(mobileBoostProgressBarEnabled[11])(guild.id);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const tmp9 = stateFromStores(mobileBoostProgressBarEnabled[13])();
  const tmp10 = stateFromStores(mobileBoostProgressBarEnabled[14])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp6];
  const tmp11 = stateFromStores(mobileBoostProgressBarEnabled[15])();
  const memo = react.useMemo(() => {
    const items = [];
    const tmp = stateFromStores && !guild.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    const tmp6 = closure_3;
    if (tmp6) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const obj3 = guild(mobileBoostProgressBarEnabled[17]);
  [tmp16, tmp17] = obj3.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj3.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  let tmp19 = false === tmp8;
  const useBoostToUnlockCoachmarkDCF = guild(mobileBoostProgressBarEnabled[18]).useBoostToUnlockCoachmarkDCF;
  guild(mobileBoostProgressBarEnabled[18]);
  const tmp13 = constants;
  const tmp14 = _slicedToArray;
  if (tmp19) {
    tmp19 = tmp9;
  }
  if (tmp19) {
    tmp19 = null != tmp10;
  }
  if (tmp19) {
    tmp19 = tmp11;
  }
  const tmp14Result = tmp14(useBoostToUnlockCoachmarkDCF(tmp19, guild.id, tmp13.GUILD_HEADER_TOOLTIPS), 2);
  const tmp22 = tmp14Result[1];
  if (first == null) {
    first = tmp14Result[0];
  }
  if (tmp(mobileBoostProgressBarEnabled[16]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[19]), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (tmp(mobileBoostProgressBarEnabled[16]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[20]), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (tmp(mobileBoostProgressBarEnabled[16]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp23 = null;
    if (null != tmp10) {
      tmp23 = jsx(tmp5(tmp2[21]), { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp22 });
    }
    return tmp23;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default tmp2;
