// Module ID: 16699
// Function ID: 16700
// Name: MessageRequestRowSenderDetails
// Dependencies: [19, 17, 4479, 21, 4836, 1177, 576, 504, 4678, 16700, 1400, 4832, 1115, 16701, 16702, 2]
// Exports: default

// Module 16699 (MessageRequestRowSenderDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import utils_AvatarUtilsDefault from "utils/AvatarUtils" /* 1400 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import MessageRequestMutualServersDefault from "MessageRequestMutualServers" /* 16702 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: obj2, avatarContainer: { marginRight: 16, alignItems: "flex-start", height: "100%" }, detailsContainer: { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 }, messageDetails: { flexDirection: "row", alignItems: "center" }, username: obj3, timestampSeparator: { marginHorizontal: 6 }, messagePreview: { marginTop: 2 }, usernameTextContainer: { flexShrink: 1 } };
obj2 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  let Avatar;
  let avatarDecoration;
  let channel;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let otherUser;
  let stringResult;
  ({ channel, otherUser } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  let tmp2 = otherUser;
  let obj = otherUser(504);
  const items = [RelationshipStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != otherUser) {
      let nickname = RelationshipStore.getNickname(tmp.id);
      if (nickname == null) {
        const obj = UserUtilsDefault;
        nickname = obj.getGlobalName(tmp);
      }
      tmp2 = nickname;
    }
    return tmp2;
  });
  const obj2 = otherUser(16700);
  const messageRequestRelativeTimestampText = obj2.useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const obj3 = { style: tmp.avatarContainer, children: closure_5(Avatar, obj5) };
  const floorResult = floor(random * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
  const tmp9 = utils_AvatarUtilsDefault.DEFAULT_AVATARS[floorResult];
  Avatar = otherUser(1177).Avatar;
  const tmp11 = closure_7;
  if (null != otherUser) {
    const obj4 = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration };
    avatarDecoration = undefined;
    if (otherUser != null) {
      avatarDecoration = otherUser.avatarDecoration;
    }
    obj5 = obj4;
  } else {
    obj5 = { avatarStyle: tmp.avatar, source: tmp9 };
  }
  const items1 = [closure_5(View, obj3), ];
  const obj6 = { style: tmp.detailsContainer, children: items5 };
  const obj7 = { style: tmp.messageDetails, children: items4 };
  const obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.usernameTextContainer, children: items2 };
  const Text = tmp2(4832).Text;
  const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.username, children: stringResult };
  stringResult = stateFromStores;
  const Text2 = tmp2(4832).Text;
  if (stateFromStores == null) {
    let username;
    if (otherUser != null) {
      username = otherUser.username;
    }
    stringResult = username;
  }
  if (stringResult == null) {
    const intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t["30mdIx"]);
  }
  items2 = [closure_5(Text2, obj9), ];
  let tmp10Result = null != stateFromStores;
  if (tmp10Result) {
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: items3 };
    const Text3 = tmp2(4832).Text;
    items3 = [" "];
    const tmp2Result = tmp2(4678);
    items3[1] = tmp2Result.getUserTag(otherUser);
    tmp10Result = tmp10(Text3, obj10);
  }
  items2[1] = tmp10Result;
  items4 = [closure_6(Text, obj8), , ];
  const obj11 = { style: tmp.timestampSeparator, variant: "text-xs/medium", color: "text-muted", children: "\u00B7" };
  items4[1] = closure_5(tmp2(4832).Text, obj11);
  items4[2] = closure_5(tmp2(4832).Text, { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText });
  items5 = [closure_6(View, obj7), , ];
  let tmp12Result = !flag;
  if (tmp12Result) {
    const obj12 = { style: tmp.messagePreview, channel };
    tmp12Result = tmp12(tmp7(16701), obj12);
  }
  items5[1] = tmp12Result;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    const obj13 = { style: tmp.messagePreview, userId: otherUser.id, suffix: intl2.string(tmp2(1115).t.hTltPn) };
    const tmp7Result = MessageRequestMutualServersDefault;
    intl2 = tmp2(1115).intl;
    flag = tmp12(tmp7Result, obj13);
  }
  const obj14 = { children: items1 };
  items5[2] = flag;
  items1[1] = closure_6(View, obj6);
  return closure_6(tmp11, obj14);
};
