// Module ID: 12651
// Function ID: 12652
// Name: CheckpointShareCardContext
// Dependencies: [19, 6422, 6420, 2]

// Module 12651 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6420 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6422 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
