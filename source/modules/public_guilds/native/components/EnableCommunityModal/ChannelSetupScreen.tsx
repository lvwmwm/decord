// Module ID: 16246
// Function ID: 125523
// Name: ChannelSetupScreen
// Dependencies: []
// Exports: default

// Module 16246 (ChannelSetupScreen)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[4]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const CREATE_NEW_CHANNEL_VALUE = arg1(dependencyMap[7]).CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = arg1(dependencyMap[8]).ChannelTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[10]);
  const token = obj.useToken(importDefault(dependencyMap[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[12]);
  const enableCommunitySharedStyles = obj1.useEnableCommunitySharedStyles();
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_6];
  const guild = obj2.useStateFromStoresObject(items, () => props.getProps()).guild;
  const arg1 = guild;
  let obj3 = arg1(dependencyMap[13]);
  const items1 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = {};
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj.rulesChannel = store.getChannel(rulesChannelId);
    let prop;
    if (null != guild) {
      prop = guild.publicUpdatesChannelId;
    }
    obj.publicUpdatesChannel = store.getChannel(prop);
    return obj;
  });
  const rulesChannel = stateFromStoresObject.rulesChannel;
  const importDefault = rulesChannel;
  const publicUpdatesChannel = stateFromStoresObject.publicUpdatesChannel;
  const dependencyMap = publicUpdatesChannel;
  let stringResult = importDefault(dependencyMap[14])(rulesChannel, true);
  if (null == stringResult) {
    const intl = arg1(dependencyMap[15]).intl;
    stringResult = intl.string(arg1(dependencyMap[15]).t.Cla0re);
  }
  let stringResult1 = importDefault(dependencyMap[14])(publicUpdatesChannel, true);
  if (null == stringResult1) {
    const intl2 = arg1(dependencyMap[15]).intl;
    stringResult1 = intl2.string(arg1(dependencyMap[15]).t.Cla0re);
  }
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const items2 = [id];
  const callback = React.useCallback(() => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const channels = channels.getChannels(id);
    const obj = { value: closure_12 };
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.label = intl.string(guild(publicUpdatesChannel[15]).t.Cla0re);
    let items = [];
    if (null != channels) {
      const found = channels[closure_9].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: callback(closure_2[14]).computeChannelName(channel, closure_11, closure_10, true) };
        return obj;
      });
      const arr2 = channels[closure_9];
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const React = callback;
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = React.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = {};
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.title = intl.string(guild(publicUpdatesChannel[15]).t.Yr6nGx);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(rulesChannelId) {
      let obj = callback(closure_2[20]);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      callback(closure_2[17]).hideActionSheet();
    };
    let id;
    if (null != rulesChannel) {
      id = rulesChannel.id;
    }
    if (null == id) {
      id = closure_12;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectRulesChannel", obj);
  }, items3);
  const callback2 = React.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = {};
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.title = intl.string(guild(publicUpdatesChannel[15]).t.VqhxxN);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      let obj = callback(closure_2[20]);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      callback(closure_2[17]).hideActionSheet();
    };
    let id;
    if (null != publicUpdatesChannel) {
      id = publicUpdatesChannel.id;
    }
    if (null == id) {
      id = closure_12;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectUpdatesChannel", obj);
  }, items4);
  obj = { headerRef: ref, disableNextStep: false, currentStep: arg1(dependencyMap[21]).EnableCommunityModalSteps.STEP_2 };
  obj = { style: enableCommunitySharedStyles.content };
  obj1 = { "Bool(false)": 2137542913, "Bool(false)": 1359050337, "Bool(false)": 507643607, "Bool(false)": 2113930363, ref };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj1.children = intl3.formatToPlainString(arg1(dependencyMap[15]).t.tInpJj, { constructor: -1450377214, height: 2018574338 });
  const items5 = [callback(arg1(dependencyMap[22]).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: importDefault(dependencyMap[16])().channelSetup };
  items5[1] = callback(closure_4, obj2);
  obj3 = { style: enableCommunitySharedStyles.header };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj3.children = intl4.string(arg1(dependencyMap[15]).t.YtXpEh);
  items5[2] = callback(arg1(dependencyMap[22]).Heading, obj3);
  const obj4 = { delete: true, dispatch: true, raw: true, style: enableCommunitySharedStyles.description };
  const intl5 = arg1(dependencyMap[15]).intl;
  obj4.children = intl5.string(arg1(dependencyMap[15]).t.J/fYR8);
  items5[3] = callback(arg1(dependencyMap[22]).Text, obj4);
  obj.children = items5;
  const items6 = [callback2(closure_5, obj), ];
  const obj5 = { spacing: 24, style: { paddingHorizontal: token } };
  const obj6 = {};
  const intl6 = arg1(dependencyMap[15]).intl;
  obj6.helperText = intl6.string(arg1(dependencyMap[15]).t.+Af+Vw);
  obj6.hasIcons = false;
  const obj7 = {};
  const intl7 = arg1(dependencyMap[15]).intl;
  obj7.label = intl7.string(arg1(dependencyMap[15]).t.dYrhCO);
  const obj8 = { text: stringResult };
  obj7.trailing = callback(arg1(dependencyMap[25]).TableRow.TrailingText, obj8);
  obj7.arrow = true;
  obj7.onPress = callback1;
  obj6.children = callback(arg1(dependencyMap[25]).TableRow, obj7);
  const items7 = [callback(arg1(dependencyMap[24]).TableRowGroup, obj6), ];
  const obj9 = {};
  const intl8 = arg1(dependencyMap[15]).intl;
  obj9.helperText = intl8.string(arg1(dependencyMap[15]).t.ZFeonu);
  obj9.hasIcons = false;
  const obj10 = {};
  const intl9 = arg1(dependencyMap[15]).intl;
  obj10.label = intl9.string(arg1(dependencyMap[15]).t.vAyDGU);
  const obj11 = { text: stringResult1 };
  obj10.trailing = callback(arg1(dependencyMap[25]).TableRow.TrailingText, obj11);
  obj10.arrow = true;
  obj10.onPress = callback2;
  obj9.children = callback(arg1(dependencyMap[25]).TableRow, obj10);
  items7[1] = callback(arg1(dependencyMap[24]).TableRowGroup, obj9);
  obj5.children = items7;
  items6[1] = callback2(arg1(dependencyMap[23]).Stack, obj5);
  obj.children = items6;
  return callback2(arg1(dependencyMap[21]).EnableCommunityModalScreen, obj);
};
