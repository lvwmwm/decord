// Module ID: 14022
// Function ID: 107346
// Name: context
// Dependencies: [31, 44, 2]
// Exports: useVideoQuestModalContext

// Module 14022 (context)
import importAllResult from "result";

let context = importAllResult.createContext({ quest: null, videoSessionId: "" });
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = importAllResult.useContext(context);
  importDefault(44)(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
