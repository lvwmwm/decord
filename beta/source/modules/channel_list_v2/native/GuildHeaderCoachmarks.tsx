// Module ID: 15788
// Function ID: 15789
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4469, 1074, 2042, 21, 504, 15789, 15790, 15792, 12009, 15799, 12000, 12001, 2029, 6806, 11997, 15800, 15801, 15803, 2]
// Exports: default

// Module 15788 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
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
  const obj = guild(mobileBoostProgressBarEnabled[6]);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const obj2 = guild(mobileBoostProgressBarEnabled[7]);
  mobileBoostProgressBarEnabled = obj2.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  let tmp6 = stateFromStores(mobileBoostProgressBarEnabled[8])(guild.id);
  _slicedToArray = tmp6;
  stateFromStores(mobileBoostProgressBarEnabled[9])(guild.id);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  const tmp9 = stateFromStores(mobileBoostProgressBarEnabled[11])();
  const tmp10 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp6];
  const tmp11 = stateFromStores(mobileBoostProgressBarEnabled[13])();
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
  const obj3 = guild(mobileBoostProgressBarEnabled[15]);
  [tmp16, tmp17] = obj3.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj3.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  let tmp19 = false === tmp8;
  const useBoostToUnlockCoachmarkDCF = guild(mobileBoostProgressBarEnabled[16]).useBoostToUnlockCoachmarkDCF;
  guild(mobileBoostProgressBarEnabled[16]);
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
  if (tmp(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[17]), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (tmp(mobileBoostProgressBarEnabled[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[18]), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (tmp(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp23 = null;
    if (null != tmp10) {
      tmp23 = jsx(tmp5(tmp2[19]), { guildId: guild.id, powerup: tmp10, targetRef, markAsDismissed: tmp22 });
    }
    return tmp23;
  } else {
    return null;
  }
};
