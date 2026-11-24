// Module ID: 11416
// Function ID: 11417
// Name: conjureCreatorByline
// Dependencies: [1112, 4192, 4973, 2]
// Exports: formatConjureCreatorByline

// Module 11416 (conjureCreatorByline)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import UserUtils from "UserUtils" /* 4973 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4192["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
