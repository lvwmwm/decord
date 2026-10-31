// Module ID: 17092
// Function ID: 17093
// Name: VideoQuestModalContext
// Dependencies: [19, 38, 2]
// Exports: useVideoQuestModalContext

// Module 17092 (VideoQuestModalContext)
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let context = react.createContext({ quest: null, videoSessionId: "" });
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export function useVideoQuestModalContext() {
  context = react.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
}
