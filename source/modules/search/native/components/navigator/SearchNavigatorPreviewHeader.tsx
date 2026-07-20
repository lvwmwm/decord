// Module ID: 15409
// Function ID: 117618
// Dependencies: []

// Module 15409
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[3]).createStyles({ container: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((channelId) => {
  let obj = { style: callback().container, children: jsx(importDefault(dependencyMap[4]), obj) };
  obj = { guild_template_description: null, base64GIFRegex: 45, ENABLE_COMMUNITY_FLOW_MODAL_KEY: true, borderWidth: 5, USER_AGE_GATE_VERIFY: true, channelId: channelId.channelId };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;
