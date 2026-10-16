// Module ID: 10991
// Function ID: 10992
// Name: conjureProjectConnection
// Dependencies: [10897, 584, 10919, 2]

// Module 10991 (conjureProjectConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10919 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10897 */;
import size from "module_2" /* 2 */;

let obj = {
  project_named(name, projectId) {
    let obj2;
    const project = ConjureProjectStore.getProject(projectId.projectId);
    const tmp2 = null != project && null != name.name;
    if (tmp2) {
      const obj = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: obj2 };
      obj2 = { name: name.name };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      const merged = Object.assign(project);
      dispatch(obj);
    }
  },
  app_icon_set(icon, ws) {
    ws = ws.ws;
    let attachment_id;
    icon = icon.icon;
    if (null != icon) {
      let str = "";
      if ("" !== icon) {
        attachment_id = icon.attachment_id;
        let tmp2 = require;
        const obj = ConjureActionCreators;
        const setProjectIconResult = obj.setProjectIcon(tmp, icon);
        const nextPromise = setProjectIconResult.then((ok) => {
          let str = "failed";
          if (ok.ok) {
            str = "applied";
          }
          const tmp2 = null != attachment_id && "" !== tmp;
          if (tmp2) {
            ws.sendAppIconAck(attachment_id, str);
          }
        });
        nextPromise.catch(() => {
          const tmp2 = null != attachment_id && "" !== tmp;
          if (tmp2) {
            ws.sendAppIconAck(attachment_id, "failed");
          }
        });
      }
    }
  },
  app_cover_set(cover_image, arg1) {
    if (undefined !== cover_image.cover_image) {
      const obj = ConjureActionCreators;
      const setProjectCoverResult = obj.setProjectCover(tmp, cover_image.cover_image);
      const nextPromise = setProjectCoverResult.then((result) => {

      });
      nextPromise.catch(() => {

      });
    }
  }
};
const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectConnection.tsx");

export const projectStepHandlers = obj;
