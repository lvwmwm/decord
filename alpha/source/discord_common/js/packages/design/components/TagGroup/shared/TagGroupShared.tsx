// Module ID: 13981
// Function ID: 13982
// Name: TagGroupShared
// Dependencies: [2]
// Exports: getDefaultTagGroupSize, getTagIconSize, getTagTextVariant

// Module 13981 (TagGroupShared)
import size from "module_2" /* 2 */;

let closure_0 = { xs: "text-xs/normal", sm: "text-sm/normal", md: "text-md/normal" };
let closure_1 = { xs: "xxs", sm: "xs", md: "sm" };
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/TagGroup/shared/TagGroupShared.tsx");

export const DEFAULT_TAG_GROUP_SIZE = "md";
export const DEFAULT_INLINE_TAG_GROUP_SIZE = "sm";
export function getDefaultTagGroupSize(layout) {
  let str = "md";
  if ("inline" === layout) {
    str = "sm";
  }
  return str;
}
export const getTagTextVariant = function getTagTextVariant(arg0) {
  return closure_0[arg0];
};
export const getTagIconSize = function getTagIconSize(arg0) {
  return closure_1[arg0];
};
