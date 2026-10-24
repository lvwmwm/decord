// Module ID: 15778
// Function ID: 15779
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 15778 (transformApplication)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
