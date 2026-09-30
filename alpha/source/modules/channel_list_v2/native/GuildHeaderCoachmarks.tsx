// Module ID: 15988
// Function ID: 15989
// Name: GuildHeaderCoachmarks
// Dependencies: [32, 19, 4499, 1074, 2042, 21, 504, 15989, 15991, 12212, 15998, 12205, 12206, 2029, 7002, 12202, 15999, 16000, 16002, 2]
// Exports: default

// Module 15988 (GuildHeaderCoachmarks)
import dismissible_content from "dismissible_content" /* 2029 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4499 */;

require = fn;
const Permissions = fn(1074).Permissions;
const constants = fn(2042).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  ({ targetRef, guild } = arg0);
  let items = [PermissionStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_GUILD, guild), items1);
  const tmp5 = stateFromStores(15989)(guild.id);
  dependencyMap = tmp5;
  stateFromStores(15991)(guild.id);
  const obj = guild(504);
  const tmp7 = stateFromStores(12212)(guild.id);
  const tmp9 = stateFromStores(12205)(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
  const tmp8 = stateFromStores(15998)();
  const memo = noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    const items = [];
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (closure_2) {
      items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp10 = stateFromStores(12206)();
  const obj2 = guild(7002);
  const tmp12 = constants;
  const tmp13 = _slicedToArray;
  [tmp15, tmp16] = guild(7002).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
  const tmp14 = _slicedToArray(guild(7002).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  let tmp17 = false === tmp7;
  if (tmp17) {
    tmp17 = tmp8;
  }
  if (tmp17) {
    tmp17 = null != tmp9;
  }
  if (tmp17) {
    tmp17 = tmp10;
  }
  const tmp13Result = tmp13(guild(12202).useBoostToUnlockCoachmarkDCF(tmp17, guild.id, tmp12.GUILD_HEADER_TOOLTIPS), 2);
  if (first == null) {
    first = tmp13Result[0];
  }
  if (guild(2029).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
    const obj4 = { targetRef, guild, markAsDismissed: tmp16 };
    return jsx(tmp4(15999), { targetRef, guild, markAsDismissed: tmp16 });
  } else if (tmp(2029).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
    const obj5 = { guildId: guild.id, targetRef, markAsDismissed: tmp16 };
    return jsx(tmp4(16000), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
  } else if (tmp(2029).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
    let tmp20 = null;
    if (null != tmp9) {
      const obj6 = { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] };
      tmp20 = jsx(tmp4(16002), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] });
    }
    return tmp20;
  } else {
    return null;
  }
  const obj3 = guild(12202);
};
