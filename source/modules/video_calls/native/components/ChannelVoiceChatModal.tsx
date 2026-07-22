// Module ID: 10196
// Function ID: 78717
// Name: ChannelVoiceChatModal
// Dependencies: []
// Exports: default

// Module 10196 (ChannelVoiceChatModal)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = importDefault(dependencyMap[2])(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    callback(closure_2[3]).updateChatOpen(channel.id, true);
    return () => {
      callback(closure_2[3]).updateChatOpen(id.id, false);
    };
  }, items);
  const obj = { screenKey: "StageVoiceChat" };
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.title = str;
  obj.titleIcon = jsx(arg1(dependencyMap[5]).StageIcon, { size: "sm" });
  obj.render = function render() {
    let obj = {};
    const guild_id = channel.guild_id;
    let tmp2 = null;
    if (null != guild_id) {
      tmp2 = guild_id;
    }
    obj.value = tmp2;
    obj = { channel, inModal: true };
    obj.children = callback2(callback(closure_2[7]), obj);
    return callback2(callback(closure_2[6]).Provider, obj);
  };
  return jsx(importDefault(dependencyMap[4]), obj);
};
