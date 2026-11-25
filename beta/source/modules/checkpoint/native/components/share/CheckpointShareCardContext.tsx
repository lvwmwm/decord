// Module ID: 12526
// Function ID: 12527
// Name: CheckpointShareCardContext
// Dependencies: [19, 5993, 5991, 2]

// Module 12526 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5991 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5993 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
