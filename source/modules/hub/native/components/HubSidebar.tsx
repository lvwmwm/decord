// Module ID: 14909
// Function ID: 112288
// Name: HubItem
// Dependencies: []
// Exports: default

// Module 14909 (HubItem)
function HubItem(arg0) {
  let IconComponent;
  let active;
  let handleItemClick;
  let label;
  let unreadCount;
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const ChannelModes = arg1(dependencyMap[9]).ChannelModes;
  const tmp2 = active ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { style: callback2().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: tmp2 };
  const tmp = callback2();
  const tmp3 = callback;
  obj.name = callback(arg1(dependencyMap[9]).BaseChannelName, { name: label, mode: tmp2 });
  obj.icon = callback(arg1(dependencyMap[9]).BaseChannelIcon, { mode: tmp2, IconComponent });
  let tmp5 = null;
  if (null != unreadCount) {
    obj = { value: unreadCount };
    tmp5 = callback(arg1(dependencyMap[10]).Badge, obj);
  }
  obj.channelInfo = tmp5;
  return tmp3(importDefault(dependencyMap[9]), obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const InstantInviteSources = arg1(dependencyMap[4]).InstantInviteSources;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { marginVertical: arg1(dependencyMap[5]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[8]).radii.md };
obj.container = obj;
obj.row = { flex: 1 };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(closure_2[11]);
  const items = [closure_4];
  const items1 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items, () => store.getDefaultChannel(guild.id), items1);
  const importDefault = stateFromStores;
  let obj1 = arg1(closure_2[11]);
  const items2 = [closure_4];
  closure_2 = obj1.useStateFromStoresObject(items2, () => store.getChannels(guild.id));
  let obj2 = arg1(closure_2[11]);
  const items3 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = channelId.getChannelId() === stateFromStores.id;
    }
    return tmp;
  });
  arg1(closure_2[12]);
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = {};
    let row = null;
    if (guild.flashList) {
      row = tmp2.row;
    }
    obj.style = row;
    obj = { guild };
    const items4 = [callback(importDefault(closure_2[13]), obj), , , ];
    obj1 = { active: stateFromStores1, IconComponent: arg1(closure_2[14]).CompassIcon };
    const intl = arg1(closure_2[15]).intl;
    obj1.label = intl.string(arg1(closure_2[15]).t.K50GHd);
    obj1.handleItemClick = function handleItemClick() {
      guild(closure_2[16]).transitionToChannel(stateFromStores.id);
    };
    obj1.unreadCount = tmp5;
    items4[1] = callback(HubItem, obj1);
    obj2 = { IconComponent: arg1(closure_2[17]).PlusMediumIcon };
    const intl2 = arg1(closure_2[15]).intl;
    obj2.label = intl2.string(arg1(closure_2[15]).t.emRpdS);
    obj2.handleItemClick = function handleItemClick() {
      let obj = stateFromStores(closure_2[18]);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
      return obj.open(obj);
    };
    items4[2] = callback(HubItem, obj2);
    const obj3 = { IconComponent: arg1(closure_2[19]).UserPlusIcon };
    const intl3 = arg1(closure_2[15]).intl;
    obj3.label = intl3.string(arg1(closure_2[15]).t.MJQOuJ);
    obj3.handleItemClick = function handleItemClick() {
      const result = guild(closure_2[20]).handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, constants.GUILD_HEADER);
    };
    items4[3] = callback(HubItem, obj3);
    obj.children = items4;
    tmp7Result = closure_8(View, obj);
    const tmp7 = closure_8;
    const tmp8 = View;
  }
  return tmp7Result;
};
