// Module ID: 16223
// Function ID: 16224
// Name: context
// Dependencies: [19, 2]

// Module 16223 (context)
import importAllResult from "noop";

const context = importAllResult.createContext({ audioRef: importAllResult.createRef() });
const obj = { audioRef: importAllResult.createRef() };
const result = require("set").fileFinishedImporting("modules/soundplayer/SoundPlayerContext.tsx");

export default context;
