// Module ID: 10850
// Function ID: 10851
// Name: conjureProjectConnection
// Dependencies: [6808, 584, 10757, 2]

// Module 10850 (conjureProjectConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10757 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
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
