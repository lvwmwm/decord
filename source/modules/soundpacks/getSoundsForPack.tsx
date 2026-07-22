// Module ID: 10237
// Function ID: 79087
// Name: getSoundPack
// Dependencies: []
// Exports: default

// Module 10237 (getSoundPack)
const Soundpacks = require(dependencyMap[0]).Soundpacks;
let closure_0 = { [Soundpacks.CLASSIC]: {}, [Soundpacks.RETRO]: { message1: "bit_message1" }, [Soundpacks.BUBBLE]: { message1: "bop_message1" }, [Soundpacks.DUCKY]: { message1: "ducky_message1" }, [Soundpacks.LOFI]: { message1: "lofi_message1" }, [Soundpacks.ASMR]: { message1: "asmr_message1" }, [Soundpacks.DISCODO]: { message1: "discodo" }, [Soundpacks.HALLOWEEN]: {}, [Soundpacks.WINTER_HOLIDAY]: {} };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/soundpacks/getSoundsForPack.tsx");

export default function getSoundPack(arg0) {
  return closure_0[arg0];
};
