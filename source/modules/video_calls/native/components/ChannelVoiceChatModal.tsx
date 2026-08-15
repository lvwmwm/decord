// Module ID: 10008
// Function ID: 10009
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4984, 8666, 9930, 6892, 4255, 10009, 2]
// Exports: default

// Module 10008 (ChannelVoiceChatModal)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = importDefault(4984)(channel);
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
  const tmp5 = importDefault(9930);
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(6892).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return outer1_4(outer1_1(outer1_2[6]).Provider, { value: guild_id, children: outer1_4(outer1_1(outer1_2[7]), { channel, inModal: true }) });
  }} />;
};
