// Module ID: 10512
// Function ID: 82079
// Name: _handleJoinEmbeddedActivityInternal
// Dependencies: []
// Exports: default

// Module 10512 (_handleJoinEmbeddedActivityInternal)
function _handleJoinEmbeddedActivityInternal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleJoinEmbeddedActivityInternal = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/activities/handleJoinEmbeddedActivity.tsx");

export default function handleJoinEmbeddedActivity(arg0) {
  const arg1 = arg0;
  const obj = arg1(dependencyMap[7]);
  return obj.wrapPreemptiveActivityPopout(arg1(dependencyMap[7]).shouldOpenActivityInPopoutWindow(), () => function handleJoinEmbeddedActivityInternal(arg0) {
    return callback(...arguments);
  }(arg0));
};
