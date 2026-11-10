// Module ID: 15214
// Function ID: 15215
// Name: conjureCreatorByline
// Dependencies: [1113, 4028, 5196, 2]
// Exports: formatConjureCreatorByline

// Module 15214 (conjureCreatorByline)
import intl2 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import UserUtils from "UserUtils" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  let obj2;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { name: obj2.getName(creator) };
  const prop = _modDef4028["6/x9LD"];
  obj2 = UserUtils;
  return format(prop, obj);
}
