// Module ID: 16039
// Function ID: 16040
// Name: context
// Dependencies: [19, 2]

// Module 16039 (context)
import importAllResult from "noop";

const context = importAllResult.createContext({ audioRef: importAllResult.createRef() });
const obj = { audioRef: importAllResult.createRef() };
const result = require("set").fileFinishedImporting("modules/soundplayer/SoundPlayerContext.tsx");

export default context;
