// Module ID: 13989
// Function ID: 13990
// Name: transformApplication
// Dependencies: [2]
// Exports: default

// Module 13989 (transformApplication)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rpc/helpers/transformApplication.tsx");

export default function transformApplication(name) {
  return { name: name.name, id: name.id, icon: name.icon, cover_image: name.coverImage, type: name.type };
};
