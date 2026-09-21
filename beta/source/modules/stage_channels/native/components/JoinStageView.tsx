// Module ID: 10195
// Function ID: 10196
// Name: JoinStageView
// Dependencies: [19, 21, 558, 568, 5650, 5644, 10177, 1119, 8676, 10133, 2]

// Module 10195 (JoinStageView)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5644 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5650 */;
import StageChannelUtils from "StageChannelUtils" /* 8676 */;
import StageActionBarButtons from "StageActionBarButtons" /* 10133 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10177 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(14);
  channel = channel.channel;
  const stageParticipants = StageChannelParticipantStoreHooks.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  if (cResult[0] === stageParticipants) {
    if (cResult[1] === channel) {
      if (cResult[7] !== channel) {
        const obj3 = { channel };
        const tmp15 = jsx(tmp(10133).JoinStagePrompt, { channel });
        cResult[7] = channel;
        cResult[8] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === cResult[2]) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp13) {
              let tmp16 = cResult[13];
            }
            return tmp16;
          }
        }
      }
      const obj4 = { title: cResult[3], body: cResult[4], children: tmp13 };
      const tmp18 = jsx(cResult[2], { title: cResult[3], body: cResult[4], children: tmp13 });
      cResult[9] = cResult[2];
      cResult[10] = cResult[3];
      cResult[11] = cResult[4];
      cResult[12] = tmp13;
      cResult[13] = tmp18;
      tmp16 = tmp18;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(type) {
      return type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE;
    };
    cResult[5] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[5];
  }
  const found = stageParticipants.filter(tmp7);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.WZOeQv);
    cResult[6] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[6];
  }
  const tmp9 = StageViewWithPromptsDefault;
  const participantNamesText = StageChannelUtils.getParticipantNamesText(channel, found);
  cResult[0] = stageParticipants;
  cResult[1] = channel;
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = participantNamesText;
}) : ((channel) => {
  channel = channel.channel;
  const stageParticipants = StageChannelParticipantStoreHooks.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  const obj2 = { title: null, body: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.WZOeQv);
  obj2.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj2.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
});
