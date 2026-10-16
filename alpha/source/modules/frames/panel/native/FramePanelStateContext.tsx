// Module ID: 18110
// Function ID: 18111
// Name: FramePanelStateContext
// Dependencies: [19, 18084, 2]

// Module 18110 (FramePanelStateContext)
import ActivityPanelStateContext from "ActivityPanelStateContext" /* 18084 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(ActivityPanelStateContext.activityPanelStateContextDefault);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
