// Module ID: 14286
// Function ID: 14287
// Name: CheckpointShareCardContext
// Dependencies: [19, 6391, 6389, 2]

// Module 14286 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6389 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6391 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
