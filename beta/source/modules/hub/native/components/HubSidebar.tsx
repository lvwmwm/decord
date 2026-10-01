// Module ID: 15843
// Function ID: 15844
// Name: HubSidebar
// Dependencies: [19, 17, 4467, 2099, 1074, 9577, 21, 4836, 576, 11868, 1177, 504, 15844, 15845, 15149, 1115, 4847, 12269, 11791, 4769, 9275, 2]
// Exports: default

// Module 15843 (HubSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import BaseChannelItem from "BaseChannelItem" /* 11868 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const BaseChannelItemDefault = BaseChannelItem;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
function HubItem(arg0) {
  let DEFAULT;
  let IconComponent;
  let active;
  let handleItemClick;
  let label;
  let tmp5;
  let tmp6Result;
  let unreadCount;
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const tmp = closure_9();
  const ChannelModes = BaseChannelItem.ChannelModes;
  if (active) {
    DEFAULT = ChannelModes.SELECTED;
    tmp5 = tmp2;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp2;
  }
  const obj = { style: tmp.container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: metroImportDefault(tmp5(11868).BaseChannelName, { name: label, mode: DEFAULT }), icon: metroImportDefault(tmp5(11868).BaseChannelIcon, { mode: DEFAULT, IconComponent }), channelInfo: tmp6Result };
  tmp6Result = null;
  const tmp7 = BaseChannelItemDefault;
  if (null != unreadCount) {
    const obj2 = { value: unreadCount };
    tmp6Result = tmp6(tmp5(1177).Badge, obj2);
  }
  return metroImportDefault(tmp7, obj);
}
const View = react_native.View;
const InstantInviteSources = Constants.InstantInviteSources;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, row: { flex: 1 } };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items4;
  guild = guild.guild;
  dependencyMap = undefined;
  const tmp = guild;
  let tmp2 = dependencyMap;
  const flashList = guild.flashList;
  let obj = guild(504);
  const items = [GuildChannelStore];
  const items1 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id), items1);
  const tmp4 = closure_9();
  let obj2 = guild(504);
  const items2 = [GuildChannelStore];
  dependencyMap = obj2.useStateFromStoresObject(items2, () => GuildChannelStore.getChannels(guild.id));
  const items3 = [SelectedChannelStore];
  const obj3 = guild(504);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
    return tmp2;
  });
  guild(15844);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    const tmp10 = View;
    const tmp9 = closure_8;
    if (flashList) {
      row = tmp4.row;
    }
    const obj4 = { style: row, children: items4 };
    const obj5 = { guild };
    items4 = [closure_7(stateFromStores(15845), obj5), , , ];
    const obj6 = {
      active: stateFromStores1,
      IconComponent: tmp(15149).CompassIcon,
      label: intl.string(tmp(1115).t.K50GHd),
      handleItemClick() {
          const obj = transitionToChannel;
          obj.transitionToChannel(stateFromStores.id);
        },
      unreadCount: tmp7
    };
    intl = tmp(1115).intl;
    items4[1] = closure_7(HubItem, obj6);
    const obj7 = {
      IconComponent: tmp(12269).PlusMediumIcon,
      label: intl2.string(tmp(1115).t.emRpdS),
      handleItemClick() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
          return obj.open(obj2);
        }
    };
    intl2 = tmp(1115).intl;
    items4[2] = closure_7(HubItem, obj7);
    const obj8 = {
      IconComponent: tmp(4769).UserPlusIcon,
      label: intl3.string(tmp(1115).t.MJQOuJ),
      handleItemClick() {
          const obj = instant_invite_InstantInviteUtils;
          const result = obj.handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, InstantInviteSources.GUILD_HEADER);
        }
    };
    intl3 = tmp(1115).intl;
    items4[3] = closure_7(HubItem, obj8);
    tmp9Result = tmp9(tmp10, obj4);
  }
  return tmp9Result;
};
