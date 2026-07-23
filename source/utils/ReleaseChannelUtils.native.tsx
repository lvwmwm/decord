// Module ID: 6838
// Function ID: 54030
// Name: isStable
// Dependencies: [1554, 477, 2]

// Module 6838 (isStable)
import set from "set";
import set from "set";

const ReleaseChannel = require("getConstants").getConstants().ReleaseChannel;
set = set.isAndroid();
if (set) {
  set = -1 === ReleaseChannel.indexOf("canary");
}
if (set) {
  set = -1 === ReleaseChannel.indexOf("beta");
}
let tmp3 = "stable" === ReleaseChannel;
let tmp4 = -1 !== ReleaseChannel.indexOf("debug");
if (!tmp4) {
  tmp4 = -1 !== ReleaseChannel.indexOf("developer");
}
let tmp5 = !tmp4;
if (!tmp4) {
  if (!tmp3) {
    tmp3 = set;
  }
  tmp5 = tmp3;
}
const result = set.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp5;
export const CurrentReleaseChannel = ReleaseChannel;
