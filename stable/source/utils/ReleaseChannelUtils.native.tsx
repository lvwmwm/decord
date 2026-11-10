// Module ID: 6541
// Function ID: 6542
// Name: ReleaseChannelUtils
// Dependencies: [1374, 1375, 2]

// Module 6541 (ReleaseChannelUtils)
import react_native from "react-native" /* 1374 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
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
