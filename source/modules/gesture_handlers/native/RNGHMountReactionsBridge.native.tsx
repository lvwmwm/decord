// Module ID: 16615
// Function ID: 129566
// Name: installRNGHMountReactionsBridge
// Dependencies: [16616, 2]
// Exports: installRNGHMountReactionsBridge

// Module 16615 (installRNGHMountReactionsBridge)
let c3 = false;
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx");

export const installRNGHMountReactionsBridge = function installRNGHMountReactionsBridge() {
  if (!c3) {
    const RNGHMountReactionsEffectExperiment = require(16616) /* RNGHMountReactionsEffectExperiment */.RNGHMountReactionsEffectExperiment;
    const obj = { location: "rngh-mount-reactions" };
    global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__ = RNGHMountReactionsEffectExperiment.getConfig(obj).useLayoutEffect;
    global.__DISCORD_RNGH_ON_STALE_MOUNT__ = () => {

    };
    c3 = true;
  }
};
