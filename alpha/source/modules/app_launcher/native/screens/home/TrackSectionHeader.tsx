// Module ID: 12643
// Function ID: 12644
// Name: TrackSectionHeader
// Dependencies: [12634, 6163, 1260, 2]
// Exports: default

// Module 12643 (TrackSectionHeader)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6163 */;
import AppLauncherStore from "AppLauncherStore" /* 12634 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  let children;
  let numItems;
  let numVisibleItems;
  let sectionName;
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION, properties: { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: AppLauncherStore.entrypoint() } };
  const items = [];
  const obj3 = { disableTrack: !viewed };
  items[0] = viewed;
  const tmp = useTrackImpressionDefault;
  ({ section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: AppLauncherStore.entrypoint() });
  tmp(obj, obj3, items);
  return children;
};
