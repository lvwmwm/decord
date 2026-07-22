// Module ID: 13908
// Function ID: 105190
// Name: context
// Dependencies: [57, 5, 6]
// Exports: useVideoQuestModalContext

// Module 13908 (context)
import importAllResult from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

const context = importAllResult.createContext({ "Null": "<string:20137472>", "Null": "<string:2543931648>" });
const result = _classCallCheck.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  const context = importAllResult.useContext(context);
  importDefault(dependencyMap[1])(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
