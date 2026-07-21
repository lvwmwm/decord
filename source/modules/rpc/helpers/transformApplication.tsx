// Module ID: 13324
// Function ID: 101246
// Name: transformApplication
// Dependencies: []
// Exports: default

// Module 13324 (transformApplication)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
