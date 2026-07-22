// Module ID: 12559
// Function ID: 96556
// Name: getApplicationIdForActivity
// Dependencies: []
// Exports: default

// Module 12559 (getApplicationIdForActivity)
const SpotifyApplication = require(dependencyMap[0]).SpotifyApplication;
let closure_3 = require(dependencyMap[1]).TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = require(dependencyMap[2]).XBOX_APPLICATION_ID_PREFIX;
let closure_5 = require(dependencyMap[3]).XBOX_ACTIVITY_APPLICATION_ID;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (importDefault(dependencyMap[4])(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (importDefault(dependencyMap[5])(party)) {
    if (null != party.url) {
      id = closure_3 + party.url;
    }
  }
  if (null != party.application_id) {
    if (party.application_id !== closure_5) {
      id = party.application_id;
    }
  }
  id = null;
  if (importDefault(dependencyMap[6])(party)) {
    id = closure_4 + party.name;
  }
};
