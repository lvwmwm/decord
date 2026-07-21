// Module ID: 11669
// Function ID: 90530
// Name: ChatViewPopups
// Dependencies: []

// Module 11669 (ChatViewPopups)
class ChatViewPopups {
  constructor(arg0) {
    guildId = global.guildId;
    arg1 = guildId;
    closure_1 = importAll.useRef(false);
    tmp = closure_1(dependencyMap[1])(guildId);
    dependencyMap = tmp;
    obj = arg1(dependencyMap[2]);
    showWelcomeModal = obj.useShowWelcomeModal(guildId, global.channelId);
    importAll = showWelcomeModal;
    items = [, , ];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = importAll.useEffect(() => {
      if (!ref.current) {
        if (tmp) {
          let obj = {
            guildId,
            onHide() {
                  closure_1.current = false;
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
                  closure_1.current = false;
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
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAllResult.memo(ChatViewPopups);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };
