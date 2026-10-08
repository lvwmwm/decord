// Module ID: 12192
// Function ID: 12193
// Name: NewChannelFollower
// Dependencies: [32, 19, 17, 2067, 2063, 4705, 2086, 4707, 5968, 1085, 21, 5090, 587, 8270, 4991, 504, 5417, 5392, 4929, 12193, 12194, 6829, 6298, 6161, 1200, 8134, 5086, 1126, 5373, 6267, 6184, 5054, 8529, 1999, 12195, 8555, 5963, 5375, 12198, 6833, 2]
// Exports: default

// Module 12192 (NewChannelFollower)
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4705 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import openChannelPickerDefault from "openChannelPicker" /* 12195 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 12198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, guild;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  const hasItem = set.has(channel.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, channel);
  return hasItem;
}
({ View: hasOwnProperty, Image: metroRequire, StyleSheet } = react_native);
const set = ChannelRecord.GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
let closure_10 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
({ AbortCodes: closure_14, Permissions: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerBackground: obj2, headerGuildIcon: { width: 40, marginRight: 16 }, headerChannelContainer: obj3, headerChannel: obj4, headerChannelIcon: { height: 20, width: 20, marginRight: 8, opacity: 0.6 }, ctaHeader: { flex: 1, textAlign: "center", marginBottom: 8 }, ctaSubhead: { flex: 1, textAlign: "center", marginBottom: 8 }, channelIcon: { height: 16, width: 16, opacity: 0.6 } };
obj2 = { width: undefined, height: 96 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
obj4 = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
let closure_18 = createStyles(obj);
const result = size.fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  let TableRow;
  let TableRow2;
  let c7;
  let channelIcon;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items6;
  let items8;
  let items9;
  let name;
  let obj10;
  let obj16;
  let obj19;
  let sourceChannel;
  let sourceGuild;
  let targetChannel;
  let targetGuild;
  let targetGuildId;
  let tmp20Result;
  let tmp20Result3;
  let tmp5;
  let tmp6Result4;
  let tmp9Result;
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: react, onSuccess: closure_5 } = targetChannelId);
  c7 = undefined;
  targetChannel = undefined;
  const onCancel = targetChannelId.onCancel;
  let tmp = closure_18();
  let tmp2 = targetChannelId(react.useState(false), 2);
  let closure_6 = tmp2[1];
  const first = tmp2[0];
  let tmp4 = targetChannelId(react.useState(null), 2);
  [tmp5, c7] = tmp4;
  const tmp6 = require;
  const tmp7 = targetGuildId;
  let obj = require("useBottomSheetRef");
  const bottomSheetRef1 = obj.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const items = [GuildStore];
  const tmp10 = require("useTheme")();
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { sourceGuild: GuildStore.getGuild(require), targetGuild: GuildStore.getGuild(targetGuildId) };
    return obj;
  });
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  const items1 = [bottomSheetRef];
  const obj3 = require("get initialized");
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const obj = { sourceChannel: ChannelStore.getChannel(importDefault), targetChannel: ChannelStore.getChannel(targetChannelId) };
    return obj;
  });
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp13 = require("useChannelName")(sourceChannel);
  const tmp14 = require("useChannelName")(targetChannel);
  const channelType = tmp15;
  require("useMountEffect")(() => {
    const tmp = channelType;
    if (tmp) {
      const current = bottomSheetRef.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  const tmp6Result = tmp6(tmp7[18]);
  if (tmp6Result.isThemeDark(tmp10)) {
    tmp9Result = tmp9(tmp7[19]);
  } else {
    tmp9Result = tmp9(tmp7[20]);
  }
  const obj4 = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: items9 };
  BottomSheet = tmp6(tmp7[21]).BottomSheet;
  const obj5 = { style: tmp.header, children: items2 };
  const obj6 = { source: tmp9Result, style: tmp.headerBackground };
  const BottomSheetScrollView = tmp6(tmp7[22]).BottomSheetScrollView;
  items2 = [closure_16(closure_6, obj6), ];
  const obj7 = { style: tmp.header, children: items3 };
  items3 = [, ];
  const obj8 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  items3[0] = closure_16(require("GuildIcon"), obj8);
  const obj9 = { style: tmp.headerChannelContainer, children: closure_17(closure_5, obj10) };
  obj10 = { style: tmp.headerChannel, children: items4 };
  const obj11 = { size: tmp6(tmp7[24]).Icon.Sizes.CUSTOM, source: channelIcon, style: tmp.headerChannelIcon };
  const Icon = tmp6(tmp7[24]).Icon;
  channelIcon = null;
  if (null != sourceChannel) {
    const tmp6Result3 = tmp6(tmp7[25]);
    channelIcon = tmp6Result3.getChannelIcon(sourceChannel);
  }
  items4 = [closure_16(Icon, obj11), closure_16(tmp6(tmp7[26]).Text, { lineClamp: 1, variant: "text-sm/medium", children: tmp13 })];
  items3[1] = closure_16(closure_5, obj9);
  items2[1] = closure_17(closure_5, obj7);
  const items5 = [closure_17(closure_5, obj5), ];
  const obj12 = { style: tmp.container, children: items6 };
  const obj13 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp6(tmp7[27]).t.mvPFbA) };
  const Text = tmp6(tmp7[26]).Text;
  intl = tmp6(tmp7[27]).intl;
  items6 = [closure_16(Text, obj13), , , , , ];
  const obj14 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp6(tmp7[27]).t.kbpkxJ) };
  const Text2 = tmp6(tmp7[26]).Text;
  intl2 = tmp6(tmp7[27]).intl;
  items6[1] = closure_16(Text2, obj14);
  const Stack = tmp6(tmp7[28]).Stack;
  const obj15 = { title: intl3.string(tmp6(tmp7[27]).t.xFn72s), hasIcons: true, children: closure_16(TableRow, obj16) };
  const TableRowGroup = tmp6(tmp7[29]).TableRowGroup;
  intl3 = tmp6(tmp7[27]).intl;
  TableRow = tmp6(tmp7[30]).TableRow;
  if (null != targetGuild) {
    name = targetGuild.name;
  } else {
    const intl4 = tmp6(tmp7[27]).intl;
    name = intl4.string(tmp6(tmp7[27]).t.XqMe3N);
  }
  obj16 = {
    label: name,
    icon: tmp20Result,
    arrow: true,
    onPress: function handleSelectGuild() {
      let array;
      let intl;
      let reduce;
      let tmp4;
      let tmp = ActionSheetActionCreatorsDefault;
      const openLazy = tmp.openLazy;
      let obj = {
        title: intl.string(intl10.t.etZ9tX),
        items: reduce((arr, arg1) => {
          guild = guild.getGuild(arg1);
          const canResult = null != guild && closure_1_12.can(constants.MANAGE_WEBHOOKS, guild);
          if (canResult) {
            const obj = { label: null, value: null };
            ({ name: obj.label, id: obj.value } = guild);
            arr.push(obj);
          }
          return arr;
        }, array),
        selectedItem: tmp4,
        onItemSelect(arg0) {
          const firstChannelOfType = targetChannel.getFirstChannelOfType(arg0, canFollowIntoChannel, channelType);
          let id;
          const tmp = closure_1_4;
          if (firstChannelOfType != null) {
            id = firstChannelOfType.id;
          }
          tmp(arg0, id);
        },
        onClose() {
          closure_1_4(targetGuildId, targetChannelId);
        },
        hasIcons: false
      };
      const tmp2 = asyncRequire(8529, dependencyMap.paths);
      intl = intl10.intl;
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      reduce = flattenedGuildIds.reduce;
      array = new Array();
      openLazy(tmp2, "NewChannelFollowerGuildPicker", obj);
      tmp4 = targetGuildId;
    }
  };
  tmp20Result = null;
  if (null != targetGuild) {
    const obj17 = { guild: targetGuild, size: tmp6(tmp7[23]).GuildIconSizes.XSMALL };
    const tmp9Result2 = require("GuildIcon");
    tmp20Result = tmp20(tmp9Result2, obj17);
  }
  const items7 = [closure_16(TableRowGroup, obj15), ];
  const obj18 = { title: intl5.string(tmp6(tmp7[27]).t.PDn2fR), hasIcons: true, children: closure_16(TableRow2, obj19) };
  const TableRowGroup2 = tmp6(tmp7[29]).TableRowGroup;
  intl5 = tmp6(tmp7[27]).intl;
  let stringResult = tmp14;
  TableRow2 = tmp6(tmp7[30]).TableRow;
  if (tmp14 == null) {
    const intl6 = tmp6(tmp7[27]).intl;
    stringResult = intl6.string(tmp6(tmp7[27]).t.XqMe3N);
  }
  obj19 = {
    label: stringResult,
    disabled: null == targetGuildId,
    icon: tmp20Result3,
    arrow: true,
    onPress: function handleSelectChannel() {
      let tmp5;
      if (null != targetGuildId) {
        const obj = {
          guildId: tmp,
          selectedChannel: tmp5,
          channelType,
          filterFn: canFollowIntoChannel,
          onSelect(id) {
              closure_1_4(targetGuildId, id.id);
            },
          onClose() {
              closure_1_4(targetGuildId, targetChannelId);
            }
        };
        tmp5 = targetChannel;
        const tmp4 = openChannelPickerDefault;
        if (targetChannel == null) {
          tmp5 = null;
        }
        tmp4(obj);
      }
    }
  };
  tmp20Result3 = null;
  if (null != targetChannel) {
    const obj20 = { size: tmp6(tmp7[24]).Icon.Sizes.CUSTOM, source: tmp6Result4.getChannelIcon(targetChannel), style: tmp.channelIcon };
    const Icon2 = tmp6(tmp7[24]).Icon;
    tmp6Result4 = tmp6(tmp7[25]);
    tmp20Result3 = tmp20(Icon2, obj20);
  }
  const obj21 = { spacing: 16, children: items7 };
  items7[1] = closure_16(TableRowGroup2, obj18);
  items6[2] = closure_17(Stack, obj21);
  const obj22 = { inset: true, children: intl7.string(tmp6(tmp7[27]).t.Z0quyN) };
  const FormHint = tmp6(tmp7[35]).FormHint;
  intl7 = tmp6(tmp7[27]).intl;
  items6[3] = closure_16(FormHint, obj22);
  let tmp20Result4 = null;
  if (null != tmp5) {
    const obj23 = { inset: true, children: tmp5 };
    tmp20Result4 = tmp20(tmp6(tmp7[35]).FormHint, obj23);
  }
  const obj24 = { children: items5 };
  items6[4] = tmp20Result4;
  const obj25 = { children: items8 };
  const ButtonGroup = tmp6(tmp7[36]).ButtonGroup;
  const obj26 = {
    text: intl8.string(tmp6(tmp7[27]).t["3aOv+h"]),
    disabled: !(null != targetGuildId && null != targetChannelId),
    loading: first,
    onPress: function handleFollow() {
      if (null != targetChannelId) {
        closure_6(true);
        const obj = ChannelFollowerActionCreatorsDefault;
        const channelFollower = obj.createChannelFollower(tmp, importDefault);
        const nextPromise = channelFollower.then(closure_5);
        nextPromise.catch((error) => {
          closure_1_6(false);
          if (error.body.code === constants.TOO_MANY_WEBHOOKS) {
            const intl2 = require("intl").intl;
            closure_1_7(intl2.string(require("intl").t["1eZ4aB"]));
          } else {
            const intl = require("intl").intl;
            closure_1_7(intl.string(require("intl").t.LgwhuN));
          }
        });
      }
    }
  };
  const Button = tmp6(tmp7[37]).Button;
  intl8 = tmp6(tmp7[27]).intl;
  items8 = [closure_16(Button, obj26), ];
  const obj27 = { text: intl9.string(tmp6(tmp7[27]).t["ETE/oC"]), variant: "secondary", onPress: onCancel };
  const Button2 = tmp6(tmp7[37]).Button;
  intl9 = tmp6(tmp7[27]).intl;
  items8[1] = closure_16(Button2, obj27);
  items6[5] = closure_17(ButtonGroup, obj25);
  items5[1] = closure_17(closure_5, obj12);
  items9 = [closure_17(BottomSheetScrollView, obj24), closure_16(tmp6(tmp7[39]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  return closure_17(BottomSheet, obj4);
};
