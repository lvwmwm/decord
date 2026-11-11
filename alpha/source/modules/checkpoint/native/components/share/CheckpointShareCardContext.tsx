// Module ID: 14177
// Function ID: 14178
// Name: CheckpointShareCardContext
// Dependencies: [19, 6338, 6336, 2]

// Module 14177 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6336 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6338 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
