// Module ID: 9653
// Function ID: 9654
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4475, 4478, 9596, 4806, 4166, 9654, 2]
// Exports: default

// Module 9653 (ChannelVoiceChatModal)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = importDefault(4475)(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    outer1_1(outer1_2[3]).updateChatOpen(channel.id, true);
    return () => {
      outer1_1(outer1_2[3]).updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  const tmp5 = importDefault(9596);
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(4806).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return outer1_4(outer1_1(outer1_2[6]).Provider, { value: guild_id, children: outer1_4(outer1_1(outer1_2[7]), { channel, inModal: true }) });
  }} />;
};
