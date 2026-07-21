// Module ID: 13322
// Function ID: 101224
// Name: transformApplication
// Dependencies: [284214097]
// Exports: default

// Module 13322 (transformApplication)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
