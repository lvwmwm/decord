// Module ID: 9128
// Function ID: 71455
// Name: useIsNsfwGated
// Dependencies: []
// Exports: default

// Module 9128 (useIsNsfwGated)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  const arg1 = nsfw;
  nsfw = nsfw.nsfw;
  const items = [closure_3];
  const obj = arg1(dependencyMap[2]);
  const tmp = false === arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items1 = [closure_2];
  let tmp2 = !arg1(dependencyMap[2]).useStateFromStores(items1, () => closure_2.didAgree(arg0.guild_id));
  if (nsfw) {
    if (!tmp2) {
      tmp2 = tmp;
    }
    nsfw = tmp2;
  }
  return nsfw;
};
