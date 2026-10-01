// Module ID: 12670
// Function ID: 12671
// Name: UserProfileGameFriendsCard
// Dependencies: [19, 21, 4836, 6589, 1115, 12125, 6628, 4832, 2]
// Exports: default

// Module 12670 (UserProfileGameFriendsCard)
import Fragment from "Fragment" /* 21 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12125 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let tmp2;
const UserProfileCardDefault = tmp2(6628);
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
      const intl2 = found(1115).intl;
      const obj2 = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            }
      };
      let formatResult = intl2.format(found(1115).t.wQ6urw, obj2);
      tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1115).intl;
      let obj = {
        applicationName() {
              return jsx(ApplicationIconAndNameDefault, { application: found[0], textVariant, iconSize: 16 }, found[0].id);
            },
        applicationName2() {
              return jsx(ApplicationIconAndNameDefault, { application: found[1], textVariant, iconSize: 16 }, found[1].id);
            }
      };
      formatResult = intl.format(found(1115).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1115).intl;
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
      formatResult = intl4.format(found(1115).t.UxpwAh, obj3);
      tmp6 = found;
    }
    const items = [tmp.card, style];
    UserProfileCardDefault;
    const intl3 = tmp6(1115).intl;
    return <tmp2Result style={items} title={intl3.string(tmp6(1115).t["Uv/eTx"])}>{null}</tmp2Result>;
  }
};
