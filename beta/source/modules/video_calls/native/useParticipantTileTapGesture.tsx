// Module ID: 9676
// Function ID: 9677
// Name: useParticipantTileTapGesture
// Dependencies: [6891, 2]
// Exports: default

// Module 9676 (useParticipantTileTapGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = LegacyBaseButton.Gesture;
  const TapResult = Gesture.Tap();
  const runOnJSResult = Gesture.Tap().runOnJS(true);
  const Gesture2 = LegacyBaseButton.Gesture;
  const onStartResult = Gesture.Tap().runOnJS(true).onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
  const onStartResult1 = Gesture2.Tap().runOnJS(true).onStart(onDoubleTapStart);
  const Gesture3 = LegacyBaseButton.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().runOnJS(true).onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};
