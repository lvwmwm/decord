// Module ID: 12122
// Function ID: 93380
// Dependencies: []

// Module 12122
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).IconButton, { ref });
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
