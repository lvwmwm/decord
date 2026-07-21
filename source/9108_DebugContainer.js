// Module ID: 9108
// Function ID: 71351
// Name: DebugContainer
// Dependencies: []
// Exports: default

// Module 9108 (DebugContainer)
let Platform;
importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Platform, View: closure_0 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;

export default function DebugContainer(arg0) {
  return <closure_0 {...Object.assign({}, arg0, { collapsable: false })} />;
};
