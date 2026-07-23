// Module ID: 15522
// Function ID: 119694
// Name: LinkedLobbyFormSection
// Dependencies: [31, 1348, 653, 33, 1456, 5470, 5503, 1212, 5165, 1273, 1392, 4130, 689, 566, 7495, 4541, 15418, 15523, 2]
// Exports: default

// Module 15522 (LinkedLobbyFormSection)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  let obj = channel(1456);
  const importDefault = obj.useNavigation();
  let obj1 = channel(5470);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let tmp3 = null;
  if (null != getOrFetchApplication) {
    obj = {};
    const intl = channel(1212).intl;
    obj.title = intl.string(channel(1212).t.oAvIAg);
    obj.hasIcons = true;
    obj = { label: getOrFetchApplication.name };
    obj1 = {};
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj1.source = importDefault(1392).getApplicationIconSource({});
    obj1.size = channel(1273).AvatarSizes.REFRESH_MEDIUM_32;
    obj.icon = callback(channel(1273).Avatar, obj1);
    obj.arrow = true;
    obj.onPress = function onPress() {

    };
    obj.children = callback(channel(5165).TableRow, obj);
    tmp3 = callback(channel(5503).TableRowGroup, obj);
    const obj2 = {};
    const obj6 = importDefault(1392);
  }
  return tmp3;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  let canManageWebhooks;
  let canUnlinkLobby;
  let require;
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  let obj = require(1456) /* useNavigation */;
  const importDefault = obj.useNavigation();
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  let tmp4Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.screenContainer };
    obj = {};
    obj1 = { paddingHorizontal: importDefault(689).space.PX_12 };
    obj.style = obj1;
    obj.spacing = importDefault(689).space.PX_24;
    if (canManageWebhooks) {
      const obj2 = { hasIcons: true };
      const obj3 = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj3.label = intl.string(require(1212) /* getSystemLocale */.t.jp25Id);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj3.subLabel = intl2.string(require(1212) /* getSystemLocale */.t.mKIOkI);
      obj3.icon = callback(require(15418) /* WebhookIcon */.WebhookIcon, {});
      obj3.arrow = true;
      obj3.onPress = function onPress() {
        return arr.push(outer1_4.WEBHOOKS);
      };
      const items1 = [callback(require(5165) /* TableRowInner */.TableRow, obj3), ];
      const obj4 = {};
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj4.label = intl3.string(require(1212) /* getSystemLocale */.t.OrV60r);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj4.subLabel = intl4.string(require(1212) /* getSystemLocale */.t.rQREJl);
      obj4.icon = callback(require(15523) /* ChannelsFollowedIcon */.ChannelsFollowedIcon, {});
      obj4.arrow = true;
      obj4.onPress = function onPress() {
        return arr.push(outer1_4.CHANNELS_FOLLOWED);
      };
      items1[1] = callback(require(5165) /* TableRowInner */.TableRow, obj4);
      obj2.children = items1;
      canManageWebhooks = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj2);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj5 = { channel: stateFromStores };
      canUnlinkLobby = callback(LinkedLobbyFormSection, obj5);
    }
    items2[1] = canUnlinkLobby;
    obj.children = items2;
    obj.children = callback2(require(4541) /* Stack */.Stack, obj);
    tmp4Result = callback(require(7495) /* Form */.Form, obj);
    const tmp4 = callback;
    const tmp7 = callback2;
  }
  return tmp4Result;
};
