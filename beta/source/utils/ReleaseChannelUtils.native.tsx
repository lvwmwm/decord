// Module ID: 5181
// Function ID: 5182
// Name: ReleaseChannelUtils
// Dependencies: [1369, 1370, 2]

// Module 5181 (ReleaseChannelUtils)
import react_native from "react-native" /* 1369 */;
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
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
