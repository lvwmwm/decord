// Module ID: 10966
// Function ID: 10967
// Name: useIsVideoBackgroundEnabled
// Dependencies: [5835, 10967, 1378, 2]
// Exports: default

// Module 10966 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5835 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 10967 */;
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
