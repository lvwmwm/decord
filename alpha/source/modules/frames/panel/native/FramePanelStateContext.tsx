// Module ID: 18400
// Function ID: 18401
// Name: FramePanelStateContext
// Dependencies: [19, 18376, 2]

// Module 18400 (FramePanelStateContext)
import ActivityPanelStateContext from "ActivityPanelStateContext" /* 18376 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(ActivityPanelStateContext.activityPanelStateContextDefault);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
