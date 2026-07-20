// Module ID: 7574
// Function ID: 60562
// Name: RestrictedUser
// Dependencies: []
// Exports: default

// Module 7574 (RestrictedUser)
function RestrictedUser(guildId) {
  let participant;
  ({ participant, channelId: closure_0 } = guildId);
  const tmp = callback4();
  const user = participant.user;
  const importDefault = user;
  let speaker = participant.speaker;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => moderator.isModerator(user.id, closure_0));
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => blocked.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId.guildId);
  const intl = arg1(dependencyMap[10]).intl;
  if (speaker) {
    const intl3 = arg1(dependencyMap[10]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[10]).t.LqMmG2);
  } else {
    stringResult = tmp5;
    if (stateFromStores) {
      const intl2 = arg1(dependencyMap[10]).intl;
      stringResult = intl2.string(arg1(dependencyMap[10]).t.GMZqSi);
    }
  }
  obj = { style: tmp.userContainer };
  obj = { style: tmp.avatarContainer };
  obj1 = { source: avatarSource, size: arg1(dependencyMap[11]).AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const items2 = [callback2(arg1(dependencyMap[11]).CutoutableAvatarImage, obj1), ];
  if (speaker) {
    const obj2 = {};
    const items3 = [tmp.iconContainer];
    obj2.style = items3;
    const obj3 = { style: tmp.icon, source: importDefault(dependencyMap[12]), color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE };
    obj2.children = callback2(arg1(dependencyMap[11]).Icon, obj3);
    speaker = callback2(View, obj2);
  }
  items2[1] = speaker;
  obj.children = items2;
  const items4 = [callback3(View, obj), ];
  const obj4 = {};
  const obj5 = { style: tmp.flex };
  const obj6 = { children: participant.user.toString() };
  const items5 = [callback2(arg1(dependencyMap[13]).Text, obj6), ];
  const user2 = participant.user;
  let tmp23 = !user2.hasUniqueUsername();
  if (tmp23) {
    const obj7 = {};
    const items6 = [, participant.user.discriminator];
    obj7.children = items6;
    tmp23 = callback3(arg1(dependencyMap[13]).Text, obj7);
  }
  items5[1] = tmp23;
  obj5.children = items5;
  const items7 = [callback3(View, obj5), ];
  const obj8 = { style: tmp.flex };
  const obj9 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored };
  const intl4 = arg1(dependencyMap[10]).intl;
  const string = intl4.string;
  const t = arg1(dependencyMap[10]).t;
  if (stateFromStores1) {
    let stringResult1 = string(t.4bDptI);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  obj9.children = stringResult1;
  const items8 = [callback2(arg1(dependencyMap[11]).LegacyText, obj9), ];
  const obj10 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" };
  const items9 = [true, true, stringResult];
  obj10.children = items9;
  items8[1] = callback3(arg1(dependencyMap[13]).Text, obj10);
  obj8.children = items8;
  items7[1] = callback3(View, obj8);
  obj4.children = items7;
  items4[1] = callback3(View, obj4);
  obj.children = items4;
  return callback3(View, obj);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  let blockedUserCount;
  let ignoredUserCount;
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = callback4();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      let obj = { style: tmp.header };
      obj = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032834862514393, 9223372036854775807: 11753968623045495000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, style: tmp.title };
      const intl3 = arg1(dependencyMap[10]).intl;
      obj.children = intl3.string(arg1(dependencyMap[10]).t.Uzdyho);
      const items = [callback2(arg1(dependencyMap[13]).Text, obj), ];
      const obj1 = { style: tmp.description };
      const intl4 = arg1(dependencyMap[10]).intl;
      obj1.children = intl4.string(arg1(dependencyMap[10]).t.P/KFXz);
      items[1] = callback2(arg1(dependencyMap[13]).Text, obj1);
      obj.children = items;
      let obj6 = obj;
    }
    return tmp2(tmp3, obj6);
  }
  if (ignoredUserCount > 0) {
    obj = { style: tmp.header };
    const obj2 = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032834862514393, 9223372036854775807: 11753968623045495000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, style: tmp.title };
    const intl = arg1(dependencyMap[10]).intl;
    const obj3 = { number: ignoredUserCount };
    obj2.children = intl.format(arg1(dependencyMap[10]).t.wvygk8, obj3);
    const items1 = [callback2(arg1(dependencyMap[13]).Text, obj2), ];
    const obj4 = { style: tmp.description };
    const intl2 = arg1(dependencyMap[10]).intl;
    const obj5 = { number: ignoredUserCount };
    obj4.children = intl2.format(arg1(dependencyMap[10]).t.Ri3o33, obj5);
    items1[1] = callback2(arg1(dependencyMap[13]).Text, obj4);
    obj.children = items1;
    obj6 = obj;
  } else {
    obj6 = { style: tmp.header };
    const obj7 = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032834862514393, 9223372036854775807: 11753968623045495000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, style: tmp.title };
    const intl5 = arg1(dependencyMap[10]).intl;
    const obj8 = { number: blockedUserCount };
    obj7.children = intl5.format(arg1(dependencyMap[10]).t.HviVA9, obj8);
    const items2 = [callback2(arg1(dependencyMap[13]).Text, obj7), ];
    const obj9 = { style: tmp.description };
    const intl6 = arg1(dependencyMap[10]).intl;
    const obj10 = { number: blockedUserCount };
    obj9.children = intl6.format(arg1(dependencyMap[10]).t.28qZMU, obj10);
    items2[1] = callback2(arg1(dependencyMap[13]).Text, obj9);
    obj6.children = items2;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).STAGE_BLOCKED_USERS_SHEET_KEY;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: {}, description: { person_pouting: 52881784.83212474, cv: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 } };
