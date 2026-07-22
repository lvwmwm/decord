// Module ID: 9281
// Function ID: 72518
// Name: ConversationNavigatorHeader
// Dependencies: []
// Exports: default

// Module 9281 (ConversationNavigatorHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = {};
  obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
  let num = 0;
  if (!arg0) {
    num = importDefault(dependencyMap[5]).space.PX_64;
  }
  obj.paddingRight = num;
  obj.container = obj;
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const tmp3 = importDefault(dependencyMap[7])(stateFromStores, true);
  obj = { style: callback(flag).container };
  obj = { title: channelId.title };
  let tmp6;
  if (null != tmp3) {
    tmp6 = tmp3;
  }
  obj.subtitle = tmp6;
  obj.variant = "heading-lg/semibold";
  obj.subtitleColor = "text-muted";
  obj.children = jsx(arg1(dependencyMap[8]).GenericHeaderTitle, obj);
  return <View {...obj} />;
};
