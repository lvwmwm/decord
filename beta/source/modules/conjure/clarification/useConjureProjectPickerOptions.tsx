// Module ID: 18450
// Function ID: 18451
// Name: useConjureProjectPickerOptions
// Dependencies: [19, 18308, 2]
// Exports: default

// Module 18450 (useConjureProjectPickerOptions)
import useConjureProjects from "useConjureProjects" /* 18308 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureProjectPickerOptions.tsx");

export default function useConjureProjectPickerOptions(arg0) {
  let closure_0 = arg0;
  const obj = useConjureProjects;
  const conjureProjects = obj.useConjureProjects("ConjureClarificationProjectPicker");
  const items = [conjureProjects, arg0];
  return react.useMemo(() => {
    const found = conjureProjects.filter((projectId) => projectId.projectId !== closure_1_0);
    return found.map((projectId) => ({ projectId: projectId.projectId, name: projectId.name, serverName: projectId.guildName }));
  }, items);
};
