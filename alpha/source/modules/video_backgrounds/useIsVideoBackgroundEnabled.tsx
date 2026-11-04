// Module ID: 12141
// Function ID: 12142
// Name: useIsVideoBackgroundEnabled
// Dependencies: [6076, 12142, 1377, 2]
// Exports: default

// Module 12141 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 6076 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 12142 */;
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
