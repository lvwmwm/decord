// Module ID: 11784
// Function ID: 11785
// Name: useCanSetThumbnail
// Dependencies: [5092, 563, 2]
// Exports: default

// Module 11784 (useCanSetThumbnail)
import ChannelStore from "ChannelStore" /* 5092 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let isMediaChannelResult;
  if (stateFromStores != null) {
    isMediaChannelResult = stateFromStores.isMediaChannel();
  }
  if (isMediaChannelResult) {
    isImage = undefined;
    if (isImage != null) {
      isImage = isImage.isImage;
    }
    isMediaChannelResult = true === isImage;
  }
  return isMediaChannelResult;
};
