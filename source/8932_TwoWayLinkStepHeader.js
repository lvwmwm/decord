// Module ID: 8932
// Function ID: 70413
// Name: TwoWayLinkStepHeader
// Dependencies: []
// Exports: TwoWayLinkStepHeader

// Module 8932 (TwoWayLinkStepHeader)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  let obj = arg1(dependencyMap[2]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: twoWayLinkStyles.stepHeader };
  const intl = arg1(dependencyMap[4]).intl;
  obj.children = intl.format(arg1(dependencyMap[4]).t.fHz6eR, { number: idx, total });
  return jsx(arg1(dependencyMap[3]).Text, obj);
};
