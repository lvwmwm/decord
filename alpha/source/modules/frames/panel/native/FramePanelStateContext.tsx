// Module ID: 19099
// Function ID: 19100
// Name: FramePanelStateContext
// Dependencies: [19, 19075, 2]

// Module 19099 (FramePanelStateContext)
import ActivityPanelStateContext from "ActivityPanelStateContext" /* 19075 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(ActivityPanelStateContext.activityPanelStateContextDefault);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
