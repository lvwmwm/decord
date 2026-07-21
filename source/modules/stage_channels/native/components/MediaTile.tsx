// Module ID: 10772
// Function ID: 83681
// Dependencies: []

// Module 10772
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const ParticipantTypes = arg1(dependencyMap[3]).ParticipantTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = { container: { Illustration: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011746128409395384, AnimationState: 82206955738298380000000000, PowerMeter: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001390671171426377 } };
obj = { flex: 1, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.media = obj;
let closure_7 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const participant = channel.participant;
  const importDefault = participant;
  const size = channel.size;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const speakerTileStyles = obj.useSpeakerTileStyles();
  const isScreenLandscape = arg1(dependencyMap[9]).useIsScreenLandscape();
  const obj2 = arg1(dependencyMap[9]);
  const items = [closure_4];
  const items1 = [channel.id, participant.id];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => participant.getParticipant(channel.id, participant.id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (stateFromStores.type !== ParticipantTypes.ACTIVITY) {
      obj = {};
      const items2 = [tmp.container, arg1(dependencyMap[7]).getSizeStyle(size, speakerTileStyles), ];
      const obj5 = arg1(dependencyMap[7]);
      items2[2] = arg1(dependencyMap[7]).getTileWidthStyle(size, importDefault(dependencyMap[8])().width, isScreenLandscape);
      obj.style = items2;
      obj = { participant: stateFromStores };
      const obj6 = arg1(dependencyMap[7]);
      obj.avatarSize = arg1(dependencyMap[12]).AvatarSizes.XLARGE;
      obj.channel = channel;
      obj.shrinkStreamEmptyState = false;
      obj.contentStyle = tmp.media;
      obj.children = jsx(importDefault(dependencyMap[11]), obj);
      tmp5 = <View {...obj} />;
      const tmp12 = importDefault(dependencyMap[11]);
    }
  }
  return tmp5;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stage_channels/native/components/MediaTile.tsx");

export default memoResult;
