// Module ID: 4730
// Function ID: 4731
// Name: transitionToStream
// Dependencies: [1386, 4448, 4731, 4735, 2]
// Exports: default

// Module 4730 (transitionToStream)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef4731 from "module_4731" /* 4731 */;
import openChannelCallModal from "openChannelCallModal" /* 4735 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
    _modDef4731.popAll();
    const obj2 = _modDef4731;
    openChannelCallModal.openGuildVoiceModal(channel, "Go Live");
    const obj3 = openChannelCallModal;
  }
};
