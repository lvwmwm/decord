// Module ID: 10371
// Function ID: 80015
// Name: NewChannelFollower
// Dependencies: [57, 31, 27, 1348, 1907, 1838, 3758, 4970, 653, 33, 4130, 689, 7186, 4066, 566, 4320, 4559, 3976, 10372, 10373, 5187, 5189, 5515, 1273, 4593, 4126, 1212, 4541, 5503, 5165, 4098, 8382, 1934, 10374, 7495, 4965, 4543, 9862, 5446, 2]
// Exports: default

// Module 10371 (NewChannelFollower)
import _slicedToArray from "_slicedToArray";
import ItemSelectorActionSheet from "ItemSelectorActionSheet";
import get_ActivityIndicator from "Stack";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_9 } from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "openChannelPicker";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_5, ImageBackground: closure_6 } = get_ActivityIndicator);
({ AbortCodes: closure_13, ChannelTypes: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 24 }, header: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 96 }, headerGuildIcon: { width: 40, marginRight: 16 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, height: 32 };
_createForOfIteratorHelperLoose.headerChannelContainer = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, flexDirection: "row", minWidth: 160, paddingHorizontal: 8, paddingVertical: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
_createForOfIteratorHelperLoose.headerChannel = obj1;
_createForOfIteratorHelperLoose.headerChannelIcon = { height: 20, width: 20, marginRight: 8, opacity: 0.6 };
_createForOfIteratorHelperLoose.ctaHeader = { flex: 1, textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.ctaSubhead = { flex: 1, textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.channelIcon = { height: 16, width: 16, opacity: 0.6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  let ItemSelectorActionSheet;
  let closure_5;
  let _isNativeReflectConstruct;
  let importDefault;
  let require;
  let sourceChannel;
  let sourceGuild;
  let targetChannel;
  let targetGuild;
  let targetGuildId;
  let tmp4;
  ({ sourceGuildId: require, sourceChannelId: importDefault, targetGuildId } = targetChannelId);
  targetChannelId = targetChannelId.targetChannelId;
  ({ reopenActionSheetWithTarget: ItemSelectorActionSheet, onSuccess: closure_5 } = targetChannelId);
  let c10;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = targetChannelId(React.useState(false), 2);
  let closure_6 = tmp2[1];
  [tmp4, _isNativeReflectConstruct] = targetChannelId(React.useState(null), 2);
  let obj = require(targetGuildId[12]);
  let bottomSheetRef = obj.useBottomSheetRef();
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  let tmp3 = targetChannelId(React.useState(null), 2);
  let obj1 = require(targetGuildId[14]);
  const items = [c10];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ sourceGuild: _undefined.getGuild(closure_0), targetGuild: _undefined.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = require(targetGuildId[14]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ sourceChannel: outer1_7.getChannel(closure_1), targetChannel: outer1_7.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  let tmp6 = importDefault(targetGuildId[13])();
  let stringResult = importDefault(targetGuildId[15])(targetChannel);
  c10 = tmp11;
  importDefault(targetGuildId[16])(() => {
    if (c10) {
      const current = bottomSheetRef.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  });
  let obj3 = require(targetGuildId[17]);
  if (obj3.isThemeDark(tmp6)) {
    let tmp13Result = tmp13(tmp14[18]);
  } else {
    tmp13Result = tmp13(tmp14[19]);
  }
  obj = { handleDisabled: true, startExpanded: true, scrollable: true, ref: bottomSheetRef };
  obj = {};
  obj1 = { source: tmp13Result, style: tmp.header };
  obj2 = { style: tmp.header };
  obj3 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  const items2 = [callback(importDefault(targetGuildId[22]), obj3), ];
  const obj4 = { style: tmp.headerChannelContainer };
  const obj5 = { style: tmp.headerChannel };
  const obj6 = { size: require(targetGuildId[23]).Icon.Sizes.CUSTOM };
  let channelIcon = null;
  if (null != sourceChannel) {
    let obj12 = require(targetGuildId[24]);
    channelIcon = obj12.getChannelIcon(sourceChannel);
  }
  obj6.source = channelIcon;
  obj6.style = tmp.headerChannelIcon;
  const items3 = [callback(require(targetGuildId[23]).Icon, obj6), ];
  const obj7 = { lineClamp: 1, variant: "text-sm/medium", children: importDefault(targetGuildId[15])(sourceChannel) };
  items3[1] = callback(require(targetGuildId[25]).Text, obj7);
  obj5.children = items3;
  obj4.children = callback2(closure_5, obj5);
  items2[1] = callback(closure_5, obj4);
  obj2.children = items2;
  obj1.children = callback2(closure_5, obj2);
  const items4 = [callback(closure_6, obj1), ];
  const obj8 = { style: tmp.container };
  const obj9 = { style: tmp.ctaHeader, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  let intl = require(targetGuildId[26]).intl;
  obj9.children = intl.string(require(targetGuildId[26]).t.mvPFbA);
  const items5 = [callback(require(targetGuildId[25]).Text, obj9), , , , , ];
  const obj10 = { style: tmp.ctaSubhead, variant: "text-sm/medium", color: "text-default" };
  let intl2 = require(targetGuildId[26]).intl;
  obj10.children = intl2.string(require(targetGuildId[26]).t.kbpkxJ);
  items5[1] = callback(require(targetGuildId[25]).Text, obj10);
  const obj11 = { spacing: 16 };
  obj12 = {};
  const intl3 = require(targetGuildId[26]).intl;
  obj12.title = intl3.string(require(targetGuildId[26]).t.xFn72s);
  obj12.hasIcons = true;
  const obj13 = {};
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = require(targetGuildId[26]).intl;
    name = intl4.string(require(targetGuildId[26]).t.XqMe3N);
  }
  obj13.label = name;
  let tmp28 = null;
  if (null != targetGuild) {
    const obj14 = { guild: targetGuild, size: require(targetGuildId[22]).GuildIconSizes.XSMALL };
    tmp28 = callback(importDefault(targetGuildId[22]), obj14);
    const tmp32 = importDefault(targetGuildId[22]);
  }
  obj13.icon = tmp28;
  obj13.arrow = true;
  obj13.onPress = function onPress() {
    let obj = outer1_1(targetGuildId[30]);
    obj = {};
    const intl = outer1_0(targetGuildId[26]).intl;
    obj.title = intl.string(outer1_0(targetGuildId[26]).t.etZ9tX);
    const flattenedGuildIds = outer1_12.getFlattenedGuildIds();
    const array = new Array();
    obj.items = flattenedGuildIds.reduce((arr, guildId) => {
      guild = guild.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = outer2_11.can(outer2_15.MANAGE_WEBHOOKS, guild);
      }
      if (canResult) {
        const obj = {};
        ({ name: obj.label, id: obj.value } = guild);
        arr.push(obj);
      }
      return arr;
    }, array);
    let tmp3;
    if (null != targetGuildId) {
      tmp3 = targetGuildId;
    }
    obj.selectedItem = tmp3;
    obj.onItemSelect = function onItemSelect(arg0) {
      const defaultChannel = bottomSheetRef.getDefaultChannel(arg0);
      let id;
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
      outer1_4(arg0, id);
    };
    obj.onClose = function onClose() {
      outer1_4(outer1_2, outer1_3);
    };
    obj.hasIcons = false;
    obj.openLazy(outer1_0(targetGuildId[32])(targetGuildId[31], targetGuildId.paths), "NewChannelFollowerGuildPicker", obj);
  };
  obj12.children = callback(require(targetGuildId[29]).TableRow, obj13);
  const items6 = [callback(require(targetGuildId[28]).TableRowGroup, obj12), ];
  const obj15 = {};
  const intl5 = require(targetGuildId[26]).intl;
  obj15.title = intl5.string(require(targetGuildId[26]).t.PDn2fR);
  obj15.hasIcons = true;
  const obj16 = {};
  if (null == stringResult) {
    const intl6 = require(targetGuildId[26]).intl;
    stringResult = intl6.string(require(targetGuildId[26]).t.XqMe3N);
  }
  obj16.label = stringResult;
  obj16.disabled = null == targetGuildId;
  let tmp37 = null;
  if (null != targetChannel) {
    const obj17 = { size: require(targetGuildId[23]).Icon.Sizes.CUSTOM, source: require(targetGuildId[24]).getChannelIcon(targetChannel), style: tmp.channelIcon };
    tmp37 = callback(require(targetGuildId[23]).Icon, obj17);
    const obj25 = require(targetGuildId[24]);
  }
  obj16.icon = tmp37;
  obj16.arrow = true;
  obj16.onPress = function onPress() {
    if (null != targetGuildId) {
      const obj = { guildId: targetGuildId };
      let tmp6 = null;
      if (null != targetChannel) {
        tmp6 = targetChannel;
      }
      obj.selectedChannel = tmp6;
      obj.channelType = targetChannel;
      obj.filterFn = function filterFn(channel) {
        channel = channel.channel;
        let canResult = channel.type === outer2_14.GUILD_TEXT;
        if (canResult) {
          canResult = outer2_11.can(outer2_15.MANAGE_WEBHOOKS, channel);
        }
        return canResult;
      };
      obj.onSelect = function onSelect(id) {
        outer1_4(outer1_2, id.id);
      };
      obj.onClose = function onClose() {
        outer1_4(outer1_2, outer1_3);
      };
      outer1_1(targetGuildId[33])(obj);
      const tmp3 = outer1_1(targetGuildId[33]);
    }
  };
  obj15.children = callback(require(targetGuildId[29]).TableRow, obj16);
  items6[1] = callback(require(targetGuildId[28]).TableRowGroup, obj15);
  obj11.children = items6;
  items5[2] = callback2(require(targetGuildId[27]).Stack, obj11);
  const obj18 = { inset: true };
  const intl7 = require(targetGuildId[26]).intl;
  obj18.children = intl7.string(require(targetGuildId[26]).t.Z0quyN);
  items5[3] = callback(require(targetGuildId[34]).FormHint, obj18);
  let tmp41 = null;
  if (null != tmp4) {
    const obj19 = { inset: true, children: tmp4 };
    tmp41 = callback(require(targetGuildId[34]).FormHint, obj19);
  }
  items5[4] = tmp41;
  const obj20 = {};
  const obj21 = {};
  const intl8 = require(targetGuildId[26]).intl;
  obj21.text = intl8.string(require(targetGuildId[26]).t["3aOv+h"]);
  obj21.disabled = !(null != targetGuildId && null != targetChannelId);
  obj21.loading = tmp2[0];
  obj21.onPress = function onPress() {
    if (null != targetChannelId) {
      callback(true);
      const channelFollower = outer1_1(targetGuildId[37]).createChannelFollower(targetChannelId, closure_1);
      const obj = outer1_1(targetGuildId[37]);
      channelFollower.then(closure_5).catch((body) => {
        outer1_6(false);
        if (body.body.code === outer2_13.TOO_MANY_WEBHOOKS) {
          const intl2 = outer2_0(targetGuildId[26]).intl;
          outer1_7(intl2.string(outer2_0(targetGuildId[26]).t["1eZ4aB"]));
        } else {
          const intl = outer2_0(targetGuildId[26]).intl;
          outer1_7(intl.string(outer2_0(targetGuildId[26]).t.LgwhuN));
        }
      });
      const nextPromise = channelFollower.then(closure_5);
    }
  };
  const items7 = [callback(require(targetGuildId[36]).Button, obj21), ];
  const obj22 = {};
  const intl9 = require(targetGuildId[26]).intl;
  obj22.text = intl9.string(require(targetGuildId[26]).t["ETE/oC"]);
  obj22.variant = "secondary";
  obj22.onPress = targetChannelId.onCancel;
  items7[1] = callback(require(targetGuildId[36]).Button, obj22);
  obj20.children = items7;
  items5[5] = callback2(require(targetGuildId[35]).ButtonGroup, obj20);
  obj8.children = items5;
  items4[1] = callback2(closure_5, obj8);
  obj.children = items4;
  const items8 = [callback2(require(targetGuildId[21]).BottomSheetScrollView, obj), callback(require(targetGuildId[38]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef.bottomSheetClose })];
  obj.children = items8;
  return callback2(require(targetGuildId[20]).BottomSheet, obj);
};
