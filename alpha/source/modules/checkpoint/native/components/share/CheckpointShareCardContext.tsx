// Module ID: 12401
// Function ID: 12402
// Name: CheckpointShareCardContext
// Dependencies: [19, 5874, 5872, 2]

// Module 12401 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5872 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5874 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
