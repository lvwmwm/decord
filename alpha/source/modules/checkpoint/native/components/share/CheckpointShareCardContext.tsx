// Module ID: 13241
// Function ID: 13242
// Name: CheckpointShareCardContext
// Dependencies: [19, 6079, 6077, 2]

// Module 13241 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6077 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6079 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
