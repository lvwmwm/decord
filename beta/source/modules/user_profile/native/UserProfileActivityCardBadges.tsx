// Module ID: 12578
// Function ID: 12579
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 1074, 21, 12579, 2]
// Exports: default

// Module 12578 (UserProfileActivityCardBadges)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  let items3;
  activity = activity.activity;
  const style = activity.style;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(12579).PartyBadge, activity(12579).TimestampBadge];
    items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [activity(12579).TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [activity(12579).TimestampBadge, activity(12579).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    tmp8 = <View style={style}>{items3.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp8;
};
