// Module ID: 13222
// Function ID: 13223
// Name: isClientClipsCapable
// Dependencies: [4862, 13221, 1370, 2]
// Exports: default

// Module 13222 (isClientClipsCapable)
import PlatformUtilsAll from "PlatformUtils" /* 1370 */;
import Constants from "Constants" /* 4862 */;
import ClipsExperiment2 from "ClipsExperiment" /* 13221 */;
import size from "module_2" /* 2 */;

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = ClipsExperiment2.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    const obj2 = PlatformUtilsAll;
    ignorePlatformRestriction = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
    const isDesktopResult = obj2.isDesktop() && mediaEngine.supports(Features.CLIPS) && mediaEngine.hasClipsV3Support();
  }
  return ignorePlatformRestriction;
};
