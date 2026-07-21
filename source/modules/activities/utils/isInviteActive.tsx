// Module ID: 10895
// Function ID: 84712
// Name: result
// Dependencies: []
// Exports: default

// Module 10895 (result)
const result = 2 * importDefault(dependencyMap[0]).Millis.HOUR;
const result1 = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/utils/isInviteActive.tsx");

export default function isInviteActive(party, activity) {
  if (null == party) {
    return false;
  } else {
    let party_id = null;
    if (null != activity.activity) {
      party_id = activity.activity.party_id;
    }
    let tmp2 = null != party_id;
    if (tmp2) {
      party = party.party;
      let id;
      if (null != party) {
        id = party.id;
      }
      tmp2 = id !== party_id;
    }
    const _Date = Date;
    const sum = importDefault(dependencyMap[1]).extractTimestamp(activity.id) + result;
    let tmp10 = null != party.application_id;
    const obj = importDefault(dependencyMap[1]);
    if (tmp10) {
      tmp10 = party.application_id !== arg2;
    }
    let tmp12 = !tmp2;
    if (!tmp2) {
      tmp12 = !tmp9;
    }
    if (tmp12) {
      tmp12 = !tmp10;
    }
    return tmp12;
  }
};
export const EMBED_LIFETIME = result;
