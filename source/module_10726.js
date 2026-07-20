// Module ID: 10726
// Function ID: 83405
// Dependencies: []

// Module 10726
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = {};
const obj2 = arg1(dependencyMap[6]);
obj.backgroundColor = arg1(dependencyMap[7]).hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, 0.24);
obj.borderRadius = importDefault(dependencyMap[8]).radii.sm;
obj.overflow = "hidden";
obj.container = obj;
let closure_8 = obj2.createStyles(obj);
const obj5 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback();
  let obj = arg1(dependencyMap[10]);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const items1 = [channel.guild_id];
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(channel.guild_id), items1);
  const tmp2 = importDefault(dependencyMap[9])(channel.id);
  const items2 = [closure_4];
  const items3 = [channel.id];
  const stateFromStoresArray = arg1(dependencyMap[11]).useStateFromStoresArray(items2, () => allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id), items3);
  const obj3 = arg1(dependencyMap[11]);
  const items4 = [closure_5];
  const importDefault = arg1(dependencyMap[11]).useStateFromStores(items4, () => id.getId());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.maxStageVideoChannelUsers;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  const obj4 = arg1(dependencyMap[11]);
  const stageHasMedia = arg1(dependencyMap[12]).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(arg1(dependencyMap[14]).StreamVolumeItem, {}));
  if (tmp8) {
    obj = { channel };
    let tmp12 = stateFromStoresArray.length > 0;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      tmp12 = !stageHasMedia && importDefault(dependencyMap[13])(channel).reachedLimit;
      const tmp13 = !stageHasMedia && importDefault(dependencyMap[13])(channel).reachedLimit;
    }
    obj.disabled = tmp12;
    items5.push(jsx(arg1(dependencyMap[14]).ScreenshareButton, obj));
    const tmp9 = jsx;
  }
  obj = { channelId: channel.id, isConnectedToVoiceChannel };
  items5.push(jsx(arg1(dependencyMap[14]).AudioRouteButton, obj));
  items5.push(jsx(arg1(dependencyMap[14]).DeafenButton, { channel }));
  obj1 = { style: tmp.container, children: items5.map((children) => callback(closure_3, { children }, arg1)) };
  return <View {...obj1} />;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;
