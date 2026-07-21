// Module ID: 14863
// Function ID: 111990
// Name: GuildHeaderCoachmarks
// Dependencies: []
// Exports: default

// Module 14863 (GuildHeaderCoachmarks)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
let closure_7 = arg1(dependencyMap[4]).DismissibleContentGroupName;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default function GuildHeaderCoachmarks(arg0) {
  let guild;
  let targetRef;
  ({ targetRef, guild } = arg0);
  const arg1 = guild;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.can(constants.MANAGE_GUILD, guild), items1);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  const mobileBoostProgressBarEnabled = obj1.useMobileBoostProgressBarEnabled("GuildHeaderCoachmarks");
  const dependencyMap = mobileBoostProgressBarEnabled;
  const tmp3 = importDefault(dependencyMap[8])(guild.id);
  const callback = tmp3;
  importDefault(dependencyMap[9])(guild.id);
  const tmp5 = importDefault(dependencyMap[10])(guild.id);
  const tmp7 = importDefault(dependencyMap[12])(guild.id);
  const items2 = [stateFromStores, guild.premiumProgressBarEnabled, mobileBoostProgressBarEnabled, tmp3];
  const tmp6 = importDefault(dependencyMap[11])();
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
      const tmp3 = guild;
    }
    if (tmp3) {
      items.push(guild(mobileBoostProgressBarEnabled[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
    }
    return items;
  }, items2);
  const tmp8 = importDefault(dependencyMap[13])();
  const tmp10 = callback(arg1(dependencyMap[15]).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
  const first = tmp10[0];
  const obj3 = arg1(dependencyMap[15]);
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
  const tmp15 = callback(arg1(dependencyMap[16]).useBoostToUnlockCoachmarkDCF(tmp13, guild.id, constants.GUILD_HEADER_TOOLTIPS), 2);
  let first1 = tmp15[0];
  if (null != first) {
    first1 = first;
  }
  if (arg1(dependencyMap[14]).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first1) {
    obj = { targetRef, guild, markAsDismissed: tmp12 };
    return jsx(importDefault(dependencyMap[17]), obj);
  } else if (arg1(dependencyMap[14]).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first1) {
    obj = { guildId: guild.id, targetRef, markAsDismissed: tmp12 };
    return jsx(importDefault(dependencyMap[18]), obj);
  } else if (arg1(dependencyMap[14]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first1) {
    let tmp19 = null;
    if (null != tmp7) {
      obj1 = { guildId: guild.id, powerup: tmp7, targetRef, markAsDismissed: tmp15[1] };
      tmp19 = jsx(importDefault(dependencyMap[19]), obj1);
    }
    return tmp19;
  } else {
    return null;
  }
  const obj4 = arg1(dependencyMap[16]);
};
