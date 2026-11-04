// Module ID: 15217
// Function ID: 15218
// Name: ProfileReadStateEndpoints
// Dependencies: [2]

// Module 15217 (ProfileReadStateEndpoints)
import size from "module_2" /* 2 */;

const obj = {
  PROFILE_READ_STATE(arg0) {
    return "/users/@me/profile-read-states/" + arg0;
  }
};
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateEndpoints.tsx");

export const ProfileReadStateEndpoints = frozen;
