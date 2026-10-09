// Module ID: 14707
// Function ID: 14708
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 14707 (transformApplication)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
