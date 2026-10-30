// Module ID: 18160
// Function ID: 18161
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4941, 1072, 4855, 21, 504, 18161, 18163, 14037, 18170, 14030, 14031, 4842, 7563, 14027, 18171, 18172, 18174, 2]
// Exports: default

// Module 18160 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
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
  let tmp15;
  let tmp16;
  ({ targetRef, guild } = arg0);
  let tmp = guild;
  let items = [PermissionStore];
  const items1 = [guild];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(18161)(guild.id);
  dependencyMap = tmp5;
  let tmp6 = stateFromStores(18163)(guild.id);
  const tmp7 = stateFromStores(14037)(guild.id);
  const tmp8 = stateFromStores(18170)();
  const tmp9 = stateFromStores(14030)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp10 = stateFromStores(14031)();
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
  const obj2 = guild(7563);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp15, tmp16] = obj2.useSelectedDismissibleContent(memo, obj3);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo, obj3), 2);
  let tmp18 = false === tmp7;
  const useBoostToUnlockCoachmarkDCF = guild(14027).useBoostToUnlockCoachmarkDCF;
  guild(14027);
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
  if (tmp(4842).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(18171), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (tmp(4842).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    return jsx(stateFromStores(18172), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (tmp(4842).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp22 = null;
    if (null != tmp9) {
      tmp22 = jsx(tmp4(18174), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
    }
    return tmp22;
  } else {
    return null;
  }
};
