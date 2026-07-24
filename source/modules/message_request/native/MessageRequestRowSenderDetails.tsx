// Module ID: 15607
// Function ID: 120336
// Name: MessageRequestRowSenderDetails
// Dependencies: [31, 27, 3767, 33, 4130, 1273, 689, 566, 3969, 15608, 1395, 4126, 1212, 15609, 15610, 2]
// Exports: default

// Module 15607 (MessageRequestRowSenderDetails)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.avatar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatarContainer = { marginRight: 16, alignItems: "flex-start", height: "100%" };
_createForOfIteratorHelperLoose.detailsContainer = { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 };
_createForOfIteratorHelperLoose.messageDetails = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.username = { flexShrink: 1, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.timestampSeparator = { marginHorizontal: 6 };
_createForOfIteratorHelperLoose.messagePreview = { marginTop: 2 };
_createForOfIteratorHelperLoose.usernameTextContainer = { flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flexShrink: 1, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  let channel;
  let otherUser;
  ({ channel, otherUser } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = otherUser(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == otherUser) {
      return null;
    } else {
      let nickname = outer1_4.getNickname(otherUser.id);
      if (null == nickname) {
        nickname = outer1_1(outer1_2[8]).getGlobalName(otherUser);
        const obj = outer1_1(outer1_2[8]);
      }
      return nickname;
    }
  });
  let obj1 = otherUser(15608);
  const messageRequestRelativeTimestampText = obj1.useMessageRequestRelativeTimestampText(channel);
  const random = Math.random();
  const rounded = Math.floor(random * importDefault(1395).DEFAULT_AVATARS.length);
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
    obj2 = { avatarStyle: tmp.avatar, source: importDefault(1395).DEFAULT_AVATARS[rounded] };
  }
  obj.children = callback(otherUser(1273).Avatar, obj2);
  const items1 = [callback(View, obj), ];
  const obj3 = { style: tmp.detailsContainer };
  const obj4 = { style: tmp.messageDetails };
  const obj5 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.usernameTextContainer };
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.username };
  let stringResult = stateFromStores;
  if (null == stateFromStores) {
    let username;
    if (null != otherUser) {
      username = otherUser.username;
    }
    stringResult = username;
  }
  if (null == stringResult) {
    const intl = otherUser(1212).intl;
    stringResult = intl.string(otherUser(1212).t["30mdIx"]);
  }
  obj6.children = stringResult;
  const items2 = [callback(otherUser(4126).Text, obj6), ];
  let tmp18 = null != stateFromStores;
  if (tmp18) {
    const obj7 = { variant: "text-md/medium", color: "text-muted" };
    let obj11 = otherUser(3969);
    const items3 = [" ", obj11.getUserTag(otherUser)];
    obj7.children = items3;
    tmp18 = callback2(otherUser(4126).Text, obj7);
  }
  items2[1] = tmp18;
  obj5.children = items2;
  const items4 = [callback2(otherUser(4126).Text, obj5), , ];
  const obj8 = { style: tmp.timestampSeparator, variant: "text-xs/medium", color: "text-muted", children: "\u00B7" };
  items4[1] = callback(otherUser(4126).Text, obj8);
  const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText };
  items4[2] = callback(otherUser(4126).Text, obj9);
  obj4.children = items4;
  const items5 = [callback2(View, obj4), , ];
  let tmp22 = !flag;
  if (tmp22) {
    const obj10 = { style: tmp.messagePreview, channel };
    tmp22 = callback(importDefault(15609), obj10);
  }
  items5[1] = tmp22;
  if (flag) {
    flag = null != otherUser;
  }
  if (flag) {
    obj11 = { style: tmp.messagePreview, userId: otherUser.id };
    const intl2 = otherUser(1212).intl;
    obj11.suffix = intl2.string(otherUser(1212).t.hTltPn);
    flag = callback(importDefault(15610), obj11);
    const tmp29 = importDefault(15610);
  }
  items5[2] = flag;
  obj3.children = items5;
  items1[1] = callback2(View, obj3);
  obj.children = items1;
  return callback2(closure_7, obj);
};
