// Module ID: 4361
// Function ID: 4362
// Name: isClientClipsCapable
// Dependencies: [4362, 4360, 500, 2]
// Exports: default

// Module 4361 (isClientClipsCapable)
import { Features } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = require(4360) /* apexExperiment */.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = importAll(500).isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj = importAll(500);
  }
  return ignorePlatformRestriction;
};
