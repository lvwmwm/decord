// Module ID: 10393
// Function ID: 10394
// Name: useIsVideoBackgroundEnabled
// Dependencies: [6027, 10394, 1379, 2]
// Exports: default

// Module 10393 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 6027 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 10394 */;
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
