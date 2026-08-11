// Module ID: 10686
// Function ID: 10687
// Name: useParticipantTileTapGesture
// Dependencies: [5427, 2]
// Exports: default

// Module 10686 (useParticipantTileTapGesture)
const result = require("set").fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  let onDoubleTapStart;
  let onSingleTapStart;
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = require(5427) /* LegacyBaseButton */.Gesture;
  const TapResult = Gesture.Tap();
  const Gesture2 = require(5427) /* LegacyBaseButton */.Gesture;
  const onStartResult = Gesture.Tap().onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const onStartResult1 = Gesture2.Tap().onStart(onDoubleTapStart);
  const Gesture3 = require(5427) /* LegacyBaseButton */.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};
