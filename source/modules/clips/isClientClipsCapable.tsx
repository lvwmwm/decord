// Module ID: 4182
// Function ID: 35964
// Name: isClientClipsCapable
// Dependencies: []
// Exports: default

// Module 4182 (isClientClipsCapable)
const Features = require(dependencyMap[0]).Features;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = require(dependencyMap[1]).ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  if (!ignorePlatformRestriction) {
    let isDesktopResult = importAll(dependencyMap[2]).isDesktop();
    if (isDesktopResult) {
      const mediaEngine = getMediaEngine.getMediaEngine();
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    ignorePlatformRestriction = isDesktopResult;
    const obj = importAll(dependencyMap[2]);
  }
  return ignorePlatformRestriction;
};
