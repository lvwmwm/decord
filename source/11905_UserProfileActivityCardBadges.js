// Module ID: 11905
// Function ID: 92178
// Name: UserProfileActivityCardBadges
// Dependencies: []
// Exports: default

// Module 11905 (UserProfileActivityCardBadges)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ActivityTypes = arg1(dependencyMap[2]).ActivityTypes;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  const arg1 = activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [arg1(dependencyMap[4]).PartyBadge, arg1(dependencyMap[4]).TimestampBadge];
    let items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [arg1(dependencyMap[4]).TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [arg1(dependencyMap[4]).TimestampBadge, arg1(dependencyMap[4]).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: activity.style, children: items3.map((arg0, arg1) => callback(arg0, { activity }, arg1)) };
    tmp8 = <View {...obj} />;
  }
  return tmp8;
};
