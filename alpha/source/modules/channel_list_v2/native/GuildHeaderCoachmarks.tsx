// Module ID: 17675
// Function ID: 17676
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4845, 1071, 4759, 21, 504, 17676, 13402, 17683, 13395, 13396, 4746, 9080, 13392, 17684, 17685, 2]
// Exports: default

// Module 17675 (GuildHeaderCoachmarks)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  let first;
  let guild;
  let targetRef;
  let tmp14;
  let tmp15;
  ({ targetRef, guild } = arg0);
  let tmp = guild;
  let items = [PermissionStore];
  const items1 = [guild];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  stateFromStores(17676)(guild.id);
  const tmp6 = stateFromStores(13402)(guild.id);
  const tmp7 = stateFromStores(17683)();
  const tmp8 = stateFromStores(13395)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled];
  const tmp9 = stateFromStores(13396)();
  const memo = react.useMemo(() => {
    const items = [];
    const tmp = stateFromStores && !guild.premiumProgressBarEnabled;
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    return items;
  }, items2);
  const obj2 = guild(9080);
  const obj3 = { groupName: constants.GUILD_HEADER_TOOLTIPS };
  [tmp14, tmp15] = obj2.useSelectedDismissibleContent(memo, obj3);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo, obj3), 2);
  let tmp17 = false === tmp6;
  const useBoostToUnlockCoachmarkDCF = guild(13392).useBoostToUnlockCoachmarkDCF;
  guild(13392);
  const tmp11 = constants;
  const tmp12 = _slicedToArray;
  if (tmp17) {
    tmp17 = tmp7;
  }
  if (tmp17) {
    tmp17 = null != tmp8;
  }
  if (tmp17) {
    tmp17 = tmp9;
  }
  const tmp12Result = tmp12(useBoostToUnlockCoachmarkDCF(tmp17, guild.id, tmp11.GUILD_HEADER_TOOLTIPS), 2);
  const tmp20 = tmp12Result[1];
  if (first == null) {
    first = tmp12Result[0];
  }
  if (tmp(4746).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    return jsx(stateFromStores(17684), { targetRef, guild, markAsDismissed: tmp15 });
  } else if (tmp(4746).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp21 = null;
    if (null != tmp8) {
      tmp21 = jsx(tmp4(17685), { guildId: guild.id, powerup: tmp8, targetRef, markAsDismissed: tmp20 });
    }
    return tmp21;
  } else {
    return null;
  }
};
