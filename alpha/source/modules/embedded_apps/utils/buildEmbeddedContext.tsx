// Module ID: 12014
// Function ID: 12015
// Name: buildEmbeddedContext
// Dependencies: [4991, 6984, 8535, 4992, 6985, 12015, 6986, 5811, 5064, 2]
// Exports: default

// Module 12014 (buildEmbeddedContext)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5064 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6986 */;
import ActivityPlatform from "ActivityPlatform" /* 12015 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4991 */;
import FramesStore from "FramesStore" /* 6984 */;
import InteractionStore from "InteractionStore" /* 8535 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import size from "module_2" /* 2 */;

const asLaunched = FramesConstants.asLaunched;
const MOBILE = ActivityPlatform.ActivityPlatform.MOBILE;
const result = size.fileFinishedImporting("modules/embedded_apps/utils/buildEmbeddedContext.tsx");

export default function buildEmbeddedContext(type) {
  let guild_id;
  let obj;
  let obj4;
  let obj5;
  let obj7;
  let tmpResult;
  let tmpResult2;
  type = type.type;
  if (EmbeddedAppTypes.EmbeddedContextSourceType.FRAME === type) {
    const tmp13 = asLaunched(FramesStore.getFrame(type.frameId));
    if (null != tmp13) {
      return { source: type, surface: tmp13.surface, launch: tmp13.data.launch, platform: MOBILE };
    }
  } else if (EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY === type) {
    const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
    const value = selfEmbeddedActivities.get(type.applicationId);
    if (null != value) {
      const obj3 = { source: type, surface: obj4, launch: obj5, platform: MOBILE };
      obj4 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, channelId: tmpResult.getEmbeddedActivityLocationChannelId(value.location), guildId: tmpResult2.getEmbeddedActivityLocationGuildId(value.location) };
      tmpResult = embeddedActivityLocationUtils;
      obj5 = { customId: null, referrerId: null };
      ({ customId: obj10.customId, referrerId: obj10.referrerId } = value);
      tmpResult2 = embeddedActivityLocationUtils;
      return obj3;
    }
  } else if (EmbeddedAppTypes.EmbeddedContextSourceType.INTERACTION === type) {
    const iFrameModal = InteractionStore.getIFrameModal();
    if (null != iFrameModal) {
      if (iFrameModal.interactionId === type.interactionId) {
        const obj6 = { source: type, surface: obj7, launch: obj, platform: MOBILE };
        obj7 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL, channelId: iFrameModal.channelId, guildId: guild_id };
        const channel = ChannelStore.getChannel(iFrameModal.channelId);
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj = { customId: null, interactionId: null };
        ({ customId: obj.customId, interactionId: obj.interactionId } = iFrameModal);
        return obj6;
      }
    }
  }
};
