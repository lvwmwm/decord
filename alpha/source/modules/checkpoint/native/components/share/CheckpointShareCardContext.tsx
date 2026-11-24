// Module ID: 12443
// Function ID: 12444
// Name: CheckpointShareCardContext
// Dependencies: [19, 6296, 6294, 2]

// Module 12443 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6294 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6296 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
