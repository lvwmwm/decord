// Module ID: 18577
// Function ID: 18578
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 5074, 1072, 4988, 21, 504, 18578, 18580, 14356, 18587, 14349, 14350, 8545, 4975, 7644, 14342, 18588, 18589, 18591, 2]
// Exports: default

// Module 18577 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import dismissible_content from "dismissible_content" /* 4975 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4988 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5074 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  let closure_2;
  let first;
  let guild;
  let targetRef;
  let tmp16;
  let tmp17;
  ({ targetRef, guild } = arg0);
  let tmp = guild;
  let items = [PermissionStore];
  const items1 = [guild];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(18578)(guild.id);
  dependencyMap = tmp5;
  let tmp6 = stateFromStores(18580)(guild.id);
  const tmp7 = stateFromStores(14356)(guild.id);
  const tmp8 = stateFromStores(18587)();
  const tmp9 = stateFromStores(14349)(guild.id);
  let num = 0;
  const tmp10 = stateFromStores(14350)();
  if (null != tmp9) {
    num = tmp9.cost - tmp11;
  }
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
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
  const obj2 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  const tmpResult = tmp(7644);
  [tmp16, tmp17] = tmpResult.useSelectedDismissibleContent(memo, obj2);
  _slicedToArray(tmpResult.useSelectedDismissibleContent(memo, obj2), 2);
  let tmp19 = false === tmp7;
  const useBoostToUnlockCoachmarkDCF = tmp(14342).useBoostToUnlockCoachmarkDCF;
  tmp(14342);
  const tmp13 = constants;
  const tmp14 = _slicedToArray;
  if (tmp19) {
    tmp19 = tmp8;
  }
  if (tmp19) {
    tmp19 = null != tmp9;
  }
  if (tmp19) {
    tmp19 = tmp10;
  }
  const tmp14Result = tmp14(useBoostToUnlockCoachmarkDCF(tmp19, guild.id, num, tmp13.GUILD_HEADER_TOOLTIPS), 2);
  const tmp21 = tmp14Result[1];
  if (first == null) {
    first = tmp14Result[0];
  }
  if (tmp(4975).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(18588), { targetRef, guild, markAsDismissed: tmp17 });
  } else if (tmp(4975).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(18589), { guildId: guild.id, targetRef, markAsDismissed: tmp17 });
  } else if (tmp(4975).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp22 = null;
    if (null != tmp9) {
      tmp22 = jsx(tmp4(18591), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
    }
    return tmp22;
  } else {
    return null;
  }
};
