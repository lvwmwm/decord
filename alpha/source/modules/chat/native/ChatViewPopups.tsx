// Module ID: 13473
// Function ID: 13474
// Name: ChatViewPopups
// Dependencies: [19, 13474, 13478, 13485, 2]

// Module 13473 (ChatViewPopups)
import useIsHubRealNamePromptShowingDefault from "useIsHubRealNamePromptShowing" /* 13474 */;
import WelcomeScreenUtils from "WelcomeScreenUtils" /* 13478 */;
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "GuildDirectoryNicknameUpsellModalActionCreators" /* 13485 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

class ChatViewPopups {
  constructor(guildId) {
    let closure_2;
    let ref;
    guildId = guildId.guildId;
    let showWelcomeModal;
    const channelId = guildId.channelId;
    importDefault = showWelcomeModal.useRef(false);
    const tmp = useIsHubRealNamePromptShowingDefault(guildId);
    dependencyMap = tmp;
    let obj = guildId(13478);
    showWelcomeModal = obj.useShowWelcomeModal(guildId, channelId);
    const items = [guildId, showWelcomeModal, tmp];
    const effect = showWelcomeModal.useEffect(() => {
      if (!ref.current) {
        const tmp2 = closure_2;
        if (tmp2) {
          const obj2 = {
            guildId,
            onHide() {
                  ref.current = false;
                  return false;
                }
          };
          const obj3 = GuildDirectoryNicknameUpsellModalActionCreatorsDefault;
          obj3.open(obj2);
          ref.current = true;
        } else {
          const tmp3 = showWelcomeModal;
          if (tmp3) {
            const obj4 = {
              guildId,
              onHide() {
                      ref.current = false;
                      return false;
                    }
            };
            const obj = WelcomeScreenUtils;
            const result = obj.openWelcomeActionSheet(obj4);
            ref.current = true;
          }
        }
      }
    }, items);
    return null;
  }
}
const memoResult = react.memo(ChatViewPopups);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };
