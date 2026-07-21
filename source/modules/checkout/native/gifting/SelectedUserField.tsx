// Module ID: 8807
// Function ID: 69428
// Name: SelectedUserField
// Dependencies: []
// Exports: default

// Module 8807 (SelectedUserField)
importAll(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj.content = {};
const tmp4 = arg1(dependencyMap[2]);
obj.opener = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.openerWithClearButton = { paddingRight: 0 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.searchIcon = { marginRight: importDefault(dependencyMap[4]).space.PX_8 };
const obj3 = { category: true, flexDirection: "/assets/images/native/icons/voice_calls", alignItems: 24, borderRadius: importDefault(dependencyMap[4]).radii.lg, paddingHorizontal: null, accessible: "01b615b81a2755a195f3be7dbb482eef", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.userPill = obj3;
obj.userPillText = { marginLeft: 6 };
const obj2 = { marginRight: importDefault(dependencyMap[4]).space.PX_8 };
obj.clearButton = { paddingRight: importDefault(dependencyMap[4]).space.PX_16, paddingLeft: importDefault(dependencyMap[4]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj4 = { paddingRight: importDefault(dependencyMap[4]).space.PX_16, paddingLeft: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  let selectedUser;
  ({ selectedUser, setSelectedUser: closure_0 } = onPress);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = {};
  obj = { style: tmp.content };
  const obj1 = {};
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  items[1] = openerWithClearButton;
  obj1.style = items;
  obj1.onPress = onPress.onPress;
  obj1.accessibilityRole = "button";
  if (null != selectedUser) {
    const intl = arg1(dependencyMap[6]).intl;
    let obj4 = importDefault(dependencyMap[7]);
    const _HermesInternal = HermesInternal;
    let combined = "" + intl.string(arg1(dependencyMap[6]).t.xFn72s) + ", " + obj4.getName(selectedUser);
    const stringResult = intl.string(arg1(dependencyMap[6]).t.xFn72s);
  } else {
    const intl4 = arg1(dependencyMap[6]).intl;
    const intl5 = arg1(dependencyMap[6]).intl;
    const _HermesInternal2 = HermesInternal;
    combined = "" + intl4.string(arg1(dependencyMap[6]).t.xFn72s) + ", " + intl5.string(arg1(dependencyMap[6]).t.R0vK0N);
    const stringResult1 = intl4.string(arg1(dependencyMap[6]).t.xFn72s);
  }
  obj1.accessibilityLabel = combined;
  const obj2 = { Gateway: "lag", communicationDisabledUntilTimestamp: "isArrayBuffer", withMutualGuilds: "<string:2631618816>", style: tmp.searchIcon };
  const items1 = [callback(arg1(dependencyMap[8]).MagnifyingGlassIcon, obj2), ];
  if (null != selectedUser) {
    const obj3 = { style: tmp.userPill };
    obj4 = { user: selectedUser, guildId: undefined, size: arg1(dependencyMap[9]).AvatarSizes.XSMALL_20 };
    const items2 = [callback(arg1(dependencyMap[9]).Avatar, obj4), ];
    const obj5 = { variant: "text-md/medium", style: tmp.userPillText, children: importDefault(dependencyMap[7]).getName(selectedUser) };
    items2[1] = callback(arg1(dependencyMap[10]).Text, obj5);
    obj3.children = items2;
    let tmp15 = callback2(closure_4, obj3);
    const obj11 = importDefault(dependencyMap[7]);
  } else {
    const obj6 = { hasMaxConnections: true, isBoostOnlySubscription: true, style: tmp.userPillText };
    const intl2 = arg1(dependencyMap[6]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[6]).t.R0vK0N);
    tmp15 = callback(arg1(dependencyMap[10]).Text, obj6);
  }
  items1[1] = tmp15;
  obj1.children = items1;
  const items3 = [callback2(closure_3, obj1), ];
  let tmp22 = null;
  if (null != selectedUser) {
    const obj7 = {
      style: tmp.clearButton,
      onPress() {
          return callback(undefined);
        },
      accessibilityRole: "button"
    };
    const intl3 = arg1(dependencyMap[6]).intl;
    const obj8 = { text: importDefault(dependencyMap[7]).getName(selectedUser) };
    obj7.accessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[6]).t.0Vb9FQ, obj8);
    const obj9 = { size: "xs" };
    obj7.children = callback(arg1(dependencyMap[11]).CircleXIcon, obj9);
    tmp22 = callback(closure_3, obj7);
    const obj14 = importDefault(dependencyMap[7]);
  }
  items3[1] = tmp22;
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  obj.children = callback(arg1(dependencyMap[5]).InputFieldContainer, obj);
  return callback(closure_4, obj);
};
