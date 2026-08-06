// Module ID: 10617
// Function ID: 10618
// Name: useParticipantTileTapGesture
// Dependencies: [5407, 2]
// Exports: default

// Module 10617 (useParticipantTileTapGesture)
const result = require("set").fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  let onDoubleTapStart;
  let onSingleTapStart;
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = require(5407) /* Directions */.Gesture;
  const TapResult = Gesture.Tap();
  const Gesture2 = require(5407) /* Directions */.Gesture;
  const onStartResult = Gesture.Tap().onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const onStartResult1 = Gesture2.Tap().onStart(onDoubleTapStart);
  const Gesture3 = require(5407) /* Directions */.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};
