// Module ID: 10449
// Function ID: 80632
// Name: _computeActivityPartyPrivacyFlags
// Dependencies: [653, 3803, 587, 1360, 6982, 2]
// Exports: computeActivityFlags, isContextlessEmbeddedActivity

// Module 10449 (_computeActivityPartyPrivacyFlags)
import ME from "ME";

let closure_3;
let closure_4;
function _computeActivityPartyPrivacyFlags(arg0) {
  const AllowActivityPartyPrivacyFriends = require(3803) /* explicitContentFromProto */.AllowActivityPartyPrivacyFriends;
  const setting = AllowActivityPartyPrivacyFriends.getSetting();
  const AllowActivityPartyPrivacyVoiceChannel = require(3803) /* explicitContentFromProto */.AllowActivityPartyPrivacyVoiceChannel;
  const PARTY_PRIVACY_FRIENDS = constants.PARTY_PRIVACY_FRIENDS;
  const setting1 = AllowActivityPartyPrivacyVoiceChannel.getSetting();
  if (setting) {
    let tmp3 = arg0 | PARTY_PRIVACY_FRIENDS;
  } else {
    tmp3 = arg0 & ~PARTY_PRIVACY_FRIENDS;
  }
  const PARTY_PRIVACY_VOICE_CHANNEL = constants.PARTY_PRIVACY_VOICE_CHANNEL;
  if (setting1) {
    let tmp4 = tmp3 | PARTY_PRIVACY_VOICE_CHANNEL;
  } else {
    tmp4 = tmp3 & ~PARTY_PRIVACY_VOICE_CHANNEL;
  }
  return tmp4;
}
({ ActivityFlags: closure_3, ActivityPartyPrivacy: closure_4 } = ME);
const result = require("Storage").fileFinishedImporting("modules/activities/utils/ActivityFlagUtils.tsx");

export const computeActivityFlags = function computeActivityFlags(activity, hasFlagResult, arg2, canLaunchFrameResult, privacy) {
  let flag = hasFlagResult;
  let flag2 = arg2;
  let flag3 = canLaunchFrameResult;
  let PRIVATE = privacy;
  if (hasFlagResult === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag3 === undefined) {
    flag3 = false;
  }
  if (PRIVATE === undefined) {
    PRIVATE = constants2.PRIVATE;
  }
  const secrets = activity.secrets;
  let num = 0;
  if (flag) {
    num = constants.INSTANCE | 0;
  }
  let join;
  if (null != secrets) {
    join = secrets.join;
  }
  let tmp4 = num;
  if (null != join) {
    tmp4 = num | constants.JOIN;
  }
  let tmp6 = tmp4;
  if (flag3) {
    tmp6 = tmp4 | constants.CONTEXTLESS;
  }
  if (flag2) {
    let tmp12 = tmp15 | _computeActivityPartyPrivacyFlags(tmp15);
  } else {
    let value = PRIVATE === constants2.PUBLIC;
    if (!value) {
      const Storage = require(587) /* Storage */.Storage;
      value = Storage.get("ACTIVITIES_FORCE_PUBLIC");
    }
    tmp12 = tmp6;
    if (value) {
      tmp12 = tmp6 | _computeActivityPartyPrivacyFlags(tmp6);
    }
  }
  return tmp12;
};
export const isContextlessEmbeddedActivity = function isContextlessEmbeddedActivity(remoteApplicationActivity) {
  let flags;
  if (null != remoteApplicationActivity) {
    flags = remoteApplicationActivity.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  let hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, constants.CONTEXTLESS);
  if (hasFlagResult) {
    hasFlagResult = importDefault(6982)(remoteApplicationActivity);
  }
  return hasFlagResult;
};
