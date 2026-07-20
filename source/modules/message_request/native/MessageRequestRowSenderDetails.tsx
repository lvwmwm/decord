// Module ID: 15425
// Function ID: 117734
// Name: MessageRequestRowSenderDetails
// Dependencies: [31, 5600, 5601, 15433, 566, 5388, 15434, 2, 5600, 566, 2, 31, 33, 1273, 15436, 2]
// Exports: default

// Module 15425 (MessageRequestRowSenderDetails)
import "module_31";
import { View } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useMessageRequestsCount from "useMessageRequestsCount";
import initialize from "initialize";
import keys from "keys";

({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = useMessageRequestsCount);
initialize = {};
initialize = { borderRadius: require("useRefValue").AVATAR_SIZE_MAP[require("useRefValue").AvatarSizes.NORMAL] / 2, backgroundColor: require("useSpamMessageRequestCount").colors.BACKGROUND_SURFACE_HIGH };
initialize.avatar = initialize;
initialize.avatarContainer = { <string:1547395988>: false, <string:425808226>: false, <string:1368675426>: false };
initialize.detailsContainer = { adjustToInterfaceOrientation: 9, KICK_MEMBERS: null, getButtonDefaultTextVariant: "\u{1F91B}\u{1F3FC}", formatWatchTaskTime: true };
initialize.messageDetails = { -9223372036854775808: true, filter: true };
initialize.username = { flexShrink: 1, color: require("useSpamMessageRequestCount").colors.MOBILE_TEXT_HEADING_PRIMARY };
initialize.timestampSeparator = { marginHorizontal: 6 };
initialize.messagePreview = { marginTop: 2 };
initialize.usernameTextContainer = { flexShrink: 1 };
initialize = initialize.createStyles(initialize);
const result = keys.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  let channel;
  let otherUser;
  ({ channel, otherUser } = isRestricted);
  const arg1 = otherUser;
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = initialize();
  let obj = arg1(dependencyMap[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == otherUser) {
      return null;
    } else {
      let nickname = nickname.getNickname(otherUser.id);
      if (null == nickname) {
        nickname = callback(closure_2[8]).getGlobalName(otherUser);
        const obj = callback(closure_2[8]);
      }
      return nickname;
    }
  });
  let obj1 = arg1(dependencyMap[9]);
  const messageRequestRelativeTimestampText = obj1.useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const rounded = Math.floor(random * importDefault(dependencyMap[10]).DEFAULT_AVATARS.length);
  obj = {};
  obj = { style: tmp.avatarContainer };
  if (null != otherUser) {
    obj1 = { avatarStyle: tmp.avatar, user: otherUser, guildId: undefined, disablePlaceholder: true };
    let avatarDecoration;
    if (null != otherUser) {
      avatarDecoration = otherUser.avatarDecoration;
    }
    obj1.avatarDecoration = avatarDecoration;
    let obj2 = obj1;
  } else {
    obj2 = { avatarStyle: tmp.avatar, source: importDefault(dependencyMap[10]).DEFAULT_AVATARS[rounded] };
  }
  obj.children = callback(arg1(dependencyMap[5]).Avatar, obj2);
  const items1 = [callback(View, obj), ];
  const obj3 = { style: tmp.detailsContainer };
  const obj4 = { style: tmp.messageDetails };
  const obj5 = { CHANNEL_HIGHLIGHT: true, guild_template_description: 15.1, borderWidth: 253, style: tmp.usernameTextContainer };
  const obj6 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.username };
  let stringResult = stateFromStores;
  if (null == stateFromStores) {
    let username;
    if (null != otherUser) {
      username = otherUser.username;
    }
    stringResult = username;
  }
  if (null == stringResult) {
    const intl = arg1(dependencyMap[12]).intl;
    stringResult = intl.string(arg1(dependencyMap[12]).t.30mdIx);
  }
  obj6.children = stringResult;
  const items2 = [callback(arg1(dependencyMap[11]).Text, obj6), ];
  let tmp18 = null != stateFromStores;
  if (tmp18) {
    const obj7 = {};
    let obj11 = arg1(dependencyMap[8]);
    const items3 = [null, obj11.getUserTag(otherUser)];
    obj7.children = items3;
    tmp18 = callback2(arg1(dependencyMap[11]).Text, obj7);
  }
  items2[1] = tmp18;
  obj5.children = items2;
  const items4 = [callback2(arg1(dependencyMap[11]).Text, obj5), , ];
  const obj8 = { "Bool(true)": "ur", "Bool(true)": "SECTION_INDEX_FIRST_NAMED_CATEGORY", "Bool(true)": "ur", "Bool(true)": "advanceAnimationByFrame", style: tmp.timestampSeparator };
  items4[1] = callback(arg1(dependencyMap[11]).Text, obj8);
  const obj9 = { INTEGRATION_CREATE: 15, ConstraintReasonCode: "center", children: messageRequestRelativeTimestampText };
  items4[2] = callback(arg1(dependencyMap[11]).Text, obj9);
  obj4.children = items4;
  const items5 = [callback2(View, obj4), , ];
  let tmp22 = !flag;
  if (tmp22) {
    const obj10 = { style: tmp.messagePreview, channel };
    tmp22 = callback(importDefault(dependencyMap[13]), obj10);
  }
  items5[1] = tmp22;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    obj11 = { style: tmp.messagePreview, userId: otherUser.id };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj11.suffix = intl2.string(arg1(dependencyMap[12]).t.hTltPn);
    flag = callback(importDefault(dependencyMap[14]), obj11);
    const tmp29 = importDefault(dependencyMap[14]);
  }
  items5[2] = flag;
  obj3.children = items5;
  items1[1] = callback2(View, obj3);
  obj.children = items1;
  return callback2(closure_7, obj);
};
