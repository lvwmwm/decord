// Module ID: 11477
// Function ID: 11478
// Name: buildEmbeddedContext
// Dependencies: [4823, 6776, 8268, 4824, 6777, 11478, 6778, 5627, 4893, 2]
// Exports: default

// Module 11477 (buildEmbeddedContext)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4893 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import FramesConstants from "FramesConstants" /* 6777 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6778 */;
import ActivityPlatform from "ActivityPlatform" /* 11478 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import FramesStore from "FramesStore" /* 6776 */;
import InteractionStore from "InteractionStore" /* 8268 */;
import ChannelStore from "ChannelStore" /* 4824 */;
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
