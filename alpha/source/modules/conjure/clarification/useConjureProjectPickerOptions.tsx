// Module ID: 12303
// Function ID: 12304
// Name: useConjureProjectPickerOptions
// Dependencies: [19, 558, 576, 12304, 2]

// Module 12303 (useConjureProjectPickerOptions)
import react2 from "react" /* 576 */;
import useConjureProjects from "useConjureProjects" /* 12304 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureClarificationProjectPicker = "ConjureClarificationProjectPicker";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectPickerOptions(arg0) {
  let tmp3;
  let tmp4;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = useConjureProjects;
  const conjureProjects = obj2.useConjureProjects(ConjureClarificationProjectPicker);
  if (cResult[0] === conjureProjects) {
    let tmp2;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  if (cResult[3] !== arg0) {
    const fn = function n(projectId) {
      return projectId.projectId !== closure_0;
    };
    cResult[3] = arg0;
    cResult[4] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(projectId) {
      return { projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName };
    };
    cResult[5] = fn2;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[5];
  }
  const found = conjureProjects.filter(tmp3);
  const mapped = found.map(tmp4);
  cResult[0] = conjureProjects;
  cResult[1] = arg0;
  cResult[2] = mapped;
  tmp2 = mapped;
}) : (function useConjureProjectPickerOptions(arg0) {
  let closure_0 = arg0;
  const obj = useConjureProjects;
  const conjureProjects = obj.useConjureProjects(ConjureClarificationProjectPicker);
  const items = [conjureProjects, arg0];
  return react.useMemo(() => {
    const found = conjureProjects.filter((projectId) => projectId.projectId !== closure_1_0);
    return found.map((projectId) => ({ projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName }));
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureProjectPickerOptions.tsx");

export default tmp2;