obj = { <string:3511559503>: -853685836052859800000000000000000000000000000000000000000000, <string:3511538801>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028527056869, <string:2444196949>: -154292842729173300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:3894968739>: 52052225289228480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
obj.buttons = obj;
obj.userContainer = {};
obj.avatarContainer = {};
obj.avatar = { opacity: 0.5 };
const obj1 = { _releaseScroll: true, useDueInString: true, findMatroskaDocTypeElements: true, makeViewDescriptorsSet: true, peekFront: true, textLightgrey: true, ZOOM_OUT: true, attachmentManifest: true, OrbCheckoutPurchaseButton: true, borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.iconContainer = obj1;
obj.icon = { <string:1140607356>: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", <string:1751293292>: "bun run write-native-version" };
obj.flex = {};
const tmp2 = arg1(dependencyMap[6]);
obj.blocked = { color: importDefault(dependencyMap[8]).unsafe_rawColors.RED_400 };
const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.RED_400 };
obj.ignored = { color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
let closure_11 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.onAccept;
  function handleDismiss() {
    onAccept(closure_2[14]).hideActionSheet(closure_8);
  }
  const React = handleDismiss;
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  let closure_2 = tmp2[1];
  let obj = arg1(closure_2[15]);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  let obj1 = arg1(closure_2[15]);
  const stageIgnoredUsers = obj1.useStageIgnoredUsers(channel.id);
  let callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { bottom: true, style: tmp.buttons, onLayout: callback };
  obj = {};
  const intl = arg1(closure_2[10]).intl;
  obj.text = intl.string(arg1(closure_2[10]).t.mbD50D);
  obj.onPress = function onPress() {
    onAccept(channel);
    handleDismiss();
  };
  const items = [callback2(arg1(closure_2[17]).Button, obj), ];
  obj1 = { variant: "secondary" };
  const intl2 = arg1(closure_2[10]).intl;
  obj1.text = intl2.string(arg1(closure_2[10]).t.CZGqeT);
  obj1.onPress = handleDismiss;
  items[1] = callback2(arg1(closure_2[17]).Button, obj1);
  obj.children = items;
  const items1 = [];
  HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
  callback = items1;
  const obj2 = { scrollable: true, header: callback2(StageBlockedUsersActionSheetHeader, { blockedUserCount: stageBlockedUsers.length, ignoredUserCount: stageIgnoredUsers.length }), footer: callback3(arg1(closure_2[16]).SafeAreaPaddingView, obj) };
  const obj3 = { inActionSheet: true, contentContainerStyle: tmp.container };
  const tmp4 = callback3(arg1(closure_2[16]).SafeAreaPaddingView, obj);
  const intl3 = arg1(closure_2[10]).intl;
  obj3.accessibilityLabel = intl3.string(arg1(closure_2[10]).t.3VoRLH);
  const items2 = [items1.length];
  obj3.sections = items2;
  obj3.renderItem = function renderItem(arg0, arg1) {
    return callback2(closure_12, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
  };
  obj3.itemSize = function itemSize() {
    return 48;
  };
  const items3 = [callback2(importDefault(closure_2[19]), obj3), callback2(View, { style: { height: tmp2[0] } })];
  obj2.children = items3;
  return callback3(arg1(closure_2[18]).BottomSheet, obj2);
};
