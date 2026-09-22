// Module ID: 8028
// Function ID: 8029
// Name: ConversationNavigatorHeader
// Dependencies: [19, 17, 1957, 21, 4636, 576, 504, 4789, 7966, 2]
// Exports: default

// Module 8028 (ConversationNavigatorHeader)
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4789 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles((arg0) => {
  const container = { flex: 1, paddingVertical: nativeDefault.space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  container.paddingRight = num;
  return { container };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6(flag);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = useChannelNameDefault(stateFromStores, true);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { title: channelId.title, subtitle: tmp3, variant: "heading-lg/semibold", subtitleColor: "text-muted" };
  obj2.children = jsx(channelId(7966).GenericHeaderTitle, { title: channelId.title, subtitle: tmp3, variant: "heading-lg/semibold", subtitleColor: "text-muted" });
  return <View style={tmp.container}>{null}</View>;
};
