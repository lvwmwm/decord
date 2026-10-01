// Module ID: 12694
// Function ID: 12695
// Name: UserProfileRemediatedNotice
// Dependencies: [19, 17, 4479, 1074, 21, 4836, 576, 7687, 563, 4832, 1115, 9195, 2]
// Exports: default

// Module 12694 (UserProfileRemediatedNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2 };
obj2 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  let intl;
  let intl2;
  let isBlocked;
  let isIgnored;
  let items1;
  let items2;
  let items3;
  let tmp8Result;
  user = user.user;
  const style = user.style;
  const tmp = closure_9();
  const tmp3 = UserProfileSharedStylesDefault();
  let obj = user(563);
  const items = [RelationshipStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING, isBlocked: RelationshipStore.isBlocked(user.id), isIgnored: RelationshipStore.isIgnored(user.id) };
    return obj;
  });
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    const obj2 = { style: items1, children: items2 };
    items1 = [tmp.container, tmp3.card, style];
    const tmp9 = View;
    if (isBlocked) {
      const obj3 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: intl.string(user(1115).t["oC/fU6"]) };
      const Text = tmp4(4832).Text;
      intl = tmp4(1115).intl;
      isBlocked = closure_6(Text, obj3);
    }
    items2 = [isBlocked, ];
    if (isIgnored) {
      const obj4 = { children: items3 };
      const obj5 = { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: intl2.string(user(1115).t.HXz5An) };
      const Text2 = tmp4(4832).Text;
      intl2 = tmp4(1115).intl;
      items3 = [closure_6(Text2, obj5), closure_6(user(4832).Text, { variant: "text-sm/semibold", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" }), ];
      const intl3 = tmp4(1115).intl;
      const obj6 = {
        unignoreHook(children) {
              let id;
              let obj = {
                role: "button",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress() {
                  const obj = RelationshipActionCreatorsDefault;
                  return obj.unignoreUser(id.id, "UserProfileRemediatedNotice");
                },
                children
              };
              return metroRequire(Text_Text.Text, obj);
            }
      };
      items3[2] = intl3.format(user(1115).t.PrtAqy, obj6);
      isIgnored = tmp8(closure_7, obj4);
    }
    items2[1] = isIgnored;
    tmp8Result = tmp8(tmp9, obj2);
  } else {
    tmp8Result = null;
    if (isIgnored) {
      tmp8Result = null;
    }
  }
  return tmp8Result;
};
