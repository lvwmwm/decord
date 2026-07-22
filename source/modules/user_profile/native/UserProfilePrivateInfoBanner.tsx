// Module ID: 11994
// Function ID: 92688
// Name: UserProfilePrivateInfoBanner
// Dependencies: []
// Exports: default

// Module 11994 (UserProfilePrivateInfoBanner)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { padding: importDefault(dependencyMap[3]).space.PX_12, borderRadius: importDefault(dependencyMap[3]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[3]).colors.BORDER_MUTED, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
obj.banner = obj;
let closure_4 = _module.createStyles(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  let obj = {};
  const items = [callback().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    obj = { backgroundColor: containerBackground };
    tmp3 = obj;
  }
  items[1] = tmp3;
  obj.style = items;
  obj = { variant: "text-sm/normal" };
  const intl = require(dependencyMap[5]).intl;
  obj.children = intl.format(require(dependencyMap[5]).t.P8ij6Z, { username: username.username });
  obj.children = jsx(require(dependencyMap[4]).Text, obj);
  return <View {...obj} />;
};
