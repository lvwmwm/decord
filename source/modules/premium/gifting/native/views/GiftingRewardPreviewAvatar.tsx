// Module ID: 9759
// Function ID: 75924
// Name: GiftingRewardPreviewAvatar
// Dependencies: []
// Exports: default

// Module 9759 (GiftingRewardPreviewAvatar)
importAll(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx");

export default function GiftingRewardPreviewAvatar(asset) {
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_2];
  let tmp3;
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (null != asset.asset) {
    obj = { asset: asset.asset };
    tmp3 = obj;
  }
  obj = { user: stateFromStores, guildId: undefined, avatarDecoration: tmp3, animate: !stateFromStores1 };
  const merged = Object.assign(asset);
  return jsx(arg1(dependencyMap[5]).Avatar, obj);
};
