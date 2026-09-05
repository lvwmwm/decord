// Module ID: 4762
// Function ID: 4763
// Name: transitionToStream
// Dependencies: [1957, 4527, 4763, 4767, 2]
// Exports: default

// Module 4762 (transitionToStream)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import _modDef4763 from "module_4763" /* 4763 */;
import openChannelCallModal from "openChannelCallModal" /* 4767 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
    _modDef4763.popAll();
    const obj2 = _modDef4763;
    openChannelCallModal.openGuildVoiceModal(channel, "Go Live");
    const obj3 = openChannelCallModal;
  }
};
