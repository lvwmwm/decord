// Module ID: 16839
// Function ID: 16840
// Name: VoicePanelContainer
// Dependencies: [19, 2044, 5037, 21, 504, 16840, 16884, 4449, 4537, 2]

// Module 16839 (VoicePanelContainer)
import _mod4449 from "module_4449" /* 4449 */;
import native from "native" /* 4537 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 16840 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 16884 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import VoicePanelStore from "VoicePanelStore" /* 5037 */;

require = fn;
function VoicePanel(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = {};
  const obj = require("initialize");
  const merged = Object.assign(arg0);
  obj2.guildId = stateFromStores;
  obj2.children = noop.useMemo(() => jsx(VoicePanelUIDefault, {}), []);
  return jsx(VoicePanelControllerDefault, {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default noop.memo(function VoicePanelContainer() {
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4449.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4449.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
