// Module ID: 15380
// Function ID: 117231
// Name: ConnectedChannelSettingsInstantInvites
// Dependencies: []
// Exports: default

// Module 15380 (ConnectedChannelSettingsInstantInvites)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ChannelSettingsSections = arg1(dependencyMap[5]).ChannelSettingsSections;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.content = obj;
const tmp2 = arg1(dependencyMap[6]);
obj.gap = { height: importDefault(dependencyMap[8]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj1 = { height: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let items8 = callback3();
  const arg1 = items8;
  const tmp = callback(React.useState(undefined), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  const items = [items8];
  let callback = React.useCallback((arg0) => {
    callback(arg0 + items8.gap.height);
  }, items);
  let obj = arg1(closure_2[10]);
  const items1 = [closure_6];
  closure_2 = obj.useStateFromStores(items1, () => memo1.getChannel());
  let obj1 = arg1(closure_2[10]);
  const items2 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items2, () => memo1.getInvites());
  const invites = stateFromStoresObject.invites;
  callback = invites;
  const loading = stateFromStoresObject.loading;
  const items3 = [invites];
  const memo = React.useMemo(() => {
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
  const React = memo;
  let obj2 = arg1(closure_2[10]);
  const items4 = [closure_7];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items4, () => {
    if (null != guild_id) {
      const sortedLinkedChannelsForGuild = sortedLinkedChannelsForGuild.getSortedLinkedChannelsForGuild(guild_id.guild_id);
      let found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
    } else {
      found = [];
    }
    return found;
  });
  const View = stateFromStoresArray;
  const items5 = [memo, stateFromStoresArray];
  let memo1 = React.useMemo(() => {
    const items = [...closure_4.map((data) => ({ type: "invite", data })), ...closure_5.map((data) => ({ type: "channel", data }))];
    return items;
  }, items5);
  closure_6 = memo1;
  const items6 = [memo1.length];
  const effect = React.useEffect(() => {
    callback(closure_2[11]).setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = React.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      let obj = { invite: tmp.data };
      let tmp5 = callback2(callback(closure_2[12]), obj);
    } else {
      obj = { channel: tmp.data };
      tmp5 = callback2(items8(closure_2[12]).LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      obj = { lightSource: importDefault(closure_2[14]), darkSource: importDefault(closure_2[15]) };
      const intl = arg1(closure_2[16]).intl;
      obj.title = intl.string(arg1(closure_2[16]).t.+nLJkZ);
      const intl2 = arg1(closure_2[16]).intl;
      obj.body = intl2.string(arg1(closure_2[16]).t.F53CAc);
      return callback2(arg1(closure_2[13]).EmptyState, obj);
    }
  }
  if (!loading) {
    if (null != first) {
      obj = { style: items8.content };
      obj1 = { sections: items6, estimatedListSize: "windowSize", itemSize: first, renderItem: callback1, insetStart: items8.gap.height, insetEnd: importDefault(closure_2[9])().bottom };
      obj.children = callback2(importDefault(closure_2[19]), obj1);
      let tmp15Result = callback2(View, obj);
    }
  }
  obj2 = { style: items8.content };
  items8 = [callback2(arg1(closure_2[17]).SceneLoadingIndicator, {}), ];
  let tmp17 = null;
  if (memo1.length > 0) {
    const obj3 = {};
    memo1 = memo1[0];
    obj3.item = memo1;
    obj3.onMeasured = callback;
    tmp17 = callback2(importDefault(closure_2[18]), obj3);
  }
  items8[1] = tmp17;
  obj2.children = items8;
  tmp15Result = closure_10(View, obj2);
};
