// Module ID: 10784
// Function ID: 83690
// Dependencies: [31, 27, 33, 4131, 10777, 4958, 4664, 10785, 10776, 2]

// Module 10784
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const memoResult = require("result").memo((row) => {
  let participants;
  let require;
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = callback();
  let obj = require(4664) /* getIsScreenLandscape */;
  let containerLandscape = obj.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = require(10777) /* StageTileSize */.StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = require(10777) /* StageTileSize */.StageTileSize.HALF;
  } else {
    THIRD = require(10777) /* StageTileSize */.StageTileSize.THIRD;
  }
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
    if (outer1_0(outer1_2[5]).StageChannelParticipantTypes.STREAM !== type) {
      flag = false;
      if (outer1_0(outer1_2[5]).StageChannelParticipantTypes.VOICE === type) {
        const voiceState = type.voiceState;
        let selfVideo;
        if (null != voiceState) {
          selfVideo = voiceState.selfVideo;
        }
        flag = selfVideo;
      }
    }
    if (flag) {
      let obj = { participant: type, size: THIRD, channel: closure_0 };
      const _HermesInternal2 = HermesInternal;
      let tmp6Result = tmp6(tmp7[7]);
      let tmp5Result = tmp5(tmp6Result, obj, "stage-media-participant-" + type.id);
    } else {
      obj = { channel: closure_0, participant: type, size: THIRD };
      const _HermesInternal = HermesInternal;
      tmp6Result = tmp6(tmp7[8]);
      tmp5Result = tmp5(tmp6Result, obj, "stage-user-participant-" + type.id);
    }
    return tmp5Result;
  });
  return <View />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;
