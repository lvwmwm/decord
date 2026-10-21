// Module ID: 15679
// Function ID: 15680
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 15679 (transformApplication)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
