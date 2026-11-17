// Module ID: 13150
// Function ID: 13151
// Name: CheckpointShareCardContext
// Dependencies: [19, 6399, 6397, 2]

// Module 13150 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6397 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6399 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
