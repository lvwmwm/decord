// Module ID: 18658
// Function ID: 18659
// Name: useConjureServerProjects
// Dependencies: [6621, 13774, 6838, 504, 2]
// Exports: default

// Module 18658 (useConjureServerProjects)
import conjureServerProject from "conjureServerProject" /* 6838 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureServerProjects.tsx");

export default function useConjureServerProjects(arg0) {
  let closure_0;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj4;
  _require = arg0;
  let obj = {
    participating: obj2.useConjureProjectsByActivity(() => {
      let railProject;
      const obj = conjureServerProject;
      const conjureServerProjects = obj.getConjureServerProjects(closure_0);
      return conjureServerProjects.filter((item) => railProject.isRailProject(item));
    }, items),
    shared: obj3.useConjureProjectsByActivity(() => {
      let railProject;
      const obj = conjureServerProject;
      const conjureServerProjects = obj.getConjureServerProjects(closure_0);
      return conjureServerProjects.filter((item) => !railProject.isRailProject(item));
    }, items1),
    fetchState: obj4.useStateFromStores(items2, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items3)
  };
  items = [arg0];
  items1 = [arg0];
  obj2 = require("useConjureHomeOwnProjects");
  items2 = [ConjureProjectStore];
  items3 = [arg0];
  obj3 = require("useConjureHomeOwnProjects");
  obj4 = require("get initialized");
  return obj;
};
