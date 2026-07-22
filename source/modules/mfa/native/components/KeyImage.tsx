// Module ID: 13528
// Function ID: 102628
// Name: KeyImage
// Dependencies: []
// Exports: KeyImage

// Module 13528 (KeyImage)
const Image = require(dependencyMap[0]).Image;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let closure_4 = _module.createStyles({ icon: {} });
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: importDefault(dependencyMap[3]), style: callback().icon };
  return <Image {...obj} />;
};
