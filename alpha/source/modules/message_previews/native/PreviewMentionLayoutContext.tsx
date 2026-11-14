// Module ID: 11058
// Function ID: 11059
// Name: PreviewMentionLayoutContext
// Dependencies: [19, 2]
// Exports: usePreviewMentionLayout

// Module 11058 (PreviewMentionLayoutContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
const result = size.fileFinishedImporting("modules/message_previews/native/PreviewMentionLayoutContext.tsx");

export const PreviewMentionLayoutContext = context;
export function usePreviewMentionLayout() {
  return react.useContext(context);
}
