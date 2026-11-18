// Module ID: 12241
// Function ID: 12242
// Name: conjureCreatorByline
// Dependencies: [1113, 4121, 4879, 2]
// Exports: formatConjureCreatorByline

// Module 12241 (conjureCreatorByline)
import intl2 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import UserUtils from "UserUtils" /* 4879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4121["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
