// Module ID: 11996
// Function ID: 11997
// Name: StageGridRow
// Dependencies: [19, 17, 21, 5009, 11989, 6753, 8765, 11997, 11988, 2]

// Module 11996 (StageGridRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6753 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8765 */;
import SpeakerTileDefault from "SpeakerTile" /* 11988 */;
import MediaTileDefault from "MediaTile" /* 11997 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let type;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const memoResult = react.memo(function StageGridRow(row) {
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
    THIRD = tmp2(11989).StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = tmp2(11989).StageTileSize.HALF;
  } else {
    THIRD = tmp2(11989).StageTileSize.THIRD;
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
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default memoResult;
