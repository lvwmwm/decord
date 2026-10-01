// Module ID: 8078
// Function ID: 8079
// Name: StageBlockedUsersActionSheet
// Dependencies: [32, 19, 17, 4479, 5733, 5726, 21, 4836, 576, 504, 1115, 1177, 8079, 4832, 4800, 8080, 6544, 5281, 6571, 6493, 2]
// Exports: default

// Module 8078 (StageBlockedUsersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5733 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let size;
function RestrictedUser(guildId) {
  let Icon;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items8;
  let items9;
  let obj7;
  let participant;
  let str;
  let stringResult;
  let stringResult1;
  ({ participant, channelId: require } = guildId);
  guildId = guildId.guildId;
  const tmp = closure_11();
  const user = participant.user;
  let speaker = participant.speaker;
  const items = [StageChannelRoleStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(user.id, require));
  const items1 = [RelationshipStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => RelationshipStore.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId);
  const intl = intl7.intl;
  if (speaker) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.LqMmG2);
  } else {
    stringResult = tmp7;
    if (stateFromStores) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.GMZqSi);
    }
  }
  const obj3 = { style: tmp.userContainer, children: items4 };
  const obj4 = { style: tmp.avatarContainer, children: items2 };
  const obj5 = { source: avatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const CutoutableAvatarImage = tmp2(1177).CutoutableAvatarImage;
  items2 = [closure_9(CutoutableAvatarImage, obj5), ];
  if (speaker) {
    const obj6 = { style: items3, children: closure_9(Icon, obj7) };
    items3 = [tmp.iconContainer];
    obj7 = { style: tmp.icon, source: user(8079), color: user(576).unsafe_rawColors.WHITE };
    Icon = tmp2(1177).Icon;
    speaker = tmp11(tmp10, obj6);
  }
  items2[1] = speaker;
  items4 = [closure_10(View, obj4), ];
  const obj8 = { style: tmp.flex, children: items5 };
  const obj9 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: str.toString() };
  str = participant.user;
  const Text = tmp2(4832).Text;
  items5 = [closure_9(Text, obj9), ];
  const user2 = participant.user;
  let tmp9Result = !user2.hasUniqueUsername();
  user2.hasUniqueUsername();
  if (tmp9Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-default", children: items6 };
    items6 = ["#", participant.user.discriminator];
    tmp9Result = tmp9(tmp2(4832).Text, obj10);
  }
  items5[1] = tmp9Result;
  const items7 = [closure_10(View, obj8), ];
  const obj11 = { style: tmp.flex, children: items8 };
  const obj12 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: stringResult1 };
  const LegacyText = tmp2(1177).LegacyText;
  const intl4 = tmp2(1115).intl;
  const string = intl4.string;
  const t = tmp2(1115).t;
  if (stateFromStores1) {
    stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  const obj13 = { children: items7 };
  items8 = [closure_9(LegacyText, obj12), ];
  const obj14 = { variant: "text-sm/medium", color: "text-muted", children: items9 };
  items9 = [" ", "| ", stringResult];
  items8[1] = closure_10(Text_Text.Text, obj14);
  items7[1] = closure_10(View, obj11);
  items4[1] = closure_10(View, obj13);
  return closure_10(View, obj3);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  let blockedUserCount;
  let ignoredUserCount;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let obj11;
  let obj13;
  let obj6;
  let obj8;
  let obj9;
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = closure_11();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      const obj2 = { style: tmp.header, children: items };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(intl7.t.Uzdyho) };
      const Text3 = Text_Text.Text;
      intl3 = intl7.intl;
      items = [React4(Text3, obj3), ];
      const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl4.string(intl7.t["P/KFXz"]) };
      const Text4 = Text_Text.Text;
      intl4 = intl7.intl;
      items[1] = React4(Text4, obj4);
      obj9 = obj2;
    }
    return tmp2(tmp3, obj9);
  }
  if (ignoredUserCount > 0) {
    const obj = { style: tmp.header, children: items1 };
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.format(intl7.t.wvygk8, obj6) };
    const Text = Text_Text.Text;
    intl = intl7.intl;
    obj6 = { number: ignoredUserCount };
    items1 = [React4(Text, obj5), ];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(intl7.t.Ri3o33, obj8) };
    const Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    obj8 = { number: ignoredUserCount };
    items1[1] = React4(Text2, obj7);
    obj9 = obj;
  } else {
    obj9 = { style: tmp.header, children: items2 };
    const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl5.format(intl7.t.HviVA9, obj11) };
    const Text5 = Text_Text.Text;
    intl5 = intl7.intl;
    obj11 = { number: blockedUserCount };
    items2 = [React4(Text5, obj10), ];
    const obj12 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl6.format(intl7.t["28qZMU"], obj13) };
    const Text6 = Text_Text.Text;
    intl6 = intl7.intl;
    obj13 = { number: blockedUserCount };
    items2[1] = React4(Text6, obj12);
  }
}
const View = react_native.View;
let closure_8 = StageChannelsConstants.STAGE_BLOCKED_USERS_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 16 }, buttons: obj2, userContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginVertical: 8, width: "100%" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 }, avatar: { opacity: 0.5 }, iconContainer: size, icon: { height: 12, width: 12 }, flex: { display: "flex", flexDirection: "row" }, blocked: obj3, ignored: obj4 };
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingVertical: 8 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items2;
  let items3;
  channel = channel.channel;
  const onAccept = channel.onAccept;
  let items1;
  const tmp2 = closure_11();
  const tmp3 = items1(react.useState(0), 2);
  dependencyMap = tmp3[1];
  const first = tmp3[0];
  let obj = channel(8080);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  const obj2 = channel(8080);
  const stageIgnoredUsers = obj2.useStageIgnoredUsers(channel.id);
  const length = stageBlockedUsers.length;
  const length2 = stageIgnoredUsers.length;
  const callback = react.useCallback((nativeEvent) => {
    closure_2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const obj3 = { bottom: true, style: tmp2.buttons, onLayout: callback, children: items };
  const SafeAreaPaddingView = channel(6544).SafeAreaPaddingView;
  const obj4 = {
    text: intl.string(channel(1115).t.mbD50D),
    onPress() {
      onAccept(channel);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_8);
    }
  };
  const Button = channel(5281).Button;
  intl = channel(1115).intl;
  items = [closure_9(Button, obj4), ];
  const obj5 = {
    variant: "secondary",
    text: intl2.string(channel(1115).t.CZGqeT),
    onPress: function handleDismiss() {
      const obj = onAccept(closure_2[14]);
      obj.hideActionSheet(closure_1_8);
    }
  };
  const Button2 = channel(5281).Button;
  intl2 = channel(1115).intl;
  items[1] = closure_9(Button2, obj5);
  items1 = [];
  const tmp6 = closure_10(SafeAreaPaddingView, obj3);
  HermesBuiltin.arraySpread(items1, stageIgnoredUsers, HermesBuiltin.arraySpread(items1, stageBlockedUsers, 0));
  const obj6 = { scrollable: true, header: closure_9(StageBlockedUsersActionSheetHeader, { blockedUserCount: length, ignoredUserCount: length2 }), footer: tmp6, children: items3 };
  BottomSheet = channel(6571).BottomSheet;
  const obj7 = {
    inActionSheet: true,
    contentContainerStyle: tmp2.container,
    accessibilityLabel: intl3.string(channel(1115).t["3VoRLH"]),
    sections: items2,
    renderItem(arg0, arg1) {
      const obj = { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id };
      return React4(RestrictedUser, obj);
    },
    itemSize() {
      return 48;
    }
  };
  const tmp8 = onAccept(6493);
  intl3 = channel(1115).intl;
  items2 = [items1.length];
  items3 = [closure_9(tmp8, obj7), ];
  const obj8 = { style: { height: first } };
  items3[1] = closure_9(View, obj8);
  return closure_10(BottomSheet, obj6);
};
