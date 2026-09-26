// Module ID: 16656
// Function ID: 16657
// Name: ChannelSettingsIntegrationsOverview
// Dependencies: [19, 2049, 2045, 1074, 21, 1485, 6589, 5999, 1115, 5917, 9023, 4836, 576, 504, 8053, 5279, 16549, 16657, 2]
// Exports: default

// Module 16656 (ChannelSettingsIntegrationsOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useNavigation from "useNavigation" /* 1485 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9023 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  importDefault = channel(1485).useNavigation();
  const obj = channel(1485);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(6589).useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = tmp(1115).intl;
    obj3.title = intl.string(tmp(1115).t.oAvIAg);
    const obj4 = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
    const obj5 = { application: getOrFetchApplication };
    obj4.icon = closure_6(TableRowApplicationIconDefault, obj5);
    obj4.onPress = function onPress() {
      closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
    };
    obj3.children = closure_6(tmp(5917).TableRow, obj4);
    tmp5 = closure_6(tmp(5999).TableRowGroup, obj3);
  }
  return tmp5;
}
fn(2049).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
const obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  importDefault = useNavigation.useNavigation();
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp4.screenContainer, children: null };
    const obj4 = { style: null, spacing: null, children: null };
    const obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
    obj4.style = obj5;
    obj4.spacing = nativeDefault.space.PX_24;
    if (canManageWebhooks) {
      const obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1115).intl;
      obj6.label = intl.string(tmp(1115).t.jp25Id);
      const intl2 = tmp(1115).intl;
      obj6.subLabel = intl2.string(tmp(1115).t.mKIOkI);
      obj6.icon = tmp6(tmp(16549).WebhookIcon, {});
      obj6.onPress = function onPress() {
        return closure_1.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5917).TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = tmp(1115).intl;
        obj7.label = intl3.string(tmp(1115).t.OrV60r);
        const intl4 = tmp(1115).intl;
        obj7.subLabel = intl4.string(tmp(1115).t.rQREJl);
        obj7.icon = tmp6(tmp(16657).ChannelsFollowedIcon, {});
        obj7.onPress = function onPress() {
          return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = tmp6(tmp(5917).TableRow, obj7);
      }
      const obj8 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj8.children = items1;
      canManageWebhooks = tmp7(tmp(5999).TableRowGroup, obj8);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = tmp6(LinkedLobbyFormSection, obj9);
    }
    items2[1] = canUnlinkLobby;
    obj4.children = items2;
    obj3.children = closure_7(tmp(5279).Stack, obj4);
    tmp6Result = tmp6(tmp(8053).Form, obj3);
  }
  return tmp6Result;
};
