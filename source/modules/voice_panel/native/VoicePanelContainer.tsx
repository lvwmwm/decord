// Module ID: 15780
// Function ID: 121610
// Name: VoicePanel
// Dependencies: [31, 1348, 4342, 33, 566, 15781, 15822, 3743, 4476, 2]

// Module 15780 (VoicePanel)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import { jsx } from "jsxProd";

const require = arg1;
function VoicePanel(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(channelId.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  obj = {};
  const merged = Object.assign(arg0);
  obj["guildId"] = stateFromStores;
  obj["children"] = importAllResult.useMemo(() => outer1_6(outer1_1(outer1_2[6]), {}), []);
  return jsx(importDefault(15781), {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
const memoResult = importAllResult.memo(function VoicePanelContainer() {
  const tmp = callback((channels) => Array.from(channels.channels), require(3743) /* isIterable */.shallow);
  return jsx(require(4476) /* _createForOfIteratorHelperLoose */.TransitionGroup, { items: callback((channels) => Array.from(channels.channels), require(3743) /* isIterable */.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
const result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;
