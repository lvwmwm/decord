// Module ID: 12431
// Function ID: 12432
// Name: CheckpointShareCardContext
// Dependencies: [19, 5872, 5870, 2]

// Module 12431 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5870 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5872 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
