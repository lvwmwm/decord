// Module ID: 5675
// Function ID: 48333
// Name: _launchFrameOnNative
// Dependencies: [5, 4181, 5676, 5677, 2]

// Module 5675 (_launchFrameOnNative)
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import merged from "_launchFrame";

async function _launchFrameOnNative(arg0, arg1) {
  yield outer2_1(outer2_2[3]).launchFrame(arg0);
  if (outer2_4.isCurrentClientInVoiceChannel()) {
    outer2_0(outer2_2[2])();
  }
}
const obj = {};
obj["launchFrame"] = function launchFrameOnNative() {
  return _launchFrameOnNative(...arguments);
};
const result = require("closeVoicePanels").fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;
