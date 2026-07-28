// Module ID: 13554
// Function ID: 104067
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 13554 (transformApplication)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
