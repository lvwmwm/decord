// Module ID: 12448
// Function ID: 12449
// Name: CheckpointShareCardContext
// Dependencies: [19, 5901, 5899, 2]

// Module 12448 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5899 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5901 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
