// Module ID: 12888
// Function ID: 98403
// Name: LocalImageThumbnail
// Dependencies: []
// Exports: default

// Module 12888 (LocalImageThumbnail)
importAll(dependencyMap[0]);
let _default = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
if (obj.isAndroid()) {
  _default = arg1(dependencyMap[4]).default;
}
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
