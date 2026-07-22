// Module ID: 15616
// Function ID: 119115
// Name: VoicePanel
// Dependencies: []

// Module 15616 (VoicePanel)
function VoicePanel(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  obj = {};
  const merged = Object.assign(arg0);
  obj["guildId"] = stateFromStores;
  obj["children"] = importAllResult.useMemo(() => callback2(callback(closure_2[6]), {}), []);
  return jsx(importDefault(dependencyMap[5]), obj);
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = importAllResult.memo(function VoicePanelContainer() {
  const tmp = callback((channels) => Array.from(channels.channels), arg1(dependencyMap[7]).shallow);
  return jsx(arg1(dependencyMap[8]).TransitionGroup, { items: callback((channels) => Array.from(channels.channels), arg1(dependencyMap[7]).shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;
