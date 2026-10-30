// Module ID: 13391
// Function ID: 13392
// Name: CheckpointShareCardContext
// Dependencies: [19, 6086, 6084, 2]

// Module 13391 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6084 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6086 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
