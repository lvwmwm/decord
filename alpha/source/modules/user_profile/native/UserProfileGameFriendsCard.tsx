// Module ID: 14950
// Function ID: 14951
// Name: UserProfileGameFriendsCard
// Dependencies: [19, 21, 5009, 7324, 1114, 14151, 7370, 5619, 2]
// Exports: default

// Module 14950 (UserProfileGameFriendsCard)
import Fragment from "Fragment" /* 21 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7324 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 14151 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let tmp2;
const UserProfileCardDefault = tmp2(7370);
let jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ card: { flexDirection: "column" } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  let application;
  let applicationIds;
  let closure_3;
  let style;
  let textVariant;
  importDefault = undefined;
  dependencyMap = undefined;
  jsx = undefined;
  ({ applicationIds, style } = arg0);
  const tmp = closure_4();
  const arr = useGetOrFetchApplicationsDefault(applicationIds);
  const found = arr.filter((item) => null != item);
  if (0 === found.length) {
    return null;
  } else {
    let tmp6;
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1114).intl;
      const obj2 = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            }
      };
      let formatResult = intl2.format(found(1114).t.wQ6urw, obj2);
      tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1114).intl;
      let obj = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            },
        applicationName2() {
              return jsx(ApplicationIconAndNameDefault, { application: found[1], textVariant, iconSize: 16 }, found[1].id);
            }
      };
      formatResult = intl.format(found(1114).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1114).intl;
      const obj3 = {
        applications() {
              return closure_3.map((application) => {
                const obj = { application, useComma: true, textVariant, iconSize: 16 };
                return closure_3(textVariant(application[5]), obj, application.id);
              });
            },
        applicationNameLast() {
              return jsx(ApplicationIconAndNameDefault, { application, textVariant, iconSize: 16 });
            }
      };
      formatResult = intl4.format(found(1114).t.UxpwAh, obj3);
      tmp6 = found;
    }
    const items = [tmp.card, style];
    UserProfileCardDefault;
    const intl3 = tmp6(1114).intl;
    return <tmp2Result style={items} title={intl3.string(tmp6(1114).t["Uv/eTx"])}>{null}</tmp2Result>;
  }
};
