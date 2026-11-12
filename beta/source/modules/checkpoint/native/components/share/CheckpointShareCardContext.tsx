// Module ID: 13712
// Function ID: 13713
// Name: CheckpointShareCardContext
// Dependencies: [19, 6255, 6253, 2]

// Module 13712 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6253 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6255 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
