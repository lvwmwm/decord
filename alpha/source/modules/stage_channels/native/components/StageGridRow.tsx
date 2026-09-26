// Module ID: 9515
// Function ID: 9516
// Name: StageGridRow
// Dependencies: [19, 17, 21, 4836, 9507, 5737, 5438, 9516, 9506, 2]

// Module 9515 (StageGridRow)
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center" }, containerLandscape: { justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageGridRow.tsx");

export default noop.memo((row) => {
  ({ channel: require, participants } = row);
  let THIRD;
  const tmp = closure_5();
  let containerLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let num = 3;
  if (0 === row.row) {
    num = participants.length;
  }
  if (1 === num) {
    THIRD = tmp2(9507).StageTileSize.FULL;
  } else if (2 === num) {
    THIRD = tmp2(9507).StageTileSize.HALF;
  } else {
    THIRD = tmp2(9507).StageTileSize.THIRD;
  }
  const items = [tmp.container, ];
  if (containerLandscape) {
    containerLandscape = tmp.containerLandscape;
  }
  const tmp4 = jsx;
  const tmp5 = View;
  items[1] = containerLandscape;
  return tmp4(tmp5, {
    style: items,
    children: participants.map((type) => {
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
        const obj2 = { participant: type, size: THIRD, channel };
        const _HermesInternal2 = HermesInternal;
        let tmp5Result = tmp5(tmp6(9516), obj2, "stage-media-participant-" + type.id);
        const tmp6Result = tmp6(9516);
      } else {
        const obj = { channel, participant: type, size: THIRD };
        const _HermesInternal = HermesInternal;
        tmp5Result = tmp5(tmp6(9506), obj, "stage-user-participant-" + type.id);
        const tmp6Result2 = tmp6(9506);
      }
      return tmp5Result;
    })
  });
});
