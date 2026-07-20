// Module ID: 13315
// Function ID: 101201
// Name: transformApplication
// Dependencies: []
// Exports: default

// Module 13315 (transformApplication)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
