// Module ID: 15986
// Function ID: 15987
// Name: context
// Dependencies: [19, 2]

// Module 15986 (context)
import importAllResult from "noop";

const context = importAllResult.createContext({ audioRef: importAllResult.createRef() });
const obj = { audioRef: importAllResult.createRef() };
const result = require("set").fileFinishedImporting("modules/soundplayer/SoundPlayerContext.tsx");

export default context;
