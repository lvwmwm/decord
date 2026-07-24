// Module ID: 15034
// Function ID: 114522
// Name: GuildHeaderCoachmarks
// Dependencies: [57, 31, 3758, 653, 1345, 33, 566, 15035, 15036, 15038, 11575, 15045, 11566, 11567, 1334, 5802, 11563, 15046, 15047, 15049, 2]
// Exports: default

// Module 15034 (GuildHeaderCoachmarks)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { DismissibleContentGroupName as closure_7 } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  let guild;
  let targetRef;
  ({ targetRef, guild } = arg0);
  let obj = guild(mobileBoostProgressBarEnabled[6]);
  let items = [_isNativeReflectConstruct];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.can(outer1_6.MANAGE_GUILD, guild), items1);
  let obj1 = guild(mobileBoostProgressBarEnabled[7]);
  mobileBoostProgressBarEnabled = obj1.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const tmp3 = stateFromStores(mobileBoostProgressBarEnabled[8])(guild.id);
  const callback = tmp3;
  stateFromStores(mobileBoostProgressBarEnabled[9])(guild.id);
  const tmp5 = stateFromStores(mobileBoostProgressBarEnabled[10])(guild.id);
  const tmp7 = stateFromStores(mobileBoostProgressBarEnabled[12])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp3];
  const tmp6 = stateFromStores(mobileBoostProgressBarEnabled[11])();
  const memo = React.useMemo(() => {
    const items = [];
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !guild.premiumProgressBarEnabled;
    }
    if (tmp) {
      tmp = mobileBoostProgressBarEnabled;
    }
    if (tmp) {
      items.push(guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
    }
    if (_slicedToArray) {
      items.push(guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp8 = stateFromStores(mobileBoostProgressBarEnabled[13])();
  const tmp10 = callback(guild(mobileBoostProgressBarEnabled[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  const first = tmp10[0];
  const obj3 = guild(mobileBoostProgressBarEnabled[15]);
  let tmp13 = false === tmp5;
  if (tmp13) {
    tmp13 = tmp6;
  }
  if (tmp13) {
    tmp13 = null != tmp7;
  }
  if (tmp13) {
    tmp13 = tmp8;
  }
  const tmp15 = callback(guild(mobileBoostProgressBarEnabled[16]).useBoostToUnlockCoachmarkDCF(tmp13, guild.id, constants.GUILD_HEADER_TOOLTIPS), 2);
  let first1 = tmp15[0];
  if (null != first) {
    first1 = first;
  }
  if (guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first1) {
    obj = { targetRef, guild, markAsDismissed: tmp12 };
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[17]), { targetRef, guild, markAsDismissed: tmp12 });
  } else if (guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first1) {
    obj = { guildId: guild.id, targetRef, markAsDismissed: tmp12 };
    return jsx(stateFromStores(mobileBoostProgressBarEnabled[18]), { guildId: guild.id, targetRef, markAsDismissed: tmp12 });
  } else if (guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first1) {
    let tmp19 = null;
    if (null != tmp7) {
      obj1 = { guildId: guild.id, powerup: tmp7, targetRef, markAsDismissed: tmp15[1] };
      tmp19 = jsx(stateFromStores(mobileBoostProgressBarEnabled[19]), { guildId: guild.id, powerup: tmp7, targetRef, markAsDismissed: tmp15[1] });
    }
    return tmp19;
  } else {
    return null;
  }
  const obj4 = guild(mobileBoostProgressBarEnabled[16]);
};
