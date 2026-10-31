// Module ID: 11943
// Function ID: 11944
// Name: useIsVideoBackgroundEnabled
// Dependencies: [5941, 11944, 1375, 2]
// Exports: default

// Module 11943 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5941 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 11944 */;
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
