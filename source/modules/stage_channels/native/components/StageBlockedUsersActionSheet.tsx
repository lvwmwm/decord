// Module ID: 7585
// Function ID: 60633
// Name: RestrictedUser
// Dependencies: [57, 31, 27, 3767, 4954, 4947, 33, 4130, 689, 566, 1212, 1273, 7586, 4126, 4098, 7587, 5121, 4543, 5187, 7588, 2]
// Exports: default

// Module 7585 (RestrictedUser)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { STAGE_BLOCKED_USERS_SHEET_KEY as closure_8 } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function RestrictedUser(guildId) {
  let participant;
  let require;
  ({ participant, channelId: require } = guildId);
  const tmp = _createForOfIteratorHelperLoose();
  const user = participant.user;
  let speaker = participant.speaker;
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.isModerator(user.id, closure_0));
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId.guildId);
  const intl = require(1212) /* getSystemLocale */.intl;
  if (speaker) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.LqMmG2);
  } else {
    stringResult = tmp5;
    if (stateFromStores) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.GMZqSi);
    }
  }
  obj = { style: tmp.userContainer };
  obj = { style: tmp.avatarContainer };
  obj1 = { source: avatarSource, size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const items2 = [callback(require(1273) /* Button */.CutoutableAvatarImage, obj1), ];
  if (speaker) {
    const obj2 = {};
    const items3 = [tmp.iconContainer];
    obj2.style = items3;
    const obj3 = { style: tmp.icon, source: user(7586), color: user(689).unsafe_rawColors.WHITE };
    obj2.children = callback(require(1273) /* Button */.Icon, obj3);
    speaker = callback(View, obj2);
  }
  items2[1] = speaker;
  obj.children = items2;
  const items4 = [callback2(View, obj), ];
  const obj4 = {};
  const obj5 = { style: tmp.flex };
  const obj6 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: participant.user.toString() };
  const items5 = [callback(require(4126) /* Text */.Text, obj6), ];
  const user2 = participant.user;
  let tmp23 = !user2.hasUniqueUsername();
  if (tmp23) {
    const obj7 = { variant: "text-sm/medium", color: "text-default" };
    const items6 = ["#", participant.user.discriminator];
    obj7.children = items6;
    tmp23 = callback2(require(4126) /* Text */.Text, obj7);
  }
  items5[1] = tmp23;
  obj5.children = items5;
  const items7 = [callback2(View, obj5), ];
  const obj8 = { style: tmp.flex };
  const obj9 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const string = intl4.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (stateFromStores1) {
    let stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  obj9.children = stringResult1;
  const items8 = [callback(require(1273) /* Button */.LegacyText, obj9), ];
  const obj10 = { variant: "text-sm/medium", color: "text-muted" };
  const items9 = [" ", "| ", stringResult];
  obj10.children = items9;
  items8[1] = callback2(require(4126) /* Text */.Text, obj10);
  obj8.children = items8;
  items7[1] = callback2(View, obj8);
  obj4.children = items7;
  items4[1] = callback2(View, obj4);
  obj.children = items4;
  return callback2(View, obj);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  let blockedUserCount;
  let ignoredUserCount;
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      let obj = { style: tmp.header };
      obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.children = intl3.string(require(1212) /* getSystemLocale */.t.Uzdyho);
      const items = [callback(require(4126) /* Text */.Text, obj), ];
      const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj1.children = intl4.string(require(1212) /* getSystemLocale */.t["P/KFXz"]);
      items[1] = callback(require(4126) /* Text */.Text, obj1);
      obj.children = items;
      let obj6 = obj;
    }
    return tmp2(tmp3, obj6);
  }
  if (ignoredUserCount > 0) {
    obj = { style: tmp.header };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj3 = { number: ignoredUserCount };
    obj2.children = intl.format(require(1212) /* getSystemLocale */.t.wvygk8, obj3);
    const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
    const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { number: ignoredUserCount };
    obj4.children = intl2.format(require(1212) /* getSystemLocale */.t.Ri3o33, obj5);
    items1[1] = callback(require(4126) /* Text */.Text, obj4);
    obj.children = items1;
    obj6 = obj;
  } else {
    obj6 = { style: tmp.header };
    const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const obj8 = { number: blockedUserCount };
    obj7.children = intl5.format(require(1212) /* getSystemLocale */.t.HviVA9, obj8);
    const items2 = [callback(require(4126) /* Text */.Text, obj7), ];
    const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const obj10 = { number: blockedUserCount };
    obj9.children = intl6.format(require(1212) /* getSystemLocale */.t["28qZMU"], obj10);
    items2[1] = callback(require(4126) /* Text */.Text, obj9);
    obj6.children = items2;
  }
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 16 } };
_createForOfIteratorHelperLoose = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingVertical: 8 };
_createForOfIteratorHelperLoose.buttons = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.userContainer = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginVertical: 8, width: "100%" };
_createForOfIteratorHelperLoose.avatarContainer = { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 };
_createForOfIteratorHelperLoose.avatar = { opacity: 0.5 };
let obj1 = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose.iconContainer = obj1;
_createForOfIteratorHelperLoose.icon = { height: 12, width: 12 };
_createForOfIteratorHelperLoose.flex = { display: "flex", flexDirection: "row" };
_createForOfIteratorHelperLoose.blocked = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.ignored = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  channel = channel.channel;
  const onAccept = channel.onAccept;
  function handleDismiss() {
    onAccept(4098).hideActionSheet(outer1_8);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = items1(handleDismiss.useState(0), 2);
  const dependencyMap = tmp2[1];
  let obj = channel(7587);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  let obj1 = channel(7587);
  const stageIgnoredUsers = obj1.useStageIgnoredUsers(channel.id);
  const callback = handleDismiss.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { bottom: true, style: tmp.buttons, onLayout: callback };
  obj = {};
  const intl = channel(1212).intl;
  obj.text = intl.string(channel(1212).t.mbD50D);
  obj.onPress = function onPress() {
    onAccept(channel);
    handleDismiss();
  };
  const items = [callback(channel(4543).Button, obj), ];
  obj1 = { variant: "secondary" };
  const intl2 = channel(1212).intl;
  obj1.text = intl2.string(channel(1212).t.CZGqeT);
  obj1.onPress = handleDismiss;
  items[1] = callback(channel(4543).Button, obj1);
  obj.children = items;
  items1 = [];
  HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
  const obj2 = { scrollable: true, header: callback(StageBlockedUsersActionSheetHeader, { blockedUserCount: stageBlockedUsers.length, ignoredUserCount: stageIgnoredUsers.length }), footer: callback2(channel(5121).SafeAreaPaddingView, obj) };
  const obj3 = { inActionSheet: true, contentContainerStyle: tmp.container };
  const tmp4 = callback2(channel(5121).SafeAreaPaddingView, obj);
  const intl3 = channel(1212).intl;
  obj3.accessibilityLabel = intl3.string(channel(1212).t["3VoRLH"]);
  const items2 = [items1.length];
  obj3.sections = items2;
  obj3.renderItem = function renderItem(arg0, arg1) {
    return outer1_9(outer1_12, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
  };
  obj3.itemSize = function itemSize() {
    return 48;
  };
  const items3 = [callback(onAccept(7588), obj3), callback(View, { style: { height: tmp2[0] } })];
  obj2.children = items3;
  return callback2(channel(5187).BottomSheet, obj2);
};
