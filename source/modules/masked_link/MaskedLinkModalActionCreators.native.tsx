// Module ID: 12106
// Function ID: 93290
// Dependencies: [45154304, 261423104, 296812544, 31260672, 270401536, 342949888]

// Module 12106
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    let isProtocol;
    let onConfirm;
    let trustUrl;
    let url;
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = React.lazy(() => callback(paths[3])(paths[2], paths.paths));
    arg1(dependencyMap[4]).openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};
