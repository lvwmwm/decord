// Module ID: 12116
// Function ID: 94892
// Name: UserProfileGameFriendsCard
// Dependencies: [31, 33, 4130, 5470, 1212, 11661, 5511, 4126, 2]
// Exports: default

// Module 12116 (UserProfileGameFriendsCard)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ card: { flexDirection: "column" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  let applicationIds;
  let style;
  let importDefault;
  let dependencyMap;
  let jsx;
  ({ applicationIds, style } = arg0);
  const tmp = callback();
  const found = importDefault(5470)(applicationIds).filter((arg0) => null != arg0);
  if (0 === found.length) {
    return null;
  } else {
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1212).intl;
      let obj = {
        applicationName() {
              return lib(textmdnormal(11661), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
            }
      };
      let formatResult = intl2.format(found(1212).t.wQ6urw, obj);
    } else if (2 === found.length) {
      const intl = found(1212).intl;
      obj = {
        applicationName() {
              return lib(textmdnormal(11661), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
            },
        applicationName2() {
              return lib(textmdnormal(11661), { application: found[1], textVariant: textmdnormal, iconSize: 16 }, found[1].id);
            }
      };
      formatResult = intl.format(found(1212).t.C98CSN, obj);
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1212).intl;
      obj = {
        applications() {
              return lib.map((application) => callback2(callback(table[5]), { application, useComma: true, textVariant: outer1_1, iconSize: 16 }, application.id));
            },
        applicationNameLast() {
              return lib(textmdnormal(11661), { application: dependencyMap, textVariant: textmdnormal, iconSize: 16 });
            }
      };
      formatResult = intl4.format(found(1212).t.UxpwAh, obj);
    }
    const obj1 = {};
    const items = [tmp.card, style];
    obj1.style = items;
    const intl3 = found(1212).intl;
    obj1.title = intl3.string(found(1212).t["Uv/eTx"]);
    const obj2 = { variant: "text-md/normal", color: "text-default", children: formatResult };
    obj1.children = jsx(found(4126).Text, { variant: "text-md/normal", color: "text-default", children: formatResult });
    return jsx(importDefault(5511), {});
  }
  const arr = importDefault(5470)(applicationIds);
};
