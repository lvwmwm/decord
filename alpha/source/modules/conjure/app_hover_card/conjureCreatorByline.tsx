// Module ID: 11563
// Function ID: 11564
// Name: conjureCreatorByline
// Dependencies: [1112, 4245, 5099, 2]
// Exports: formatConjureCreatorByline

// Module 11563 (conjureCreatorByline)
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import UserUtils from "UserUtils" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4245["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
