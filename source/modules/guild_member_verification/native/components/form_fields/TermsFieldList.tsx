// Module ID: 5391
// Function ID: 45992
// Name: TermsFieldListItem
// Dependencies: []
// Exports: default

// Module 5391 (TermsFieldListItem)
function TermsFieldListItem(arg0) {
  let rowNumber;
  let rule;
  let rulesChannelId;
  ({ rowNumber, rule, rulesChannelId } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.termsRow };
  obj = { style: tmp.termsRowNumber, children: "" + rowNumber + "." };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
  obj = { style: tmp.termsRowContent, variant: "text-md/medium", children: importDefault(dependencyMap[6]).parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { <string:2675968041>: 5, <string:191172098>: "order", <string:3775423492>: "scalar", backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT };
obj.termsContainer = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.firstItem = { borderTopLeftRadius: importDefault(dependencyMap[4]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[4]).radii.sm };
const obj1 = { borderTopLeftRadius: importDefault(dependencyMap[4]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[4]).radii.sm };
obj.lastItem = { borderBottomLeftRadius: importDefault(dependencyMap[4]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[4]).radii.sm, marginBottom: 12 };
obj.termsRow = { flexDirection: "row" };
obj.termsRowContent = {};
obj.termsRowNumber = {};
obj.title = { marginBottom: 16 };
let closure_8 = obj.createStyles(obj);
const obj2 = { borderBottomLeftRadius: importDefault(dependencyMap[4]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[4]).radii.sm, marginBottom: 12 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default function TermsFieldList(rules) {
  rules = rules.rules;
  const arg1 = rules;
  const importDefault = rules.rulesChannelId;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = {};
  obj = { style: tmp.title };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.prJqwT);
  const items = [
    callback(arg1(dependencyMap[5]).Text, obj),
    rules.map((rule) => {
      let obj = {};
      obj = {};
      const items = [tmp.termsContainer, , ];
      let firstItem = null;
      if (0 === arg1) {
        firstItem = tmp.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (arg1 === rules.length - 1) {
        lastItem = tmp.lastItem;
      }
      items[2] = lastItem;
      obj.style = items;
      obj = { rule, rowNumber: arg1 + 1, rulesChannelId };
      obj.children = callback(closure_9, obj);
      const items1 = [callback(closure_4, obj), ];
      let tmp8 = null;
      if (arg1 !== rules.length - 1) {
        tmp8 = callback(rules(tmp[8]).TableRowDivider, {});
      }
      items1[1] = tmp8;
      obj.children = items1;
      return closure_6(React.Fragment, obj, "term-" + rule + "-" + arg1);
    })
  ];
  obj.children = items;
  return callback2(closure_7, obj);
};
