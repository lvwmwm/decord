// Module ID: 18419
// Function ID: 18420
// Name: ChannelSetupScreen
// Dependencies: [19, 17, 8638, 2065, 4748, 4760, 1390, 8064, 1085, 21, 4818, 587, 18408, 504, 5421, 1126, 18409, 5056, 8553, 2000, 8637, 18406, 5088, 6156, 5377, 6264, 6179, 2]
// Exports: default

// Module 18419 (ChannelSetupScreen)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4748 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8064 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let channel;

let closure_14;
let map1;
const View = react_native.View;
let closure_8 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const CREATE_NEW_CHANNEL_VALUE = PublicGuildsConstants.CREATE_NEW_CHANNEL_VALUE;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/ChannelSetupScreen.tsx");

export default function ChannelSetupScreen() {
  let TableRow;
  let TableRow2;
  let callback;
  let guild;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj16;
  let props;
  let publicUpdatesChannel;
  let rulesChannel;
  let obj = callback;
  const ref = callback.useRef(null);
  let tmp2 = guild;
  let obj2 = guild(publicUpdatesChannel[10]);
  const token = obj2.useToken(rulesChannel(publicUpdatesChannel[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(publicUpdatesChannel[12]);
  const enableCommunitySharedStyles = obj3.useEnableCommunitySharedStyles();
  let items = [GuildSettingsStore];
  const obj4 = guild(publicUpdatesChannel[13]);
  guild = obj4.useStateFromStoresObject(items, () => props.getProps()).guild;
  let items1 = [ChannelStore];
  const obj5 = guild(publicUpdatesChannel[13]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items1, () => {
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
  rulesChannel = stateFromStoresObject.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject.publicUpdatesChannel;
  let stringResult = rulesChannel(publicUpdatesChannel[14])(rulesChannel, true);
  if (stringResult == null) {
    let intl = tmp2(tmp3[15]).intl;
    stringResult = intl.string(tmp2(tmp3[15]).t.Cla0re);
  }
  let stringResult1 = tmp4(tmp3[14])(publicUpdatesChannel, true);
  if (stringResult1 == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    stringResult1 = intl2.string(tmp2(tmp3[15]).t.Cla0re);
  }
  let id;
  const tmp10 = rulesChannel(publicUpdatesChannel[16])();
  const useCallback = obj.useCallback;
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
    let obj = { value: CREATE_NEW_CHANNEL_VALUE, label: intl.string(intl10.t.Cla0re) };
    intl = intl10.intl;
    let items = [];
    if (null != channels) {
      const arr2 = channels[closure_8];
      const found = arr2.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      items = found.map((channel) => {
        let obj2;
        channel = channel.channel;
        const obj = { value: channel.id, label: obj2.computeChannelName(channel, closure_1_10, closure_1_9, true) };
        obj2 = guild(publicUpdatesChannel[14]);
        return obj;
      });
    }
    const items1 = [obj, ...items];
    return items1;
  }, items2);
  const items3 = [callback, rulesChannel];
  const items4 = [callback, publicUpdatesChannel];
  const callback1 = obj.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl10.t.Yr6nGx),
      items: callback(),
      onItemSelect(rulesChannelId) {
        const obj = rulesChannel(publicUpdatesChannel[20]);
        const obj2 = { rulesChannelId };
        obj.updateGuild(obj2);
        const obj3 = rulesChannel(publicUpdatesChannel[17]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8553, dependencyMap.paths);
    intl = intl10.intl;
    id = undefined;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    openLazy(tmp2, "SelectRulesChannel", obj);
  }, items3);
  const callback2 = obj.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl10.t.VqhxxN),
      items: callback(),
      onItemSelect(publicUpdatesChannelId) {
        const obj = rulesChannel(publicUpdatesChannel[20]);
        const obj2 = { publicUpdatesChannelId };
        obj.updateGuild(obj2);
        const obj3 = rulesChannel(publicUpdatesChannel[17]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8553, dependencyMap.paths);
    intl = intl10.intl;
    id = undefined;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = CREATE_NEW_CHANNEL_VALUE;
    }
    openLazy(tmp2, "SelectUpdatesChannel", obj);
  }, items4);
  const obj6 = { headerRef: ref, disableNextStep: false, currentStep: tmp2(publicUpdatesChannel[21]).EnableCommunityModalSteps.STEP_2, children: items6 };
  const EnableCommunityModalScreen = tmp2(tmp3[21]).EnableCommunityModalScreen;
  const obj7 = { style: enableCommunitySharedStyles.content, children: items5 };
  const obj8 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl3.formatToPlainString(tmp2(publicUpdatesChannel[15]).t.tInpJj, { number: 2, total: 3 }) };
  const Text = tmp2(tmp3[22]).Text;
  intl3 = tmp2(tmp3[15]).intl;
  items5 = [closure_13(Text, obj8), , , ];
  const obj9 = { resizeMode: "contain", source: tmp10.channelSetup };
  items5[1] = closure_13(rulesChannel(publicUpdatesChannel[23]), obj9);
  const obj10 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl4.string(tmp2(publicUpdatesChannel[15]).t.YtXpEh) };
  const Heading = tmp2(tmp3[22]).Heading;
  intl4 = tmp2(tmp3[15]).intl;
  items5[2] = closure_13(Heading, obj10);
  const obj11 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl5.string(tmp2(publicUpdatesChannel[15]).t["J/fYR8"]) };
  const Text2 = tmp2(tmp3[22]).Text;
  intl5 = tmp2(tmp3[15]).intl;
  items5[3] = closure_13(Text2, obj11);
  items6 = [closure_14(View, obj7), ];
  const obj12 = { spacing: 24, style: { paddingHorizontal: token }, children: items7 };
  const Stack = tmp2(tmp3[24]).Stack;
  const obj13 = { helperText: intl6.string(tmp2(publicUpdatesChannel[15]).t["+Af+Vw"]), hasIcons: false, children: closure_13(TableRow, obj14) };
  const TableRowGroup = tmp2(tmp3[25]).TableRowGroup;
  intl6 = tmp2(tmp3[15]).intl;
  obj14 = { label: intl7.string(tmp2(publicUpdatesChannel[15]).t.dYrhCO), trailing: closure_13(tmp2(publicUpdatesChannel[26]).TableRow.TrailingText, { text: stringResult }), arrow: true, onPress: callback1 };
  TableRow = tmp2(tmp3[26]).TableRow;
  intl7 = tmp2(tmp3[15]).intl;
  items7 = [closure_13(TableRowGroup, obj13), ];
  const obj15 = { helperText: intl8.string(tmp2(publicUpdatesChannel[15]).t.ZFeonu), hasIcons: false, children: closure_13(TableRow2, obj16) };
  const TableRowGroup2 = tmp2(tmp3[25]).TableRowGroup;
  intl8 = tmp2(tmp3[15]).intl;
  obj16 = { label: intl9.string(tmp2(publicUpdatesChannel[15]).t.vAyDGU), trailing: closure_13(tmp2(publicUpdatesChannel[26]).TableRow.TrailingText, { text: stringResult1 }), arrow: true, onPress: callback2 };
  TableRow2 = tmp2(tmp3[26]).TableRow;
  intl9 = tmp2(tmp3[15]).intl;
  items7[1] = closure_13(TableRowGroup2, obj15);
  items6[1] = closure_14(Stack, obj12);
  return closure_14(EnableCommunityModalScreen, obj6);
};
