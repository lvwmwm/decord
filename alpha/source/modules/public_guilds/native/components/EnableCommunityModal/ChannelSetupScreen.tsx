// Module ID: 19785
// Function ID: 19786
// Name: ChannelSetupScreen
// Dependencies: [19, 17, 9056, 4858, 4939, 4951, 1384, 8495, 1072, 21, 5591, 575, 19774, 504, 5647, 1114, 19775, 5253, 8993, 1995, 9055, 19772, 5619, 5712, 6022, 7054, 6969, 2]
// Exports: default

// Module 19785 (ChannelSetupScreen)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl13 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4939 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8495 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let channel;

let closure_14;
let closure_15;
let map1;
const View = react_native.View;
let closure_8 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const CREATE_NEW_CHANNEL_VALUE = PublicGuildsConstants.CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  let TableRow;
  let TableRow2;
  let callback;
  let guild;
  let intl11;
  let intl12;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items5;
  let items6;
  let items7;
  let items9;
  let obj13;
  let obj16;
  let props;
  let publicUpdatesChannel;
  let rulesChannel;
  let tmp = react;
  const ref = react.useRef(null);
  let obj = guild(5591);
  const token = obj.useToken(callback(575).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(19774);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(504);
  let items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let items1 = [ChannelStore];
  const obj4 = guild(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let getChannel2;
    let prop;
    let rulesChannelId;
    const getChannel = ChannelStore.getChannel;
    const tmp = ChannelStore;
    if (guild != null) {
      rulesChannelId = tmp2.rulesChannelId;
    }
    const obj = { rulesChannel: getChannel(rulesChannelId), publicUpdatesChannel: getChannel2(prop) };
    prop = undefined;
    getChannel2 = tmp.getChannel;
    if (guild != null) {
      prop = tmp2.publicUpdatesChannelId;
    }
    return obj;
  });
  ({ rulesChannel, publicUpdatesChannel } = stateFromStoresObject);
  let stringResult = callback(5647)(rulesChannel, true);
  if (stringResult == null) {
    let PoWNfe;
    let intl = tmp3(1114).intl;
    let rulesChannelId;
    const string = intl.string;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    if (rulesChannelId === CREATE_NEW_CHANNEL_VALUE) {
      PoWNfe = tmp3(1114).t.Cla0re;
    } else {
      PoWNfe = tmp3(1114).t.PoWNfe;
    }
    stringResult = string(PoWNfe);
  }
  let tmp12 = tmp5(5647)(publicUpdatesChannel, true);
  if (tmp12 == null) {
    let stringResult1;
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    if (prop === CREATE_NEW_CHANNEL_VALUE) {
      const intl3 = tmp3(1114).intl;
      stringResult1 = intl3.string(tmp3(1114).t.Cla0re);
    } else {
      let intl2 = tmp3(1114).intl;
      stringResult1 = intl2.string(tmp3(1114).t.PoWNfe);
    }
    tmp12 = stringResult1;
  }
  let id;
  const tmp16 = callback(19775)();
  const useCallback = tmp.useCallback;
  if (guild != null) {
    id = guild.id;
  }
  const items2 = [id];
  callback = useCallback(() => {
    let intl;
    let id;
    const getChannels = GuildChannelStore.getChannels;
    if (guild != null) {
      id = guild.id;
    }
    const channels = getChannels(id);
    let obj = { value: CREATE_NEW_CHANNEL_VALUE, label: intl.string(intl13.t.Cla0re) };
    intl = intl13.intl;
    let items = [];
    if (null != channels) {
      const arr2 = channels[closure_8];
      const found = arr2.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        let obj2;
        channel = channel.channel;
        const obj = { value: channel.id, label: obj2.computeChannelName(channel, closure_1_10, closure_1_9, true) };
        obj2 = guild(closure_1_2[14]);
        return obj;
      });
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, ];
  let rulesChannelId1;
  const useCallback2 = tmp.useCallback;
  if (guild != null) {
    rulesChannelId1 = guild.rulesChannelId;
  }
  items3[1] = rulesChannelId1;
  const items4 = [callback, ];
  let prop1;
  const callback2 = useCallback2(() => {
    let intl;
    let intl2;
    let items;
    let rulesChannelId;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl13.t.Yr6nGx),
      items,
      onItemSelect(rulesChannelId) {
        const obj = callback(closure_1_2[20]);
        const obj2 = { rulesChannelId };
        obj.updateGuild(obj2);
        const obj3 = callback(closure_1_2[17]);
        obj3.hideActionSheet();
      },
      selectedItem: rulesChannelId,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8993, dependencyMap.paths);
    intl = intl13.intl;
    let obj2 = { value: null, label: intl2.string(intl13.t.PoWNfe) };
    intl2 = intl13.intl;
    items = [obj2, ...callback()];
    rulesChannelId = undefined;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    if (rulesChannelId == null) {
      rulesChannelId = null;
    }
    openLazy(tmp2, "SelectRulesChannel", obj);
  }, items3);
  const useCallback3 = tmp.useCallback;
  if (guild != null) {
    prop1 = guild.publicUpdatesChannelId;
  }
  items4[1] = prop1;
  const callback3 = useCallback3(() => {
    let intl;
    let intl2;
    let items;
    let prop;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl13.t.VqhxxN),
      items,
      onItemSelect(publicUpdatesChannelId) {
        const obj = callback(closure_1_2[20]);
        const obj2 = { publicUpdatesChannelId };
        obj.updateGuild(obj2);
        const obj3 = callback(closure_1_2[17]);
        obj3.hideActionSheet();
      },
      selectedItem: prop,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8993, dependencyMap.paths);
    intl = intl13.intl;
    let obj2 = { value: null, label: intl2.string(intl13.t.PoWNfe) };
    intl2 = intl13.intl;
    items = [obj2, ...callback()];
    prop = undefined;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    if (prop == null) {
      prop = null;
    }
    openLazy(tmp2, "SelectUpdatesChannel", obj);
  }, items4);
  const obj5 = { headerRef: ref, disableNextStep: false, currentStep: guild(19772).EnableCommunityModalSteps.STEP_2, children: items6 };
  const EnableCommunityModalScreen = tmp3(19772).EnableCommunityModalScreen;
  const obj6 = { style: enableCommunitySharedStyles.content, children: items5 };
  const obj7 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl4.formatToPlainString(guild(1114).t.tInpJj, { number: 2, total: 3 }) };
  const Text = tmp3(5619).Text;
  intl4 = tmp3(1114).intl;
  items5 = [closure_13(Text, obj7), , , ];
  const obj8 = { resizeMode: "contain", source: tmp16.channelSetup };
  items5[1] = closure_13(callback(5712), obj8);
  const obj9 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl5.string(guild(1114).t.YtXpEh) };
  const Heading = tmp3(5619).Heading;
  intl5 = tmp3(1114).intl;
  items5[2] = closure_13(Heading, obj9);
  const obj10 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl6.string(guild(1114).t["J/fYR8"]) };
  const Text2 = tmp3(5619).Text;
  intl6 = tmp3(1114).intl;
  items5[3] = closure_13(Text2, obj10);
  items6 = [closure_14(View, obj6), ];
  const obj11 = { spacing: 24, style: { paddingHorizontal: token }, children: items7 };
  const Stack = tmp3(6022).Stack;
  const obj12 = { helperText: intl7.string(guild(1114).t["+Af+Vw"]), hasIcons: false, children: closure_13(TableRow, obj13) };
  const TableRowGroup = tmp3(7054).TableRowGroup;
  intl7 = tmp3(1114).intl;
  obj13 = { label: intl8.string(guild(1114).t.dYrhCO), trailing: closure_13(guild(6969).TableRow.TrailingText, { text: stringResult }), arrow: true, onPress: callback2 };
  TableRow = tmp3(6969).TableRow;
  intl8 = tmp3(1114).intl;
  items7 = [closure_13(TableRowGroup, obj12), ];
  const TableRowGroup2 = tmp3(7054).TableRowGroup;
  const intl9 = tmp3(1114).intl;
  const items8 = [intl9.string(guild(1114).t.ZFeonu), ];
  let prop2;
  if (guild != null) {
    prop2 = guild.publicUpdatesChannelId;
  }
  let tmp23Result = null;
  if (null == prop2) {
    let prop3;
    if (guild != null) {
      prop3 = guild.safetyAlertsChannelId;
    }
    tmp23Result = null;
    if (null == prop3) {
      const obj14 = { children: items9 };
      const intl10 = tmp3(1114).intl;
      items9 = [" ", intl10.string(guild(1114).t["0H6Cdy"])];
      tmp23Result = tmp23(tmp25, obj14);
    }
  }
  items8[1] = tmp23Result;
  const obj15 = { helperText: closure_14(closure_15, { children: items8 }), hasIcons: false, children: closure_13(TableRow2, obj16) };
  obj16 = { label: intl11.string(guild(1114).t.vAyDGU), subLabel: intl12.string(guild(1114).t.zdWNET), trailing: closure_13(guild(6969).TableRow.TrailingText, { text: tmp12 }), arrow: true, onPress: callback3 };
  TableRow2 = tmp3(6969).TableRow;
  intl11 = tmp3(1114).intl;
  intl12 = tmp3(1114).intl;
  items7[1] = closure_13(TableRowGroup2, obj15);
  items6[1] = closure_14(Stack, obj11);
  return closure_14(EnableCommunityModalScreen, obj5);
};
