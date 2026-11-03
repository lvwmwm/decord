// Module ID: 13582
// Function ID: 13583
// Name: CheckpointShareCardContext
// Dependencies: [19, 6211, 6209, 2]

// Module 13582 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6209 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6211 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
