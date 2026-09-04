// Module ID: 15050
// Function ID: 15051
// Name: context
// Dependencies: [19, 38, 2]
// Exports: useVideoQuestModalContext

// Module 15050 (context)
import _modDef38 from "module_38" /* 38 */;
import importAllResult from "noop" /* 19 */;

let context = importAllResult.createContext({ quest: null, videoSessionId: "" });
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = importAllResult.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
