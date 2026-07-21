// Module ID: 10360
// Function ID: 79952
// Name: NewChannelFollower
// Dependencies: []
// Exports: default

// Module 10360 (NewChannelFollower)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ImageBackground: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[4]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[2]);
({ AbortCodes: closure_13, ChannelTypes: closure_14, Permissions: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { container: {}, header: {}, headerGuildIcon: {} };
obj = { borderRadius: importDefault(dependencyMap[11]).radii.xs, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH, height: 32 };
obj.headerChannelContainer = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.headerChannel = { borderRadius: importDefault(dependencyMap[11]).radii.xs, backgroundColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.headerChannelIcon = {};
obj.ctaHeader = {};
obj.ctaSubhead = {};
obj.channelIcon = { convert: 134, allowUnknown: null, <string:3307565226>: 1 };
let closure_18 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[11]).radii.xs, backgroundColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_BACKGROUND_SELECTED };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/channel_following/native/components/NewChannelFollower.tsx");

export default function NewChannelFollower(targetChannelId) {
  let sourceChannel;
  let sourceGuild;
  let targetChannel;
  let targetGuild;
  let targetGuildId;
  let tmp4;
  ({ sourceGuildId: closure_0, sourceChannelId: closure_1, targetGuildId } = targetChannelId);
  const dependencyMap = targetGuildId;
  targetChannelId = targetChannelId.targetChannelId;
  const callback = targetChannelId;
  ({ reopenActionSheetWithTarget: closure_4, onSuccess: closure_5 } = targetChannelId);
  let closure_10;
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let closure_6 = tmp2[1];
  [tmp4, closure_7] = callback(React.useState(null), 2);
  let obj = arg1(dependencyMap[12]);
  let bottomSheetRef = obj.useBottomSheetRef();
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  let closure_8 = bottomSheetRef;
  const tmp3 = callback(React.useState(null), 2);
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ sourceGuild: tmp11.getGuild(closure_0), targetGuild: tmp11.getGuild(targetGuildId) }));
  ({ targetGuild, sourceGuild } = stateFromStoresObject);
  let obj2 = arg1(dependencyMap[14]);
  const items1 = [closure_7];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ sourceChannel: store.getChannel(closure_1), targetChannel: store.getChannel(targetChannelId) }));
  ({ sourceChannel, targetChannel } = stateFromStoresObject1);
  let closure_9 = targetChannel;
  const tmp6 = importDefault(dependencyMap[13])();
  let stringResult = importDefault(dependencyMap[15])(targetChannel);
  closure_10 = tmp11;
  importDefault(dependencyMap[16])(() => {
    if (tmp11) {
      const current = bottomSheetRef.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  });
  let obj3 = arg1(dependencyMap[17]);
  if (obj3.isThemeDark(tmp6)) {
    let tmp13Result = tmp13(tmp14[18]);
  } else {
    tmp13Result = tmp13(tmp14[19]);
  }
  obj = { "Bool(true)": "Small", "Bool(true)": "sm", "Bool(true)": "Placeholder", ref: bottomSheetRef };
  obj = {};
  obj1 = { source: tmp13Result, style: tmp.header };
  obj2 = { style: tmp.header };
  obj3 = { style: tmp.headerGuildIcon, guild: sourceGuild };
  const items2 = [callback2(importDefault(dependencyMap[22]), obj3), ];
  const obj4 = { style: tmp.headerChannelContainer };
  const obj5 = { style: tmp.headerChannel };
  const obj6 = { size: arg1(dependencyMap[23]).Icon.Sizes.CUSTOM };
  let channelIcon = null;
  if (null != sourceChannel) {
    let obj12 = arg1(dependencyMap[24]);
    channelIcon = obj12.getChannelIcon(sourceChannel);
  }
  obj6.source = channelIcon;
  obj6.style = tmp.headerChannelIcon;
  const items3 = [callback2(arg1(dependencyMap[23]).Icon, obj6), callback2(arg1(dependencyMap[25]).Text, { children: importDefault(dependencyMap[15])(sourceChannel) })];
  obj5.children = items3;
  obj4.children = callback3(closure_5, obj5);
  items2[1] = callback2(closure_5, obj4);
  obj2.children = items2;
  obj1.children = callback3(closure_5, obj2);
  const items4 = [callback2(closure_6, obj1), ];
  const obj7 = { style: tmp.container };
  const obj8 = { delete: true, dispatch: true, raw: true, style: tmp.ctaHeader };
  const intl = arg1(dependencyMap[26]).intl;
  obj8.children = intl.string(arg1(dependencyMap[26]).t.mvPFbA);
  const items5 = [callback2(arg1(dependencyMap[25]).Text, obj8), , , , , ];
  const obj9 = { style: tmp.ctaSubhead };
  const intl2 = arg1(dependencyMap[26]).intl;
  obj9.children = intl2.string(arg1(dependencyMap[26]).t.kbpkxJ);
  items5[1] = callback2(arg1(dependencyMap[25]).Text, obj9);
  const obj10 = { spacing: 16 };
  const obj11 = {};
  const intl3 = arg1(dependencyMap[26]).intl;
  obj11.title = intl3.string(arg1(dependencyMap[26]).t.xFn72s);
  obj11.hasIcons = true;
  obj12 = {};
  if (null != targetGuild) {
    let name = targetGuild.name;
  } else {
    const intl4 = arg1(dependencyMap[26]).intl;
    name = intl4.string(arg1(dependencyMap[26]).t.XqMe3N);
  }
  obj12.label = name;
  let tmp28 = null;
  if (null != targetGuild) {
    const obj13 = { guild: targetGuild, size: arg1(dependencyMap[22]).GuildIconSizes.XSMALL };
    tmp28 = callback2(importDefault(dependencyMap[22]), obj13);
    const tmp32 = importDefault(dependencyMap[22]);
  }
  obj12.icon = tmp28;
  obj12.arrow = true;
  obj12.onPress = function onPress() {
    let obj = callback2(targetGuildId[30]);
    obj = {};
    const intl = callback(targetGuildId[26]).intl;
    obj.title = intl.string(callback(targetGuildId[26]).t.etZ9tX);
    const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const array = new Array();
    obj.items = flattenedGuildIds.reduce((arr, guildId) => {
      const guild = guild.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_11.can(constants.MANAGE_WEBHOOKS, guild);
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
      const defaultChannel = defaultChannel.getDefaultChannel(arg0);
      let id;
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
      closure_4(arg0, id);
    };
    obj.onClose = function onClose() {
      callback(closure_2, closure_3);
    };
    obj.hasIcons = false;
    obj.openLazy(callback(targetGuildId[32])(targetGuildId[31], targetGuildId.paths), "NewChannelFollowerGuildPicker", obj);
  };
  obj11.children = callback2(arg1(dependencyMap[29]).TableRow, obj12);
  const items6 = [callback2(arg1(dependencyMap[28]).TableRowGroup, obj11), ];
  const obj14 = {};
  const intl5 = arg1(dependencyMap[26]).intl;
  obj14.title = intl5.string(arg1(dependencyMap[26]).t.PDn2fR);
  obj14.hasIcons = true;
  const obj15 = {};
  if (null == stringResult) {
    const intl6 = arg1(dependencyMap[26]).intl;
    stringResult = intl6.string(arg1(dependencyMap[26]).t.XqMe3N);
  }
  obj15.label = stringResult;
  obj15.disabled = null == targetGuildId;
  let tmp37 = null;
  if (null != targetChannel) {
    const obj16 = { size: arg1(dependencyMap[23]).Icon.Sizes.CUSTOM, source: arg1(dependencyMap[24]).getChannelIcon(targetChannel), style: tmp.channelIcon };
    tmp37 = callback2(arg1(dependencyMap[23]).Icon, obj16);
    const obj24 = arg1(dependencyMap[24]);
  }
  obj15.icon = tmp37;
  obj15.arrow = true;
  obj15.onPress = function onPress() {
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
        let canResult = channel.type === constants.GUILD_TEXT;
        if (canResult) {
          canResult = closure_11.can(constants2.MANAGE_WEBHOOKS, channel);
        }
        return canResult;
      };
      obj.onSelect = function onSelect(id) {
        callback(closure_2, id.id);
      };
      obj.onClose = function onClose() {
        callback(closure_2, closure_3);
      };
      callback2(targetGuildId[33])(obj);
      const tmp3 = callback2(targetGuildId[33]);
    }
  };
  obj14.children = callback2(arg1(dependencyMap[29]).TableRow, obj15);
  items6[1] = callback2(arg1(dependencyMap[28]).TableRowGroup, obj14);
  obj10.children = items6;
  items5[2] = callback3(arg1(dependencyMap[27]).Stack, obj10);
  const obj17 = { inset: true };
  const intl7 = arg1(dependencyMap[26]).intl;
  obj17.children = intl7.string(arg1(dependencyMap[26]).t.Z0quyN);
  items5[3] = callback2(arg1(dependencyMap[34]).FormHint, obj17);
  let tmp41 = null;
  if (null != tmp4) {
    const obj18 = { inset: true, children: tmp4 };
    tmp41 = callback2(arg1(dependencyMap[34]).FormHint, obj18);
  }
  items5[4] = tmp41;
  const obj19 = {};
  const obj20 = {};
  const intl8 = arg1(dependencyMap[26]).intl;
  obj20.text = intl8.string(arg1(dependencyMap[26]).t.3aOv+h);
  obj20.disabled = !(null != targetGuildId && null != targetChannelId);
  obj20.loading = tmp2[0];
  obj20.onPress = function onPress() {
    if (null != targetChannelId) {
      callback3(true);
      const channelFollower = callback2(targetGuildId[37]).createChannelFollower(targetChannelId, callback2);
      const obj = callback2(targetGuildId[37]);
      channelFollower.then(closure_5).catch((body) => {
        callback2(false);
        if (body.body.code === constants.TOO_MANY_WEBHOOKS) {
          const intl2 = callback(closure_2[26]).intl;
          callback3(intl2.string(callback(closure_2[26]).t.1eZ4aB));
        } else {
          const intl = callback(closure_2[26]).intl;
          callback3(intl.string(callback(closure_2[26]).t.LgwhuN));
        }
      });
      const nextPromise = channelFollower.then(closure_5);
    }
  };
  const items7 = [callback2(arg1(dependencyMap[36]).Button, obj20), ];
  const obj21 = {};
  const intl9 = arg1(dependencyMap[26]).intl;
  obj21.text = intl9.string(arg1(dependencyMap[26]).t.ETE/oC);
  obj21.variant = "secondary";
  obj21.onPress = targetChannelId.onCancel;
  items7[1] = callback2(arg1(dependencyMap[36]).Button, obj21);
  obj19.children = items7;
  items5[5] = callback3(arg1(dependencyMap[35]).ButtonGroup, obj19);
  obj7.children = items5;
  items4[1] = callback3(closure_5, obj7);
  obj.children = items4;
  const items8 = [callback3(arg1(dependencyMap[21]).BottomSheetScrollView, obj), callback2(arg1(dependencyMap[38]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetRef.bottomSheetClose })];
  obj.children = items8;
  return callback3(arg1(dependencyMap[20]).BottomSheet, obj);
};
