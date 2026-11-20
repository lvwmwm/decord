// Module ID: 6247
// Function ID: 6248
// Name: ReleaseChannelUtils
// Dependencies: [1377, 1378, 2]

// Module 6247 (ReleaseChannelUtils)
import react_native from "react-native" /* 1377 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

const ReleaseChannel = react_native.getConstants().ReleaseChannel;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid() && -1 === ReleaseChannel.indexOf("canary") && -1 === ReleaseChannel.indexOf("beta");
let tmp4 = !(-1 !== ReleaseChannel.indexOf("debug") || -1 !== ReleaseChannel.indexOf("developer"));
const tmp3 = -1 !== ReleaseChannel.indexOf("debug") || -1 !== ReleaseChannel.indexOf("developer");
if (tmp4) {
  tmp4 = "stable" === ReleaseChannel || PlatformUtils;
}
const result = size.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp4;
export const CurrentReleaseChannel = ReleaseChannel;
