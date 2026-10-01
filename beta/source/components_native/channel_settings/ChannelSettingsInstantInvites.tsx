// Module ID: 16641
// Function ID: 16642
// Name: ChannelSettingsInstantInvites
// Dependencies: [32, 19, 17, 8086, 2045, 1074, 21, 4836, 576, 1613, 504, 8085, 10393, 1177, 10411, 10412, 1115, 6460, 16642, 6476, 2]
// Exports: default

// Module 16641 (ChannelSettingsInstantInvites)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import FastestListDefault from "FastestList" /* 6476 */;
import InstantInvite from "InstantInvite" /* 10393 */;
import AssetRegistryDefault from "AssetRegistry" /* 10411 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10412 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8086 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InstantInviteDefault = InstantInvite;
let _require, dependencyMap, inviter, invites;

let c10;
let c9;
let obj2;
let obj3;
const View = react_native.View;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, gap: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let closure_2;
  let gap;
  let intl;
  let intl2;
  let items8;
  let memo;
  let memo1;
  let obj6;
  let tmp21;
  let tmp5;
  const tmp = closure_11();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [tmp5, importDefault] = invites(memo.useState(undefined), 2);
  let items = [tmp];
  const tmp4 = invites(memo.useState(undefined), 2);
  const callback = memo.useCallback((arg0) => {
    importDefault(arg0 + gap.gap.height);
  }, items);
  let obj = require("get initialized");
  const items1 = [memo1];
  dependencyMap = obj.useStateFromStores(items1, () => memo1.getChannel());
  let obj2 = require("get initialized");
  const items2 = [memo1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => memo1.getInvites());
  invites = stateFromStoresObject.invites;
  const loading = stateFromStoresObject.loading;
  const items3 = [invites];
  memo = memo.useMemo(() => {
    const values = Object.values(invites);
    return values.sort((inviter, inviter2) => {
      inviter = inviter.inviter;
      let str;
      if (inviter != null) {
        str = inviter.username;
      }
      if (str == null) {
        str = "";
      }
      const formatted = str.toLowerCase();
      inviter2 = inviter2.inviter;
      let str2;
      if (inviter2 != null) {
        str2 = inviter2.username;
      }
      if (str2 == null) {
        str2 = "";
      }
      return formatted.localeCompare(str2.toLowerCase());
    });
  }, items3);
  const items4 = [ChannelStore];
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(items4, () => {
    let found;
    if (null != id) {
      const sortedLinkedChannelsForGuild = ChannelStore.getSortedLinkedChannelsForGuild(tmp.guild_id);
      found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
    } else {
      found = [];
    }
    return found;
  });
  const items5 = [memo, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items5);
  const items6 = [memo1.length];
  const effect = memo.useEffect(() => {
    const obj = require("ChannelSettingsActionCreators");
    obj.setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    let tmp5;
    if ("invite" === memo1[arg1].type) {
      const obj2 = { invite: memo1[arg1].data };
      tmp5 = React4(InstantInviteDefault, obj2);
    } else {
      const obj = { channel: memo1[arg1].data };
      tmp5 = React4(InstantInvite.LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      const obj4 = { lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault2, title: intl.string(require("intl").t["+nLJkZ"]), body: intl2.string(require("intl").t.F53CAc) };
      const EmptyState = tmp7(1177).EmptyState;
      intl = tmp7(1115).intl;
      intl2 = tmp7(1115).intl;
      tmp21 = closure_9(EmptyState, obj4);
    }
    return tmp21;
  }
  if (!loading) {
    let tmp17Result;
    if (null != tmp5) {
      const obj5 = { style: tmp.content, children: closure_9(FastestListDefault, obj6) };
      obj6 = { sections: items6, estimatedListSize: "windowSize", itemSize: tmp5, renderItem: callback1, insetStart: tmp.gap.height, insetEnd: bottom };
      tmp17Result = closure_9(stateFromStoresArray, obj5);
    }
    tmp21 = tmp17Result;
  }
  const obj7 = { style: tmp.content, children: items8 };
  items8 = [closure_9(tmp7(6460).SceneLoadingIndicator, {}), ];
  let tmp19Result = null;
  const tmp17 = closure_10;
  const tmp18 = stateFromStoresArray;
  const tmp19 = closure_9;
  if (memo1.length > 0) {
    const obj8 = { item: memo1[0], onMeasured: callback };
    tmp19Result = tmp19(tmp2(16642), obj8);
  }
  items8[1] = tmp19Result;
  tmp17Result = tmp17(tmp18, obj7);
};
