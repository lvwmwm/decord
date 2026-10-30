// Module ID: 18616
// Function ID: 18617
// Name: AppChannel
// Dependencies: [19, 17, 21, 5009, 575, 1892, 5602, 12058, 18617, 18620, 12055, 12059, 7413, 5751, 12068, 12072, 18626, 18629, 1114, 6875, 5712, 1410, 5629, 5670, 18630, 9808, 6872, 18631, 11196, 2]
// Exports: default

// Module 18616 (AppChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import FastImageDefault from "FastImage" /* 5712 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6872 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6875 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9808 */;
import useChannelContentGate from "useChannelContentGate" /* 11196 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12058 */;
import FrameSurfaceState from "FrameSurfaceState" /* 18629 */;
import useAppChannelClosedDefault from "useAppChannelClosed" /* 18630 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 18631 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
function OpenAppChannel(arg0) {
  let applicationId;
  let channel;
  let frame;
  let headerVisible;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let state;
  let surface;
  ({ applicationId, channel, surface, headerVisible } = arg0);
  if (headerVisible === undefined) {
    headerVisible = true;
  }
  let top;
  let bottom;
  let id;
  const tmp3 = closure_8(top(bottom[5])());
  const insets = top(bottom[6])().insets;
  top = insets.top;
  bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  let obj = left;
  const items = [top, bottom, left, right, headerVisible];
  const memo = left.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, headerVisible);
  }, items);
  ({ state, frame } = top(bottom[8])({ applicationId, surface }));
  top(bottom[8])({ applicationId, surface });
  top(bottom[9])(applicationId, surface);
  const tmp7 = top(bottom[10]);
  tmp7(state === headerVisible(bottom[8]).FrameLifecycleState.Launched);
  let tmp11 = null;
  const tmp10 = top(bottom[11]);
  if (state === headerVisible(bottom[8]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  tmp10(tmp11);
  id = channel.id;
  const items1 = [id];
  const tmp8Result = headerVisible(bottom[12]);
  const isConjureChannelCandidate = tmp8Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = obj.useCallback((id) => {
    const obj = transitionToChannel;
    obj.transitionToMessage(id, id.id);
  }, items1);
  if (headerVisible(bottom[8]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: items2 };
    const obj3 = { frameId: frame.id, level: headerVisible(bottom[15]).FrameStackLevel.WithinAppContent, presentation: memo };
    const tmpResult = top(bottom[14]);
    items2 = [id(tmpResult, obj3), ];
    let tmp22Result = null;
    const tmp20 = closure_6;
    const tmp21 = right;
    const tmp22 = id;
    if (isConjureChannelCandidate) {
      const obj4 = { channelId: id, onOpenChat: callback };
      tmp22Result = tmp22(tmp(tmp2[16]), obj4);
    }
    items2[1] = tmp22Result;
    return tmp20(tmp21, obj2);
  } else if (headerVisible(bottom[8]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj5 = { description: intl5.string(headerVisible(bottom[18]).t["2KIDX+"]) };
    const FrameSurfaceExplanation4 = tmp8(tmp2[17]).FrameSurfaceExplanation;
    intl5 = tmp8(tmp2[18]).intl;
    return id(FrameSurfaceExplanation4, obj5);
  } else if (headerVisible(bottom[8]).FrameLifecycleState.NoApplication === state) {
    const obj6 = { description: intl4.string(headerVisible(bottom[18]).t.izggZO) };
    const FrameSurfaceExplanation3 = tmp8(tmp2[17]).FrameSurfaceExplanation;
    intl4 = tmp8(tmp2[18]).intl;
    return id(FrameSurfaceExplanation3, obj6);
  } else if (headerVisible(bottom[8]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj7 = { description: intl3.string(headerVisible(bottom[18]).t["iUWcU/"]) };
    const FrameSurfaceExplanation2 = tmp8(tmp2[17]).FrameSurfaceExplanation;
    intl3 = tmp8(tmp2[18]).intl;
    return id(FrameSurfaceExplanation2, obj7);
  } else if (headerVisible(bottom[8]).FrameLifecycleState.Error === state) {
    const obj8 = { heading: intl.string(headerVisible(bottom[18]).t.VquUff), error: intl2.string(headerVisible(bottom[18]).t["Sd9D/R"]) };
    const FrameSurfaceExplanation = tmp8(tmp2[17]).FrameSurfaceExplanation;
    intl = tmp8(tmp2[18]).intl;
    intl2 = tmp8(tmp2[18]).intl;
    return id(FrameSurfaceExplanation, obj8);
  } else {
    return id(headerVisible(bottom[17]).FrameSurfaceLoading, {});
  }
}
function ClosedAppChannel(arg0) {
  let Button;
  let applicationId;
  let intl;
  let name;
  let obj10;
  let obj3;
  let obj5;
  let onLaunch;
  ({ applicationId, onLaunch } = arg0);
  const tmp = closure_7();
  const obj = ApplicationActionCreators;
  const data = obj.useApplication(applicationId).data;
  let icon;
  const FrameSurfaceExplanation = FrameSurfaceState.FrameSurfaceExplanation;
  if (data != null) {
    icon = data.icon;
  }
  let tmp4Result = null;
  if (null != icon) {
    const obj2 = { source: obj3.getApplicationIconSource(obj5), style: tmp.icon };
    obj5 = { id: null, icon: null, size: 64 };
    ({ id: obj4.id, icon: obj4.icon } = data);
    const tmp8 = FastImageDefault;
    obj3 = AvatarUtilsDefault;
    tmp4Result = tmp4(tmp8, obj2);
  }
  const obj6 = { icon: tmp4Result, heading: name, action: hasOwnProperty(Button, obj10) };
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  obj10 = { text: intl.string(intl6.t.PPYvuv), onPress: onLaunch };
  Button = tmp2(5629).Button;
  intl = tmp2(1114).intl;
  return hasOwnProperty(FrameSurfaceExplanation, obj6);
}
function AppChannel(arg0) {
  let applicationId;
  let channel;
  let tmp4Result;
  ({ applicationId, channel } = arg0);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = react.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
    return obj;
  }, items);
  let obj = {
    applicationId,
    surface: memo,
    shouldStartClosed() {
      const obj = openChannelSecondaryViewChat;
      return -1 !== obj.getChannelSecondaryViewChatIndex(channel.id);
    }
  };
  const tmp2 = useAppChannelClosedDefault(obj);
  if (tmp2.isClosed) {
    const obj2 = { applicationId, onLaunch: tmp3 };
    tmp4Result = tmp4(ClosedAppChannel, obj2);
  } else {
    const obj3 = { surface: memo };
    const merged = Object.assign(arg0);
    tmp4Result = tmp4(OpenAppChannel, obj3);
  }
  return tmp4Result;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { icon: size };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg };
let closure_7 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: obj2 };
  return obj;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default function ConnectedAppChannel(channel) {
  let intl;
  let intl2;
  let result;
  channel = channel.channel;
  let application_id = channel.application_id;
  const obj = conjureDMAppChannel;
  if (application_id == null) {
    application_id = obj.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  const tmpResult = useChannelContentGate;
  const channelContentGate = tmpResult.useChannelContentGate(channel.guild_id, channel);
  if (null != channelContentGate) {
    const tmpResult2 = useChannelContentGate;
    result = tmpResult2.renderChannelContentGate(channelContentGate);
  } else if (null == application_id) {
    const obj2 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
    const FrameSurfaceExplanation = tmp(18629).FrameSurfaceExplanation;
    intl = tmp(1114).intl;
    intl2 = tmp(1114).intl;
    result = hasOwnProperty(FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    result = hasOwnProperty(AppChannel, obj3);
  }
  return result;
};
