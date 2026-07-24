// Module ID: 9856
// Function ID: 76414
// Name: useCanSetThumbnail
// Dependencies: [1348, 624, 2]
// Exports: default

// Module 9856 (useCanSetThumbnail)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_2.getChannel(closure_0));
  let isMediaChannelResult;
  if (null != stateFromStores) {
    isMediaChannelResult = stateFromStores.isMediaChannel();
  }
  if (isMediaChannelResult) {
    isImage = undefined;
    if (null != isImage) {
      isImage = isImage.isImage;
    }
    isMediaChannelResult = true === isImage;
  }
  return isMediaChannelResult;
};
