// Module ID: 4191
// Function ID: 36072
// Name: isClientClipsCapable
// Dependencies: [4192, 4190, 477, 2]
// Exports: default

// Module 4191 (isClientClipsCapable)
import { Features } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = require(4190) /* isUserPremiumTypeForClipsEarlyAccess */.ClipsExperiment;
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
