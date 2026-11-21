// Module ID: 12288
// Function ID: 12289
// Name: conjureCreatorByline
// Dependencies: [1112, 4190, 4969, 2]
// Exports: formatConjureCreatorByline

// Module 12288 (conjureCreatorByline)
import intl2 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import UserUtils from "UserUtils" /* 4969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4190["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
