// Module ID: 15435
// Function ID: 117797
// Name: MessageRequestRowSenderDetails
// Dependencies: [31, 5602, 5603, 15443, 566, 5389, 15444, 2, 5602, 566, 2, 31, 33, 1273, 15446, 2]
// Exports: default

// Module 15435 (MessageRequestRowSenderDetails)
import "module_31";
import { View } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useMessageRequestsCount from "useMessageRequestsCount";
import initialize from "initialize";
import result2 from "result2";

({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = useMessageRequestsCount);
initialize = {};
initialize = { borderRadius: require("useRefValue").AVATAR_SIZE_MAP[require("useRefValue").AvatarSizes.NORMAL] / 2, backgroundColor: require("useSpamMessageRequestCount").colors.BACKGROUND_SURFACE_HIGH };
initialize.avatar = initialize;
initialize.avatarContainer = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
initialize.detailsContainer = { env_key: 9, session_id: null, player_name: "\u{1F91B}\u{1F3FC}", player_version: true };
initialize.messageDetails = { "Null": 7, "Null": 370 };
initialize.username = { flexShrink: 1, color: require("useSpamMessageRequestCount").colors.MOBILE_TEXT_HEADING_PRIMARY };
initialize.timestampSeparator = { marginHorizontal: 6 };
initialize.messagePreview = { marginTop: 2 };
initialize.usernameTextContainer = { flexShrink: 1 };
initialize = initialize.createStyles(initialize);
const result = result2.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

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
  const obj5 = { "Null": true, "Null": 15.1, "Null": 253, style: tmp.usernameTextContainer };
  const obj6 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", style: tmp.username };
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
    const items3 = [-1402750382, obj11.getUserTag(otherUser)];
    obj7.children = items3;
    tmp18 = callback2(arg1(dependencyMap[11]).Text, obj7);
  }
  items2[1] = tmp18;
  obj5.children = items2;
  const items4 = [callback2(arg1(dependencyMap[11]).Text, obj5), callback(arg1(dependencyMap[11]).Text, { style: tmp.timestampSeparator }), ];
  const obj9 = { hasMaxConnections: 15, isBoostOnlySubscription: "center", children: messageRequestRelativeTimestampText };
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
