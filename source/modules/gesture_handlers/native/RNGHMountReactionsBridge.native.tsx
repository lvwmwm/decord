// Module ID: 16862
// Function ID: 16863
// Name: installRNGHMountReactionsBridge
// Dependencies: [16863, 2]
// Exports: installRNGHMountReactionsBridge

// Module 16862 (installRNGHMountReactionsBridge)
let c3 = false;
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx");

export const installRNGHMountReactionsBridge = function installRNGHMountReactionsBridge() {
  if (!c3) {
    const RNGHMountReactionsEffectExperiment = require(16863) /* RNGHMountReactionsEffectExperiment */.RNGHMountReactionsEffectExperiment;
    global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__ = RNGHMountReactionsEffectExperiment.getConfig({ location: "rngh-mount-reactions" }).useLayoutEffect;
    global.__DISCORD_RNGH_ON_STALE_MOUNT__ = () => {

    };
    c3 = true;
  }
};
