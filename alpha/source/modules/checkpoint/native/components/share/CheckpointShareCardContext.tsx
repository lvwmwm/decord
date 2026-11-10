// Module ID: 13694
// Function ID: 13695
// Name: CheckpointShareCardContext
// Dependencies: [19, 6225, 6223, 2]

// Module 13694 (CheckpointShareCardContext)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6223 */;
import react from "react" /* 19 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6225 */;
import size from "module_2" /* 2 */;

const createContext = react.createContext;
const context = createContext(CheckpointCardColors.getCardColors(CheckpointCardColorPalette.CheckpointCardColorPalette.NONE));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardContext.tsx");

export const CheckpointShareCardColorsContext = context;
