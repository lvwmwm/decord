// Module ID: 10846
// Function ID: 10847
// Name: useIsVideoBackgroundEnabled
// Dependencies: [5716, 10847, 1378, 2]
// Exports: default

// Module 10846 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5716 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 10847 */;
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
