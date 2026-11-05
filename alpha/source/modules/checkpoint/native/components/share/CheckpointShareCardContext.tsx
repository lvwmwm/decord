// Module ID: 13680
// Function ID: 13681
// Name: CheckpointShareCardContext
// Dependencies: [19, 6228, 6226, 2]

// Module 13680 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6226 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6228 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
