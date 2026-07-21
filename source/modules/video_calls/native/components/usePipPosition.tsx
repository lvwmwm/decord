// Module ID: 10529
// Function ID: 82272
// Name: usePipPosition
// Dependencies: []
// Exports: default

// Module 10529 (usePipPosition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(closure_1[2]).Storage;
    return Storage.get("CameraPreviewPosition", callback(closure_1[3]).DEFAULT_PIP_POSITION);
  }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(closure_1[2]).Storage;
      const result = Storage.set("CameraPreviewPosition", arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};
