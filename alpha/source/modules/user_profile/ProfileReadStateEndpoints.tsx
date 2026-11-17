// Module ID: 15897
// Function ID: 15898
// Name: ProfileReadStateEndpoints
// Dependencies: [2]

// Module 15897 (ProfileReadStateEndpoints)
import size from "module_2" /* 2 */;

const obj = {
  PROFILE_READ_STATE(arg0) {
    return "/users/@me/profile-read-states/" + arg0;
  }
};
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateEndpoints.tsx");

export const ProfileReadStateEndpoints = frozen;
