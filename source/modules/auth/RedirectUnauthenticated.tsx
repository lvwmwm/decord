// Module ID: 15307
// Function ID: 116426
// Name: getRedirectPath
// Dependencies: []
// Exports: default

// Module 15307 (getRedirectPath)
function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = arg1(dependencyMap[4]).getLoginPath(tmp, false);
    const obj = arg1(dependencyMap[4]);
  }
  return REGISTER;
}
importAll(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const CONFERENCE_MODE_ENABLED = arg1(dependencyMap[2]).CONFERENCE_MODE_ENABLED;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  const obj = { to: getRedirectPath() };
  return jsx(arg1(dependencyMap[5]).Redirect, obj);
};
export { getRedirectPath };
