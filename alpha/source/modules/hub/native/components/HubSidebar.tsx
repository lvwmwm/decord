// Module ID: 18258
// Function ID: 18259
// Name: HubSidebar
// Dependencies: [19, 17, 4944, 4917, 1072, 11046, 21, 5014, 575, 13922, 1187, 504, 18259, 18260, 17581, 1113, 5756, 11483, 13841, 5721, 9118, 2]
// Exports: default

// Module 18258 (HubSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import transitionToChannel from "transitionToChannel" /* 5756 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13841 */;
import BaseChannelItem from "BaseChannelItem" /* 13922 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  const obj = { style: tmp.container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: metroImportDefault(tmp5(13922).BaseChannelName, { name: label, mode: DEFAULT }), icon: metroImportDefault(tmp5(13922).BaseChannelIcon, { mode: DEFAULT, IconComponent }), channelInfo: tmp6Result };
  tmp6Result = null;
  const tmp7 = BaseChannelItemDefault;
  if (null != unreadCount) {
    const obj2 = { value: unreadCount };
    tmp6Result = tmp6(tmp5(1187).Badge, obj2);
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
  guild(18259);
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
    items4 = [closure_7(stateFromStores(18260), obj5), , , ];
    const obj6 = {
      active: stateFromStores1,
      IconComponent: tmp(17581).CompassIcon,
      label: intl.string(tmp(1113).t.K50GHd),
      handleItemClick() {
          const obj = transitionToChannel;
          obj.transitionToChannel(stateFromStores.id);
        },
      unreadCount: tmp7
    };
    intl = tmp(1113).intl;
    items4[1] = closure_7(HubItem, obj6);
    const obj7 = {
      IconComponent: tmp(11483).PlusMediumIcon,
      label: intl2.string(tmp(1113).t.emRpdS),
      handleItemClick() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
          return obj.open(obj2);
        }
    };
    intl2 = tmp(1113).intl;
    items4[2] = closure_7(HubItem, obj7);
    const obj8 = {
      IconComponent: tmp(5721).UserPlusIcon,
      label: intl3.string(tmp(1113).t.MJQOuJ),
      handleItemClick() {
          const obj = instant_invite_InstantInviteUtils;
          const result = obj.handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, InstantInviteSources.GUILD_HEADER);
        }
    };
    intl3 = tmp(1113).intl;
    items4[3] = closure_7(HubItem, obj8);
    tmp9Result = tmp9(tmp10, obj4);
  }
  return tmp9Result;
};
