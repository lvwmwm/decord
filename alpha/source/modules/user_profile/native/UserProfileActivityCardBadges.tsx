// Module ID: 12578
// Function ID: 12579
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 1074, 21, 12579, 2]
// Exports: default

// Module 12578 (UserProfileActivityCardBadges)
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(12579).PartyBadge, activity(12579).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp.LISTENING) {
    const items1 = [activity(12579).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp.WATCHING) {
    const items2 = [activity(12579).TimestampBadge, activity(12579).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: activity.style, children: items3.map((item, index) => jsx(item, { activity }, index)) };
    tmp8 = <View style={arg0.style}>{items3.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp8;
};
