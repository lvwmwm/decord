// Module ID: 16371
// Function ID: 127739
// Name: ChannelSetupScreen
// Dependencies: [31, 27, 8439, 1348, 1907, 3767, 1849, 7722, 653, 33, 3834, 689, 16360, 566, 4320, 1212, 16361, 4098, 8382, 1934, 8438, 16358, 4126, 4541, 5503, 5165, 2]
// Exports: default

// Module 16371 (ChannelSetupScreen)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_9 } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { CREATE_NEW_CHANNEL_VALUE } from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import { ChannelTypes } from "ME";
import jsxProd from "jsxProd";

let closure_14;
let closure_15;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  const ref = callback.useRef(null);
  let obj = guild(publicUpdatesChannel[10]);
  const token = obj.useToken(rulesChannel(publicUpdatesChannel[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = guild(publicUpdatesChannel[12]);
  const enableCommunitySharedStyles = obj1.useEnableCommunitySharedStyles();
  let obj2 = guild(publicUpdatesChannel[13]);
  let items = [_isNativeReflectConstruct];
  guild = obj2.useStateFromStoresObject(items, () => outer1_6.getProps()).guild;
  let obj3 = guild(publicUpdatesChannel[13]);
  let items1 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = {};
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj.rulesChannel = outer1_7.getChannel(rulesChannelId);
    let prop;
    if (null != guild) {
      prop = guild.publicUpdatesChannelId;
    }
    obj.publicUpdatesChannel = outer1_7.getChannel(prop);
    return obj;
  });
  rulesChannel = stateFromStoresObject.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject.publicUpdatesChannel;
  let stringResult = rulesChannel(publicUpdatesChannel[14])(rulesChannel, true);
  if (null == stringResult) {
    let intl = guild(publicUpdatesChannel[15]).intl;
    stringResult = intl.string(guild(publicUpdatesChannel[15]).t.Cla0re);
  }
  let stringResult1 = rulesChannel(publicUpdatesChannel[14])(publicUpdatesChannel, true);
  if (null == stringResult1) {
    const intl2 = guild(publicUpdatesChannel[15]).intl;
    stringResult1 = intl2.string(guild(publicUpdatesChannel[15]).t.Cla0re);
  }
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const items2 = [id];
  callback = callback.useCallback(() => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const channels = outer1_8.getChannels(id);
    let obj = { value: outer1_12 };
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.label = intl.string(guild(publicUpdatesChannel[15]).t.Cla0re);
    let items = [];
    if (null != channels) {
      const found = channels[outer1_9].filter((channel) => channel.channel.type === outer2_13.GUILD_TEXT);
      items = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: guild(publicUpdatesChannel[14]).computeChannelName(channel, outer2_11, outer2_10, true) };
        return obj;
      });
      const arr2 = channels[outer1_9];
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = callback.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = {};
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.title = intl.string(guild(publicUpdatesChannel[15]).t.Yr6nGx);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(rulesChannelId) {
      let obj = rulesChannel(publicUpdatesChannel[20]);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      rulesChannel(publicUpdatesChannel[17]).hideActionSheet();
    };
    let id;
    if (null != rulesChannel) {
      id = rulesChannel.id;
    }
    if (null == id) {
      id = outer1_12;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectRulesChannel", obj);
  }, items3);
  const callback2 = callback.useCallback(() => {
    let obj = rulesChannel(publicUpdatesChannel[17]);
    obj = {};
    const intl = guild(publicUpdatesChannel[15]).intl;
    obj.title = intl.string(guild(publicUpdatesChannel[15]).t.VqhxxN);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      let obj = rulesChannel(publicUpdatesChannel[20]);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      rulesChannel(publicUpdatesChannel[17]).hideActionSheet();
    };
    let id;
    if (null != publicUpdatesChannel) {
      id = publicUpdatesChannel.id;
    }
    if (null == id) {
      id = outer1_12;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guild(publicUpdatesChannel[19])(publicUpdatesChannel[18], publicUpdatesChannel.paths), "SelectUpdatesChannel", obj);
  }, items4);
  obj = { headerRef: ref, disableNextStep: false, currentStep: guild(publicUpdatesChannel[21]).EnableCommunityModalSteps.STEP_2 };
  obj = { style: enableCommunitySharedStyles.content };
  obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle" };
  const intl3 = guild(publicUpdatesChannel[15]).intl;
  obj1.children = intl3.formatToPlainString(guild(publicUpdatesChannel[15]).t.tInpJj, { number: 2, total: 3 });
  const items5 = [callback(guild(publicUpdatesChannel[22]).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: rulesChannel(publicUpdatesChannel[16])().channelSetup };
  items5[1] = callback(closure_4, obj2);
  obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl4 = guild(publicUpdatesChannel[15]).intl;
  obj3.children = intl4.string(guild(publicUpdatesChannel[15]).t.YtXpEh);
  items5[2] = callback(guild(publicUpdatesChannel[22]).Heading, obj3);
  const obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle" };
  const intl5 = guild(publicUpdatesChannel[15]).intl;
  obj4.children = intl5.string(guild(publicUpdatesChannel[15]).t["J/fYR8"]);
  items5[3] = callback(guild(publicUpdatesChannel[22]).Text, obj4);
  obj.children = items5;
  const items6 = [callback2(closure_5, obj), ];
  const obj5 = { spacing: 24, style: { paddingHorizontal: token } };
  const obj6 = {};
  const intl6 = guild(publicUpdatesChannel[15]).intl;
  obj6.helperText = intl6.string(guild(publicUpdatesChannel[15]).t["+Af+Vw"]);
  obj6.hasIcons = false;
  const obj7 = {};
  const intl7 = guild(publicUpdatesChannel[15]).intl;
  obj7.label = intl7.string(guild(publicUpdatesChannel[15]).t.dYrhCO);
  const obj8 = { text: stringResult };
  obj7.trailing = callback(guild(publicUpdatesChannel[25]).TableRow.TrailingText, obj8);
  obj7.arrow = true;
  obj7.onPress = callback1;
  obj6.children = callback(guild(publicUpdatesChannel[25]).TableRow, obj7);
  const items7 = [callback(guild(publicUpdatesChannel[24]).TableRowGroup, obj6), ];
  const obj9 = {};
  const intl8 = guild(publicUpdatesChannel[15]).intl;
  obj9.helperText = intl8.string(guild(publicUpdatesChannel[15]).t.ZFeonu);
  obj9.hasIcons = false;
  const obj10 = {};
  const intl9 = guild(publicUpdatesChannel[15]).intl;
  obj10.label = intl9.string(guild(publicUpdatesChannel[15]).t.vAyDGU);
  const obj11 = { text: stringResult1 };
  obj10.trailing = callback(guild(publicUpdatesChannel[25]).TableRow.TrailingText, obj11);
  obj10.arrow = true;
  obj10.onPress = callback2;
  obj9.children = callback(guild(publicUpdatesChannel[25]).TableRow, obj10);
  items7[1] = callback(guild(publicUpdatesChannel[24]).TableRowGroup, obj9);
  obj5.children = items7;
  items6[1] = callback2(guild(publicUpdatesChannel[23]).Stack, obj5);
  obj.children = items6;
  return callback2(guild(publicUpdatesChannel[21]).EnableCommunityModalScreen, obj);
};
