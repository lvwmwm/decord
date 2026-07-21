// Module ID: 14705
// Function ID: 110969
// Name: GuildsBarGuildJoinRequestBadge
// Dependencies: []
// Exports: default

// Module 14705 (GuildsBarGuildJoinRequestBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.badgeImageContainer = obj;
obj.badgeImage = { opacity: arg1(dependencyMap[5]).DARK_1_LIGHT_08 };
let closure_5 = obj.createStyles(obj);
const obj1 = { opacity: arg1(dependencyMap[5]).DARK_1_LIGHT_08 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = callback();
  if (arg1(dependencyMap[6]).GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp6 = importDefault(dependencyMap[7]);
  } else if (arg1(dependencyMap[6]).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp6 = importDefault(dependencyMap[8]);
  } else if (arg1(dependencyMap[6]).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp6 = importDefault(dependencyMap[9]);
  } else {
    tmp6 = null;
    if (arg1(dependencyMap[6]).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp6 = importDefault(dependencyMap[10]);
    }
  }
  let tmp15 = null;
  if (null != tmp6) {
    let obj = { pointerEvents: "none" };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    obj = { source: tmp6, style: tmp.badgeImage };
    obj.children = jsx(importDefault(dependencyMap[11]), obj);
    tmp15 = <View {...obj} />;
  }
  return tmp15;
};
