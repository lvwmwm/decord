// Module ID: 18100
// Function ID: 18101
// Name: FramePanelStateContext
// Dependencies: [19, 18074, 2]

// Module 18100 (FramePanelStateContext)
import ActivityPanelStateContext from "ActivityPanelStateContext" /* 18074 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(ActivityPanelStateContext.activityPanelStateContextDefault);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
