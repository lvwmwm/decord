// Module ID: 13669
// Function ID: 13670
// Name: CheckpointShareCardContext
// Dependencies: [19, 6226, 6224, 2]

// Module 13669 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6224 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6226 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
