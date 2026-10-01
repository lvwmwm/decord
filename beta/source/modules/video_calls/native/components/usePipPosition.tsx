// Module ID: 8845
// Function ID: 8846
// Name: usePipPosition
// Dependencies: [32, 19, 510, 8846, 2]
// Exports: default

// Module 8845 (usePipPosition)
import Storage2 from "Storage" /* 510 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const CameraPreviewPosition = "CameraPreviewPosition";
let result = size.fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = _slicedToArray(react.useState(() => {
    const Storage = closure_0(dependencyMap[2]).Storage;
    return Storage.get(CameraPreviewPosition, closure_0(dependencyMap[3]).DEFAULT_PIP_POSITION);
  }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    react.useCallback((arg0) => {
      const Storage = Storage2.Storage;
      const result = Storage.set(CameraPreviewPosition, arg0);
      closure_0(arg0);
    }, [])
  ];
  return items;
};
