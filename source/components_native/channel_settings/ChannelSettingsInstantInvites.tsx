// Module ID: 15552
// Function ID: 119770
// Name: ConnectedChannelSettingsInstantInvites
// Dependencies: [57, 31, 27, 7686, 1348, 653, 33, 4130, 689, 1557, 566, 7685, 10198, 1273, 10216, 10217, 1212, 5583, 15553, 9280, 2]
// Exports: default

// Module 15552 (ConnectedChannelSettingsInstantInvites)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ChannelSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gap = { height: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { height: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let items8 = _createForOfIteratorHelperLoose();
  const tmp = invites(memo.useState(undefined), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  let items = [items8];
  const callback = memo.useCallback((arg0) => {
    callback(arg0 + items8.gap.height);
  }, items);
  let obj = items8(566);
  const items1 = [memo1];
  const dependencyMap = obj.useStateFromStores(items1, () => memo1.getChannel());
  let obj1 = items8(566);
  const items2 = [memo1];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items2, () => memo1.getInvites());
  invites = stateFromStoresObject.invites;
  const loading = stateFromStoresObject.loading;
  const items3 = [invites];
  memo = memo.useMemo(() => {
    const values = Object.values(invites);
    return values.sort((inviter, inviter2) => {
      inviter = inviter.inviter;
      let username;
      if (null != inviter) {
        username = inviter.username;
      }
      let str = "";
      let str2 = "";
      if (null != username) {
        str2 = username;
      }
      const formatted = str2.toLowerCase();
      inviter2 = inviter2.inviter;
      let username1;
      if (null != inviter2) {
        username1 = inviter2.username;
      }
      if (null != username1) {
        str = username1;
      }
      return formatted.localeCompare(str.toLowerCase());
    });
  }, items3);
  let obj2 = items8(566);
  const items4 = [closure_7];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items4, () => {
    if (null != guild_id) {
      const sortedLinkedChannelsForGuild = outer1_7.getSortedLinkedChannelsForGuild(guild_id.guild_id);
      let found = sortedLinkedChannelsForGuild.filter((id) => id.id === outer1_2.id);
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
    callback(guild_id[11]).setSection(outer1_8.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      let obj = { invite: tmp.data };
      let tmp5 = outer1_9(callback(guild_id[12]), obj);
    } else {
      obj = { channel: tmp.data };
      tmp5 = outer1_9(items8(guild_id[12]).LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      obj = { lightSource: importDefault(10216), darkSource: importDefault(10217) };
      const intl = items8(1212).intl;
      obj.title = intl.string(items8(1212).t["+nLJkZ"]);
      const intl2 = items8(1212).intl;
      obj.body = intl2.string(items8(1212).t.F53CAc);
      return callback(items8(1273).EmptyState, obj);
    }
  }
  if (!loading) {
    if (null != first) {
      obj = { style: items8.content };
      obj1 = { sections: items6, estimatedListSize: "windowSize", itemSize: first, renderItem: callback1, insetStart: items8.gap.height, insetEnd: importDefault(1557)().bottom };
      obj.children = callback(importDefault(9280), obj1);
      let tmp15Result = callback(stateFromStoresArray, obj);
    }
  }
  obj2 = { style: items8.content };
  items8 = [, ];
  items8[0] = callback(items8(5583).SceneLoadingIndicator, {});
  let tmp17 = null;
  if (memo1.length > 0) {
    const obj3 = {};
    memo1 = memo1[0];
    obj3.item = memo1;
    obj3.onMeasured = callback;
    tmp17 = callback(importDefault(15553), obj3);
  }
  items8[1] = tmp17;
  obj2.children = items8;
  tmp15Result = closure_10(stateFromStoresArray, obj2);
};
