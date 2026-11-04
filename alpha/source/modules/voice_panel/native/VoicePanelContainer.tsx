// Module ID: 19438
// Function ID: 19439
// Name: VoicePanelContainer
// Dependencies: [19, 4990, 7010, 21, 504, 19439, 19481, 5056, 5207, 2]

// Module 19438 (VoicePanelContainer)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 5056 */;
import native from "native" /* 5207 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 19439 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 19481 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import VoicePanelStore from "VoicePanelStore" /* 7010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function VoicePanel(arg0) {
  let channelId;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  VoicePanelControllerDefault;
  const merged = Object.assign(arg0);
  return <tmp2 guildId={stateFromStores}>{react.useMemo(() => jsx(VoicePanelUIDefault, {}), [])}</tmp2>;
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
const jsx = Fragment.jsx;
const memoResult = react.memo(function VoicePanelContainer() {
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _slicedToArray.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;
