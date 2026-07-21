// Module ID: 12118
// Function ID: 93342
// Dependencies: []

// Module 12118
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).IconButton, { ref });
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
