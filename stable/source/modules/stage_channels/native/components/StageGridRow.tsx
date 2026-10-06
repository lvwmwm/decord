// Module ID: 9511
// Function ID: 9512
// Name: StageGridRow
// Dependencies: [19, 17, 21, 4837, 9503, 5738, 558, 576, 5439, 9512, 9502, 2]

// Module 9511 (StageGridRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5439 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5738 */;
import SpeakerTileDefault from "SpeakerTile" /* 9502 */;
import MediaTileDefault from "MediaTile" /* 9512 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let tmp6;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(15);
  channel = channel.channel;
  const participants = channel.participants;
  const row = channel.row;
  const tmp4 = closure_5();
  let obj2 = channel(5439);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let num = 3;
  if (0 === row) {
    num = participants.length;
  }
  if (cResult[0] !== num) {
    let THIRD;
    if (1 === num) {
      THIRD = tmp(9503).StageTileSize.FULL;
    } else if (2 === num) {
      THIRD = tmp(9503).StageTileSize.HALF;
    } else {
      THIRD = tmp(9503).StageTileSize.THIRD;
    }
    cResult[0] = num;
    cResult[1] = THIRD;
    tmp6 = THIRD;
  } else {
    tmp6 = cResult[1];
  }
  size = tmp6;
  if (cResult[2] === tmp4.container) {
    let tmp8;
    let tmp9;
    if (cResult[3] === (isScreenLandscape && tmp4.containerLandscape)) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === channel) {
      if (cResult[6] === participants) {
        if (cResult[7] === tmp6) {
          tmp9 = cResult[8];
        }
        if (cResult[12] === tmp8) {
          let tmp12;
          if (cResult[13] === tmp9) {
            tmp12 = cResult[14];
          }
          return tmp12;
        }
        const tmp15 = <View style={tmp8}>{tmp9}</View>;
        cResult[12] = tmp8;
        cResult[13] = tmp9;
        cResult[14] = tmp15;
        tmp12 = tmp15;
      }
    }
    if (cResult[9] === channel) {
      let tmp10;
      if (cResult[10] === tmp6) {
        tmp10 = cResult[11];
      }
      const mapped = participants.map(tmp10);
      cResult[5] = channel;
      cResult[6] = participants;
      cResult[7] = tmp6;
      cResult[8] = mapped;
      tmp9 = mapped;
    }
    const fn = function y(type) {
      let tmp5Result;
      type = type.type;
      let flag = true;
      if (StageChannelParticipants.StageChannelParticipantTypes.STREAM !== type) {
        flag = false;
        if (StageChannelParticipants.StageChannelParticipantTypes.VOICE === type) {
          const voiceState = type.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          flag = selfVideo;
        }
      }
      if (flag) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { participant: type, size, channel };
        const tmp6Result = MediaTileDefault;
        tmp5Result = tmp5(tmp6Result, obj2, "stage-media-participant-" + type.id);
      } else {
        const _HermesInternal = HermesInternal;
        const obj = { channel, participant: type, size };
        const tmp6Result2 = SpeakerTileDefault;
        tmp5Result = tmp5(tmp6Result2, obj, "stage-user-participant-" + type.id);
      }
      return tmp5Result;
    };
    cResult[9] = channel;
    cResult[10] = tmp6;
    cResult[11] = fn;
    tmp10 = fn;
  }
  const items = [tmp4.container, isScreenLandscape && tmp4.containerLandscape];
  cResult[2] = tmp4.container;
  cResult[3] = isScreenLandscape && tmp4.containerLandscape;
  cResult[4] = items;
  tmp8 = items;
}) : ((row) => {
  let channel;
  let participants;
  ({ channel: require, participants } = row);
  let THIRD;
  row = row.row;
  let tmp = closure_5();
  let obj = useIsScreenLandscape;
  let containerLandscape = obj.useIsScreenLandscape();
  let num = 3;
  if (0 === row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = tmp2(9503).StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = tmp2(9503).StageTileSize.HALF;
  } else {
    THIRD = tmp2(9503).StageTileSize.THIRD;
  }
  const items = [tmp.container, ];
  const tmp5 = View;
  const tmp4 = jsx;
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  let obj2 = {
    style: items,
    children: participants.map((type) => {
      let tmp5Result;
      type = type.type;
      let flag = true;
      if (StageChannelParticipants.StageChannelParticipantTypes.STREAM !== type) {
        flag = false;
        if (StageChannelParticipants.StageChannelParticipantTypes.VOICE === type) {
          const voiceState = type.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          flag = selfVideo;
        }
      }
      if (flag) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { participant: type, size: THIRD, channel: require };
        const tmp6Result = MediaTileDefault;
        tmp5Result = tmp5(tmp6Result, obj2, "stage-media-participant-" + type.id);
      } else {
        const _HermesInternal = HermesInternal;
        const obj = { channel: require, participant: type, size: THIRD };
        const tmp6Result2 = SpeakerTileDefault;
        tmp5Result = tmp5(tmp6Result2, obj, "stage-user-participant-" + type.id);
      }
      return tmp5Result;
    })
  };
  items[1] = containerLandscape;
  return tmp4(tmp5, obj2);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;
