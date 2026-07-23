// Module ID: 4190
// Function ID: 36059
// Name: isClientClipsCapable
// Dependencies: [4191, 4189, 477, 2]
// Exports: default

// Module 4190 (isClientClipsCapable)
import { Features } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = require(4189) /* isUserPremiumTypeForClipsEarlyAccess */.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = importAll(477).isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj = importAll(477);
  }
  return ignorePlatformRestriction;
};
