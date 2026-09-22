// Module ID: 9662
// Function ID: 9663
// Name: usePipPosition
// Dependencies: [32, 19, 510, 9663, 2]
// Exports: default

// Module 9662 (usePipPosition)
import Storage2 from "Storage" /* 510 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const CameraPreviewPosition = "CameraPreviewPosition";
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = _slicedToArray(noop.useState(() => {
    const Storage = closure_0(510).Storage;
    return Storage.get(CameraPreviewPosition, closure_0(9663).DEFAULT_PIP_POSITION);
  }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    noop.useCallback((arg0) => {
      const Storage = Storage2.Storage;
      const result = Storage.set(CameraPreviewPosition, arg0);
      closure_0(arg0);
    }, [])
  ];
  return items;
};
