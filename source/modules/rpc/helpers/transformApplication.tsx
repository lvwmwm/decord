// Module ID: 13596
// Function ID: 13597
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 13596 (transformApplication)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
