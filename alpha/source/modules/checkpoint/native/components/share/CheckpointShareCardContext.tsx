// Module ID: 14284
// Function ID: 14285
// Name: CheckpointShareCardContext
// Dependencies: [19, 6401, 6399, 2]

// Module 14284 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6399 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6401 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
