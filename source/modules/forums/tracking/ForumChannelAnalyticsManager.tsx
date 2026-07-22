// Module ID: 7009
// Function ID: 56239
// Name: ForumChannelAnalyticsManager
// Dependencies: [29, 4138, 4321, 3758]

// Module 7009 (ForumChannelAnalyticsManager)
import closure_0 from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import importDefaultResult from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

class ForumChannelAnalyticsManager {
  constructor() {
    closure_0 = this;
    tmp = closure_0(this, ForumChannelAnalyticsManager);
    this.setFilterTagIds = (filterTagIds) => {
      self.filterTagIds = filterTagIds;
    };
    this.setSortOrder = (sortOrder) => {
      self.sortOrder = sortOrder;
    };
    this.setLayout = (layout) => {
      self.layout = layout;
    };
    this.setTagSetting = (tagSetting) => {
      self.tagSetting = tagSetting;
    };
    this.getFilterTagIdsAnalytics = () => {
      if (null != self.filterTagIds) {
        const _Array = Array;
        let items = Array.from(self.filterTagIds);
      } else {
        items = [];
      }
      return items;
    };
    this.getSortOrderAnalytics = (channelId) => {
      let sortOrder = self.sortOrder;
      if (null == sortOrder) {
        const channel = store.getChannel(channelId);
        let defaultSortOrder;
        if (null != channel) {
          defaultSortOrder = channel.getDefaultSortOrder();
        }
        sortOrder = defaultSortOrder;
      }
      return sortOrder;
    };
    this.getLayoutAnalytics = (channelId) => {
      let layout = self.layout;
      if (null == layout) {
        const channel = store.getChannel(channelId);
        let defaultLayout;
        if (null != channel) {
          defaultLayout = channel.getDefaultLayout();
        }
        layout = defaultLayout;
      }
      return layout;
    };
    this.getTagSettingAnalytics = (channelId) => {
      let tagSetting = self.tagSetting;
      if (null == tagSetting) {
        const channel = store.getChannel(channelId);
        let defaultTagSetting;
        if (null != channel) {
          defaultTagSetting = channel.getDefaultTagSetting();
        }
        tagSetting = defaultTagSetting;
      }
      return tagSetting;
    };
    return;
  }
}
const importDefaultResultResult = require("_objectWithoutProperties")(ForumChannelAnalyticsManager);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default new require("_objectWithoutProperties")(ForumChannelAnalyticsManager)();
