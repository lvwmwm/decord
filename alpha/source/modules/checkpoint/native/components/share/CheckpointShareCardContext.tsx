// Module ID: 13429
// Function ID: 13430
// Name: CheckpointShareCardContext
// Dependencies: [19, 6091, 6089, 2]

// Module 13429 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6089 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6091 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
