// Module ID: 5665
// Function ID: 48477
// Name: _launchFrameOnNative
// Dependencies: [5, 4147, 5666, 5667, 2]

// Module 5665 (_launchFrameOnNative)
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
