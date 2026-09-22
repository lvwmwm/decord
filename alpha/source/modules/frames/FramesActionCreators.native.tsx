// Module ID: 9577
// Function ID: 9578
// Name: FramesActionCreators
// Dependencies: [5, 4776, 9578, 9579, 2]

// Module 9577 (FramesActionCreators)
import _launchFrameAll from "_launchFrame" /* 9579 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;

let closure_5 = async function _launchFrameOnNative() {
  closure_129_0 = await _launchFrameAll.launchFrame(closure_0);
  (function closeVoicePanel() {
    if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
      closure_1_0(closure_1_2[2])();
    }
  })();
  return closure_129_0;
};
const obj = {};
const _launchFrame = Object.assign(_launchFrameAll);
obj.launchFrame = function launchFrameOnNative() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;
