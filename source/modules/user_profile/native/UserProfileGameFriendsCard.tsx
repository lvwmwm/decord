// Module ID: 12000
// Function ID: 92715
// Name: UserProfileGameFriendsCard
// Dependencies: []
// Exports: default

// Module 12000 (UserProfileGameFriendsCard)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ card: { flexDirection: "column" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  let applicationIds;
  let style;
  let importDefault;
  let closure_2;
  let jsx;
  ({ applicationIds, style } = arg0);
  const tmp = callback();
  const found = importDefault(closure_2[3])(applicationIds).filter((arg0) => null != arg0);
  const arg1 = found;
  if (0 === found.length) {
    return null;
  } else {
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = arg1(closure_2[4]).intl;
      let obj = {
        applicationName() {
              return lib(textmdnormal(closure_2[5]), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
            }
      };
      let formatResult = intl2.format(arg1(closure_2[4]).t.wQ6urw, obj);
    } else if (2 === found.length) {
      const intl = arg1(closure_2[4]).intl;
      obj = {
        applicationName() {
              return lib(textmdnormal(closure_2[5]), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
            },
        applicationName2() {
              return lib(textmdnormal(closure_2[5]), { application: found[1], textVariant: textmdnormal, iconSize: 16 }, found[1].id);
            }
      };
      formatResult = intl.format(arg1(closure_2[4]).t.C98CSN, obj);
    } else {
      closure_2 = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = arg1(closure_2[4]).intl;
      obj = {
        applications() {
              return lib.map((application) => callback2(callback(closure_2[5]), { application, useComma: true, textVariant: callback, iconSize: 16 }, application.id));
            },
        applicationNameLast() {
              return lib(textmdnormal(closure_2[5]), { application: closure_2, textVariant: textmdnormal, iconSize: 16 });
            }
      };
      formatResult = intl4.format(arg1(closure_2[4]).t.UxpwAh, obj);
    }
    const obj1 = {};
    const items = [tmp.card, style];
    obj1.style = items;
    const intl3 = arg1(closure_2[4]).intl;
    obj1.title = intl3.string(arg1(closure_2[4]).t.Uv/eTx);
    const obj2 = { cachedAt: 1, edpbxy: 1, children: formatResult };
    obj1.children = jsx(arg1(closure_2[7]).Text, obj2);
    return jsx(importDefault(closure_2[6]), obj1);
  }
  const arr = importDefault(closure_2[3])(applicationIds);
};
