// Module ID: 10765
// Function ID: 83655
// Dependencies: []

// Module 10765
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: { -9223372036854775808: true, filter: true }, containerLandscape: { justifyContent: "center" } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((row) => {
  let participants;
  ({ channel: closure_0, participants } = row);
  let importDefault;
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  let containerLandscape = obj.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    let THIRD = arg1(dependencyMap[4]).StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = arg1(dependencyMap[4]).StageTileSize.HALF;
  } else {
    THIRD = arg1(dependencyMap[4]).StageTileSize.THIRD;
  }
  importDefault = THIRD;
  obj = {};
  const items = [tmp.container, ];
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  items[1] = containerLandscape;
  obj.style = items;
  obj.children = participants.map((type) => {
    type = type.type;
    let flag = true;
    if (callback(closure_2[5]).StageChannelParticipantTypes.STREAM !== type) {
      flag = false;
      if (callback(closure_2[5]).StageChannelParticipantTypes.VOICE === type) {
        const voiceState = type.voiceState;
        let selfVideo;
        if (null != voiceState) {
          selfVideo = voiceState.selfVideo;
        }
        flag = selfVideo;
      }
    }
    if (flag) {
      let obj = { participant: type, size: THIRD, channel: callback };
      const _HermesInternal2 = HermesInternal;
      let tmp6Result = tmp6(tmp7[7]);
      let tmp5Result = tmp5(tmp6Result, obj, "stage-media-participant-" + type.id);
    } else {
      obj = { channel: callback, participant: type, size: THIRD };
      const _HermesInternal = HermesInternal;
      tmp6Result = tmp6(tmp7[8]);
      tmp5Result = tmp5(tmp6Result, obj, "stage-user-participant-" + type.id);
    }
    return tmp5Result;
  });
  return <View {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;
