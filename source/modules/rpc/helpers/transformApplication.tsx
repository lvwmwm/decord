// Module ID: 13852
// Function ID: 13853
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 13852 (transformApplication)
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
