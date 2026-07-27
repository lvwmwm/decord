// Module ID: 11928
// Function ID: 92326
// Name: UserProfileActivityCardBadges
// Dependencies: [31, 27, 653, 33, 11929, 2]
// Exports: default

// Module 11928 (UserProfileActivityCardBadges)
import "result";
import { View } from "get ActivityIndicator";
import { ActivityTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(11929).PartyBadge, activity(11929).TimestampBadge];
    let items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [activity(11929).TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [activity(11929).TimestampBadge, activity(11929).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: activity.style, children: items3.map((arg0, arg1) => outer1_4(arg0, { activity }, arg1)) };
    tmp8 = <View style={arg0.style}>{items3.map((arg0, arg1) => outer1_4(arg0, { activity }, arg1))}</View>;
  }
  return tmp8;
};
