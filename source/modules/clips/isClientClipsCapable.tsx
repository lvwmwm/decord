// Module ID: 4544
// Function ID: 4545
// Name: isClientClipsCapable
// Dependencies: [4545, 4543, 1234, 2]
// Exports: default

// Module 4544 (isClientClipsCapable)
import set from "set" /* 2 */;
import setAll from "set" /* 1234 */;
import apexExperiment from "apexExperiment" /* 4543 */;
import DesktopSources from "DesktopSources" /* 4545 */;

const Features = DesktopSources.Features;
const result = set.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = apexExperiment.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = setAll.isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj = setAll;
  }
  return ignorePlatformRestriction;
};
