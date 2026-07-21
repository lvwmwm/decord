// Module ID: 10551
// Function ID: 82425
// Name: useParticipantTileTapGesture
// Dependencies: []
// Exports: default

// Module 10551 (useParticipantTileTapGesture)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  let onDoubleTapStart;
  let onSingleTapStart;
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = require(dependencyMap[0]).Gesture;
  const TapResult = Gesture.Tap();
  const Gesture2 = require(dependencyMap[0]).Gesture;
  const onStartResult = Gesture.Tap().onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const onStartResult1 = Gesture2.Tap().onStart(onDoubleTapStart);
  const Gesture3 = require(dependencyMap[0]).Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};
