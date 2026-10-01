// Module ID: 16427
// Function ID: 16428
// Name: VibegrationsAppChannelView
// Dependencies: [32, 19, 17, 8499, 12827, 8500, 21, 4836, 576, 1879, 5370, 8501, 16277, 8751, 8760, 16278, 12831, 6876, 16279, 16428, 4832, 1115, 3715, 5281, 2]
// Exports: default

// Module 16427 (VibegrationsAppChannelView)
import nativeDefault from "native" /* 576 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8501 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 12831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 8499 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12827 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ FrameLayoutModes: c9, isLaunched: c10 } = FramesConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  let obj2;
  const obj = { container: obj2, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 }, copy: { alignItems: "center", gap: nativeDefault.space.PX_4 } };
  obj2 = { flex: 1, paddingBottom };
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_4 });
  return obj;
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  let c1;
  let closure_4;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  channel = channel.channel;
  importDefault = undefined;
  let guild_id;
  let first;
  react = undefined;
  let closure_7;
  let closure_8;
  let tmp = importDefault;
  const tmp3 = closure_13(require("useSystemKeyboardHeight")());
  let obj = channel(guild_id[10]);
  let result = obj.vibegrationsAppIdFromTopic(channel.topic);
  importDefault = result;
  guild_id = channel.guild_id;
  let obj2 = react;
  const tmp6 = first(react.useState(false), 2);
  first = tmp6[0];
  react = tmp6[1];
  const items = [channel.id, guild_id];
  const memo = react.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: guild_id };
    return obj;
  }, items);
  const tmp9 = tmp(guild_id[12])(result, memo);
  let id = tmp9;
  let tmp10 = null;
  if (null != tmp9) {
    tmp10 = null;
    if (closure_10(tmp9)) {
      tmp10 = tmp9;
    }
  }
  const items1 = [result, first, tmp9, memo];
  const effect = obj2.useEffect(() => {
    if (null != c1) {
      const tmp10 = first;
      if (!tmp10) {
        if (null == id) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            const obj = FramesNativeManagerDefault;
            obj.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId: tmp, surface: memo };
          const obj2 = FramesActionCreatorsDefault;
          const launchFrameResult = obj2.launchFrame(obj3);
          launchFrameResult.catch(() => closure_1_4(true));
        }
      }
    }
  }, items1);
  closure_7 = obj2.useRef(null);
  closure_8 = obj2.useRef(channel.id);
  const items2 = [tmp9, channel.id];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    const tmp = closure_7;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    tmp.current = id;
    closure_8.current = channel.id;
  }, items2);
  const effect2 = obj2.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      let isChatOpenResult = null == ref.current;
      const tmp = ref;
      if (!isChatOpenResult) {
        isChatOpenResult = ref2.isChatOpen(ref2.current);
      }
      if (!isChatOpenResult) {
        const obj = c1(guild_id[13]);
        obj.leaveFrame(tmp.current);
      }
    };
  }, []);
  tmp(guild_id[15])(null != tmp10);
  id = channel.id;
  [][0] = id;
  const callback = obj2.useCallback(() => closure_4(false), []);
  let tmp18 = null;
  if (null != result) {
    let tmp22;
    if (null != tmp10) {
      let obj3 = { style: tmp3.container, children: items3 };
      const obj4 = { frameId: tmp10.id, layoutMode: id.FOCUSED };
      items3 = [closure_11(tmp4(tmp2[18]).InlineFrameView, obj4), ];
      const obj5 = { channelId: channel.id, onOpenChat: tmp17 };
      items3[1] = closure_11(tmp(guild_id[19]), obj5);
      tmp22 = closure_12(id, obj3);
    } else if (first) {
      const obj6 = { style: tmp3.centered, children: items5 };
      const obj7 = { style: tmp3.copy, children: items4 };
      const obj8 = { variant: "heading-lg/bold", color: "text-default", children: channel.name };
      items4 = [closure_11(tmp4(tmp2[20]).Text, obj8), ];
      const obj9 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(guild_id[22]).QM4w4h) };
      const Text = tmp4(tmp2[20]).Text;
      intl = tmp4(tmp2[21]).intl;
      items4[1] = closure_11(Text, obj9);
      items5 = [closure_12(id, obj7), ];
      const obj10 = { variant: "primary", text: intl2.string(tmp(guild_id[22]).jLMpUv), onPress: callback };
      const Button = tmp4(tmp2[23]).Button;
      intl2 = tmp4(tmp2[21]).intl;
      items5[1] = closure_11(Button, obj10);
      tmp22 = closure_12(id, obj6);
    } else {
      const obj11 = { style: tmp3.centered, children: closure_11(memo, {}) };
      tmp22 = closure_11(id, obj11);
    }
    tmp18 = tmp22;
  }
  return tmp18;
};
