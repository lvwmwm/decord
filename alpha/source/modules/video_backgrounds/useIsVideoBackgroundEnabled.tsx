// Module ID: 11905
// Function ID: 11906
// Name: useIsVideoBackgroundEnabled
// Dependencies: [5922, 11906, 1376, 2]
// Exports: default

// Module 11905 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5922 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 11906 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default function useIsVideoBackgroundEnabled(location) {
  const obj = VirtualBackgroundsIosExperimentDefault;
  const obj2 = { location };
  const enabled = obj.useConfig(obj2).enabled;
  let tmp2 = useIsVideoBackgroundSupportedDefault();
  if (tmp2) {
    const obj3 = PlatformUtils;
    const isIOSResult = obj3.isIOS();
    let tmp5 = !isIOSResult;
    if (isIOSResult) {
      tmp5 = enabled;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
