// Module ID: 10968
// Function ID: 10969
// Name: conjureProjectConnection
// Dependencies: [6844, 572, 10875, 2]

// Module 10968 (conjureProjectConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

let obj = {
  project_named(name, projectId) {
    let obj2;
    projectId = projectId.projectId;
    const project = ConjureProjectStore.getProject(projectId);
    const tmp2 = null != project && null != name.name;
    if (tmp2) {
      const obj = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: obj2 };
      obj2 = { name: name.name };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      const merged = Object.assign(project);
      dispatch(obj);
    }
    const obj3 = ConjureActionCreators;
    const result = obj3.refreshPreviewApplication(projectId);
    result.catch(() => {

    });
  },
  app_profile_updated(arg0, projectId) {
    projectId = projectId.projectId;
    const obj = ConjureActionCreators;
    const result = obj.refreshPreviewApplication(projectId);
    result.catch(() => {

    });
  }
};
let result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectConnection.tsx");

export const projectStepHandlers = obj;
