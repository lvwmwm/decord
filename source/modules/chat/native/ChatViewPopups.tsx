// Module ID: 11680
// Function ID: 90604
// Name: ChatViewPopups
// Dependencies: [31, 11681, 11685, 11693, 2]

// Module 11680 (ChatViewPopups)
import importAllResult from "result";

const require = arg1;
class ChatViewPopups {
  constructor(arg0) {
    guildId = global.guildId;
    c1 = channelId.useRef(false);
    tmp = require("useIsHubRealNamePromptShowing")(guildId);
    closure_2 = tmp;
    obj = require("useShowWelcomeModal");
    showWelcomeModal = obj.useShowWelcomeModal(guildId, global.channelId);
    channelId = showWelcomeModal;
    items = [, , ];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = channelId.useEffect(() => {
      if (!ref.current) {
        if (tmp) {
          let obj = {
            guildId,
            onHide() {
                  outer1_1.current = false;
                  return false;
                }
          };
          ref(tmp[3]).open(obj);
          ref.current = true;
          const obj3 = ref(tmp[3]);
        } else if (showWelcomeModal) {
          obj = guildId(tmp[2]);
          obj = {
            guildId,
            onHide() {
                  outer1_1.current = false;
                  return false;
                }
          };
          const result = obj.openWelcomeActionSheet(obj);
          ref.current = true;
        }
      }
    }, items);
    return null;
  }
}
const memoResult = importAllResult.memo(ChatViewPopups);
let result = require("useShowWelcomeModal").fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };
