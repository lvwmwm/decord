// Module ID: 18217
// Function ID: 18218
// Name: VoiceChannelAppSurface
// Dependencies: [19, 21, 558, 576, 1633, 11639, 7261, 17665, 11640, 11641, 11646, 17671, 1128, 3963, 2]

// Module 18217 (VoiceChannelAppSurface)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3963 from "module_3963" /* 3963 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11639 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11640 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11641 */;
import FrameStackLevel from "FrameStackLevel" /* 11646 */;
import useFrameLifecycle from "useFrameLifecycle" /* 17665 */;
import FrameSurfaceState from "FrameSurfaceState" /* 17671 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useFrameLifecycleDefault = useFrameLifecycle;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppSurface(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  let left;
  let right;
  const obj = react2;
  const cResult = obj.c(17);
  ({ applicationId, channelId, guildId } = arg0);
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  if (cResult[0] === left) {
    let tmp6;
    if (cResult[1] === right) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === channelId) {
      let tmp8;
      if (cResult[4] === guildId) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === applicationId) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        const tmp10 = useFrameLifecycleDefault(tmp9);
        let tmp12 = null;
        const tmp4Result = useInlineFrameOAuthNavigationDefault;
        if (tmp10.state === useFrameLifecycle.FrameLifecycleState.Launched) {
          tmp12 = applicationId;
        }
        tmp4Result(tmp12);
        const state = tmp10.state;
        if (useFrameLifecycle.FrameLifecycleState.Launched === state) {
          if (cResult[9] === tmp10.frame.id) {
            let tmp34;
            if (cResult[10] === tmp6) {
              tmp34 = cResult[11];
            }
            return tmp34;
          }
          FrameRenderTargetDefault;
          const tmp37 = <tmp4Result2 frameId={tmp10.frame.id} level={FrameStackLevel.FrameStackLevel.WithinCallContent} presentation={tmp6} />;
          cResult[9] = tmp10.frame.id;
          cResult[10] = tmp6;
          cResult[11] = tmp37;
          tmp34 = tmp37;
        } else if (useFrameLifecycle.FrameLifecycleState.RenderingElsewhere === state) {
          let tmp31;
          const _Symbol5 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation4 = tmp(17671).FrameSurfaceExplanation;
            const intl5 = tmp(1128).intl;
            const tmp33 = <FrameSurfaceExplanation4 description={intl5.string(intl6.t["2KIDX+"])} />;
            cResult[12] = tmp33;
            tmp31 = tmp33;
          } else {
            tmp31 = cResult[12];
          }
          return tmp31;
        } else if (useFrameLifecycle.FrameLifecycleState.NoApplication === state) {
          let tmp27;
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation3 = tmp(17671).FrameSurfaceExplanation;
            const intl4 = tmp(1128).intl;
            const tmp29 = <FrameSurfaceExplanation3 description={intl4.string(_modDef3963.TQptZV)} />;
            cResult[13] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[13];
          }
          return tmp27;
        } else if (useFrameLifecycle.FrameLifecycleState.DoesNotSupportSurface === state) {
          let tmp23;
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation2 = tmp(17671).FrameSurfaceExplanation;
            const intl3 = tmp(1128).intl;
            const tmp25 = <FrameSurfaceExplanation2 description={intl3.string(_modDef3963["13FYwI"])} />;
            cResult[14] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[14];
          }
          return tmp23;
        } else if (useFrameLifecycle.FrameLifecycleState.Error === state) {
          let tmp19;
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const FrameSurfaceExplanation = tmp(17671).FrameSurfaceExplanation;
            const intl = tmp(1128).intl;
            const intl2 = tmp(1128).intl;
            const tmp21 = <FrameSurfaceExplanation heading={intl.string(intl6.t.VquUff)} error={intl2.string(intl6.t["Sd9D/R"])} />;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[15];
          }
          return tmp19;
        } else {
          let tmp15;
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = jsx(FrameSurfaceState.FrameSurfaceLoading, {});
            cResult[16] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[16];
          }
          return tmp15;
        }
      }
      const obj7 = { applicationId, surface: tmp8 };
      cResult[6] = applicationId;
      cResult[7] = tmp8;
      cResult[8] = obj7;
      tmp9 = obj7;
    }
    const obj8 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId };
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = obj8;
    tmp8 = obj8;
  }
  const tmp7 = getInlineFramePresentationDefault({ top: 0, bottom: 0, left, right }, true);
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function VoiceChannelAppSurface(guildId) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = guildId);
  guildId = guildId.guildId;
  let left;
  let rect = guildId(left[4])();
  left = rect.left;
  const right = rect.right;
  const items = [left, right];
  const items1 = [channelId, guildId];
  const memo = right.useMemo(() => {
    const rect = { top: 0, bottom: 0, left, right };
    return getInlineFramePresentationDefault(rect, true);
  }, items);
  const memo1 = right.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId };
    return obj;
  }, items1);
  const tmp5 = guildId(left[7])({ applicationId, surface: memo1 });
  let tmp8 = null;
  const tmp6 = guildId(left[8]);
  if (tmp5.state === channelId(left[7]).FrameLifecycleState.Launched) {
    tmp8 = applicationId;
  }
  tmp6(tmp8);
  const state = tmp5.state;
  if (channelId(left[7]).FrameLifecycleState.Launched === state) {
    guildId(left[9]);
    return <tmpResult frameId={tmp5.frame.id} level={channelId(left[10]).FrameStackLevel.WithinCallContent} presentation={memo} />;
  } else if (channelId(left[7]).FrameLifecycleState.RenderingElsewhere === state) {
    const FrameSurfaceExplanation4 = tmp7(tmp2[11]).FrameSurfaceExplanation;
    const intl5 = tmp7(tmp2[12]).intl;
    return <FrameSurfaceExplanation4 description={intl5.string(channelId(left[12]).t["2KIDX+"])} />;
  } else if (channelId(left[7]).FrameLifecycleState.NoApplication === state) {
    const FrameSurfaceExplanation3 = tmp7(tmp2[11]).FrameSurfaceExplanation;
    const intl4 = tmp7(tmp2[12]).intl;
    return <FrameSurfaceExplanation3 description={intl4.string(guildId(left[13]).TQptZV)} />;
  } else if (channelId(left[7]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const FrameSurfaceExplanation2 = tmp7(tmp2[11]).FrameSurfaceExplanation;
    const intl3 = tmp7(tmp2[12]).intl;
    return <FrameSurfaceExplanation2 description={intl3.string(guildId(left[13])["13FYwI"])} />;
  } else if (channelId(left[7]).FrameLifecycleState.Error === state) {
    const FrameSurfaceExplanation = tmp7(tmp2[11]).FrameSurfaceExplanation;
    const intl = tmp7(tmp2[12]).intl;
    const intl2 = tmp7(tmp2[12]).intl;
    return <FrameSurfaceExplanation heading={intl.string(channelId(left[12]).t.VquUff)} error={intl2.string(channelId(left[12]).t["Sd9D/R"])} />;
  } else {
    return jsx(channelId(left[11]).FrameSurfaceLoading, {});
  }
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSurface.tsx");

export default tmp2;
