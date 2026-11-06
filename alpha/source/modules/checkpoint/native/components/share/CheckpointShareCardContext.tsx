// Module ID: 13655
// Function ID: 13656
// Name: CheckpointShareCardContext
// Dependencies: [19, 6248, 6246, 2]

// Module 13655 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6246 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6248 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
