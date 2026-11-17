// Module ID: 14634
// Function ID: 14635
// Name: useConjureProjectPickerOptions
// Dependencies: [19, 14533, 2]
// Exports: default

// Module 14634 (useConjureProjectPickerOptions)
import useConjureProjects from "useConjureProjects" /* 14533 */;
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
