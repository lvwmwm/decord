// Module ID: 15118
// Function ID: 15119
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 21, 5923, 15119, 2]
// Exports: default

// Module 15118 (UserProfileActivityCardBadges)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  let items3;
  activity = activity.activity;
  const style = activity.style;
  if (activity.type === activity(5923).ActivityTypes.PLAYING) {
    const items = [activity(15119).PartyBadge, activity(15119).TimestampBadge];
    items3 = items;
  } else if (activity.type === activity(5923).ActivityTypes.LISTENING) {
    const items1 = [activity(15119).TimestampBadge];
    items3 = items1;
  } else if (activity.type === activity(5923).ActivityTypes.WATCHING) {
    const items2 = [activity(15119).TimestampBadge, activity(15119).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp3 = null;
  if (0 !== items3.length) {
    tmp3 = <View style={style}>{items3.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp3;
};
