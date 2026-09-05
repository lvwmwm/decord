// Module ID: 14521
// Function ID: 14522
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 14521 (transformApplication)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
