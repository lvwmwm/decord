// Module ID: 4988
// Function ID: 42665
// Dependencies: [1325, 2]

// Module 4988
const obj = { kind: "user", name: "2025-12-proportional-vad-indicator", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true }, [2]: { enabled: true, disableUI: true }, [3]: { enabled: true, disableUI: true, swallowVolumeOnlySpeakingEvents: true }, [4]: { enabled: true, disableUI: true, dontEmitVolumeOnlySpeakingEvents: true } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/calls/ProportionalVadIndicatorExperiment.tsx");

export default tmp2;
