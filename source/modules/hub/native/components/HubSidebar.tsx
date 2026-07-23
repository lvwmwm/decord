// Module ID: 15036
// Function ID: 114533
// Name: HubItem
// Dependencies: [31, 27, 1907, 1906, 653, 10260, 33, 4130, 689, 11424, 1273, 566, 15037, 15038, 13524, 1212, 4138, 11788, 10038, 4068, 8481, 2]
// Exports: default

// Module 15036 (HubItem)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { InstantInviteSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function HubItem(arg0) {
  let IconComponent;
  let active;
  let handleItemClick;
  let label;
  let unreadCount;
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const ChannelModes = require(11424) /* BaseChannelSubtitle */.ChannelModes;
  const tmp2 = active ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { style: _createForOfIteratorHelperLoose().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: tmp2 };
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = callback;
  obj.name = callback(require(11424) /* BaseChannelSubtitle */.BaseChannelName, { name: label, mode: tmp2 });
  obj.icon = callback(require(11424) /* BaseChannelSubtitle */.BaseChannelIcon, { mode: tmp2, IconComponent });
  let tmp5 = null;
  if (null != unreadCount) {
    obj = { value: unreadCount };
    tmp5 = callback(require(1273) /* Button */.Badge, obj);
  }
  obj.channelInfo = tmp5;
  return tmp3(importDefault(11424), obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getDefaultChannel(guild.id), items1);
  let obj1 = guild(566);
  const items2 = [_isNativeReflectConstruct];
  const dependencyMap = obj1.useStateFromStoresObject(items2, () => outer1_4.getChannels(guild.id));
  let obj2 = guild(566);
  const items3 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = outer1_5.getChannelId() === stateFromStores.id;
    }
    return tmp;
  });
  guild(15037);
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = {};
    let row = null;
    if (guild.flashList) {
      row = tmp2.row;
    }
    obj.style = row;
    obj = { guild };
    const items4 = [callback(stateFromStores(15038), obj), , , ];
    obj1 = { active: stateFromStores1, IconComponent: guild(13524).CompassIcon };
    const intl = guild(1212).intl;
    obj1.label = intl.string(guild(1212).t.K50GHd);
    obj1.handleItemClick = function handleItemClick() {
      guild(4138).transitionToChannel(stateFromStores.id);
    };
    obj1.unreadCount = tmp5;
    items4[1] = callback(HubItem, obj1);
    obj2 = { IconComponent: guild(11788).PlusMediumIcon };
    const intl2 = guild(1212).intl;
    obj2.label = intl2.string(guild(1212).t.emRpdS);
    obj2.handleItemClick = function handleItemClick() {
      let obj = stateFromStores(10038);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
      return obj.open(obj);
    };
    items4[2] = callback(HubItem, obj2);
    const obj3 = { IconComponent: guild(4068).UserPlusIcon };
    const intl3 = guild(1212).intl;
    obj3.label = intl3.string(guild(1212).t.MJQOuJ);
    obj3.handleItemClick = function handleItemClick() {
      const result = guild(8481).handleOpenInviteActionsheet(guild, stateFromStores.id, dependencyMap, outer1_6.GUILD_HEADER);
    };
    items4[3] = callback(HubItem, obj3);
    obj.children = items4;
    tmp7Result = closure_8(View, obj);
    const tmp7 = closure_8;
    const tmp8 = View;
  }
  return tmp7Result;
};
