// Module ID: 14442
// Function ID: 14443
// Name: context
// Dependencies: [19, 38, 2]
// Exports: useVideoQuestModalContext

// Module 14442 (context)
import importAllResult from "noop";

let context = importAllResult.createContext({ quest: null, videoSessionId: "" });
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = importAllResult.useContext(context);
  importDefault(38)(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
