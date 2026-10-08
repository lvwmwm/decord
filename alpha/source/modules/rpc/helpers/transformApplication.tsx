// Module ID: 14608
// Function ID: 14609
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 14608 (transformApplication)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
