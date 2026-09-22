// Module ID: 13949
// Function ID: 13950
// Name: isClientClipsCapable
// Dependencies: [4782, 13948, 1364, 2]
// Exports: default

// Module 13949 (isClientClipsCapable)
import PlatformUtilsAll from "PlatformUtils" /* 1364 */;
import Constants from "Constants" /* 4782 */;
import ClipsExperiment2 from "ClipsExperiment" /* 13948 */;
import size from "module_2" /* 2 */;

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = ClipsExperiment2.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  return ignorePlatformRestriction;
};
