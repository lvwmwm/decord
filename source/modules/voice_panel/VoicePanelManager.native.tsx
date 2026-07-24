// Module ID: 16542
// Function ID: 128875
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 4202, 4342, 5078, 2]

// Module 16542 (_isNativeReflectConstruct)
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import withEqualityFn from "withEqualityFn";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "withEqualityFn";
import tmp2 from "AutomaticLifecycleManager";

function _isNativeReflectConstruct() {
  let AutomaticLifecycleManager = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return AutomaticLifecycleManager;
  }
  const result = _isNativeReflectConstruct();
}
function checkChannelOpened() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    state = state.getState();
    const channels = state.channels;
    if (!channels.has(channelId)) {
      state.openChannel(channelId);
    }
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default tmp2;
