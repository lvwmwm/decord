// Module ID: 19526
// Function ID: 19527
// Name: FramePanelStateContext
// Dependencies: [19, 19502, 2]

// Module 19526 (FramePanelStateContext)
import ActivityPanelStateContext from "ActivityPanelStateContext" /* 19502 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(ActivityPanelStateContext.activityPanelStateContextDefault);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
