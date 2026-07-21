// Module ID: 12017
// Function ID: 92860
// Name: UserProfilePrivateBanner
// Dependencies: []
// Exports: default

// Module 12017 (UserProfilePrivateBanner)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { createGiftCode: 140, : null, trustProtocol: "ad61eda1bea496e5c4dfb770ef28c56b", getItemProps: "server-invite-envelope", SEO_PAGE_VIEWED: "png", paddingBottom: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: arg1(dependencyMap[2]).PROFILE_TOP_LAYER_Z_INDEX };
obj.banner = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  let obj = {};
  const items = [callback2().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    obj = { backgroundColor: arg1(dependencyMap[6]).int2hex(primaryColor) };
    tmp3 = obj;
    const obj3 = arg1(dependencyMap[6]);
  }
  items[1] = tmp3;
  obj.style = items;
  obj = { size: "xs", color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
  const items1 = [callback(arg1(dependencyMap[7]).LockIcon, obj), ];
  const obj1 = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.KPnd2O);
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items1;
  return closure_5(View, obj);
};
