// Module ID: 10510
// Function ID: 82076
// Name: transitionToActivity
// Dependencies: []
// Exports: default

// Module 10510 (transitionToActivity)
const setVoiceChatDrawerState = require(dependencyMap[0]).setVoiceChatDrawerState;
let closure_4 = importDefault(dependencyMap[1]);
const ActivityPanelModes = require(dependencyMap[2]).ActivityPanelModes;
const VoiceChatDrawerState = require(dependencyMap[3]).VoiceChatDrawerState;
const _module = require(dependencyMap[13]);
const result = _module.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(dependencyMap[4]);
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmp4 = !require(dependencyMap[5]).isModalOpen(importDefault(dependencyMap[6]));
    if (tmp4) {
      tmp4 = importDefault(dependencyMap[7])(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      importDefault(dependencyMap[8])(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (importDefault(dependencyMap[7])(embeddedActivityLocationChannelId)) {
        const obj3 = importDefault(dependencyMap[9]);
        obj = {};
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = obj3.selectParticipant(embeddedActivityLocationChannelId, require(dependencyMap[10]).getEmbeddedActivityParticipantId(obj));
        const obj4 = require(dependencyMap[10]);
        importDefault(dependencyMap[11]).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const obj6 = importDefault(dependencyMap[11]);
      } else {
        const result = require(dependencyMap[12]).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const obj2 = require(dependencyMap[12]);
      }
    }
    const obj7 = require(dependencyMap[5]);
  }
};
