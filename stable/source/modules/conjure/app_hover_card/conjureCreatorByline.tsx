// Module ID: 15217
// Function ID: 15218
// Name: conjureCreatorByline
// Dependencies: [1113, 4026, 5226, 2]
// Exports: formatConjureCreatorByline

// Module 15217 (conjureCreatorByline)
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import UserUtils from "UserUtils" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4026["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
