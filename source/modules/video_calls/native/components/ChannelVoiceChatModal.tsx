// Module ID: 10208
// Function ID: 78789
// Name: ChannelVoiceChatModal
// Dependencies: [31, 33, 4320, 4323, 9112, 4654, 4011, 10209, 2]
// Exports: default

// Module 10208 (ChannelVoiceChatModal)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeDefaultGroupDmNameFromUserIds").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp = importDefault(4320)(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    outer1_1(outer1_2[3]).updateChatOpen(channel.id, true);
    return () => {
      outer2_1(outer2_2[3]).updateChatOpen(outer1_0.id, false);
    };
  }, items);
  let obj = { screenKey: "StageVoiceChat" };
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.title = str;
  obj.titleIcon = jsx(channel(4654).StageIcon, { size: "sm" });
  obj.render = function render() {
    let obj = {};
    const guild_id = channel.guild_id;
    let tmp2 = null;
    if (null != guild_id) {
      tmp2 = guild_id;
    }
    obj.value = tmp2;
    obj = { channel, inModal: true };
    obj.children = outer1_4(outer1_1(outer1_2[7]), obj);
    return outer1_4(outer1_1(outer1_2[6]).Provider, obj);
  };
  return jsx(importDefault(9112), { screenKey: "StageVoiceChat" });
};
