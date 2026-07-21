// Module ID: 9816
// Function ID: 76155
// Name: useCanSetThumbnail
// Dependencies: []
// Exports: default

// Module 9816 (useCanSetThumbnail)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  isImage = arg0;
  const items = [closure_2];
  const stateFromStores = isImage(dependencyMap[1]).useStateFromStores(items, () => channel.getChannel(arg0));
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
