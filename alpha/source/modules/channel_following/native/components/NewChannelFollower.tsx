// Module ID: 11354
// Function ID: 11355
// Name: NewChannelFollower
// Dependencies: [32, 19, 17, 5023, 5019, 5100, 5041, 5102, 6852, 1072, 21, 5170, 575, 8833, 5399, 504, 5806, 5751, 5177, 11355, 11356, 5418, 5422, 5872, 7045, 1187, 8695, 5781, 1113, 6185, 7151, 7063, 5404, 9100, 2118, 11357, 8267, 6847, 5788, 11360, 5753, 2]
// Exports: default

// Module 11354 (NewChannelFollower)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import GuildChannelStore2 from "GuildChannelStore" /* 5100 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import openChannelPickerDefault from "openChannelPicker" /* 11357 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11360 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import SortedGuildStore from "SortedGuildStore" /* 6852 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let guild;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
function canFollowIntoChannel(channel) {
  channel = channel.channel;
  const hasItem = set.has(channel.type) && PermissionStore.can(constants.MANAGE_WEBHOOKS, channel);
  return hasItem;
}
({ View: hasOwnProperty, StyleSheet } = react_native);
const set = ChannelRecord.GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
let closure_9 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
({ AbortCodes: map1, Permissions: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerBackground: obj2, headerContent: obj3, headerGuildIcon: { width: 40, marginRight: 16 }, headerChannelContainer: obj4, headerChannel: obj5, headerChannelIcon: { height: 20, width: 20, marginRight: 8, opacity: 0.6 }, headerChannelName: { flexShrink: 1 }, ctaHeader: { flex: 1, textAlign: "center", marginBottom: 8 }, ctaSubhead: { flex: 1, textAlign: "center", marginBottom: 8 }, channelIcon: { height: 16, width: 16, opacity: 0.6 } };
obj2 = { width: undefined, height: 96 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexShrink: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 32 };
obj5 = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
let closure_17 = createStyles(obj);
const result = size.fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  let TableRow;
  let TableRow2;
  let c7;
  let channelIcon;
  let channelType;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let items9;
  let name;
  let obj10;
  let obj17;
  let obj20;
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
  let closure_10;
  const onCancel = targetChannelId.onCancel;
  let tmp = closure_17();
  let tmp2 = targetChannelId(react.useState(false), 2);
  let closure_6 = tmp2[1];
  const first = tmp2[0];
  let tmp4 = targetChannelId(react.useState(null), 2);
  [tmp5, c7] = tmp4;
  const tmp6 = require;
  const tmp7 = targetGuildId;
  let obj = require("react");
  const bottomSheetRef1 = obj.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const items = [closure_10];
  const tmp10 = require("useTheme")();
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { sourceGuild: GuildStore.getGuild(require), targetGuild: GuildStore.getGuild(targetGuildId) };
    return obj;
  });
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  const items1 = [c7];
  const obj3 = require("get initialized");
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const obj = { sourceChannel: ChannelStore.getChannel(importDefault), targetChannel: ChannelStore.getChannel(targetChannelId) };
    return obj;
  });
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  const tmp13 = require("useChannelName")(sourceChannel);
  const tmp14 = require("useChannelName")(targetChannel);
  closure_10 = tmp15;
  require("useMountEffect")(() => {
    const tmp = closure_10;
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
  const obj4 = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef, children: items10 };
  const BottomSheet = tmp6(tmp7[21]).BottomSheet;
  const obj5 = { style: tmp.header, children: items2 };
  const BottomSheetScrollView = tmp6(tmp7[22]).BottomSheetScrollView;
  items2 = [, ];
  const obj6 = { source: tmp9Result, style: tmp.headerBackground };
  items2[0] = closure_15(require("FastImage"), obj6);
  const obj7 = { style: items3, children: items4 };
  items3 = [, ];
  ({ header: arr4[0], headerContent: arr4[1] } = tmp);
  items4 = [, ];
  const obj8 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  items4[0] = closure_15(require("GuildIcon"), obj8);
  const obj9 = { style: tmp.headerChannelContainer, children: closure_16(closure_5, obj10) };
  obj10 = { style: tmp.headerChannel, children: items5 };
  const obj11 = { size: tmp6(tmp7[25]).Icon.Sizes.CUSTOM, source: channelIcon, style: tmp.headerChannelIcon };
  const Icon = tmp6(tmp7[25]).Icon;
  channelIcon = null;
  if (null != sourceChannel) {
    const tmp6Result3 = tmp6(tmp7[26]);
    channelIcon = tmp6Result3.getChannelIcon(sourceChannel);
  }
  items5 = [closure_15(Icon, obj11), ];
  const obj12 = { style: tmp.headerChannelName, lineClamp: 1, variant: "body-sm/medium", children: tmp13 };
  items5[1] = closure_15(tmp6(tmp7[27]).Text, obj12);
  items4[1] = closure_15(closure_5, obj9);
  items2[1] = closure_16(closure_5, obj7);
  const items6 = [closure_16(closure_5, obj5), ];
  const obj13 = { style: tmp.container, children: items7 };
  const obj14 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp6(tmp7[28]).t.mvPFbA) };
  const Text = tmp6(tmp7[27]).Text;
  intl = tmp6(tmp7[28]).intl;
  items7 = [closure_15(Text, obj14), , , , , ];
  const obj15 = { style: tmp.ctaSubhead, variant: "body-sm/medium", color: "text-default", children: intl2.string(tmp6(tmp7[28]).t.kbpkxJ) };
  const Text2 = tmp6(tmp7[27]).Text;
  intl2 = tmp6(tmp7[28]).intl;
  items7[1] = closure_15(Text2, obj15);
  const Stack = tmp6(tmp7[29]).Stack;
  const obj16 = { title: intl3.string(tmp6(tmp7[28]).t.xFn72s), hasIcons: true, children: closure_15(TableRow, obj17) };
  const TableRowGroup = tmp6(tmp7[30]).TableRowGroup;
  intl3 = tmp6(tmp7[28]).intl;
  TableRow = tmp6(tmp7[31]).TableRow;
  if (null != targetGuild) {
    name = targetGuild.name;
  } else {
    const intl4 = tmp6(tmp7[28]).intl;
    name = intl4.string(tmp6(tmp7[28]).t.XqMe3N);
  }
  obj17 = {
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
          const canResult = null != guild && closure_1_11.can(constants.MANAGE_WEBHOOKS, guild);
          if (canResult) {
            const obj = { label: null, value: null };
            ({ name: obj.label, id: obj.value } = guild);
            arr.push(obj);
          }
          return arr;
        }, array),
        selectedItem: tmp4,
        onItemSelect(arg0) {
          const firstChannelOfType = bottomSheetRef.getFirstChannelOfType(arg0, canFollowIntoChannel, targetChannel);
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
      const tmp2 = asyncRequire(9100, dependencyMap.paths);
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
    const obj18 = { guild: targetGuild, size: tmp6(tmp7[24]).GuildIconSizes.XSMALL };
    const tmp9Result2 = require("GuildIcon");
    tmp20Result = tmp20(tmp9Result2, obj18);
  }
  const items8 = [closure_15(TableRowGroup, obj16), ];
  const obj19 = { title: intl5.string(tmp6(tmp7[28]).t.PDn2fR), hasIcons: true, children: closure_15(TableRow2, obj20) };
  const TableRowGroup2 = tmp6(tmp7[30]).TableRowGroup;
  intl5 = tmp6(tmp7[28]).intl;
  let stringResult = tmp14;
  TableRow2 = tmp6(tmp7[31]).TableRow;
  if (tmp14 == null) {
    const intl6 = tmp6(tmp7[28]).intl;
    stringResult = intl6.string(tmp6(tmp7[28]).t.XqMe3N);
  }
  obj20 = {
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
    const obj21 = { size: tmp6(tmp7[25]).Icon.Sizes.CUSTOM, source: tmp6Result4.getChannelIcon(targetChannel), style: tmp.channelIcon };
    const Icon2 = tmp6(tmp7[25]).Icon;
    tmp6Result4 = tmp6(tmp7[26]);
    tmp20Result3 = tmp20(Icon2, obj21);
  }
  const obj22 = { spacing: 16, children: items8 };
  items8[1] = closure_15(TableRowGroup2, obj19);
  items7[2] = closure_16(Stack, obj22);
  const obj23 = { inset: true, children: intl7.string(tmp6(tmp7[28]).t.Z0quyN) };
  const FormHint = tmp6(tmp7[36]).FormHint;
  intl7 = tmp6(tmp7[28]).intl;
  items7[3] = closure_15(FormHint, obj23);
  let tmp20Result4 = null;
  if (null != tmp5) {
    const obj24 = { inset: true, children: tmp5 };
    tmp20Result4 = tmp20(tmp6(tmp7[36]).FormHint, obj24);
  }
  const obj25 = { children: items6 };
  items7[4] = tmp20Result4;
  const obj26 = { children: items9 };
  const ButtonGroup = tmp6(tmp7[37]).ButtonGroup;
  const obj27 = {
    text: intl8.string(tmp6(tmp7[28]).t["3aOv+h"]),
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
  const Button = tmp6(tmp7[38]).Button;
  intl8 = tmp6(tmp7[28]).intl;
  items9 = [closure_15(Button, obj27), ];
  const obj28 = { text: intl9.string(tmp6(tmp7[28]).t["ETE/oC"]), variant: "secondary", onPress: onCancel };
  const Button2 = tmp6(tmp7[38]).Button;
  intl9 = tmp6(tmp7[28]).intl;
  items9[1] = closure_15(Button2, obj28);
  items7[5] = closure_16(ButtonGroup, obj26);
  items6[1] = closure_16(closure_5, obj13);
  items10 = [closure_16(BottomSheetScrollView, obj25), closure_15(tmp6(tmp7[40]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  return closure_16(BottomSheet, obj4);
};
