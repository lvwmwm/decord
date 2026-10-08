// Module ID: 15207
// Function ID: 15208
// Name: VideoQuestModalContext
// Dependencies: [19, 558, 38, 2]

// Module 15207 (VideoQuestModalContext)
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let context = react.createContext({ quest: null, videoSessionId: "" });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoQuestModalContext() {
  context = react.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
}) : (function useVideoQuestModalContext() {
  context = react.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = tmp3;
