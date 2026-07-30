// Module ID: 11989
// Function ID: 11990
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 676, 21, 11990, 2]
// Exports: default

// Module 11989 (UserProfileActivityCardBadges)
import "noop";
import { View } from "get ActivityIndicator";
import { ActivityTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(11990).PartyBadge, activity(11990).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp.LISTENING) {
    const items1 = [activity(11990).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp.WATCHING) {
    const items2 = [activity(11990).TimestampBadge, activity(11990).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: null, children: null };
    obj[0] = activity.style;
    obj[1] = items3.map((arg0, arg1) => outer1_4(arg0, { activity }, arg1));
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
};
