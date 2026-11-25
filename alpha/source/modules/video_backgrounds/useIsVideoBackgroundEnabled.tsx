// Module ID: 10350
// Function ID: 10351
// Name: useIsVideoBackgroundEnabled
// Dependencies: [5996, 10351, 1378, 2]
// Exports: default

// Module 10350 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5996 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 10351 */;
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
