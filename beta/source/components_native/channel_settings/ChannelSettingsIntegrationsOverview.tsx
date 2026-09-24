// Module ID: 17320
// Function ID: 17321
// Name: ChannelSettingsIntegrationsOverview
// Dependencies: [19, 2049, 2045, 1078, 21, 558, 568, 1488, 7447, 1119, 1401, 1181, 5935, 5854, 4790, 580, 504, 17215, 17321, 5218, 8908, 2]

// Module 17320 (ChannelSettingsIntegrationsOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 580 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import useNavigation from "useNavigation" /* 1488 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
fn(2049).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1078).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(13);
  channel = channel.channel;
  const obj = channel(568);
  const navigation = channel(1488).useNavigation();
  const obj2 = channel(1488);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(7447).useGetOrFetchApplication(application_id);
  if (null == getOrFetchApplication) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.oAvIAg);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === getOrFetchApplication.icon) {
      if (cResult[2] === getOrFetchApplication.id) {
        let tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp10) {
        const obj6 = { source: tmp10, size: tmp(1181).AvatarSizes.REFRESH_MEDIUM_32 };
        const tmp15 = closure_6(tmp(1181).Avatar, obj6);
        cResult[4] = tmp10;
        cResult[5] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === channel) {
        if (cResult[7] === navigation) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] === getOrFetchApplication.name) {
          if (cResult[10] === tmp13) {
            if (cResult[11] === tmp16) {
              let tmp17 = cResult[12];
            }
            return tmp17;
          }
        }
        const obj7 = { title: first, hasIcons: true, children: null };
        const obj8 = { label: tmp9, icon: tmp13, arrow: true, onPress: tmp16 };
        obj7.children = closure_6(tmp(5854).TableRow, obj8);
        const tmp19 = closure_6(tmp(5935).TableRowGroup, obj7);
        cResult[9] = getOrFetchApplication.name;
        cResult[10] = tmp13;
        cResult[11] = tmp16;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      }
      const fn = function _() {
        navigation.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
      };
      cResult[6] = channel;
      cResult[7] = navigation;
      cResult[8] = fn;
      tmp16 = fn;
    }
    ({ id: obj5.id, icon: obj5.icon } = getOrFetchApplication);
    const applicationIconSource = navigation(1401).getApplicationIconSource({ id: null, icon: null });
    cResult[1] = getOrFetchApplication.icon;
    cResult[2] = getOrFetchApplication.id;
    cResult[3] = applicationIconSource;
    tmp10 = applicationIconSource;
    const obj12 = { id: null, icon: null };
    const obj4 = navigation(1401);
  }
}) : ((channel) => {
  channel = channel.channel;
  importDefault = channel(1488).useNavigation();
  const obj = channel(1488);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(7447).useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = tmp(1119).intl;
    obj3.title = intl.string(tmp(1119).t.oAvIAg);
    const obj4 = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
    const obj5 = { source: null, size: null };
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj5.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
    obj5.size = tmp(1181).AvatarSizes.REFRESH_MEDIUM_32;
    obj4.icon = closure_6(tmp(1181).Avatar, obj5);
    obj4.onPress = function onPress() {
      closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
    };
    obj3.children = closure_6(tmp(5854).TableRow, obj4);
    tmp5 = closure_6(tmp(5935).TableRowGroup, obj3);
    const obj11 = { id: null, icon: null };
  }
  return tmp5;
});
const createStyles = fn(4790);
let obj3 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj3);
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let Form = channelId;
  let tmp = dependencyMap;
  const cResult = channelId(568).c(17);
  channelId = channelId.channelId;
  ({ canManageWebhooks, canUnlinkLobby } = channelId);
  const obj = channelId(568);
  const navigation = channelId(1488).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = channelId(1488);
  const stateFromStores = Form(504).useStateFromStores(first, tmp6);
  let screenContainer = closure_9();
  if (null == stateFromStores) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { paddingHorizontal: navigation(580).space.PX_12 };
      cResult[3] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === canManageWebhooks) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === navigation) {
          let tmp10 = cResult[7];
        }
        if (cResult[8] === canUnlinkLobby) {
          if (cResult[9] === stateFromStores) {
            let tmp16 = cResult[10];
          }
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp16) {
              let tmp20 = cResult[13];
            }
            if (cResult[14] === screenContainer.screenContainer) {
            }
            Form = Form(8908).Form;
            const obj4 = { style: screenContainer.screenContainer, children: tmp20 };
            tmp = closure_6(Form, obj4);
            screenContainer = screenContainer.screenContainer;
            cResult[14] = screenContainer;
            cResult[15] = tmp20;
            cResult[16] = tmp;
          }
          const obj5 = { style: tmp8, spacing: navigation(580).space.PX_24, children: null };
          const items1 = [tmp10, tmp16];
          obj5.children = items1;
          const tmp23 = closure_7(Form(5218).Stack, obj5);
          cResult[11] = tmp10;
          cResult[12] = tmp16;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
        let tmp17 = canUnlinkLobby;
        if (canUnlinkLobby) {
          tmp17 = null != stateFromStores.linkedLobby;
        }
        if (tmp17) {
          const obj6 = { channel: stateFromStores };
          tmp17 = closure_6(closure_8, obj6);
        }
        cResult[8] = canUnlinkLobby;
        cResult[9] = stateFromStores;
        cResult[10] = tmp17;
        tmp16 = tmp17;
      }
    }
    let tmp12Result = canManageWebhooks;
    if (canManageWebhooks) {
      const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = Form(1119).intl;
      obj7.label = intl.string(Form(1119).t.jp25Id);
      const intl2 = Form(1119).intl;
      obj7.subLabel = intl2.string(Form(1119).t.mKIOkI);
      obj7.icon = closure_6(Form(17215).WebhookIcon, {});
      obj7.onPress = function onPress() {
        return navigation.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items2 = [closure_6(Form(5854).TableRow, obj7), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj8 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = Form(1119).intl;
        obj8.label = intl3.string(Form(1119).t.OrV60r);
        const intl4 = Form(1119).intl;
        obj8.subLabel = intl4.string(Form(1119).t.rQREJl);
        obj8.icon = tmp13(Form(17321).ChannelsFollowedIcon, {});
        obj8.onPress = function onPress() {
          return navigation.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = tmp13(Form(5854).TableRow, obj8);
      }
      const obj9 = { hasIcons: true, children: null };
      items2[1] = hasItem;
      obj9.children = items2;
      tmp12Result = closure_7(Form(5935).TableRowGroup, obj9);
    }
    cResult[4] = canManageWebhooks;
    cResult[5] = stateFromStores;
    cResult[6] = navigation;
    cResult[7] = tmp12Result;
    tmp10 = tmp12Result;
  }
}) : ((arg0) => {
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
      const intl = tmp(1119).intl;
      obj6.label = intl.string(tmp(1119).t.jp25Id);
      const intl2 = tmp(1119).intl;
      obj6.subLabel = intl2.string(tmp(1119).t.mKIOkI);
      obj6.icon = tmp6(tmp(17215).WebhookIcon, {});
      obj6.onPress = function onPress() {
        return closure_1.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5854).TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = tmp(1119).intl;
        obj7.label = intl3.string(tmp(1119).t.OrV60r);
        const intl4 = tmp(1119).intl;
        obj7.subLabel = intl4.string(tmp(1119).t.rQREJl);
        obj7.icon = tmp6(tmp(17321).ChannelsFollowedIcon, {});
        obj7.onPress = function onPress() {
          return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = tmp6(tmp(5854).TableRow, obj7);
      }
      const obj8 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj8.children = items1;
      canManageWebhooks = tmp7(tmp(5935).TableRowGroup, obj8);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = tmp6(closure_8, obj9);
    }
    items2[1] = canUnlinkLobby;
    obj4.children = items2;
    obj3.children = closure_7(tmp(5218).Stack, obj4);
    tmp6Result = tmp6(tmp(8908).Form, obj3);
  }
  return tmp6Result;
});
