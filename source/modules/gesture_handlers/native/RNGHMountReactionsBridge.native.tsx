// Module ID: 16482
// Function ID: 127289
// Name: installRNGHMountReactionsBridge
// Dependencies: []
// Exports: installRNGHMountReactionsBridge

// Module 16482 (installRNGHMountReactionsBridge)
let closure_3 = false;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx");

export const installRNGHMountReactionsBridge = function installRNGHMountReactionsBridge() {
  if (!closure_3) {
    const RNGHMountReactionsEffectExperiment = require(dependencyMap[0]).RNGHMountReactionsEffectExperiment;
    const obj = { location: "rngh-mount-reactions" };
    global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__ = RNGHMountReactionsEffectExperiment.getConfig(obj).useLayoutEffect;
    global.__DISCORD_RNGH_ON_STALE_MOUNT__ = () => {

    };
    closure_3 = true;
  }
};
