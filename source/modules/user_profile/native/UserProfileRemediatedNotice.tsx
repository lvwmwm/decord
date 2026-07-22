// Module ID: 12036
// Function ID: 93002
// Name: RemediatedUserNotice
// Dependencies: []
// Exports: default

// Module 12036 (RemediatedUserNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const RelationshipTypes = arg1(dependencyMap[3]).RelationshipTypes;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_12, gap: importDefault(dependencyMap[6]).space.PX_8, flexDirection: "row", alignItems: "center" };
obj.container = obj;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default function RemediatedUserNotice(user) {
  let isBlocked;
  let isIgnored;
  const arg1 = user.user;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isPendingIncoming: closure_4.getRelationshipType(user.id) === constants.PENDING_INCOMING, isBlocked: closure_4.isBlocked(user.id), isIgnored: closure_4.isIgnored(user.id) }));
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  if (isBlocked) {
    obj = {};
    const items1 = [tmp.container, tmp2.card, user.style];
    obj.style = items1;
    if (isBlocked) {
      obj = { 803799044: 1354449169, 1269170180: 1014104066, 711589892: 1006632960 };
      const intl = arg1(dependencyMap[10]).intl;
      obj.children = intl.string(arg1(dependencyMap[10]).t.oC/fU6);
      isBlocked = callback(arg1(dependencyMap[9]).Text, obj);
    }
    const items2 = [isBlocked, ];
    if (isIgnored) {
      const obj1 = {};
      const obj2 = { 803799044: 1354449169, 1269170180: 1014104066, 711589892: 1006632960 };
      const intl2 = arg1(dependencyMap[10]).intl;
      obj2.children = intl2.string(arg1(dependencyMap[10]).t.HXz5An);
      const items3 = [callback(arg1(dependencyMap[9]).Text, obj2), callback(arg1(dependencyMap[9]).Text, { AUD: "QrCodeIcon", shouldNotify: "png", CONTROLS_BUTTON_SIZE_LARGE: 128, ActivityCard: "#ffffff", y: "#000000" }), ];
      const intl3 = arg1(dependencyMap[10]).intl;
      const obj3 = {
        unignoreHook(children) {
              return callback(user(closure_2[9]).Text, {
                onPress() {
                  return callback(closure_2[11]).unignoreUser(id.id, "UserProfileRemediatedNotice");
                },
                children
              });
            }
      };
      items3[2] = intl3.format(arg1(dependencyMap[10]).t.PrtAqy, obj3);
      obj1.children = items3;
      isIgnored = callback2(closure_7, obj1);
    }
    items2[1] = isIgnored;
    obj.children = items2;
    let tmp6Result = callback2(View, obj);
    const tmp6 = callback2;
    const tmp7 = View;
  } else {
    tmp6Result = null;
    if (isIgnored) {
      tmp6Result = null;
    }
  }
  return tmp6Result;
};
