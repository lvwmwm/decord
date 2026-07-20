// Module ID: 13891
// Function ID: 105095
// Name: context
// Dependencies: [57, 5, 6]
// Exports: useVideoQuestModalContext

// Module 13891 (context)
import importAllResult from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

const context = importAllResult.createContext({});
const result = _classCallCheck.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  const context = importAllResult.useContext(context);
  importDefault(dependencyMap[1])(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
