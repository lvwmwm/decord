// Module ID: 13005
// Function ID: 13006
// Name: useIsVideoBackgroundEnabled
// Dependencies: [6241, 13006, 1380, 2]
// Exports: default

// Module 13005 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 6241 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 13006 */;
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
