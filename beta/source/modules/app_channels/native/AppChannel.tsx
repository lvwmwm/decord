// Module ID: 19065
// Function ID: 19066
// Name: AppChannel
// Dependencies: [19, 17, 19066, 21, 5170, 575, 2020, 5767, 12459, 19067, 16714, 12458, 12460, 7516, 5917, 12469, 12473, 19070, 11058, 19071, 19074, 1113, 6969, 5874, 1411, 11512, 5790, 5831, 19075, 9952, 6966, 19076, 11387, 2]
// Exports: default

// Module 19065 (AppChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import FastImageDefault from "FastImage" /* 5874 */;
import transitionToChannel from "transitionToChannel" /* 5917 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6966 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6969 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9952 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 11058 */;
import useChannelContentGate from "useChannelContentGate" /* 11387 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11512 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12459 */;
import ConjureFrameUpdateStore from "ConjureFrameUpdateStore" /* 19066 */;
import FrameSurfaceState from "FrameSurfaceState" /* 19074 */;
import useAppChannelClosedDefault from "useAppChannelClosed" /* 19075 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 19076 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
function OpenAppChannel(applicationId) {
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
  applicationId = applicationId.applicationId;
  ({ channel, surface, headerVisible } = applicationId);
  if (headerVisible === undefined) {
    headerVisible = true;
  }
  let top;
  let id;
  const tmp3 = closure_9(headerVisible(top[6])());
  const insets = headerVisible(top[7])().insets;
  top = insets.top;
  const bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  let obj = bottom;
  const items = [top, bottom, left, right, headerVisible];
  const memo = bottom.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, headerVisible);
  }, items);
  ({ frame, state } = headerVisible(top[9])({ applicationId, surface }));
  headerVisible(top[9])({ applicationId, surface });
  headerVisible(top[10])(applicationId, surface);
  const tmp7 = headerVisible(top[11]);
  tmp7(state === applicationId(top[9]).FrameLifecycleState.Launched);
  let tmp11 = null;
  const tmp10 = headerVisible(top[12]);
  if (state === applicationId(top[9]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  tmp10(tmp11);
  let id1;
  const tmp8Result = applicationId(top[13]);
  const isConjureChannelCandidate = tmp8Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const tmp14 = right;
  if (frame != null) {
    id1 = frame.id;
  }
  id = channel.id;
  const items1 = [id];
  const tmp14Result = tmp14(id1);
  const callback = obj.useCallback((id) => {
    const obj = transitionToChannel;
    obj.transitionToMessage(id, id.id);
  }, items1);
  if (applicationId(top[9]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: items2 };
    const obj3 = { frameId: frame.id, level: applicationId(top[16]).FrameStackLevel.WithinAppContent, presentation: memo };
    const tmpResult = headerVisible(top[15]);
    items2 = [id(tmpResult, obj3), , ];
    let tmp25Result = null;
    const tmp23 = closure_7;
    const tmp24 = left;
    if (tmp14Result) {
      const obj4 = {
        onReload() {
              const obj = ConjurePreviewActionCreators;
              return obj.reloadConjureAppFrames(applicationId);
            }
      };
      tmp25Result = tmp25(tmp8(tmp2[17]).ConjureFrameUpdateBarContent, obj4);
    }
    items2[1] = tmp25Result;
    let tmp25Result2 = null;
    if (isConjureChannelCandidate) {
      const obj5 = { channelId: id, onOpenChat: callback };
      tmp25Result2 = tmp25(tmp(tmp2[19]), obj5);
    }
    items2[2] = tmp25Result2;
    return tmp23(tmp24, obj2);
  } else if (applicationId(top[9]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj6 = { description: intl5.string(applicationId(top[21]).t["2KIDX+"]) };
    const FrameSurfaceExplanation4 = tmp8(tmp2[20]).FrameSurfaceExplanation;
    intl5 = tmp8(tmp2[21]).intl;
    return id(FrameSurfaceExplanation4, obj6);
  } else if (applicationId(top[9]).FrameLifecycleState.NoApplication === state) {
    const obj7 = { description: intl4.string(applicationId(top[21]).t.izggZO) };
    const FrameSurfaceExplanation3 = tmp8(tmp2[20]).FrameSurfaceExplanation;
    intl4 = tmp8(tmp2[21]).intl;
    return id(FrameSurfaceExplanation3, obj7);
  } else if (applicationId(top[9]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj8 = { description: intl3.string(applicationId(top[21]).t["iUWcU/"]) };
    const FrameSurfaceExplanation2 = tmp8(tmp2[20]).FrameSurfaceExplanation;
    intl3 = tmp8(tmp2[21]).intl;
    return id(FrameSurfaceExplanation2, obj8);
  } else if (applicationId(top[9]).FrameLifecycleState.Error === state) {
    const obj9 = { heading: intl.string(applicationId(top[21]).t.VquUff), error: intl2.string(applicationId(top[21]).t["Sd9D/R"]) };
    const FrameSurfaceExplanation = tmp8(tmp2[20]).FrameSurfaceExplanation;
    intl = tmp8(tmp2[21]).intl;
    intl2 = tmp8(tmp2[21]).intl;
    return id(FrameSurfaceExplanation, obj9);
  } else {
    return id(applicationId(top[20]).FrameSurfaceLoading, {});
  }
}
function ClosedAppChannel(arg0) {
  let Button;
  let applicationId;
  let intl;
  let name;
  let obj15;
  let obj4;
  let obj5;
  let obj8;
  let onLaunch;
  let tmp4Result;
  ({ applicationId, onLaunch } = arg0);
  const tmp = closure_8();
  const obj = ApplicationActionCreators;
  const data = obj.useApplication(applicationId).data;
  let icon;
  const FrameSurfaceExplanation = FrameSurfaceState.FrameSurfaceExplanation;
  if (data != null) {
    icon = data.icon;
  }
  if (null != icon) {
    const obj2 = { source: obj5.getApplicationIconSource(obj4), style: tmp.icon };
    obj4 = { id: null, icon: null, size: 64 };
    ({ id: obj6.id, icon: obj6.icon } = data);
    const tmp11 = FastImageDefault;
    obj5 = AvatarUtilsDefault;
    tmp4Result = tmp4(tmp11, obj2);
  } else {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    tmp4Result = null;
    if (null != conjureProjectId) {
      const obj7 = { style: tmp.icon, children: metroRequire(ConjureAppIconTileDefault, obj8) };
      obj8 = { applicationId: null, name: null, size: 64 };
      ({ id: obj3.applicationId, name: obj3.name } = data);
      tmp4Result = tmp4(View, obj7);
    }
  }
  const obj14 = { icon: tmp4Result, heading: name, action: metroRequire(Button, obj15) };
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  obj15 = { text: intl.string(intl6.t.PPYvuv), onPress: onLaunch };
  Button = tmp2(5790).Button;
  intl = tmp2(1113).intl;
  return metroRequire(FrameSurfaceExplanation, obj14);
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
let closure_5 = ConjureFrameUpdateStore.useConjureFrameUpdateAvailable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { icon: size };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_8 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((paddingBottom) => {
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
    const FrameSurfaceExplanation = tmp(19074).FrameSurfaceExplanation;
    intl = tmp(1113).intl;
    intl2 = tmp(1113).intl;
    result = metroRequire(FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    result = metroRequire(AppChannel, obj3);
  }
  return result;
};
